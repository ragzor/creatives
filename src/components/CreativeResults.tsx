import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { DownloadIcon, CopyIcon, CheckIcon } from "lucide-react";
import { toast } from "sonner";

interface Creative {
  templateId: string;
  templateName: string;
  copy: string;
  slug: string;
}

interface CreativeResultsProps {
  prompt: string;
  results: Creative[];
  isGenerating: boolean;
}

export function CreativeResults({
  prompt,
  results,
  isGenerating,
}: CreativeResultsProps) {
  const [copied, setCopied] = useState<string | null>(null);

  // Helper to build OG image URL
  const getImageUrl = (creative: Creative) => {
    const encodedCopy = encodeURIComponent(creative.copy);
    return `/api/og/${creative.slug}?templateId=${creative.templateId}&copy=${encodedCopy}`;
  };

  // Copy to clipboard
  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    toast.success("Copied to clipboard");

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  // Download image
  const downloadImage = async (creative: Creative) => {
    try {
      const imageUrl = getImageUrl(creative);
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `ad-creative-${creative.slug}.png`;
      a.click();

      toast.success("Image downloaded");
    } catch (error) {
      console.error("Error downloading image:", error);
      toast.error("Failed to download image");
    }
  };

  if (isGenerating) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-4">
              <Skeleton className="h-4 w-2/3" />
            </CardHeader>
            <Skeleton className="aspect-video" />
            <CardContent className="p-4">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-4/5" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Generated Ad Creatives</h2>
        <p className="text-muted-foreground">
          Based on your prompt: "{prompt}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((creative) => (
          <Card key={creative.slug} className="overflow-hidden">
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{creative.templateName}</CardTitle>
            </CardHeader>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={getImageUrl(creative)}
                alt={creative.copy}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <p className="text-sm">{creative.copy}</p>
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between p-4">
              <Button
                variant="outline"
                size="sm"
                className="flex gap-1 items-center"
                onClick={() => copyToClipboard(creative.copy, creative.slug)}
              >
                {copied === creative.slug ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <CopyIcon className="h-4 w-4" />
                )}
                Copy Text
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex gap-1 items-center"
                onClick={() => downloadImage(creative)}
              >
                <DownloadIcon className="h-4 w-4" />
                Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
