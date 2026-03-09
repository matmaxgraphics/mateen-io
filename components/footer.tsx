'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Mateen Gbadamosi</h3>
            <p className="text-lg font-light text-foreground/70 mb-2">UI/UX Designer</p>
            <div className="space-y-2 text-foreground/60">
              <p><a href="mailto:mateendeveloper@gmail.com">mateendeveloper@gmail.com</a></p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Services</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Work</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><Link href="#" className="hover:text-foreground transition">Instagram</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Medium</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Twitter</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
