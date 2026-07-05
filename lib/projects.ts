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
  externalLink?: string;
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
    client: 'Abdelmajeed / Hexabug',
    year: '2023 - 2024',
    category: 'UI/UX Design',
    description: 'Waqtly is a dedicated home tablet designed to act as an always-visible, context-aware spiritual companion for Muslims, supporting daily prayers, Quran readings, podcasts, and holy month activities.',
    heroImage: waqtly,
    coverImage: waqtly,
    images: [],
    sections: [
      {
        id: 'overview',
        type: 'text',
        title: 'Project Overview',
        description: 'Waqtly started with a very clear intention from the client, Abdelmajeed, who is based in the Netherlands. He wasn\'t trying to build another Muslim app that people download, open a few times, and forget about. The goal was to create something Muslims would actually live with. Instead of competing for attention on a phone, the idea was a dedicated tablet — placed in constant view — that acts as a spiritual companion throughout the day. The thinking was simple but ambitious: if something is always visible, always relevant, and aware of context, people are more likely to engage with it consistently.'
      },
      {
        id: 'role-contribution',
        type: 'text',
        title: 'My Role & Contribution',
        description: 'I worked on Waqtly as a UI/UX Designer at Hexabug, alongside a multidisciplinary team that included Android and backend engineers, frontend developers, digital marketers, a 3D artist, graphic designers, and another product designer who acted as the design lead. While the design lead handled overall visual direction and refinement, I owned and shipped several core product experiences that moved directly into production, including the tablet onboarding flow, key Qur\'an reading experiences, Ramadan broadcast interfaces, the Tahajjud clock, and podcast screens.'
      },
      {
        id: 'goals',
        type: 'goals-list',
        title: 'Design Goals',
        bullets: [
          'Design an intuitive, lightweight first-time tablet setup flow.',
          'Create a distraction-free Qur\'an reading interface with audio playback control.',
          'Develop custom media streaming layouts tailored for Ramadan broadcasts.',
          'Structure functional utility widgets like the Tahajjud clock and podcast player.'
        ]
      },
      {
        id: 'onboarding-flow',
        type: 'gallery',
        title: 'Tablet Onboarding Flow',
        subtitle: 'First-time startup experience',
        images: [
          { id: 'wq-onboard-1', src: '/images/waqtly/setup screens/Setup screen - Language selection.png', alt: 'Language Selection Screen', layout: 'half' },
          { id: 'wq-onboard-2', src: '/images/waqtly/setup screens/Setup screen - Language selection - 2.png', alt: 'Language Selection Expanded Screen', layout: 'half' },
          { id: 'wq-onboard-3', src: '/images/waqtly/setup screens/setup screen - empty wifi connection.png', alt: 'Empty WiFi Connection Screen', layout: 'half' },
          { id: 'wq-onboard-4', src: '/images/waqtly/setup screens/setup screen -wifi connection.png', alt: 'WiFi Connection Input Screen', layout: 'half' },
          { id: 'wq-onboard-5', src: '/images/waqtly/setup screens/Setup screen - terms and condition.png', alt: 'Terms and Conditions Screen', layout: 'half' },
          { id: 'wq-onboard-6', src: '/images/waqtly/setup screens/Setup screen - location selection.png', alt: 'Location Selection Screen', layout: 'half' },
          { id: 'wq-onboard-7', src: '/images/waqtly/setup screens/Setup screen - auto location selection.png', alt: 'Automatic Location Selection', layout: 'half' },
          { id: 'wq-onboard-8', src: '/images/waqtly/setup screens/Setup screen - manual location selection.png', alt: 'Manual Location Entry Screen', layout: 'half' },
          { id: 'wq-onboard-9', src: '/images/waqtly/setup screens/Setup screen - setting up tablet.png', alt: 'Setting Up Tablet Progress Screen', layout: 'half' },
          { id: 'wq-onboard-10', src: '/images/waqtly/setup screens/setup screen - tablet ready.png', alt: 'Tablet Ready Screen', layout: 'half' }
        ],
        caption: 'The setup flow guides the user step-by-step to configure their new dedicated Waqtly tablet. It starts from choosing a language, connecting to a home WiFi network, agreeing to terms, setting location preferences (crucial for exact prayer times calculation), and confirming device readiness.'
      },
      {
        id: 'lock-home',
        type: 'gallery',
        title: 'Lock & Home Screen',
        subtitle: 'The daily digital companion',
        images: [
          { id: 'wq-home-1', src: '/images/waqtly/lock and home screen/Home screen.png', alt: 'Default Home Screen Dashboard', layout: 'full' },
          { id: 'wq-home-2', src: '/images/waqtly/lock and home screen/All prayer time/Home.png', alt: 'All Prayer Times Widget Expanded', layout: 'half' },
          { id: 'wq-home-3', src: '/images/waqtly/lock and home screen/Notification/Home.png', alt: 'Home Screen Notifications Overview', layout: 'half' },
          { id: 'wq-home-4', src: '/images/waqtly/lock and home screen/Notification/Home-1.png', alt: 'Active Prayer Notification State', layout: 'full' }
        ],
        caption: 'The main dashboard acts as the primary hub, providing a clear breakdown of the five daily prayer times, upcoming prayer count downs, and context-specific notifications designed to act as a gentle spiritual reminder.'
      },
      {
        id: 'quran-experience',
        type: 'gallery',
        title: 'Quran Reading & Playback',
        subtitle: 'Distraction-free spiritual immersion',
        images: [
          { id: 'wq-quran-1', src: '/images/waqtly/quran/Start.png', alt: 'Qur\'an Start and Selection Screen', layout: 'full' },
          { id: 'wq-quran-2', src: '/images/waqtly/quran/Quran playing.png', alt: 'Interactive Qur\'an Reading and Playback Page', layout: 'full' }
        ],
        caption: 'The Qur\'an reading interface is clean and typographic. It features an Ayah-by-Ayah detail view and an integrated audio playback panel, allowing users to listen to high-quality recitations of specific verses easily.'
      },
      {
        id: 'ramadan-ilm',
        type: 'gallery',
        title: 'Ramadan Ilm & Broadcasts',
        subtitle: 'Holy month content ecosystem',
        images: [
          { id: 'wq-ram-1', src: '/images/waqtly/ramadan ilm/RamadanContent/YourFavorites.png', alt: 'Custom Favorites Collection Dashboard', layout: 'half' },
          { id: 'wq-ram-2', src: '/images/waqtly/ramadan ilm/RamadanContent/CarouselMedia.png', alt: 'Carousel Content Selection Layout', layout: 'half' },
          { id: 'wq-ram-3', src: '/images/waqtly/ramadan ilm/RamadanContent/VideoMedia.png', alt: 'Video Lecture Details Page', layout: 'half' },
          { id: 'wq-ram-4', src: '/images/waqtly/ramadan ilm/RamadanContent/VideoMedia_State/AfterUserMarkViewed.png', alt: 'Video Completed State', layout: 'half' },
          { id: 'wq-ram-5', src: '/images/waqtly/ramadan ilm/RamadanContent/Feedback/UserDone.png', alt: 'Completed Activity Feedback Screen', layout: 'full' }
        ],
        caption: 'For the month of Ramadan, Waqtly offers a rich broadcast hub with media carousels, video courses, custom user lists, and check-ins that encourage daily learning, with completion indicators for tracking progress.'
      },
      {
        id: 'tahajjud-clock',
        type: 'gallery',
        title: 'Tahajjud Clock',
        subtitle: 'Optimized alarm tools for night prayers',
        images: [
          { id: 'wq-tahajjud-1', src: '/images/waqtly/Tahajjud Clock/Tahajjud Alarm.png', alt: 'Tahajjud Alarm Dashboard', layout: 'full' },
          { id: 'wq-tahajjud-2', src: '/images/waqtly/Tahajjud Clock/recommended time.png', alt: 'Astronomical Recommended Time Picker', layout: 'half' },
          { id: 'wq-tahajjud-3', src: '/images/waqtly/Tahajjud Clock/Set Tahajjud Alarm manually.png', alt: 'Manual Alarm Configuration Time Picker', layout: 'half' },
          { id: 'wq-tahajjud-4', src: '/images/waqtly/Tahajjud Clock/set manuallyDone.png', alt: 'Manual Set Alarm Confirmation Screen', layout: 'half' },
          { id: 'wq-tahajjud-5', src: '/images/waqtly/Tahajjud Clock/Select alarm sound.png', alt: 'Alarm Ringtone Selection Screen', layout: 'half' },
          { id: 'wq-tahajjud-6', src: '/images/waqtly/Tahajjud Clock/alarm wake up screen.png', alt: 'High-Contrast Active Alarm Wakeup Screen', layout: 'full' }
        ],
        caption: 'The Tahajjud Alarm is engineered to simplify waking up for the night-vigil prayer. It features smart recommended times based on the last third of the night, custom time pickers, a selection of serene alarm tones, and a high-contrast wakeup screen that is easy to read in the dark.'
      },
      {
        id: 'podcast',
        type: 'gallery',
        title: 'Spiritual Podcasts',
        subtitle: 'Curated audio companion content',
        images: [
          { id: 'wq-pod-1', src: '/images/waqtly/Podcast/Podcast.png', alt: 'Podcast Hub Main Explore Feed', layout: 'full' },
          { id: 'wq-pod-2', src: '/images/waqtly/Podcast/select podcast language.png', alt: 'Language Preference Selection Overlay', layout: 'half' },
          { id: 'wq-pod-3', src: '/images/waqtly/Podcast/episode list.png', alt: 'Podcast Show and Episode List', layout: 'half' },
          { id: 'wq-pod-4', src: '/images/waqtly/Podcast/saved podcast.png', alt: 'Saved and Offline Downloads Library', layout: 'half' },
          { id: 'wq-pod-5', src: '/images/waqtly/Podcast/play speed.png', alt: 'Player Controls and Speed Adjustment', layout: 'half' },
          { id: 'wq-pod-6', src: '/images/waqtly/Podcast/episode player.png', alt: 'Full Screen Audio Episode Player Interface', layout: 'full' }
        ],
        caption: 'An integrated podcast feature provides users access to curated islamic talks. Controls allow selecting languages, reading series details, saving episodes offline, modifying playback speeds, and accessing a dedicated audio player screen.'
      }
    ],
  },
  {
    id: '6',
    slug: '9ja-foods',
    title: '9ja Foods',
    client: 'Personal project',
    year: '2025',
    category: 'UI/UX Design',
    description: '9ja Foods is a dedicated stock photography platform (an "Unsplash for Nigerian foods") designed to provide designers, developers, and creators with authentic, high-quality images of local Nigerian meals.',
    coverImage: naijafoods,
    heroImage: naijafoods,
    images: [],
    sections: [
      {
        id: 'overview',
        type: 'text',
        title: 'Project Overview',
        description: '9ja Foods is a personal project conceived out of a real-world problem. While working on a digital product that required authentic images of Nigerian meals, I struggled to find a dedicated, high-quality image sharing platform for local cuisine. This sparked the concept of 9ja Foods: an open-source, community-driven "Unsplash for Nigerian foods" where creators can easily share and download authentic photos of Nigerian dishes.'
      },
      {
        id: 'goals',
        type: 'goals-list',
        title: 'Design Goals',
        bullets: [
          'Build a clean, image-focused search and discovery homepage.',
          'Create a detailed single-image view with download resolutions and related recommendations.',
          'Design a frictionless sign-up flow using both interactive modal and dedicated page formats.',
          'Develop functional profiles for contributors to manage their uploaded collections.',
          'Structure an intuitive and visual media submission pipeline.'
        ]
      },
      {
        id: 'homepage',
        type: 'gallery',
        title: 'The Discovery Hub',
        subtitle: 'Explore & Search Local Cuisines',
        images: [
          { id: '9jf-home-1', src: '/images/9jafoods/homepage.png', alt: 'Homepage Discovery Search Feed Mockup', layout: 'full' }
        ],
        caption: 'The homepage features a search bar and a curated masonry grid showing high-resolution food images. Users can search for specific meals (e.g., Jollof Rice, Amala, Suya) and explore trending uploads.'
      },
      {
        id: 'single-image',
        type: 'gallery',
        title: 'Single Image View',
        subtitle: 'Metadata, Downloads & Related Content',
        images: [
          { id: '9jf-single-1', src: '/images/9jafoods/view single image.png', alt: 'Single Image Details Page', layout: 'full' }
        ],
        caption: 'The detailed view gives users options to download the photo in multiple resolutions, view contributor details, see camera/location metadata, and browse related images.'
      },
      {
        id: 'signup',
        type: 'gallery',
        title: 'Frictionless Signup Flows',
        subtitle: 'Modals & Dedicated Pages',
        images: [
          { id: '9jf-sign-1', src: '/images/9jafoods/Signup/modal.png', alt: 'In-Context Sign Up Dialog Modal', layout: 'half' },
          { id: '9jf-sign-2', src: '/images/9jafoods/Signup/page.png', alt: 'Dedicated Sign Up Page', layout: 'half' }
        ],
        caption: 'To make onboarding as flexible as possible, users can sign up instantly using an in-context modal dialog without losing their search state, or navigate to a dedicated registration page.'
      },
      {
        id: 'profile',
        type: 'gallery',
        title: 'Contributor Profiles',
        subtitle: 'Managing Uploads & Collections',
        images: [
          { id: '9jf-prof-1', src: '/images/9jafoods/profile page/profile - welcomd dialogue.png', alt: 'Contributor Dashboard Onboarding Welcome Popup', layout: 'half' },
          { id: '9jf-prof-2', src: '/images/9jafoods/profile page/profile page.png', alt: 'Contributor Main Profile Settings Page', layout: 'half' },
          { id: '9jf-prof-3', src: '/images/9jafoods/profile page/works.png', alt: 'Contributor Uploaded Photos Grid Feed', layout: 'half' },
          { id: '9jf-prof-4', src: '/images/9jafoods/profile page/no-works.png', alt: 'Contributor Uploads Empty State View', layout: 'half' },
          { id: '9jf-prof-5', src: '/images/9jafoods/profile page/change password.png', alt: 'Security Settings Password Modification Screen', layout: 'full' }
        ],
        caption: 'The profile space allows contributors to view their published collections, see active downloads statistics, manage account security, and explore empty states when they haven\'t uploaded any content yet.'
      },
      {
        id: 'submit',
        type: 'gallery',
        title: 'Image Submission',
        subtitle: 'Frictionless uploading flow',
        images: [
          { id: '9jf-sub-1', src: '/images/9jafoods/submit image/submit image.png', alt: 'Upload Media Startup Overlay', layout: 'half' },
          { id: '9jf-sub-2', src: '/images/9jafoods/submit image/image-uploading.png', alt: 'Upload Media Active Progress Dialog', layout: 'half' },
          { id: '9jf-sub-3', src: '/images/9jafoods/submit image/upload complete.png', alt: 'Upload Media Success Screen', layout: 'full' }
        ],
        caption: 'The upload interface guides users through drag-and-drop actions, displaying real-time progress indicators, and culminating in an upload complete confirmation screen.'
      }
    ],
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
    externalLink: 'https://medium.com/@gbadamosimateen/redesigning-a-government-digital-service-platform-ecitibiz-3f1fee5a2ee0',
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
    externalLink: 'https://x.com/i/status/1907391859795603912',
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
    sections: [
      {
        id: 'coming-soon',
        type: 'text',
        title: 'Case Study Coming Soon',
        description: 'We are currently detailing the design process, user research, and outcomes for the iWish Mobile App. Stay tuned!'
      }
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 2): Project[] {
  return projects.filter(p => p.slug !== currentSlug).slice(0, limit);
}
