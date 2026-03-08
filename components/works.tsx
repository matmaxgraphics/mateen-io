"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import waqtly from "@/public/waqt-cover.jpg";
import ecitibiz from "@/public/ecitibiz-cover.png";

export function Works() {
  return (
    <section
      id="works"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-2">
              Selected Works
            </h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-md bg-transparent"
          >
            View All Works <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group flex flex-col h-full"
            >
              <div className="relative w-full aspect-3/2 overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col grow">
                <h3 className="font-bold text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
