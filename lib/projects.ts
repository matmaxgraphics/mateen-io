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
  type?: 'image' | 'video';
}

export interface DetailItem {
  label: string;
  text: string;
}

export interface DecisionCard {
  title: string;
  points: { label: string; text: string }[];
}

export interface CaseStudySection {
  id: string;
  type: 'text' | 'goals-list' | 'gallery' | 'details' | 'feature-list' | 'decisions';
  title?: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  images?: ProjectImage[];
  caption?: string;
  items?: DetailItem[];
  decisions?: DecisionCard[];
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
        id: 'details',
        type: 'details',
        items: [
          { label: 'Role', text: 'Product Designer (UX/UI)' },
          { label: 'Scope', text: 'End-to-end: user product + admin CRM' },
          { label: 'Platform', text: 'Web app' },
          { label: 'Tools', text: 'Figma' },
          { label: 'Status', text: 'In development, pre-launch' }
        ]
      },
      {
        id: 'overview',
        type: 'text',
        title: 'Project Overview',
        description: 'CryptoNow lets users buy and sell cryptocurrency using local currency (NGN), with an admin system behind it to process transactions, resolve disputes, and manage compliance. I designed the full product, both the user-facing flows and the internal admin CRM, from early concept through near-production screens.'
      },
      {
        id: 'problem',
        type: 'text',
        title: 'The Problem',
        description: 'Nigerian crypto users largely trade through informal WhatsApp-style P2P arrangements because they\'re fast and low-friction, even though they\'re risky and unregulated. Formal platforms exist, but they tend to lose users at two points: heavy upfront signup before a user has any reason to trust the platform, and opaque rates that make people suspicious they\'re being shortchanged on the conversion.\n\nThe design challenge wasn\'t "make a crypto app." It was a sharper question: can a regulated platform feel as fast and trustworthy as the informal P2P method users already default to?'
      },
      {
        id: 'research',
        type: 'feature-list',
        title: 'Research: Competitive Analysis',
        subtitle: 'Structured teardown, not guesswork',
        description: 'Rather than formal user interviews (a constraint of this project), I ran a structured competitive teardown of Binance and several local P2P-style apps, focused on three questions:',
        items: [
          { label: 'Where do users drop off in onboarding?', text: 'Binance-style KYC-heavy signups front-load friction before value is proven. Informal P2P (WhatsApp/Telegram) has near-zero friction but zero structure or protection.' },
          { label: 'How is rate transparency handled?', text: 'Most competitor apps show the rate late in the flow, after a user has already committed several steps, creating a moment of doubt right before conversion.' },
          { label: 'Where does trust get built or lost?', text: 'In P2P groups, trust comes from repeated interaction and reputation. Formal apps have to manufacture that trust through interface signals instead: status visibility, clear next steps, and dispute paths users can see up front.' }
        ],
        caption: 'That teardown directly shaped the three decisions below.'
      },
      {
        id: 'decisions',
        type: 'decisions',
        title: 'Key Design Decisions',
        subtitle: 'Trade-offs made deliberately',
        description: 'Each decision below came with a trade-off I made deliberately.',
        decisions: [
          {
            title: 'Progressive onboarding over full KYC-first signup',
            points: [
              { label: 'Alternative considered', text: 'Collect full compliance details (bank info, ID, wallet addresses) at signup, matching Binance\'s model.' },
              { label: 'Decision', text: 'Require only email and password to create an account. Bank and wallet details are collected just-in-time, at the moment they\'re actually needed in the buy/sell flow.' },
              { label: 'Trade-off', text: 'This delays some compliance data collection, so it only works if the just-in-time prompts are unmissable. I used modal interruptions rather than passive form fields to make sure the flow can\'t silently continue without required info.' }
            ]
          },
          {
            title: 'Rate shown before commitment, not after',
            points: [
              { label: 'Alternative considered', text: 'Standard flow: enter amount, proceed, then reveal the final rate and fee (a common competitor pattern).' },
              { label: 'Decision', text: 'Show the live rate, fee, and final receive-amount immediately after amount entry, before any further steps.' },
              { label: 'Why', text: 'The competitive teardown showed this "reveal moment" is exactly where users hesitate or abandon. Moving transparency earlier removes the point of doubt instead of trying to reassure users after it\'s already created.' }
            ]
          },
          {
            title: 'NGN-facing pricing, USD-based logic underneath',
            points: [
              { label: 'Decision', text: 'Admins manage rates in USD internally (matching how crypto markets actually price), but users only ever see NGN. This avoids exposing users to a conversion step they\'d have to trust blindly, while keeping the admin side aligned with real market pricing.' }
            ]
          },
          {
            title: 'Dispute path visible before it\'s needed',
            points: [
              { label: 'Decision', text: 'Every transaction screen shows a visible dispute and support option during the payment window, not buried in a menu.' },
              { label: 'Why', text: 'Informal P2P trading has no recourse if something goes wrong, which is its biggest weakness. Making dispute access visible before anything goes wrong was a deliberate trust signal, not just a support feature.' }
            ]
          }
        ]
      },
      {
        id: 'user-flow-intro',
        type: 'text',
        title: 'User Flow Overview',
        description: 'The platform was designed using progressive onboarding, collecting only essential information upfront and requesting additional details only when required.'
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
        caption: 'Signup was intentionally kept lightweight, requiring only email and password, to reduce friction and encourage first-time users to complete their first trade. Security configurations and password retrieval processes mirror this minimalist design language.'
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
      },
      {
        id: 'admin-crm',
        type: 'feature-list',
        title: 'The Admin CRM',
        subtitle: 'The less visible half of the work',
        description: 'A large share of the actual design effort went into the admin system, since transaction volume is bottlenecked by how fast admins can verify payments, not by the user-facing UI:',
        items: [
          { label: '', text: 'Real-time transaction queue with status and audit logging on every action' },
          { label: '', text: 'Dynamic coin and rate management (limits, fees, live preview before publishing a rate change)' },
          { label: '', text: 'Dispute resolution workflow' },
          { label: '', text: 'Role-based admin permissions and access control' }
        ],
        caption: 'Designing this taught me that in fintech products, the operator\'s interface is often the real performance bottleneck. A clean user-facing buy flow means nothing if the admin side can\'t process transactions fast enough to match it.'
      },
      {
        id: 'status-next',
        type: 'feature-list',
        title: 'Current Status & What\'s Next',
        subtitle: 'Pre-launch, with hypotheses to test',
        description: 'CryptoNow is in late-stage development, not yet launched. I don\'t have usage data yet, so rather than overstate impact, here\'s what I\'d want to validate once it ships:',
        items: [
          { label: '', text: 'Does the just-in-time onboarding actually reduce drop-off versus a control group, or does it just move friction later?' },
          { label: '', text: 'Does showing rate-before-commitment measurably reduce abandonment at that step, matching what the competitive teardown predicted?' },
          { label: '', text: 'Do dispute rates go down when the dispute path is visible upfront, or does visibility itself invite more disputes?' }
        ],
        caption: 'That\'s the real test of whether the trade-offs above were the right calls.'
      },
      {
        id: 'differently',
        type: 'text',
        title: 'What I\'d Do Differently',
        description: 'If I ran this again, I\'d push for even a handful of informal user conversations before finalizing the onboarding flow. Competitive analysis tells you what other products chose, not why users actually behave the way they do. That gap is the main thing I\'d close first on the next fintech project.'
      }
    ],
    behanceLink: 'https://behance.net',
  },
  {
    id: '7',
    slug: 'signal',
    title: 'Signal',
    client: 'concept design',
    year: '2026',
    category: 'Product Design',
    description: 'Signal is a concept for an AI-powered crypto market intelligence terminal designed to help traders move from raw market data to actionable insights, bringing market data, on-chain activity, trading signals and AI-generated analysis into a single focused workspace.',
    heroImage: '/images/signal/overview.png',
    coverImage: '/images/signal/overview.png',
    images: [],
    sections: [
      {
        id: 'details',
        type: 'details',
        items: [
          { label: 'Role', text: 'Product Designer' },
          { label: 'Type', text: 'web3 concept design' },
          { label: 'Focus', text: 'Information hierarchy, data-heavy UX, AI-assisted analysis' },
          { label: 'Tools', text: 'Figma' },
          { label: 'Status', text: 'Concept, not shipped' }
        ]
      },
      {
        id: 'overview',
        type: 'text',
        title: 'Project Overview',
        description: 'Signal is a concept for an AI-powered crypto market intelligence terminal designed to help traders move from raw market data to actionable insights.\n\nThe concept explores how market data, on-chain activity, trading signals and AI-generated analysis could be brought together in a single workspace without overwhelming the user.\n\nMy focus: information hierarchy, data-heavy UX, trading workflows, AI-assisted analysis and a reusable interface system.'
      },
      {
        id: 'problem',
        type: 'text',
        title: 'The Problem',
        description: 'Crypto traders often have to move between multiple tools to understand what is happening in the market — price charts, market data, on-chain metrics, trading signals and research.\n\nThe challenge isn\'t simply displaying more data. It\'s helping users understand which information matters, why it matters, and what supports the conclusion.\n\nI explored a product that could bring these layers together into one focused analytical workflow.'
      },
      {
        id: 'approach',
        type: 'text',
        title: 'The Approach',
        description: 'I structured the experience around a simple progression: Market → Asset → Signal → Evidence → AI Analysis → Decision.\n\nInstead of treating AI as a standalone chatbot, I positioned it as an interpretation layer on top of market data. This meant that an AI insight should be accompanied by the data and signals supporting it.'
      },
      {
        id: 'demo',
        type: 'gallery',
        title: 'Product Walkthrough',
        images: [
          { id: 'signal-demo', src: '/images/signal/signal AI terminal.mp4', alt: 'Signal AI terminal walkthrough demo', layout: 'full', type: 'video' }
        ],
        caption: 'A quick walkthrough of the terminal, moving from the market overview into an individual asset, its signals, and the AI analyst.'
      },
      {
        id: 'core-experience-intro',
        type: 'text',
        title: 'Core Experience',
        description: 'The workspace moves through four connected views, each building on the last: market overview, asset intelligence, signals, and the AI analyst.'
      },
      {
        id: 'market-overview',
        type: 'feature-list',
        title: '01 — Market Overview',
        subtitle: 'Fast scanning, not information overload',
        description: 'The overview gives traders a high-level picture of the market before they dive into individual assets. It surfaces:',
        items: [
          { label: '', text: 'Market performance' },
          { label: '', text: 'BTC/USDT price activity' },
          { label: '', text: 'Market breadth' },
          { label: '', text: 'Trading volume' },
          { label: '', text: 'Market signals' },
          { label: '', text: 'AI-generated market brief' }
        ],
        caption: 'The goal was fast scanning rather than information overload.'
      },
      {
        id: 'market-overview-gallery',
        type: 'gallery',
        images: [
          { id: 'signal-overview', src: '/images/signal/overview.png', alt: 'Signal market overview dashboard with price chart, market summary and AI market brief', layout: 'full' }
        ]
      },
      {
        id: 'asset-intelligence',
        type: 'feature-list',
        title: '02 — Asset Intelligence',
        subtitle: 'One place to answer "what\'s happening, and why"',
        description: 'Selecting an asset moves the user from the broader market into a deeper analytical view. For BTC/USDT, the interface combines:',
        items: [
          { label: '', text: 'Price and chart data' },
          { label: '', text: 'Market statistics' },
          { label: '', text: 'On-chain activity' },
          { label: '', text: 'Trading signals' },
          { label: '', text: 'AI analysis' },
          { label: '', text: 'Supporting data' },
          { label: '', text: 'Risk factors' }
        ],
        caption: 'This creates a single place to answer: "What\'s happening with this asset, and what evidence supports that interpretation?"'
      },
      {
        id: 'asset-intelligence-gallery',
        type: 'gallery',
        images: [
          { id: 'signal-asset', src: '/images/signal/market insight.png', alt: 'Signal BTC/USDT asset intelligence view with on-chain activity and AI analysis', layout: 'full' }
        ]
      },
      {
        id: 'signals',
        type: 'feature-list',
        title: '03 — Signals',
        subtitle: 'Evidence over blind trust',
        description: 'Signals provide a more structured way to discover potential market movements. Each signal communicates:',
        items: [
          { label: 'Asset', text: 'which market the signal applies to' },
          { label: 'Direction', text: 'bullish, bearish or neutral' },
          { label: 'Confidence', text: 'how strongly the data supports it' },
          { label: 'Trigger', text: 'the specific condition that fired' },
          { label: 'Time', text: 'when it was detected' },
          { label: 'Impact', text: 'the observed market effect' }
        ],
        caption: 'Selecting a signal exposes the underlying evidence and historical context, instead of asking the user to simply trust an AI-generated recommendation.'
      },
      {
        id: 'signals-gallery',
        type: 'gallery',
        images: [
          { id: 'signal-signals', src: '/images/signal/signal.png', alt: 'Signal market signals list with confidence, trigger and impact columns', layout: 'full' }
        ]
      },
      {
        id: 'ai-analyst',
        type: 'feature-list',
        title: '04 — AI Analyst',
        subtitle: 'AI should explain the data, not hide it',
        description: 'Rather than designing a generic ChatGPT-style interface, I treated the AI Analyst as part of the financial workflow. A question such as "Why is BTC up today?" returns a structured analysis containing:',
        items: [
          { label: '', text: 'Summary' },
          { label: '', text: 'Key drivers' },
          { label: '', text: 'Supporting evidence' },
          { label: '', text: 'Confidence' },
          { label: '', text: 'Follow-up questions' }
        ],
        caption: 'The principle was simple: AI should explain the data, not hide it.'
      },
      {
        id: 'ai-analyst-gallery',
        type: 'gallery',
        images: [
          { id: 'signal-ai-analyst', src: '/images/signal/AI analyst.png', alt: 'Signal AI Analyst structured response to "Why is BTC up today?"', layout: 'full' }
        ]
      },
      {
        id: 'supporting-workflows',
        type: 'gallery',
        title: 'Supporting Workflows',
        subtitle: 'Watchlist, alerts and analytics',
        description: 'Beyond the core progression, the workspace includes a watchlist for tracking a curated set of assets at a glance, a rules-based alert system tied to the same signal engine, and an analytics view for cross-asset correlation and signal accuracy over time.',
        images: [
          { id: 'signal-watchlist', src: '/images/signal/watchlist.png', alt: 'Signal watchlist with live signal and confidence per asset', layout: 'half' },
          { id: 'signal-alerts', src: '/images/signal/alerts.png', alt: 'Signal alerts list with triggered and armed conditions', layout: 'half' },
          { id: 'signal-analytics', src: '/images/signal/analytics.png', alt: 'Signal analytics view with correlation matrix and signal accuracy', layout: 'full' }
        ]
      },
      {
        id: 'design-direction',
        type: 'feature-list',
        title: 'Design Direction',
        subtitle: 'A financial terminal, not a crypto marketing product',
        description: 'Because Signal is intended for active traders and analysts, I deliberately avoided the visual language common in consumer crypto products. The interface uses:',
        items: [
          { label: '', text: 'Dark, low-distraction surfaces' },
          { label: '', text: 'Compact information hierarchy' },
          { label: '', text: 'IBM Plex Sans + IBM Plex Mono' },
          { label: '', text: 'Subtle borders instead of heavy cards' },
          { label: '', text: 'Restrained green/red market indicators' },
          { label: '', text: 'Dense but structured data tables' },
          { label: '', text: 'Minimal decoration' }
        ],
        caption: 'The goal was to make the interface feel closer to a professional financial terminal than a crypto marketing product. The exported design also includes a component inventory covering typography, buttons, inputs, metric cards, chart headers, signal badges, AI insight blocks, alerts, tables and navigation states.'
      },
      {
        id: 'design-system',
        type: 'decisions',
        title: 'Design System',
        subtitle: 'Reusable primitives, not one-off screens',
        description: 'I built the interface around a small set of reusable primitives rather than designing every screen independently. The system covers:',
        decisions: [
          {
            title: 'Foundations',
            points: [
              { label: '', text: 'Typography · surfaces · borders · market colors' }
            ]
          },
          {
            title: 'Components',
            points: [
              { label: '', text: 'Buttons · inputs · tabs · dropdowns · metric cards · tables · badges · alerts' }
            ]
          },
          {
            title: 'Data patterns',
            points: [
              { label: '', text: 'Charts · market states · confidence indicators · AI insight blocks' }
            ]
          }
        ]
      },
      {
        id: 'design-system-caption',
        type: 'text',
        description: 'This helped keep the interface consistent as the product moved between overview, analysis and operational views.'
      },
      {
        id: 'outcome',
        type: 'text',
        title: 'Outcome',
        description: 'Signal is a self-initiated product concept rather than a shipped product. The project allowed me to explore how a complex financial product could combine market data, on-chain intelligence, trading signals, AI analysis and dense information architecture into a single coherent experience.\n\nThe main takeaway was that good data-product design isn\'t about displaying everything. It\'s about creating a hierarchy that lets users move from information to understanding quickly.'
      }
    ],
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
        description: 'Waqtly started with a very clear intention from the client, Abdelmajeed, who is based in the Netherlands. He wasn\'t trying to build another Muslim app that people download, open a few times, and forget about. The goal was to create something Muslims would actually live with. Instead of competing for attention on a phone, the idea was a dedicated tablet, placed in constant view, that acts as a spiritual companion throughout the day. The thinking was simple but ambitious: if something is always visible, always relevant, and aware of context, people are more likely to engage with it consistently.'
      },
      {
        id: 'role-contribution',
        type: 'text',
        title: 'My Role & Contribution',
        description: 'I worked on Waqtly as a UI/UX Designer at Hexabug, alongside a multidisciplinary team that included Android and backend engineers, frontend developers, digital marketers, a 3D artist, graphic designers, and another product designer who acted as the design lead. While the design lead handled overall visual direction and refinement, I owned and shipped several core product experiences that moved directly into production, including the tablet onboarding flow, key Qur\'an reading experiences, Ramadan broadcast interfaces, the Tahajjud clock, and podcast screens.'
      },
      {
        id: 'problem',
        type: 'text',
        title: 'The Problem',
        description: 'Existing Muslim tablets on the market were either too feature-limited or visually flat. But copying standard Android tablet or mobile-app UI patterns would have been the wrong fix. It would make Waqtly feel like "just another app on a bigger screen," undermining the entire premise of a dedicated, always-present spiritual device.\n\nThe real design question: how do you design something that feels calm and purpose-built, not repurposed, without the usual mobile UI shortcuts to lean on?'
      },
      {
        id: 'research',
        type: 'feature-list',
        title: 'Research',
        subtitle: 'Practical comparison, not academic methods',
        description: 'Rather than academic UX methods, research was practical comparison across two groups:',
        items: [
          { label: 'Indirect competitors:', text: 'Android/Samsung tablets, studied for navigation, spacing, and interaction pacing.' },
          { label: 'Direct competitors:', text: 'existing Muslim tablets, most either too basic or too rigid in use case.' }
        ],
        caption: 'Key insight: unlike fridge-mounted competitors, Waqtly could be wall-mounted, desk-placed, or set on a TV stand, flexibility that directly shaped layout, viewing-distance, and information-density decisions. Anything that didn\'t clearly support "spiritual companion" over "feature checklist" was deprioritized.'
      },
      {
        id: 'decisions',
        type: 'decisions',
        title: 'Key Design Decisions',
        subtitle: 'Choices that shaped the product\'s tone',
        decisions: [
          {
            title: 'Onboarding designed to welcome, not instruct',
            points: [
              { label: 'Why', text: 'Rather than front-loading setup steps, onboarding introduces why Waqtly exists before what it can do, matching the calm, non-instructional tone the whole product needed.' }
            ]
          },
          {
            title: 'Qur\'an reading as a core experience, not a secondary feature',
            points: [
              { label: 'Why', text: 'Designed a clear Surah/Ayah structure, a focused playback mode, and a distraction-free single-Ayah view, built to support both reading and listening without visual clutter.' }
            ]
          },
          {
            title: 'Deliberately slower interaction pacing over gesture-heavy mobile patterns',
            points: [
              { label: 'Why', text: 'Reduced reliance on swipe/gesture navigation and emphasized clear visual hierarchy, so the device reads as a dedicated tool rather than a stretched-out phone app.' }
            ]
          }
        ]
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
      },
      {
        id: 'testing-iteration',
        type: 'text',
        title: 'Testing & Iteration: What Actually Changed',
        description: 'User testing surfaced friction in flows the team initially assumed were intuitive. I pushed back on those internal assumptions using real user behavior, moving the team toward user-led iteration over feature accumulation.\n\nThe clearest example: the companion mobile app (used to remote-control the tablet) initially only allowed one phone to pair per tablet via QR/PIN. User feedback showed households wanted to log out and connect multiple phones, revealing that Waqtly was being used communally, not individually, which changed how the pairing system was designed and continues to shape ongoing decisions.'
      },
      {
        id: 'outcome',
        type: 'feature-list',
        title: 'Outcome',
        subtitle: 'Shipped, in market, still learning',
        items: [
          { label: '', text: 'Waqtly has entered mass production and is actively sold and used.' },
          { label: '', text: 'Early feedback has been positive, particularly around usefulness and feature depth.' },
          { label: '', text: 'The multi-user pairing insight from testing is directly informing the current roadmap.' }
        ]
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
    title: 'eCitiBiz',
    client: 'AnchorData × Ministry of Interior Affairs (Nigeria)',
    year: '2023',
    category: 'UI/UX Design, UX Copy',
    description: 'A redesign of a mission-critical government platform used by Nigerian citizens, businesses, and organizations to register for citizenship, marriage, and expatriate services. The work focused on reducing cognitive overload and rewriting government-heavy language into plain, understandable copy, without disrupting the existing system architecture.',
    heroImage: ecitibiz,
    coverImage: ecitibiz,
    images: [],
    sections: [
      {
        id: 'details',
        type: 'details',
        items: [
          { label: 'Role', text: 'UI/UX Designer, UX Copywriter' },
          { label: 'Agency', text: 'Hexabug (for AnchorData)' },
          { label: 'Sector', text: 'Government / Civic tech' },
          { label: 'Scope', text: 'Public pages, user dashboard, registration flow, UX copy' },
          { label: 'Duration', text: '~4 months + 1 month refinements' }
        ]
      },
      {
        id: 'background',
        type: 'text',
        title: 'Background',
        description: 'eCitiBiz was a redesign project handled at Hexabug, commissioned by AnchorData, a software development agency working with Nigeria\'s Ministry of Interior Affairs, specifically the Citizenship, Business, and Marriage divisions.\n\nThis platform isn\'t used by just one type of user. It serves Nigerian citizens, businesses employing foreign nationals, individuals registering marriages, and organizations applying for marriage licenses and expatriate permits. So this wasn\'t a "nice-to-have" product or a marketing site. It is a mission-critical government platform where any confusion, delay, or misunderstanding directly affects real-world processes: documentation, approvals, and legal compliance.\n\nThe existing platform had a few clear issues: poor user experience, very technical government-heavy language, an outdated interface, and complicated user flows. The brief from the client sounded simple but came with pressure: "Give the platform a new feel, without breaking what already works."'
      },
      {
        id: 'problem',
        type: 'text',
        title: 'The Real Problem',
        description: 'The biggest issue wasn\'t just how old the interface looked. It was cognitive overload.\n\nUsers struggled to understand government terminology, to know what action to take at each step, to navigate between different services, and to complete account registration successfully. The registration flow was the biggest pain point. Users regularly got stuck, unsure of what to click, what information was required, or what step came next. And unlike optional apps, users had no alternative. They had to use the platform.\n\nIn short: the system was powerful, but unforgiving.'
      },
      {
        id: 'old-state',
        type: 'gallery',
        title: 'Where We Started',
        subtitle: 'The existing registration experience',
        images: [
          { id: 'ec-old-1', src: '/images/ecitibiz/old-reg-screens.png', alt: 'Original eCitiBiz registration screens before redesign', layout: 'full' }
        ],
        caption: 'The original registration flow demanded high effort from first-time users: dense forms, unclear labels, and no visible sense of progress or context.'
      },
      {
        id: 'constraints',
        type: 'feature-list',
        title: 'Constraints That Shaped the Redesign',
        subtitle: 'Non-negotiables from the client and the codebase',
        items: [
          { label: 'Existing architecture had to stay intact.', text: 'The platform was already deeply integrated. Making drastic UX changes to core flows would increase development risk and complexity.' },
          { label: 'Admin panel was out of scope.', text: 'The admin dashboard was restricted to government personnel and could be handled through internal training. Our focus stayed on public-facing pages and the user\'s dashboard.' },
          { label: 'Incremental change over disruption.', text: 'The goal wasn\'t to reinvent the system, but to improve clarity, usability, and confidence without alienating developers or destabilizing the product.' }
        ],
        caption: 'Because of these constraints, the redesign focused heavily on interface clarity, UX copy, navigation, and information hierarchy, rather than large-scale structural changes.'
      },
      {
        id: 'role-collaboration',
        type: 'text',
        title: 'My Role & Collaboration',
        description: 'I worked on eCitiBiz as a UI/UX Designer at Hexabug, collaborating with other designers, developers, and the AnchorData team. While the work was collaborative, my main contributions were UX copywriting (translating complex government language into plain, understandable English), the user dashboard redesign, redesigning key user-facing screens, and improving form structure and clarity, especially in the registration flow.\n\nGiven the size of the platform, designers worked across different sections. This page-by-page approach helped us maintain consistency while gradually improving the overall experience.'
      },
      {
        id: 'research',
        type: 'text',
        title: 'Research: What We Paid Attention To',
        description: 'This wasn\'t a research-heavy project with long reports. Insights mainly came from watching where users consistently got stuck, identifying unclear or ambiguous copy, and spotting places where users had to guess their next step.\n\nOne pattern kept showing up: users weren\'t failing because the system was broken. They were failing because the terms used were hard to comprehend. That realization shifted a lot of focus toward UX writing, clearer CTAs, and better guidance throughout the experience.'
      },
      {
        id: 'ux-improvements',
        type: 'feature-list',
        title: 'Key UX Improvements',
        subtitle: 'Four fronts of clarity',
        items: [
          { label: 'Simplifying the registration flow.', text: 'Clearer button labels, better grouping of related form fields, improved step-by-step progression, and tooltips added where explanations were necessary. The goal: help users understand what\'s required, why it\'s required, and what to do next.' },
          { label: 'UX copy overhaul.', text: 'Government terminology was simplified without losing meaning or compliance. The focus was on clarity over formality, guidance over instruction, and reducing intimidation for first-time users. This alone removed a lot of friction.' },
          { label: 'Major user dashboard redesign.', text: 'Sidebar redesign and navigation improvement, reduced cognitive load while registering for services, quicker orientation for users (where am I, what\'s left to do?), and better visual representation of data.' },
          { label: 'Navigation & information hierarchy.', text: 'Public-facing pages were reorganized to surface important actions earlier, reduce visual clutter, and help users quickly identify the service they need. The platform began to feel less overwhelming and more approachable.' }
        ]
      },
      {
        id: 'homepage',
        type: 'gallery',
        title: 'Public-Facing Homepage',
        subtitle: 'A calmer entry point',
        images: [
          { id: 'ec-home-1', src: '/images/ecitibiz/ecitibiz - Home.png', alt: 'Redesigned eCitiBiz homepage with clear service categories', layout: 'full' }
        ],
        caption: 'The homepage was restructured to surface the platform\'s core services (citizenship, business, marriage) upfront, using plainer language and a cleaner visual hierarchy.'
      },
      {
        id: 'registration-redesign',
        type: 'gallery',
        title: 'Registration Flow Redesign',
        subtitle: 'From dead-end forms to guided steps',
        images: [
          { id: 'ec-reg-1', src: '/images/ecitibiz/registration-select type.png', alt: 'Step 1: redesigned service type selection screen', layout: 'full' },
          { id: 'ec-reg-2', src: '/images/ecitibiz/first-reg-screens-new.webp', alt: 'Step 2: first stage of the redesigned registration form', layout: 'full' },
          { id: 'ec-reg-3', src: '/images/ecitibiz/second-reg-screens-new.webp', alt: 'Step 3: second stage of the redesigned registration form', layout: 'full' },
          { id: 'ec-reg-4', src: '/images/ecitibiz/final-reg-screens-new.webp', alt: 'Step 4: final stage of the redesigned registration form with confirmation', layout: 'full' }
        ],
        caption: 'Registration now opens with a clear service-selection screen so users understand what they\'re signing up for before filling anything in. Downstream steps were regrouped, relabeled, and paired with contextual tooltips, so users can see where they are in the flow and what\'s left before they finish.'
      },
      {
        id: 'dashboards',
        type: 'gallery',
        title: 'User Dashboards',
        subtitle: 'Orient, act, track',
        images: [
          { id: 'ec-dash-1', src: '/images/ecitibiz/Citizenship -  Dashboard.png', alt: 'Citizenship service dashboard for individual users', layout: 'half' },
          { id: 'ec-dash-2', src: '/images/ecitibiz/Dashboard - Business expatriate.png', alt: 'Business expatriate dashboard overview', layout: 'half' },
          { id: 'ec-dash-3', src: '/images/ecitibiz/Dashboard - apply for expatriate.png', alt: 'Dashboard: apply for expatriate quota entry point', layout: 'half' },
          { id: 'ec-dash-4', src: '/images/ecitibiz/Returns - Business expatriate.png', alt: 'Business expatriate returns and reporting view', layout: 'half' }
        ],
        caption: 'Dashboards for the different user types (citizens, businesses, organizations) share a common navigation pattern so learning one carries over to the others. Each surface answers the same three questions at a glance: where am I, what can I do, and what\'s pending.'
      },
      {
        id: 'forms',
        type: 'gallery',
        title: 'Applications & Company Details',
        subtitle: 'Long forms, made scannable',
        images: [
          { id: 'ec-form-1', src: '/images/ecitibiz/Application - Business expatriate.png', alt: 'Business expatriate application form redesign', layout: 'half' },
          { id: 'ec-form-2', src: '/images/ecitibiz/Company Details - Business expatriate.png', alt: 'Company details section of the business expatriate application', layout: 'half' }
        ],
        caption: 'The longest forms on the platform (expatriate applications, company details) were broken into logical sections with clearer field labels and rewritten help text, so users could progress with less back-and-forth to a support channel.'
      },
      {
        id: 'handoff',
        type: 'text',
        title: 'Design to Development Handoff',
        description: 'Since preserving the system architecture was critical, designs were structured to minimize functional changes, reduce backend refactoring, and let developers focus mainly on UI updates. This helped speed up implementation while still delivering noticeable UX improvements.'
      },
      {
        id: 'outcome',
        type: 'feature-list',
        title: 'Outcome & Impact',
        subtitle: 'Modernized, without destabilizing',
        items: [
          { label: '', text: 'Introduced a more modern look and feel across public and authenticated surfaces.' },
          { label: '', text: 'Reduced confusion in critical flows like registration, largely through copy and grouping changes rather than structural rewrites.' },
          { label: '', text: 'Improved readability and comprehension through the UX copy overhaul.' },
          { label: '', text: 'Maintained system stability while improving usability, respecting the "don\'t break what works" brief.' }
        ],
        caption: 'The core redesign lasted about 3 to 4 months, with an additional month of refinements based on feedback.'
      }
    ],
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
