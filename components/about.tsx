"use client";

import ProfilePic from "@/public/profile-image.jpg";
import Image from "next/image";
import { ScrollReveal, ScrollRevealItem } from "@/components/scroll-reveal";

export function About() {
  return (
    <section
      id="about"
      className="py-1 sm:py-10 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-4 md:mb-8">
          <h2 className="text-4xl font-bold">About Me</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal staggerChildren={0.12} className="flex flex-col">
            <ScrollRevealItem>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Creative and user-focused UI/UX Designer with 5+ years of
                experience designing digital products across SaaS, government, and
                fintech industries. Skilled at translating business needs into
                functional and scalable products using Figma, with expertise in
                user research, prototyping, and usability testing. Proven success
                collaborating with developers and stakeholders to ship successful
                products that balance user experience with technical feasibility
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold mb-1 text-primary">15+</div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wide">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1 text-primary">5+</div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wide">
                    Years Experience
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1 text-primary">10+</div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wide">
                    Clients
                  </p>
                </div>
              </div>
            </ScrollRevealItem>
          </ScrollReveal>

          <ScrollReveal delay={0.15} yOffset={30} scale={0.98} className="hidden md:block">
            <div className="w-full rounded-xl bg-muted/10 overflow-hidden flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-500 group">
              <Image
                src={ProfilePic}
                className="rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                width={800}
                height={800}
                alt="profile picture of Mateen Gbadamosi"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
