import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateAdCopy } from "@/lib/openai";
import { adTemplates } from "@/lib/templates";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { prompt, userId, numberOfVariations = 5 } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Generate ad copy variations using OpenAI
    const adCopyVariations = await generateAdCopy(prompt, numberOfVariations);

    // Generate responses for each template with each copy variation
    const results = [];

    for (const template of adTemplates) {
      for (const copyText of adCopyVariations) {
        // Create a unique slug for each result
        const slug = `${template.id}-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`;

        // Add to results
        results.push({
          templateId: template.id,
          templateName: template.name,
          copy: copyText,
          slug,
        });
      }
    }

    // Store in database if userId is provided
    if (userId) {
      // For each result, we would create a database entry
      // This is commented out since we don't have proper auth setup yet
      // await prisma.creative.create({
      //   data: {
      //     prompt,
      //     generatedCopy: result.copy,
      //     templateId: result.templateId,
      //     userId
      //   }
      // })
    }

    return NextResponse.json({
      success: true,
      prompt,
      results,
    });
  } catch (error) {
    console.error("Error generating creatives:", error);
    return NextResponse.json(
      { error: "Failed to generate creatives" },
      { status: 500 }
    );
  }
}
