
import { GoogleGenAI } from "@google/genai";

export const generateHeroImage = async (): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Updated prompt per Master Brief
    const prompt = `A close-up, realistic photo of a healthy, pink human foot stepping onto a clean, mossy stone in a rainforest setting. Soft, natural lighting. Contrast this with a small, faded inset image of a yellow, damaged nail to show the 'before and after' transformation without being overly grotesque.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating hero image:", error);
    return null;
  }
};
