import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { Message } from "@/types";
import { INITIAL_PROJECTS, SKILLS, EXPERIENCES } from "@/constants";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Amna Khalid's personal portfolio. 
Your Core Knowledge Base:
${JSON.stringify(EXPERIENCES, null, 2)}
${JSON.stringify(SKILLS, null, 2)}
${JSON.stringify(INITIAL_PROJECTS, null, 2)}

Your Goal:
- Answer questions using ONLY the information provided above.
- Be friendly, professional, and encouraging.
- If asked about RMT, highlight the engineering work mentioned in the experience section.
- If you don't know an answer based on the provided data, suggest using the contact form.
- Do not make up facts.
`;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages } = body;
        const lastMessage = messages[messages.length - 1].content.toLowerCase();

        const apiKey = process.env.AI_API_KEY || process.env.API_KEY;

        // --- BACKUP MODE (If no key or key fails) ---
        // Simple keyword matcher when API is disconnected
        const generateFallbackResponse = (query: string) => {
            if (query.includes('project') || query.includes('work')) {
                return `Amna has worked on several key projects:\n1. ${INITIAL_PROJECTS[0].title}: ${INITIAL_PROJECTS[0].description}\n2. ${INITIAL_PROJECTS[2].title}: ${INITIAL_PROJECTS[2].description}\nYou can view more in the Projects tab!`;
            }
            if (query.includes('skill') || query.includes('stack') || query.includes('technolog')) {
                return `Amna is proficient in:\n- Frontend: ${SKILLS.filter(s => s.category === 'Frontend').map(s => s.name).join(', ')}\n- Backend: ${SKILLS.filter(s => s.category === 'Backend').map(s => s.name).join(', ')}`;
            }
            if (query.includes('experience') || query.includes('rmt') || query.includes('job') || query.includes('intern')) {
                return `Amna is currently an ${EXPERIENCES[0].role} at ${EXPERIENCES[0].company}. ${EXPERIENCES[0].description}`;
            }
            if (query.includes('contact') || query.includes('email') || query.includes('hire')) {
                return "You can contact Amna directly via the Contact page or email her at amnapersonal4@gmail.com.";
            }
            return "I'm Amna's AI Assistant. I can tell you about her Projects, Skills, and Experience. What would you like to know?";
        };

        // If no key is configured, purely use fallback
        if (!apiKey || apiKey.includes('PLACEHOLDER')) {
            console.log("Using Fallback AI (No Key)");
            return NextResponse.json({ response: generateFallbackResponse(lastMessage) });
        }

        const ai = new GoogleGenAI({ apiKey });

        const NO_MARKDOWN_INSTRUCTION = SYSTEM_INSTRUCTION + `
        IMPORTANT: Do NOT use markdown formatting like **bold**, *italics*, or # headers. Use plain text only.
        `;

        // Transform history to the format expected by the AI model
        const contents = messages.map((msg: Message) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-1.5-flash',
                contents: contents,
                config: {
                    systemInstruction: NO_MARKDOWN_INSTRUCTION,
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                }
            });
            const text = response.text;
            return NextResponse.json({ response: text });
        } catch (apiError) {
            // API Key invalid or quota exceeded -> Fail gracefully to Backup Mode
            console.error("AI API Failed, switching to backup:", apiError);
            return NextResponse.json({
                response: generateFallbackResponse(lastMessage) + "\n\n*(Note: AI services are currently offline, utilizing offline backup knowledge.)*"
            });
        }

    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
