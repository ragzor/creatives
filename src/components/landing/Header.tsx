"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-medium">AdCreative</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/templates"
                  className="text-sm transition-colors hover:text-foreground/80"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm transition-colors hover:text-foreground/80"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm transition-colors hover:text-foreground/80"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-foreground/80"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/home">Start for Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
