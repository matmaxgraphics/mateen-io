"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InspoImg from "@/public/inspo.png";
import HeroImg from "@/public/hero-sect.png";
import HandlingImg from "@/public/image-handling.jpg";
import Image from "next/image";

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
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Blog</h2>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md bg-transparent"
          >
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div
                className={`${post.image} w-full aspect-video rounded-lg mb-4 flex items-center justify-center hover:shadow-lg transition`}
              >
                <Image
                  src={post.image}
                  className="rounded-xl"
                  width={800}
                  height={450}
                  alt={post.title}
                />{" "}
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-foreground/70 transition">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-3">{post.excerpt}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
