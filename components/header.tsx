'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="max-w-360 mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            NOLAN
          </Link>
          
          <nav className="hidden md:flex gap-8">
            <Link href="#works" className="text-sm hover:text-foreground/70 transition">
              Works
            </Link>
            <Link href="#about" className="text-sm hover:text-foreground/70 transition">
              About
            </Link>
            <Link href="#blog" className="text-sm hover:text-foreground/70 transition">
              Blog
            </Link>
            <Link href="#contact" className="text-sm hover:text-foreground/70 transition">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#works" className="text-sm hover:text-foreground/70">
              Works
            </Link>
            <Link href="#about" className="text-sm hover:text-foreground/70">
              About
            </Link>
            <Link href="#blog" className="text-sm hover:text-foreground/70">
              Blog
            </Link>
            <Link href="#contact" className="text-sm hover:text-foreground/70">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
