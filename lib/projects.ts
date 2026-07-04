import waqtly from "@/public/waqt-cover.jpg"
import ecitibiz from "@/public/ecitibiz-cover.png"
import cryptonow from "@/public/cryptonow.png"
import volumevault from "@/public/volume-vault.png"
import naijafoods from "@/public/9ja-foods.png"
import iWish from "@/public/iwish-app-mockup.png"

import type { StaticImageData } from "next/image"

export interface ProjectImage {
  id: string;
  src: string | StaticImageData;
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
  heroImage: string | StaticImageData;
  coverImage: StaticImageData | HTMLImageElement | string;
  images: ProjectImage[];
  behanceLink?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'crypto-now',
    title: 'CryptoNow',
    client: 'CryptoNow',
    year: '2026',
    category: 'UI/UX design',
    description: 'CryptoNow is a web-based crypto trading platform that allows users to buy and sell cryptocurrencies using local currency, while providing admins with full control over transactions, disputes, and compliance.',
    heroImage: cryptonow,
    coverImage: cryptonow,
    images: [
      { id: 'cn-1', src: '/images/cryptonow/Homepage.png', alt: 'Homepage Design mockup', layout: 'full' },
      { id: 'cn-2', src: '/images/cryptonow/Sign up.png', alt: 'Sign Up Screen', layout: 'half' },
      { id: 'cn-3', src: '/images/cryptonow/Sign in.png', alt: 'Sign In Screen', layout: 'half' },
      { id: 'cn-4', src: '/images/cryptonow/wallet dashboard.png', alt: 'Wallet Dashboard Screen', layout: 'full' },
      { id: 'cn-5', src: '/images/cryptonow/Buy crypto.png', alt: 'Buy Crypto Options Screen', layout: 'full' },
      { id: 'cn-6', src: '/images/cryptonow/Buy crypto/add address details.png', alt: 'Buy Crypto - Add Address details', layout: 'half' },
      { id: 'cn-7', src: '/images/cryptonow/Buy crypto/confirm address.png', alt: 'Buy Crypto - Confirm Address details', layout: 'half' },
      { id: 'cn-8', src: '/images/cryptonow/Buy crypto/make payment.png', alt: 'Buy Crypto - Make payment details', layout: 'half' },
      { id: 'cn-9', src: '/images/cryptonow/Buy crypto/confirm payment.png', alt: 'Buy Crypto - Confirm payment details', layout: 'half' },
      { id: 'cn-10', src: '/images/cryptonow/Sell crypto/enter bank details.png', alt: 'Sell Crypto - Enter bank details', layout: 'half' },
      { id: 'cn-11', src: '/images/cryptonow/Sell crypto/confirm bank details.png', alt: 'Sell Crypto - Confirm bank details', layout: 'half' },
      { id: 'cn-12', src: '/images/cryptonow/Sell crypto/make payment.png', alt: 'Sell Crypto - Make payment details', layout: 'half' },
      { id: 'cn-13', src: '/images/cryptonow/Sell crypto/confirm payment.png', alt: 'Sell Crypto - Confirm payment details', layout: 'half' },
      { id: 'cn-14', src: '/images/cryptonow/Profile.png', alt: 'User settings profile details', layout: 'half' },
      { id: 'cn-15', src: '/images/cryptonow/Profile-2FA.png', alt: 'User settings Two-factor authentication (2FA)', layout: 'half' },
      { id: 'cn-16', src: '/images/cryptonow/Reset password/new.png', alt: 'Reset password screen', layout: 'half' },
      { id: 'cn-17', src: '/images/cryptonow/Reset password/success.png', alt: 'Reset password success confirmation', layout: 'half' },
      { id: 'cn-18', src: '/images/cryptonow/Contact.png', alt: 'Contact and support details', layout: 'full' }
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
    coverImage: iWish,
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
    coverImage: naijafoods,
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
