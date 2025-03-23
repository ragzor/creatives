"use client";

import { useState } from "react";
import { PromptForm } from "@/components/PromptForm";
import { CreativeResults } from "@/components/CreativeResults";

interface Creative {
  templateId: string;
  templateName: string;
  copy: string;
  slug: string;
}

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState<Creative[]>([]);

  const handleGenerate = async ({ prompt }: { prompt: string }) => {
    setIsGenerating(true);
    setPrompt(prompt);
    setResults([]);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, numberOfVariations: 3 }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate creatives");
      }

      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container max-w-5xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Ad Creative Generator</h1>
          <p className="text-muted-foreground">
            Generate compelling ad creatives with AI in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Generate New Creatives
            </h2>
            <PromptForm
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>

          <CreativeResults
            prompt={prompt}
            results={results}
            isGenerating={isGenerating}
          />
        </div>
      </div>
    </main>
  );
}
