import { Header, Footer } from "@/components/landing";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Us
              </h1>
              <p className="text-muted-foreground">
                We're building the future of ad creative generation
              </p>
            </div>
            <div className="space-y-4">
              <p>
                AdCreative is an AI-powered ad creative generation platform
                designed to help marketers and businesses create high-converting
                ad creatives in seconds.
              </p>
              <p>
                Our mission is to democratize access to high-quality ad creative
                design, making it possible for businesses of all sizes to create
                professional-looking ad creatives without expensive design
                agencies or in-house design teams.
              </p>
              <p>
                With our advanced AI technology, we've helped thousands of
                marketers and businesses save time and money while improving
                their ad performance.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
