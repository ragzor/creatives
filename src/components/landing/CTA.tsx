import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tighter md:text-3xl">
              Ready to Transform Your Ad Creatives?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Join thousands of marketers and businesses creating
              high-converting ad creatives with AI
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link href="/home">Start Creating for Free</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing Plans</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            No credit card required • Free plan available
          </p>
        </div>
      </div>
    </section>
  );
}
