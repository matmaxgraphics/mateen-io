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
                <li><Link href="#works" className="hover:text-foreground transition">Works</Link></li>
                <li><Link href="#about" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="#blog" className="hover:text-foreground transition">Blog</Link></li>
                <li><Link href="#contact" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="https://x.com/mateen_ui" target="_blank" className="hover:text-foreground transition">X/Twitter</a></li>
                <li><a href="https://medium.com/@gbadamosimateen" target="_blank" className="hover:text-foreground transition">Medium</a></li>
                <li><a href="https://instagram.com/mateen.ui" target="_blank" className="hover:text-foreground transition">Instagram</a></li>
                <li><a href="https://linkedin.com/in/mateen-gbadamosi-78327b1b3" target="_blank" className="hover:text-foreground transition">LinkedIn</a></li>
                <li><a href="https://t.me/mateenUI" target="_blank" className="hover:text-foreground transition">Telegram</a></li>
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
