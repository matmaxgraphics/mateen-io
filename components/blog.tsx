"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InspoImg from "@/public/inspo.png";
import HeroImg from "@/public/hero-sect.png";
import HandlingImg from "@/public/image-handling.jpg";
import Image from "next/image";
import { ScrollReveal, ScrollRevealItem } from "@/components/scroll-reveal";

const blogPosts = [
  {
    id: 1,
    title: "Can't find design inspiration",
    excerpt: "When you can't seem to get an inspiration for your next design",
    date: "2024-01-15",
    link: "https://x.com/mateenUI/status/1780821584392937838?s=20",
    image: InspoImg,
  },
  {
    id: 2,
    title: "Creating Hero section the right way",
    excerpt:
      "Exploring the intersection of strategy and creativity in modern branding.",
    date: "2024-01-20",
    link: "https://x.com/mateenUI/status/1586325048159514624?s=20",
    image: HeroImg,
  },
  {
    id: 3,
    title: "Handling image storage with Supabase, on the Frontend",
    excerpt: "When working with BaaS platforms like Firebase, Supabase, and others, you’ll likely run into the challenge of image storage. ",
    date: "2025-04-17",
    link: "https://medium.com/@gbadamosimateen/handling-image-storage-with-supabase-on-the-frontend-da328717121f",
    image: HandlingImg,
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Blog</h2>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md bg-transparent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={0.12}
          className="grid md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <ScrollRevealItem key={post.id} className="h-full">
              <article className="group cursor-pointer flex flex-col h-full">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col h-full"
                >
                  <div className="w-full aspect-video rounded-xl mb-4 overflow-hidden bg-muted/20 shadow-sm transition-all duration-500 group-hover:shadow-md">
                    <Image
                      src={post.image}
                      className="rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      width={800}
                      height={450}
                      alt={post.title}
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-foreground/70 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                </a>
              </article>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
