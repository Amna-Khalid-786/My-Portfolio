import { GoogleGenerativeAI } from "@google/generative-ai";
import { SKILLS, INITIAL_PROJECTS } from "@/constants";
import { Message } from "@/types";

const SYSTEM_INSTRUCTION = `
You are "Amna Bot", Amna Khalid's portfolio AI. 
Rules: No bolding (**), 2-3 sentence max, absolute brevity. 
Use bullet points (•) for lists. 
Knowledge: Amna is a Software Developer and Freelancer (formerly an Engineering Intern at RMT). 
Skills: ${JSON.stringify(SKILLS)}. 
Projects: ${JSON.stringify(INITIAL_PROJECTS)}.
`;

const FAST_RESPONSES: Record<string, string> = {
    "who are you": "I'm Amna Bot, the AI assistant for Amna Khalid's portfolio. I can tell you about her projects, skills, and experience as a Software Developer and Freelancer!",
    "what is your name": "I'm Amna Bot! I'm here to help you explore Amna Khalid's work.",
    "contact": "You can reach Amna at amnapersonal4@gmail.com or call her at +92 3364695525. She's always open to new opportunities!",
    "hire": "Amna is open to Frontend and Flutter roles! Contact her at amnapersonal4@gmail.com to discuss how she can help your team.",
    "hello": "Hello! I'm Amna Bot. How can I help you explore Amna Khalid's portfolio today?",
    "hi": "Hi there! I'm Amna Bot. Ready to learn more about Amna's engineering and design work?"
};

async function retry<T>(fn: () => Promise<T>, retries = 2, delay = 1000): Promise<T> {
    try {
        return await fn();
    } catch (err: any) {
        if (retries > 0 && (err?.status === 503 || err?.message?.includes('503'))) {
            await new Promise(resolve => setTimeout(resolve, delay));
            return retry(fn, retries - 1, delay * 2);
        }
        throw err;
    }
}

export async function getChatResponse(messages: Message[]) {
    const lastMessage = messages[messages.length - 1].content.toLowerCase();

    // Check for Fast Responses
    for (const [key, response] of Object.entries(FAST_RESPONSES)) {
        if (lastMessage.includes(key)) return response;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey.includes('PLACEHOLDER')) {
        return "Hi! I'm Amna Bot. I'm currently in limited mode. Amna is a Software Developer and Freelancer. Reach her at amnapersonal4@gmail.com!";
    }

    const genAI = new GoogleGenerativeAI(apiKey.trim());
    const PRIMARY_MODEL = "gemini-flash-latest";
    const FALLBACK_MODEL = "gemini-pro-latest";

    const validHistory = messages.slice(0, -1)
        .filter(msg => msg.content) // Ensure content exists
        .map((msg: Message) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

    const executeAiAction = async (modelName: string) => {
        const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: SYSTEM_INSTRUCTION
        });
        const chat = model.startChat({
            history: validHistory,
            generationConfig: { maxOutputTokens: 500, temperature: 0.7 }
        });
        const result = await chat.sendMessage(messages[messages.length - 1].content);
        return result.response.text();
    };

    try {
        return await retry(() => executeAiAction(PRIMARY_MODEL));
    } catch (err: any) {
        console.error("AI Service Error:", err);
        if (err?.status === 429 || err?.message?.includes('quota')) {
            throw new Error("QUOTA_EXCEEDED");
        }

        try {
            return await retry(() => executeAiAction(FALLBACK_MODEL));
        } catch (innerErr: any) {
            console.error("AI Fallback Error:", innerErr);
            if (innerErr?.status === 429 || innerErr?.message?.includes('quota')) {
                throw new Error("QUOTA_EXCEEDED");
            }
            throw innerErr;
        }
    }
}
