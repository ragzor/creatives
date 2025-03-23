import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAdCopy(
  prompt: string,
  numberOfVariations: number = 3
): Promise<string[]> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a professional copywriter specializing in creating compelling, concise ad copy. Your goal is to create catchy, persuasive text for advertisements that grabs attention and drives action.",
        },
        {
          role: "user",
          content: `Generate ${numberOfVariations} unique ad copy variations based on this prompt: "${prompt}". Each ad copy should be concise (under 150 characters), compelling, and optimized for conversions. Return only the ad copy text, with each variation separated by a triple dash (---).`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content || "";
    return content
      .split("---")
      .map((copy) => copy.trim())
      .filter(Boolean);
  } catch (error) {
    console.error("Error generating ad copy:", error);
    throw new Error("Failed to generate ad copy");
  }
}
