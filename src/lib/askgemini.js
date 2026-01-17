// lib/askgemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function askGemini(prompt, companyName, jobTitle) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });
  
  const final_prompt = `You are a professional resume writer. Enhance the following experience summary based on the provided Company Name and Job Title while:

Keeping it in a single paragraph

Limiting it to 45–50 words

Maintaining almost the same length (do not make it longer)

Using a similar wording and professional tone

Not adding new skills, tools, or technologies

Improving clarity, flow, and readability

Avoiding buzzwords or exaggerated claims

Company Name: ${companyName}
Job Title: ${jobTitle}
Original Experience Summary: ${prompt}
`;
  const result = await model.generateContent(final_prompt);
  return result.response.text();
}