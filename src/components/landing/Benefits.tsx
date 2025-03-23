import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Proven Results
            </div>
            <h2 className="text-2xl font-medium tracking-tighter sm:text-3xl md:text-4xl">
              Boost Your Ad Performance
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our AI-powered ad creative generator helps marketers and business
              owners create high-converting ads that stand out and drive
              results.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-normal">Save 80% on Design Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminate expensive design agencies and create professional
                    ad creatives at a fraction of the cost.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-normal">Generate Ads 10x Faster</h3>
                  <p className="text-sm text-muted-foreground">
                    Create multiple ad variations in seconds instead of waiting
                    days for traditional design processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-normal">Increase Conversion Rates</h3>
                  <p className="text-sm text-muted-foreground">
                    Our users report an average 35% increase in click-through
                    rates and conversions with AI-generated creatives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-normal">Scale Your Ad Campaigns</h3>
                  <p className="text-sm text-muted-foreground">
                    Easily create variations for different platforms, audiences,
                    and campaign objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
