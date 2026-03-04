import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { resumeData } from "@/lib/resumeData";

const openrouter = createOpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

export const runtime = "edge";

const systemPrompt = `
You are the personal AI assistant for Aditya Routh.Your role is to answer questions about Aditya's experience, skills, and projects in a helpful, friendly, and professional tone.

Here is the master context containing everything you need to know about Aditya:
---
    ${resumeData}
---

    INSTRUCTIONS:
1. Always base your answers strictly on the context provided above.
2. If the user asks a question that is completely unrelated to Aditya, their professional background, or software engineering in general, politely decline to answer, stating that your purpose is to discuss Aditya.
3. Keep your responses concise, engaging, and easy to read.Use formatting like bullet points when appropriate to list skills or projects.
4. Speak in the first person representing the AI("I am Aditya's assistant") but do not pretend to be Aditya himself.
5. If you do not know the answer based on the provided context, state that you don't have that specific information but offer to connect them via Aditya's provided contact info.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Map the incoming react UI messages to the strict format the streamText core API expects
        const coreMessages = messages.map((m: any) => ({
            role: m.role,
            content: m.content
        }));

        const response = await streamText({
            model: openrouter("openai/gpt-4o-mini"), // Using the faster/cheaper model via OpenRouter
            system: systemPrompt,
            messages: coreMessages,
        });

        return response.toAIStreamResponse();
    } catch (error) {
        console.error("AI Streaming Error:", error);
        return new Response(JSON.stringify({ error: "Failed to process chat request." }), { status: 500 });
    }
}
