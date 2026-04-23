import { GoogleGenerativeAI } from "@google/generative-ai";
import { SKILLS, INITIAL_PROJECTS } from "@/lib/constants";
import { Message } from "@/lib/types";

const PROJECT_LIST = INITIAL_PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n');

const SYSTEM_INSTRUCTION = `
You are "Amna Bot", the official AI assistant for Amna Khalid's portfolio.
STRICT RULE:
- You ONLY know about Amna Khalid.
- If a user asks about any other person (e.g., Fizah, Hajra, celebrities), world events, or general knowledge, you MUST respond with: "I only know about Amna, her skills, projects, and experience. You can freely ask me about her work!"
KNOWLEDGE:
- Amna is a Software, Mobile, and Web Developer.
- Skills: ${SKILLS.map(s => s.name).join(', ')}.
- Projects:
${PROJECT_LIST}
RULES:
- Max 2-3 sentences. No bolding.
- Be professional and friendly.
`;

const FAST_RESPONSES: Record<string, string> = {
    "who are you": "I'm Amna Bot, the AI assistant for Amna Khalid's portfolio. I can tell you about her projects, skills, and experience as a Software Developer!",
    "what is your name": "I'm Amna Bot! I'm here to help you explore Amna Khalid's work.",
    "contact": "You can reach Amna at amnapersonal4@gmail.com or call her at +92 3364695525. She's always open to new opportunities!",
    "hire": "Amna is open to Frontend and Flutter roles! Contact her at amnapersonal4@gmail.com to discuss how she can help your team.",
    "hello": "Hello! I'm Amna Bot. How can I help you explore Amna Khalid's portfolio today?",
    "hi": "Hi there! I'm Amna Bot. Ready to learn more about Amna's engineering and design work?",
    "skills": "Amna specializes in React, Next.js, Flutter, and UI/UX Design. She also has experience with Node.js and Git.",
    "experience": "Amna recently completed a 1-year internship at Revive Medical Technologies and is now working as a freelance software developer.",
    "projects": "Amna has built medical imaging apps, patient monitoring systems, and various web platforms. Check the Projects section for details!",
    "who is amna": "Amna Khalid is a Software, Mobile, and Web Developer specializing in building secure, scalable, and human-centric software. She is a fresh graduate with experience in Healthcare IT!",
    "tell me about amna": "Amna Khalid is a Software, Mobile, and Web Developer specializing in building secure, scalable, and human-centric software. She is a fresh graduate with experience in Healthcare IT!",
    "about amna": "Amna Khalid is a Software, Mobile, and Web Developer specializing in building secure, scalable, and human-centric software. She is a fresh graduate with experience in Healthcare IT!",
    "poem": "Amna codes with grace and skill, / Building apps with iron will. / From Next.js to Flutter's light, / She makes the digital world bright.",
    "sk associates": "A comprehensive professional platform for SK Associates built with Next.js and Tailwind CSS, showcasing their services and portfolio.",
    "camera based": "A medical imaging application built with React Native for high-quality skin analysis with advanced camera controls.",
    "remote patient": "A real-time health monitoring app built with React Native for tracking vital patient parameters like heart rate and oxygen levels.",
    "devfolio site": "A professional portfolio project for Revive Medical Technologies (RMT) built with Next.js.",
    "devfolio": "A professional portfolio project for Revive Medical Technologies (RMT) built with Next.js.",
    "proactive care": "An advanced healthcare IT system (RPM) for proactive patient monitoring and health management.",
    "github portfolio": "A customized GitHub landing page and personal branding project to showcase engineering excellence.",
    "advanced calculator": "A sophisticated scientific calculator with a modern, responsive UI built with JavaScript.",
    "macrobuddy": "A UI/UX design project in Figma for a nutrition tracker and wellness companion application.",
    "recipe app": "An interactive mobile design for a recipe sharing and cooking social platform designed in Figma.",
    "medical device design": "Professional product design and 3D visualization for medical instrumentation using Canva.",
    "brochure design": "Creative marketing and branding materials for promotional brochures designed with Canva.",
    "personal portfolio": "This very site! A high-performance portfolio with 3D animations, Next.js, and Framer Motion.",
    "build": "Amna builds her projects using modern tech like React, Next.js, and Flutter, focusing on performance and security.",
    "sorry": "I only know about Amna, her skills, projects, and experience. You can freely ask me about her work!"
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

    // Check for Fast Responses (Prioritize longest/most specific matches first)
    const sortedKeys = Object.keys(FAST_RESPONSES).sort((a, b) => b.length - a.length);
    
    for (const key of sortedKeys) {
        if (lastMessage.includes(key)) return FAST_RESPONSES[key];
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey.includes('PLACEHOLDER')) {
        return "Hi! I'm Amna Bot. I'm currently in limited mode. Reach Amna at amnapersonal4@gmail.com to discuss her work!";
    }

    const genAI = new GoogleGenerativeAI(apiKey.trim());
    const PRIMARY_MODEL = "gemini-1.5-flash";

    // Gemini history MUST start with a 'user' role and alternate.
    let history = messages.slice(0, -1);
    const firstUserIndex = history.findIndex(msg => msg.role === 'user');
    
    if (firstUserIndex !== -1) {
        history = history.slice(firstUserIndex);
    } else {
        history = [];
    }

    const validHistory = history
        .filter(msg => msg.content)
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
        // Silently handle errors to keep terminal clean
        if (err?.status === 429 || err?.message?.includes('quota')) {
            throw new Error("QUOTA_EXCEEDED");
        }
        
        // If AI fails, return a safe "Focused" response
        return "I am here specifically to help you explore Amna's professional work. For other questions, please contact her directly!";
    }
}
