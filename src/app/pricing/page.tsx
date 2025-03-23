import Link from "next/link";
import { Header, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="text-muted-foreground mx-auto max-w-[600px]">
                Choose the plan that works best for your needs. All plans
                include access to our core features.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Free Plan */}
              <div className="flex flex-col rounded-lg border bg-card p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Free</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for trying out our platform
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    10 ad creatives per month
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Basic templates
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Standard quality exports
                  </li>
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/home">Get Started</Link>
                </Button>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-md ring-1 ring-primary">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    Most Popular
                  </div>
                  <h3 className="text-lg font-medium">Pro</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for individual creators
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    100 ad creatives per month
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    All templates
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    High-quality exports
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Custom branding
                  </li>
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/home">Start 7-Day Free Trial</Link>
                </Button>
              </div>

              {/* Business Plan */}
              <div className="flex flex-col rounded-lg border bg-card p-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Business</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for teams and businesses
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Unlimited ad creatives
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    All templates + priority access to new ones
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Ultra high-quality exports
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Custom branding & team management
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                    Priority support
                  </li>
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/home">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
