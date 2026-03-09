"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProfilePic from "@/public/profile-image.jpg";
import Slideshow from "@/public/slideshow.gif";

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-360 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6 w-24 h-24">
              <div className="w-full h-full flex items-center justify-center text-sm text-foreground/40">
                <Image
                  src={ProfilePic}
                  className="rounded-xl"
                  width={1000}
                  height={1000}
                  alt="profile picture of Mateen Gbadamosi"
                />
              </div>
            </div>

            <h1 className="font-bold mb-4">Mateen Gbadamosi</h1>

            <h1 className="mb-6">UI/UX Designer</h1>

            <p className="leading-relaxed mb-8 max-w-md">
              Mateen is a UI/UX Designer, specializing in visual communications
              and brand strategy. He has extensive experience in design, art
              direction, and digital storytelling.
            </p>

            <Button className="py-6 rounded-xl" variant="default" size="lg">
              Get In Touch
            </Button>
          </div>

          <div className="hidden md:block">
            <div className="w-full aspect-3/2 overflow-hidden rounded-xl flex items-center justify-center">
              <Image
                src={Slideshow}
                alt="Featured Project Demo"
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
