import { NextRequest, NextResponse } from 'next/server';
import { getChatResponse } from '@/lib/ai-service';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { messages } = body;

        const responseText = await getChatResponse(messages);
        return NextResponse.json({ response: responseText });

    } catch (err: unknown) {
        const error = err as { message?: string; status?: number };

        if (error?.message === "QUOTA_EXCEEDED") {
            return NextResponse.json({
                response: "I'm currently receiving too many requests. Please wait a minute and try again!"
            });
        }

        return NextResponse.json({
            response: "I'm having a little trouble connecting to my brain right now. Please check back in a few seconds!"
        }, { status: 500 });
    }
}
