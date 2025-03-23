import Link from "next/link";
import { Header, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";

// Sample blog posts data - in a real app this would come from a database or API
const blogPosts = {
  "1": {
    id: "1",
    title: "How AI is Transforming Digital Advertising",
    content: `
      <p>Artificial intelligence has become a game-changer in the digital advertising landscape, revolutionizing how marketers create, optimize, and measure ad creatives. In this article, we'll explore the profound impact of AI on ad creative generation and its implications for marketers.</p>
      
      <h2>The Evolution of Ad Creative Generation</h2>
      <p>Traditionally, creating ad creatives was a time-consuming and resource-intensive process, requiring teams of designers, copywriters, and marketers. With the advent of AI, this process has been streamlined significantly, allowing for the rapid generation of high-quality ad creatives at scale.</p>
      
      <p>AI-powered tools can now analyze vast amounts of data to identify patterns in successful ad creatives, learning what resonates with specific audiences across different platforms and contexts. This enables the generation of tailored ad creatives that are more likely to drive engagement and conversions.</p>
      
      <h2>Key Benefits of AI in Ad Creation</h2>
      <ul>
        <li><strong>Efficiency and Scale:</strong> AI can generate hundreds of ad variations in minutes, allowing marketers to test different approaches and optimize campaigns more quickly.</li>
        <li><strong>Personalization:</strong> AI can create personalized ad experiences by analyzing user behavior and preferences, resulting in higher engagement rates.</li>
        <li><strong>Cost-Effectiveness:</strong> By reducing the need for large creative teams and expensive production processes, AI makes high-quality ad creation accessible to businesses of all sizes.</li>
        <li><strong>Data-Driven Optimization:</strong> AI continuously learns from performance data, improving creative outputs over time based on what actually works.</li>
      </ul>
      
      <h2>The Future of AI in Advertising</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated ad creative generation capabilities. From dynamic creative optimization to real-time personalization based on contextual factors, the possibilities are expanding rapidly.</p>
      
      <p>However, it's important to note that human creativity and strategic thinking remain essential. The most effective approach combines AI's efficiency and data processing capabilities with human insight and brand understanding.</p>
      
      <h2>Getting Started with AI-Powered Ad Creatives</h2>
      <p>If you're looking to leverage AI for your ad creative generation, start by defining clear objectives and understanding your audience. Then, experiment with AI tools to see how they can enhance your creative process and improve campaign performance.</p>
      
      <p>Remember that AI is a tool to augment human creativity, not replace it. The most successful campaigns will always be those that balance technological capabilities with authentic human connection.</p>
    `,
    date: "March 15, 2023",
    author: "Sarah Johnson",
    category: "AI & Marketing",
    readTime: "5 min read",
  },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
              <p>
                The blog post you're looking for doesn't exist or has been
                moved.
              </p>
              <Button asChild>
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <article className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="mb-4" asChild>
                <Link href="/blog">← Back to Blog</Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
              <div className="flex text-sm text-muted-foreground gap-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div
              className="prose prose-neutral dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
