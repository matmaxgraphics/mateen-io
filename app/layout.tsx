import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mateen Gbadamosi - UI/UX Designer",
  description:
    "UI/UX Designer specializing in visual design, branding, and digital storytelling",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ScrollProgressBar />
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
