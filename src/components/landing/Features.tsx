import { Zap, Layout, RefreshCw, Palette, Wand2, Target } from "lucide-react";

export function Features() {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Our Ad Creative Generator
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Create stunning ad creatives that convert without design skills or
            expensive agencies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start p-6 border rounded-lg bg-card">
            <div className="rounded-full p-3 mb-4 bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Generate multiple ad creative variations in seconds, not days
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border rounded-lg bg-card">
            <div className="rounded-full p-3 mb-4 bg-primary/10">
              <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Copy</h3>
            <p className="text-muted-foreground">
              Create compelling ad copy that converts with our advanced AI
              technology
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border rounded-lg bg-card">
            <div className="rounded-full p-3 mb-4 bg-primary/10">
              <Layout className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Multiple Templates</h3>
            <p className="text-muted-foreground">
              Choose from a variety of professionally designed templates or
              create your own
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border rounded-lg bg-card">
            <div className="rounded-full p-3 mb-4 bg-primary/10">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Unlimited Variations</h3>
            <p className="text-muted-foreground">
              Generate and test multiple variations to find the highest
              performing ads
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border rounded-lg bg-card">
            <div className="rounded-full p-3 mb-4 bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Target Audience Focus</h3>
            <p className="text-muted-foreground">
              Create ad creatives tailored to your specific target audience and
              goals
            </p>
          </div>

          <div className="flex flex-col items-start p-6 border rounded-lg bg-card">
            <div className="rounded-full p-3 mb-4 bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Design Skills Needed</h3>
            <p className="text-muted-foreground">
              Create professional-looking ad creatives without any design
              experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
