'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';

const navLinks = [
  { href: '/', label: 'Whitepaper' },
  { href: '/pitch', label: 'Pitch' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 bg-surface-card/95 backdrop-blur-sm border-b border-border-default">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <svg 
                viewBox="0 0 32 32" 
                className="w-6 h-6 text-gold-main"
                fill="currentColor"
              >
                <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5l9.5 4.75v12.5L16 26.5l-9.5-4.75V9.25L16 4.5z"/>
                <path d="M16 10l-6 3v6l6 3 6-3v-6l-6-3zm0 2l4 2v4l-4 2-4-2v-4l4-2z" opacity="0.6"/>
              </svg>
            </div>
            <span className="display-serif text-lg text-ink-primary group-hover:text-gold-main transition-colors duration-150">
              Golden Gate
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      px-4 py-2 text-sm font-medium transition-colors duration-150
                      ${isActive 
                        ? 'text-gold-main' 
                        : 'text-ink-secondary hover:text-ink-primary'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-secondary hover:text-ink-primary transition-colors"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && mobileMenuOpen && (
          <div className="py-4 border-t border-border-default">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      px-4 py-3 text-sm font-medium transition-colors duration-150
                      ${isActive 
                        ? 'text-gold-main bg-gold-pale/50' 
                        : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-inset'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
