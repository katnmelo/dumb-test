'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/lowbrow-logo-horizontal.svg"
              alt="LOWBROW"
              width={90}
              height={30}
              className="h-6 w-auto drop-shadow-lg"
            />
          </Link>
          

          {/* Menu button - always visible */}
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="h-8 w-8 grid place-items-center text-white hover:text-white/80 transition-colors flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Navigation menu - always visible when open */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-white/30 pt-4 bg-black/20 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/contact" 
                className="text-sm text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/jobs" 
                className="text-sm text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}