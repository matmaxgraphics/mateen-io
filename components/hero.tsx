"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProfilePic from "@/public/profile-image.jpg";
import Slideshow from "@/public/slideshow.gif";
import { ScrollReveal, ScrollRevealItem } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-360 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal staggerChildren={0.12} className="flex flex-col">
            <ScrollRevealItem className="mb-6 w-24 h-24">
              <div className="w-full h-full flex items-center justify-center text-sm text-foreground/40">
                <Image
                  src={ProfilePic}
                  className="rounded-xl transition-transform duration-700 hover:scale-105"
                  width={1000}
                  height={1000}
                  alt="profile picture of Mateen Gbadamosi"
                  priority
                />
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <h1 className="font-bold mb-4 text-4xl sm:text-5xl md:text-6xl tracking-tight">
                Mateen Gbadamosi
              </h1>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-foreground/80">
                UI/UX Designer
              </h2>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="leading-relaxed mb-8 max-w-md text-foreground/60 text-base sm:text-lg">
                Mateen is a UI/UX Designer, specializing in visual communications
                and brand strategy. He has extensive experience in design, art
                direction, and digital storytelling.
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <Button 
                className="py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
                variant="default" 
                size="lg"
              >
                Get In Touch
              </Button>
            </ScrollRevealItem>
          </ScrollReveal>

          <ScrollReveal delay={0.2} yOffset={40} scale={0.98} className="block">
            <div className="w-full aspect-3/2 overflow-hidden rounded-xl flex items-center justify-center group shadow-md hover:shadow-xl transition-shadow duration-500">
              <Image
                src={Slideshow}
                alt="Featured Project Demo"
                className="object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
