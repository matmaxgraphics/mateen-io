'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Design Trends',
    excerpt: 'A deep dive into current design trends and how to apply them to your work.',
    date: '2024-01-15',
    image: 'bg-orange-100'
  },
  {
    id: 2,
    title: 'The Art of Branding',
    excerpt: 'Exploring the intersection of strategy and creativity in modern branding.',
    date: '2024-01-20',
    image: 'bg-slate-900'
  },
  {
    id: 3,
    title: 'Creative Problem Solving',
    excerpt: 'How to approach design challenges with innovative solutions.',
    date: '2024-01-25',
    image: 'bg-teal-100'
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Blog</h2>
          <Button variant="outline" size="sm" className="rounded-md bg-transparent">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className={`${post.image} w-full aspect-video rounded-lg mb-4 flex items-center justify-center hover:shadow-lg transition`}>
                <div className="text-foreground/40 text-4xl">📝</div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-foreground/70 transition">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-3">{post.excerpt}</p>
              <p className="text-xs text-foreground/50">{new Date(post.date).toLocaleDateString()}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
