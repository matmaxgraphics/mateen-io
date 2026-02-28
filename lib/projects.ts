import waqtly from "@/public/waqt-cover.jpg"
import ecitibiz from "@/public/ecitibiz-cover.png"
import cryptonow from "@/public/cryptonow.png"
import volumevault from "@/public/volume-vault.png"
import type { StaticImageData } from "next/image"

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  layout?: 'full' | 'half' | 'third';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  heroImage: string;
  coverImage: StaticImageData | HTMLImageElement | string;
  images: ProjectImage[];
  behanceLink?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'crypto-now',
    title: 'CryptoNow',
    client: 'YOYO',
    year: '2025',
    category: 'UI/UX DESIGN',
    description: 'Exploring spatial hierarchy and visual composition through innovative grid systems.',
    heroImage: 'bg-orange-100',
    coverImage: cryptonow,
    images: [
      { id: '1', src: 'bg-orange-100', alt: 'Laptop with design', layout: 'full' },
      { id: '2', src: 'bg-blue-100', alt: 'Person portrait', layout: 'half' },
      { id: '3', src: 'bg-green-100', alt: 'Skateboarding', layout: 'half' },
      { id: '4', src: 'bg-red-100', alt: 'Studio shoot', layout: 'full' },
      { id: '5', src: 'bg-amber-100', alt: 'Street portrait', layout: 'half' },
      { id: '6', src: 'bg-purple-100', alt: 'Urban scene', layout: 'half' },
      { id: '7', src: 'bg-cyan-100', alt: 'Colorful walls', layout: 'full' },
    ],
    behanceLink: 'https://behance.net',
  },
  {
    id: '2',
    slug: 'waqtly',
    title: 'Waqtly',
    client: 'Majito',
    year: '2023',
    category: 'UI/UX DESIGN',
    description: 'A comprehensive branding project.',
    heroImage: 'bg-blue-100',
    coverImage: waqtly,
    images: [],
  },
  {
    id: '3',
    slug: 'ecitibiz',
    title: 'Ecitibiz',
    client: 'Anchor Data',
    year: '2023',
    category: 'UI/UX DESIGN, UX COPY',
    description: 'Identity and branding excellence.',
    heroImage: 'bg-amber-100',
    coverImage: ecitibiz,
    images: [],
  },
  {
    id: '4',
    slug: 'volume-vault',
    title: 'Volume Vault',
    client: 'Michael A.K.A Fiditiboy',
    year: '2025',
    category: 'WEB DESIGN',
    description: 'Modern digital marketing campaign.',
    coverImage: volumevault,
    heroImage: 'bg-red-100',
    images: [],
  },
  {
    id: '5',
    slug: 'iwish',
    title: 'iWish Mobile App',
    client: 'UnknownSatoshi',
    year: '2023',
    category: 'APP DESIGN',
    description: 'Complete identity and design system.',
    coverImage: '',
    heroImage: 'bg-green-100',
    images: [],
  },
  {
    id: '6',
    slug: '9ja-foods',
    title: '9ja Foods',
    client: 'Personal project',
    year: '2025',
    category: 'UI DESIGN',
    description: 'Dynamic motion design work.',
    coverImage: '',
    heroImage: 'bg-purple-100',
    images: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 2): Project[] {
  return projects.filter(p => p.slug !== currentSlug).slice(0, limit);
}
