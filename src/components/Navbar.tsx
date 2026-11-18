import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { EASE_OUT_EXPO } from './MotionPrimitives';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Business Intelligence', href: '#services-intelligence' },
  { label: 'Data Services', href: '#services-data' },
  { label: 'Appointment Setting', href: '#services-appointments' },
  { label: 'About', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-6 pt-3 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-7xl rounded-xl border backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121417]/80 border-white/15 shadow-xl shadow-black/30'
            : 'bg-white/[0.04] border-white/15'
        }`}
      >
        <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          {/* Zone 1: Brand Lockup */}
          <a
            href="#top"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB5607] rounded-sm shrink-0"
            aria-label="The DataShop Home"
          >
            <BrandLogo variant="light" />
          </a>

          {/* Zone 2: Concise Single-Line Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#E9ECEF]"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative whitespace-nowrap shrink-0 py-1.5 text-[#E9ECEF]/80 hover:text-white transition-colors duration-150 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FB5607]"
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#FB5607] to-[#8338EC] transition-transform duration-200 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#FB5607] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#E04B05] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
            >
              Talk to Our Team
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex lg:hidden items-center justify-center min-h-[44px] min-w-[44px] rounded-lg text-[#E9ECEF] hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#16191D] rounded-b-xl px-4 py-4 sm:px-6"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#E9ECEF] hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 mt-2 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#FB5607] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#E04B05] transition-colors"
                  >
                    Talk to Our Team
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
