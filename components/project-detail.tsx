'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

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
            <div className="md:col-span-2">
              <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-foreground/70 mb-6">{project.description}</p>
              <Button className="rounded-md">
                View on Behance <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground/60 mb-1">CLIENT</p>
                <p className="font-semibold">{project.client}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">YEAR</p>
                <p className="font-semibold">{project.year}</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60 mb-1">CATEGORY</p>
                <p className="font-semibold">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`${project.heroImage} w-full aspect-video rounded-lg flex items-center justify-center`}>
            <div className="text-center">
              <div className="text-6xl mb-2 opacity-40">📸</div>
              <p className="text-sm text-foreground/50">{project.title} Hero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {project.images.map((image, index) => {
              if (image.layout === 'full') {
                return (
                  <div key={image.id} className="flex items-center justify-between gap-4">
                    <div className={`${image.src} w-full aspect-video rounded-lg flex items-center justify-center flex-1`}>
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
                );
              }

              if (image.layout === 'half') {
                if (index % 2 === 0) {
                  const nextImage = project.images[index + 1];
                  return (
                    <div key={image.id} className="flex items-end justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className={`${image.src} w-full aspect-square rounded-lg flex items-center justify-center`}>
                          <div className="text-center">
                            <div className="text-6xl mb-2 opacity-40">📸</div>
                            <p className="text-sm text-foreground/50">{image.alt}</p>
                          </div>
                        </div>
                        {nextImage && (
                          <div className={`${nextImage.src} w-full aspect-square rounded-lg flex items-center justify-center`}>
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
                  );
                }
                return null;
              }
            })}
          </div>
        </div>
      </section>

      {/* More Works */}
      {relatedProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">More Works</h2>
              <Button variant="outline" size="sm" className="rounded-md bg-transparent">
                View All Works <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((proj) => (
                <a
                  key={proj.id}
                  href={`/projects/${proj.slug}`}
                  className="group"
                >
                  <div className={`${proj.heroImage} w-full aspect-video rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:shadow-lg transition`}>
                    <div className="text-center">
                      <div className="text-6xl mb-2 opacity-40">📸</div>
                      <p className="text-sm text-foreground/50">{proj.title}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-1 group-hover:underline">{proj.title}</h3>
                  <p className="text-sm text-foreground/60">{proj.category}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
