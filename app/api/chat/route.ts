import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({ 
  baseURL: 'https://models.inference.ai.azure.com',
  apiKey: process.env.GITHUB_TOKEN,
  defaultHeaders: {
    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export const runtime = 'edge';

export async function POST(req: Request) {
  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const { messages, language = 'en' } = await req.json();

    const completion = await fetch('https://models.inference.ai.azure.com/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert AI nutritionist specializing in diets, recent studies on nutrition, and health. 
            Communicate in ${language}. Be persuasive, empathetic, and adapt your responses to the user's needs. 
            Base your advice on scientific studies and maintain a professional yet friendly tone.
            Always provide evidence-based recommendations and cite recent studies when relevant.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: true
      })
    });

    if (!completion.ok) {
      const error = await completion.json();
      throw new Error(error.message || 'Failed to get completion');
    }

    const stream = OpenAIStream(completion);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { 
        error: error?.message || 'Failed to process chat request',
        details: error?.response?.data || error?.cause || error
      },
      { status: 500 }
    );
  }
}