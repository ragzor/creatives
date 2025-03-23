"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const promptSchema = z.object({
  prompt: z.string().min(10, {
    message: "Prompt must be at least 10 characters.",
  }),
});

type PromptFormValues = z.infer<typeof promptSchema>;

export function Hero() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PromptFormValues>({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      prompt: "",
    },
  });

  async function onSubmit(data: PromptFormValues) {
    setIsSubmitting(true);

    try {
      // Store the prompt in sessionStorage so we can use it on the home page
      sessionStorage.setItem("lastPrompt", data.prompt);
      // Navigate to the home page
      router.push("/home");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <div className="space-y-2">
              <h1 className="text-2xl font-medium tracking-tighter sm:text-4xl xl:text-5xl/none">
                Generate Compelling Ad Creatives in Seconds
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Transform your marketing with AI-powered ad creatives that
                convert. No design skills required.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full max-w-md mt-6"
              >
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your ad creative idea (e.g., 'A minimalist ad for a premium coffee subscription service')"
                          className="min-h-24 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Generate Ad Creatives"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow animate-fade-in">
                  <div className="p-4">
                    <div className="h-40 bg-muted rounded-md"></div>
                    <div className="pt-4">
                      <div className="h-4 w-2/3 bg-muted rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border bg-card shadow animate-fade-in delay-150">
                  <div className="p-4">
                    <div className="h-40 bg-muted rounded-md"></div>
                    <div className="pt-4">
                      <div className="h-4 w-2/3 bg-muted rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border bg-card shadow animate-fade-in delay-75">
                  <div className="p-4">
                    <div className="h-40 bg-muted rounded-md"></div>
                    <div className="pt-4">
                      <div className="h-4 w-2/3 bg-muted rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border bg-card shadow animate-fade-in delay-200">
                  <div className="p-4">
                    <div className="h-40 bg-muted rounded-md"></div>
                    <div className="pt-4">
                      <div className="h-4 w-2/3 bg-muted rounded-md mb-2"></div>
                      <div className="h-4 w-full bg-muted rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
