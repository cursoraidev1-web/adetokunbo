
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getCareerAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are an elite career consultant at Adetokunbo Ayodeji Consult. Provide professional, encouraging, and strategic advice for career growth, academic excellence, or business strategy. Keep responses concise, structured (using bullet points), and aligned with the high-end boutique nature of the firm.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or book a real session with our consultants.";
  }
};
