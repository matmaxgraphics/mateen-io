"use client";

import { Button } from "@/components/ui/button";
import ProfilePic from "@/public/profile-image.jpg";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="py-1 sm:py-10 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 md:mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Creative and user-focused UI/UX Designer with 5+ years of
              experience designing digital products across SaaS, government, and
              fintech industries. Skilled at translating business needs into
              functional and scalable products using Figma, with expertise in
              user research, prototyping, and usability testing. Proven success
              collaborating with developers and stakeholders to ship successful
              products that balance user experience with technical feasibility
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-1">15+</div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">
                  Projects Completed
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">5+</div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">
                  Years Experience
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">10+</div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">
                  Clients
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-96 rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center text-foreground/40">
                <Image
                  src={ProfilePic}
                  className="rounded-xl"
                  width={800}
                  height={800}
                  alt="profile picture of Mateen Gbadamosi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
