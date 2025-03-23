import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const promptSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters.",
  }),
});

type PromptFormValues = z.infer<typeof promptSchema>;

interface PromptFormProps {
  onGenerate: (data: PromptFormValues) => Promise<void>;
  isGenerating: boolean;
}

export function PromptForm({ onGenerate, isGenerating }: PromptFormProps) {
  const form = useForm<PromptFormValues>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(data: PromptFormValues) {
    try {
      await onGenerate(data);
    } catch (error) {
      console.error("Error generating ad creatives:", error);
      toast.error("Failed to generate ad creatives. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Prompt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a prompt for your ad creative (e.g., 'A compelling ad for a new fitness app that helps users track their daily water intake')"
                  className="min-h-24 resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Be specific about your product, target audience, and desired
                tone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Generate Ad Creatives"}
        </Button>
      </form>
    </Form>
  );
}
