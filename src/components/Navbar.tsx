'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-800 border-b border-stone-700">
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide text-lg text-stone-50">
            LOWBROW
          </Link>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/stores" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">
              Stores
            </Link>
            <Link href="/reserve" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">
              Reserve
            </Link>
            <Link href="/contact" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">
              Contact
            </Link>
            <Link href="/jobs" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">
              Jobs
            </Link>
            <Link href="/about" className="text-sm text-stone-300 hover:text-stone-50 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="md:hidden h-8 w-8 grid place-items-center rounded-md border border-stone-600 text-stone-300 hover:bg-stone-700 hover:text-stone-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-stone-700 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/stores" 
                className="text-sm text-stone-300 hover:text-stone-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stores
              </Link>
              <Link 
                href="/reserve" 
                className="text-sm text-stone-300 hover:text-stone-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-stone-300 hover:text-stone-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/jobs" 
                className="text-sm text-stone-300 hover:text-stone-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-stone-300 hover:text-stone-50 transition-colors"
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