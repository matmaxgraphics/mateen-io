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

export interface CaseStudySection {
  id: string;
  type: 'text' | 'goals-list' | 'gallery';
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  images?: ProjectImage[];
  caption?: string;
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
  sections?: CaseStudySection[];
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
    images: [], 
    sections: [
      {
        id: 'overview',
        type: 'text',
        title: 'Project Overview',
        description: 'CryptoNow is a web-based crypto trading platform that allows users to buy and sell cryptocurrencies using local currency, while providing admins with full control over transactions, disputes, and compliance.'
      },
      {
        id: 'problem',
        type: 'text',
        title: 'Problem Statement',
        description: 'Many crypto platforms overwhelm users with complex onboarding, unclear rates, and slow transaction processes. Users often prefer informal P2P methods because they feel faster and simpler.'
      },
      {
        id: 'goals',
        type: 'goals-list',
        title: 'Design Goals',
        bullets: [
          'Reduce onboarding friction',
          'Create clear buy/sell flows',
          'Ensure transparency in rates and fees',
          'Design a scalable admin system'
        ]
      },
      {
        id: 'user-flow-intro',
        type: 'text',
        title: 'User Flow Overview',
        description: 'The platform was designed using progressive onboarding — collecting only essential information upfront and requesting additional details only when required.'
      },
      {
        id: 'landing-page',
        type: 'gallery',
        title: 'Landing Page & Main Pages',
        subtitle: 'Brand presence & communication',
        images: [
          { id: 'cn-landing-1', src: '/images/cryptonow/Homepage.png', alt: 'Homepage Hero mockup', layout: 'full' },
          { id: 'cn-landing-2', src: '/images/cryptonow/Contact.png', alt: 'Contact support screen layout', layout: 'full' }
        ],
        caption: 'The landing page immediately communicates what CryptoNow does, how it works in 3 simple steps, and why users can trust the platform. It is backed by a direct, user-centric customer support and contact hub.'
      },
      {
        id: 'auth-flow',
        type: 'gallery',
        title: 'Authentication & Onboarding',
        subtitle: 'Reducing friction from the start',
        images: [
          { id: 'cn-auth-1', src: '/images/cryptonow/Sign up.png', alt: 'Sign Up Screen', layout: 'half' },
          { id: 'cn-auth-2', src: '/images/cryptonow/email verification.png', alt: 'Email Verification Screen', layout: 'half' },
          { id: 'cn-auth-3', src: '/images/cryptonow/Sign in.png', alt: 'Sign In Screen', layout: 'half' },
          { id: 'cn-auth-4', src: '/images/cryptonow/Reset password/Reset password.png', alt: 'Reset password', layout: 'half' },
          { id: 'cn-auth-5', src: '/images/cryptonow/Reset password/new.png', alt: 'Reset password input screen', layout: 'half' },
          { id: 'cn-auth-6', src: '/images/cryptonow/Reset password/success.png', alt: 'Reset password success confirmation screen', layout: 'full' }
        ],
        caption: 'Signup was intentionally kept lightweight — requiring only email and password — to reduce friction and encourage first-time users to complete their first trade. Security configurations and password retrieval processes mirror this minimalist design language.'
      },
      {
        id: 'buy-flow',
        type: 'gallery',
        title: 'Buy Crypto Flow',
        subtitle: 'Simplified purchasing journey',
        images: [
          { id: 'cn-buy-1', src: '/images/cryptonow/Buy crypto.png', alt: 'Buy Crypto Options Selection Screen', layout: 'full' },
          { id: 'cn-buy-2', src: '/images/cryptonow/Buy crypto/add address details.png', alt: 'Buy Crypto - Enter delivery wallet address', layout: 'half' },
          { id: 'cn-buy-3', src: '/images/cryptonow/Buy crypto/confirm address.png', alt: 'Buy Crypto - Confirm address details', layout: 'half' },
          { id: 'cn-buy-4', src: '/images/cryptonow/Buy crypto/make payment.png', alt: 'Buy Crypto - Make local payment bank instructions', layout: 'half' },
          { id: 'cn-buy-5', src: '/images/cryptonow/Buy crypto/confirm payment.png', alt: 'Buy Crypto - Confirm payment execution details', layout: 'half' },
          { id: 'cn-buy-6', src: '/images/cryptonow/Buy crypto/completed.png', alt: 'Buy Crypto - Completed transaction receipt screen', layout: 'full' }
        ],
        caption: 'The buy flow mirrors familiar P2P patterns while adding transparency around rates, fees, and transaction status, concluding with a clear completed status screen.'
      },
      {
        id: 'sell-flow',
        type: 'gallery',
        title: 'Sell Crypto Flow',
        subtitle: 'Trustworthy payout flows',
        images: [
          { id: 'cn-sell-1', src: '/images/cryptonow/Sell crypto/Sell crypto.png', alt: 'Sell Crypto Options Selection Screen', layout: 'full' },
          { id: 'cn-sell-2', src: '/images/cryptonow/Sell crypto/enter bank details.png', alt: 'Sell Crypto - Enter bank details', layout: 'half' },
          { id: 'cn-sell-3', src: '/images/cryptonow/Sell crypto/confirm bank details.png', alt: 'Sell Crypto - Confirm bank account details', layout: 'half' },
          { id: 'cn-sell-4', src: '/images/cryptonow/Sell crypto/make payment.png', alt: 'Sell Crypto - Initiate escrow transfer instructions', layout: 'half' },
          { id: 'cn-sell-5', src: '/images/cryptonow/Sell crypto/confirm payment.png', alt: 'Sell Crypto - Confirm receipt of fiat', layout: 'half' },
          { id: 'cn-sell-6', src: '/images/cryptonow/Sell crypto/success in payment.png', alt: 'Sell Crypto - Completed fiat payout success screen', layout: 'full' }
        ],
        caption: 'Selling crypto reverses the buy logic while maintaining clarity and trust through confirmations, finishing with a final payout success screen.'
      },
      {
        id: 'wallet',
        type: 'gallery',
        title: 'Wallet Dashboard',
        subtitle: 'Daily portfolio tracking',
        images: [
          { id: 'cn-wallet-1', src: '/images/cryptonow/wallet dashboard.png', alt: 'Main Wallet Dashboard Mockup', layout: 'full' },
          { id: 'cn-wallet-2', src: '/images/cryptonow/wallet dashboard_empty state.png', alt: 'Wallet Dashboard empty state illustration', layout: 'half' },
          { id: 'cn-wallet-3', src: '/images/cryptonow/wallet dashboard_add filter.png', alt: 'Wallet Dashboard with active transactions search filter dropdown', layout: 'half' }
        ],
        caption: 'The wallet dashboard gives users a clear overview of balances, past transactions, and status updates, with support for empty states and live filtering options.'
      },
      {
        id: 'profile',
        type: 'gallery',
        title: 'Profile Management & Security',
        subtitle: 'Self-serve options & multi-factor protection',
        images: [
          { id: 'cn-profile-1', src: '/images/cryptonow/Profile.png', alt: 'User settings profile options', layout: 'half' },
          { id: 'cn-profile-2', src: '/images/cryptonow/Profile-2FA.png', alt: 'Profile settings Two-factor authentication (2FA)', layout: 'half' }
        ],
        caption: 'Users can manage multiple bank accounts and wallet addresses, grouped by cryptocurrency, with default selections and just-in-time prompts.'
      }
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
