'use client';

import { Button } from '@/components/ui/button';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Nolan Rosser is a multidisciplinary creative professional with over a decade of experience in visual design, branding, and creative direction. His work spans across digital, print, and environmental mediums.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-1">40+</div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">10+</div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">25+</div>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">International Awards</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                <span className="text-xs text-foreground/40">Skill</span>
              </div>
              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                <span className="text-xs text-foreground/40">Skill</span>
              </div>
              <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                <span className="text-xs text-foreground/40">Skill</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-96 rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center text-foreground/40">
                <div className="text-8xl mb-2">🎭</div>
                <p className="text-sm">[Portrait Image]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
