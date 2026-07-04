'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { ScrollReveal, ScrollRevealItem } from '@/components/scroll-reveal';
import Image from 'next/image';

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Project Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <ScrollReveal staggerChildren={0.12} className="md:col-span-2 flex flex-col">
              <ScrollRevealItem>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="text-lg text-foreground/70 leading-relaxed">{project.description}</p>
              </ScrollRevealItem>
            </ScrollReveal>
            
            <ScrollReveal staggerChildren={0.08} className="space-y-4">
              <ScrollRevealItem>
                <p className="text-sm text-foreground/60 mb-1">CLIENT</p>
                <p className="font-semibold">{project.client}</p>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="text-sm text-foreground/60 mb-1">YEAR</p>
                <p className="font-semibold">{project.year}</p>
              </ScrollRevealItem>
              <ScrollRevealItem>
                <p className="text-sm text-foreground/60 mb-1">CATEGORY</p>
                <p className="font-semibold">{project.category}</p>
              </ScrollRevealItem>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal yOffset={30} scale={0.98}>
            {typeof project.heroImage === 'string' && !project.heroImage.startsWith('/') ? (
              <div className={`${project.heroImage} w-full aspect-video rounded-lg flex items-center justify-center shadow-sm`}>
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-40">📸</div>
                  <p className="text-sm text-foreground/50">{project.title} Hero</p>
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden shadow-md bg-muted/10 border border-border flex items-center justify-center">
                <Image
                  src={project.heroImage}
                  alt={`${project.title} Hero Banner`}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {project.images.map((image, index) => {
              if (image.layout === 'full') {
                return (
                  <ScrollReveal key={image.id} yOffset={35} scale={0.99}>
                    {typeof image.src === 'string' && !image.src.startsWith('/') ? (
                      <div className="flex items-center justify-between gap-4">
                        <div className={`${image.src} w-full aspect-video rounded-lg flex items-center justify-center flex-1 shadow-sm`}>
                          <div className="text-center">
                            <div className="text-6xl mb-2 opacity-40">📸</div>
                            <p className="text-sm text-foreground/50">{image.alt}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
                        >
                          View <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    ) : (
                      // Real image layout (Clean, full width showcase - NOT CUT!)
                      <div className="w-full rounded-xl overflow-hidden shadow-sm border border-border/50 bg-muted/5">
                        <img
                          src={typeof image.src === 'string' ? image.src : (image.src as any).src}
                          alt={image.alt}
                          className="w-full h-auto block"
                        />
                      </div>
                    )}
                  </ScrollReveal>
                );
              }

              if (image.layout === 'half') {
                if (index % 2 === 0) {
                  const nextImage = project.images[index + 1];
                  return (
                    <ScrollReveal key={image.id} yOffset={35} scale={0.99}>
                      {typeof image.src === 'string' && !image.src.startsWith('/') ? (
                        <div className="flex items-end justify-between gap-4">
                          <div className="flex gap-4 flex-1">
                            <div className={`${image.src} w-full aspect-square rounded-lg flex items-center justify-center shadow-sm`}>
                              <div className="text-center">
                                <div className="text-6xl mb-2 opacity-40">📸</div>
                                <p className="text-sm text-foreground/50">{image.alt}</p>
                              </div>
                            </div>
                            {nextImage && (
                              <div className={`${nextImage.src} w-full aspect-square rounded-lg flex items-center justify-center shadow-sm`}>
                                <div className="text-center">
                                  <div className="text-6xl mb-2 opacity-40">📸</div>
                                  <p className="text-sm text-foreground/50">{nextImage.alt}</p>
                                </div>
                              </div>
                            )}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shrink-0"
                          >
                            View <ExternalLink className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-border/50 bg-muted/5 flex items-center justify-center">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-contain"
                            />
                          </div>
                          {nextImage && (
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-border/50 bg-muted/5 flex items-center justify-center">
                              <Image
                                src={nextImage.src}
                                alt={nextImage.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </ScrollReveal>
                  );
                }
                return null;
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* More Works */}
      {relatedProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">More Works</h2>
              <Button variant="outline" size="sm" className="rounded-md bg-transparent">
                View All Works <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </ScrollReveal>

            <ScrollReveal 
              staggerChildren={0.15} 
              className="grid md:grid-cols-2 gap-8"
            >
              {relatedProjects.map((proj) => (
                <ScrollRevealItem key={proj.id}>
                  <a
                    href={`/projects/${proj.slug}`}
                    className="group block"
                  >
                    <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-4 shadow-sm border border-border/30 bg-muted/10 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-md flex items-center justify-center">
                      <Image
                        src={proj.coverImage as any}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-foreground/70 transition-colors">{proj.title}</h3>
                    <p className="text-sm text-foreground/60">{proj.category}</p>
                  </a>
                </ScrollRevealItem>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}
    </div>
  );
}
