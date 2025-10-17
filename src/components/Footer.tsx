'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Floating 3D GIF - positioned between content and footer */}
      <div className="flex justify-center -mt-12 relative z-10">
        <Image
          src="/3d/placeholder-3d.gif"
          alt="3D Animation"
          width={240}
          height={240}
          className="h-60 w-60 rounded-lg"
          unoptimized
        />
      </div>
      
      <footer className="bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <Image
                src="/logos/lowbrow-logo-horizontal.svg"
                alt="LOWBROW Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting exceptional dining experiences with a modern twist. 
              Where culinary artistry meets contemporary culture.
            </p>
          </div>

          {/* Quick links section */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link 
                href="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link 
                href="/jobs" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social media section */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/lowbrow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@lowbrow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200"
                aria-label="Follow us on TikTok"
              >
                <Music className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-muted-foreground">
              © 2025 LOWBROW. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
