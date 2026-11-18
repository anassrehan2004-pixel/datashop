import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { VERIFIED_DOORS_OPENED, ServiceInterest } from '../data/homepageData';
import { ResilientImage } from './ResilientImage';
import { EASE_OUT_EXPO } from './MotionPrimitives';

interface HeroSectionProps {
  onQuickEnquiry: (email: string) => void;
  onSelectService: (service: ServiceInterest, scrollTargetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onQuickEnquiry,
  onSelectService,
}) => {
  const [quickEmail, setQuickEmail] = useState('');

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(35);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 24 });
  const spotlightBg = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(640px circle at ${x}% ${y}%, rgba(131, 56, 236, 0.14), rgba(251, 86, 7, 0.08) 40%, transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleQuickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onQuickEnquiry(quickEmail.trim());
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative -mt-[70px] overflow-hidden bg-[#121417] text-[#E9ECEF] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-24 pb-6 lg:pb-8 border-b border-white/10"
      aria-labelledby="hero-heading"
    >
      {/* Interactive Cursor Spotlight */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Luminous Horizon Arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[1250px] h-[640px] rounded-[100%] opacity-85"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(251, 86, 7, 0.22) 0%, rgba(131, 56, 236, 0.16) 44%, rgba(18, 20, 23, 0) 74%)',
        }}
      />

      {/* Curved Horizon Rim */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        fill="none"
        className="pointer-events-none absolute inset-x-0 top-[22%] w-full h-auto opacity-40"
      >
        <defs>
          <linearGradient id="horizonRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8338EC" stopOpacity="0" />
            <stop offset="30%" stopColor="#8338EC" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#FB5607" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FB5607" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-80 260 Q 720 10 1520 260"
          stroke="url(#horizonRim)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
        {/* Balanced 2-Column Split: Text Left, 3-Card Bento Grid Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text Content & Quick Consultation */}
          <div className="lg:col-span-6 flex flex-col justify-center">


            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="font-display font-bold tracking-[-0.03em] text-white leading-[1.06] max-w-xl"
              style={{
                fontSize: 'clamp(2.15rem, 3.7vw, 3.45rem)',
                textWrap: 'balance',
              }}
            >
              Find the right opportunities.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB5607] via-[#FF7B3B] to-[#8338EC]">
                Connect with the right decision-makers.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="mt-4 text-sm sm:text-base text-[#E9ECEF]/80 leading-relaxed max-w-lg"
            >
              Business intelligence, verified B2B data and qualified appointment setting that remove
              the 80% pre-sales burden—so your sales team steps straight into conversations with
              organisations ready to engage.
            </motion.p>

            {/* Quick Email Capture + Explore CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-6 flex flex-col gap-3 max-w-lg"
            >
              <form
                onSubmit={handleQuickSubmit}
                className="w-full flex items-center rounded-xl border border-white/15 bg-white/[0.05] backdrop-blur-md p-1.5 transition-colors focus-within:border-[#FB5607]"
              >
                <label htmlFor="hero-quick-email" className="sr-only">
                  Work email address
                </label>
                <input
                  id="hero-quick-email"
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="w-full min-w-0 bg-transparent px-3.5 py-2 text-sm text-white placeholder:text-[#E9ECEF]/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-[#FB5607] px-4 sm:px-5 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#E04B05] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
                >
                  Talk to Our Team
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </form>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md px-5 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-white/10 hover:border-[#8338EC]/70 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8338EC]"
                >
                  Explore Our Services
                </a>

                <span className="text-xs text-[#E9ECEF]/65 tabular-nums">
                  80+ Years Experience
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 01 Full-Width Top Card + 02 & 03 Side-by-Side Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE_OUT_EXPO }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
          >
            {/* Card 01: Full Row */}
            <button
              type="button"
              onClick={() =>
                onSelectService('Business Intelligence for Sales', 'services-intelligence')
              }
              className="group relative sm:col-span-2 overflow-hidden rounded-2xl border border-white/15 bg-[#1B1F24] text-left transition-all duration-300 hover:border-[#FB5607]/70 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
            >
              <div className="relative h-48 sm:h-52 lg:h-[225px] w-full overflow-hidden">
                <ResilientImage
                  src="/src/assets/images/hero_uk_sales_strategy_1795035401975.jpg"
                  alt="UK commercial directors reviewing business intelligence research"
                  loading="eager"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  fallbackTitle="01. Business Intelligence for Sales"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#121417] via-[#121417]/65 to-[#121417]/20"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs font-semibold text-[#FB5607] tabular-nums">
                      01 · Core Service
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-white/75 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FB5607]"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="mt-1.5 font-display text-lg sm:text-xl font-bold text-white">
                    Business Intelligence for Sales
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-[#E9ECEF]/80 leading-relaxed max-w-lg">
                    Pinpoint target companies, verified decision-makers, and contract renewal
                    windows before outreach begins.
                  </p>
                </div>
              </div>
            </button>

            {/* Card 02: Left Half Bottom Row */}
            <button
              type="button"
              onClick={() => onSelectService('B2B Data Services', 'services-data')}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#212529] via-[#1C1F26] to-[#8338EC]/25 p-5 text-left transition-all duration-300 hover:border-[#8338EC] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8338EC]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-xs font-semibold text-[#8338EC] tabular-nums">
                    02 · Core Service
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#8338EC]"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mt-2.5 font-display text-base sm:text-lg font-bold text-white">
                  B2B Data Services
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#E9ECEF]/75 leading-relaxed">
                  Data on Demand, CRM management &amp; GDPR/PECR compliance.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10">
                <p className="font-display text-2xl font-bold text-white tabular-nums">1.7M+</p>
                <p className="mt-0.5 text-xs text-[#E9ECEF]/65">
                  Verified UK business records
                </p>
              </div>
            </button>

            {/* Card 03: Right Half Bottom Row */}
            <button
              type="button"
              onClick={() => onSelectService('Appointment Setting', 'services-appointments')}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#212529] via-[#251E1B] to-[#FB5607]/25 p-5 text-left transition-all duration-300 hover:border-[#FB5607] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-xs font-semibold text-[#FB5607] tabular-nums">
                    03 · Core Service
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FB5607]"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mt-2.5 font-display text-base sm:text-lg font-bold text-white">
                  Appointment Setting
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#E9ECEF]/75 leading-relaxed">
                  Quality-reviewed meetings booked with decision-makers.
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10">
                <p className="font-display text-2xl font-bold text-[#FB5607] tabular-nums">
                  22,531+
                </p>
                <p className="mt-0.5 text-xs text-[#E9ECEF]/65">
                  Appointments generated to date
                </p>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Bottom Enterprise Reach Strip */}
       
      </div>
    </section>
  );
};
