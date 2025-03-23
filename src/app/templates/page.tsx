"use client";

import { useState } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components/landing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample template data
const templates = [
  {
    id: "1",
    name: "Minimalist Product",
    category: "E-commerce",
    description: "Clean, minimalist template for showcasing products",
  },
  {
    id: "2",
    name: "Bold Statement",
    category: "Brand Awareness",
    description: "High-contrast template with bold typography",
  },
  {
    id: "3",
    name: "Lifestyle Promotion",
    category: "Lifestyle",
    description: "Template focusing on lifestyle imagery and benefits",
  },
  {
    id: "4",
    name: "Special Offer",
    category: "Promotion",
    description: "Template highlighting special offers and discounts",
  },
  {
    id: "5",
    name: "App Download",
    category: "App Marketing",
    description: "Template for promoting mobile app downloads",
  },
  {
    id: "6",
    name: "Event Announcement",
    category: "Events",
    description: "Template for promoting upcoming events",
  },
];

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Filter and sort templates based on user selection
  const filteredTemplates = templates.filter((template) => {
    // Filter by search query
    if (
      searchQuery &&
      !template.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by category
    if (category !== "all" && template.category.toLowerCase() !== category) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-24">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ad Templates
              </h1>
              <p className="text-muted-foreground max-w-[600px]">
                Choose from our collection of professionally designed templates
                to create your ad creative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Filter Section */}
              <div className="space-y-4 md:col-span-3">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search templates..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="w-full sm:w-48">
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="e-commerce">E-commerce</SelectItem>
                        <SelectItem value="brand awareness">
                          Brand Awareness
                        </SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="promotion">Promotion</SelectItem>
                        <SelectItem value="app marketing">
                          App Marketing
                        </SelectItem>
                        <SelectItem value="events">Events</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full sm:w-48">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="az">Name A-Z</SelectItem>
                        <SelectItem value="za">Name Z-A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Templates Grid */}
              {filteredTemplates.length > 0 ? (
                filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="rounded-lg overflow-hidden border bg-card"
                  >
                    <div className="aspect-video relative bg-muted">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-4xl font-bold">
                          {template.name[0]}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{template.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {template.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {template.description}
                      </p>
                      <Button size="sm" className="w-full" asChild>
                        <Link href="/home">Use Template</Link>
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-muted-foreground">
                    No templates found matching your criteria.
                  </p>
                </div>
              )}
            </div>

            {filteredTemplates.length > 0 && (
              <div className="text-center">
                <Button variant="outline" size="lg">
                  Load More Templates
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
