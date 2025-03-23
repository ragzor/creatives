import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block font-medium">
              AdCreative
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered ad creative generation tool for marketers and
              businesses
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-normal">Product</h3>
            <nav className="grid gap-2">
              <Link href="/home" className="text-sm hover:underline">
                Generator
              </Link>
              <Link href="/templates" className="text-sm hover:underline">
                Templates
              </Link>
              <Link href="/pricing" className="text-sm hover:underline">
                Pricing
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-normal">Company</h3>
            <nav className="grid gap-2">
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
              <Link href="/blog" className="text-sm hover:underline">
                Blog
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Careers
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-normal">Legal</h3>
            <nav className="grid gap-2">
              <Link href="#" className="text-sm hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AdCreative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
