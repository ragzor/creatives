import Link from "next/link";
import { Header, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "How AI is Transforming Digital Advertising",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way marketers create and optimize ad creatives.",
    date: "March 15, 2023",
    category: "AI & Marketing",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "10 Tips for Creating High-Converting Ad Creatives",
    excerpt:
      "Learn the proven strategies that can significantly improve your ad creative performance and conversion rates.",
    date: "February 28, 2023",
    category: "Best Practices",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "The Psychology of Effective Ad Designs",
    excerpt:
      "Understanding the psychological principles behind successful ad designs can help you create more impactful campaigns.",
    date: "February 10, 2023",
    category: "Design",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Case Study: How Brand X Increased CTR by 65% with AI-Generated Ads",
    excerpt:
      "See how a leading brand leveraged our AI-powered ad creative generator to dramatically improve campaign performance.",
    date: "January 25, 2023",
    category: "Case Study",
    readTime: "8 min read",
  },
  {
    id: "5",
    title: "The Future of Ad Creative Automation",
    excerpt:
      "Explore the evolving landscape of ad creative automation and how it will shape the future of digital marketing.",
    date: "January 12, 2023",
    category: "Trends",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Blog
              </h1>
              <p className="text-muted-foreground">
                Insights and tips on ad creative generation and digital
                marketing
              </p>
            </div>

            <div className="space-y-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="border-b pb-10">
                  <div className="space-y-2 mb-4">
                    <div className="flex text-sm text-muted-foreground gap-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/blog/${post.id}`}>Read More →</Link>
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
