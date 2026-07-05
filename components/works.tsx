"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { ScrollReveal, ScrollRevealItem } from "@/components/scroll-reveal";

export function Works() {
  return (
    <section
      id="works"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-2">
            Selected Works
          </h2>
          <p className="text-sm text-foreground/60">2020 - 2026</p>
        </ScrollReveal>

        <ScrollReveal
          staggerChildren={0.15}
          className="grid md:grid-cols-2 gap-8 auto-rows-fr"
        >
          {projects.map((project) => (
            <ScrollRevealItem
              key={project.id}
              className="h-full"
            >
              <Link
                href={project.externalLink || `/projects/${project.slug}`}
                target={project.externalLink ? "_blank" : undefined}
                rel={project.externalLink ? "noopener noreferrer" : undefined}
                className="group flex flex-col h-full"
              >
                <div className="relative w-full aspect-3/2 overflow-hidden rounded-xl mb-4 bg-muted/20 shadow-sm transition-all duration-500 group-hover:shadow-md">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex justify-between items-center px-1">
                  <h4 className="font-bold text-lg mb-1 group-hover:text-foreground/70 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[12px] text-foreground/60 tracking-wide uppercase font-semibold">
                    {project.category}
                  </p>
                </div>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
