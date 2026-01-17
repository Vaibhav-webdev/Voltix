import { NextResponse } from "next/server";
import { runGemini } from "@/lib/gemini";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt required" },
        { status: 400 }
      );
    }

    const text = await runGemini(prompt);

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API failed:", error);

    return NextResponse.json(
      { error: error.message || "Gemini error" },
      { status: 500 }
    );
  }
}
