import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ResilientImage } from './ResilientImage';
import { AnimatedNumber, Reveal, EASE_OUT_EXPO } from './MotionPrimitives';

type ComparisonTab = 'approach' | 'problem';

const VERIFIED_STATS = [
  { target: 22531, suffix: '+', decimals: 0, label: 'Appointments Generated' },
  { target: 1.7, suffix: 'M+', decimals: 1, label: 'UK Business Records' },
  { target: 80, suffix: '+ Years', decimals: 0, label: 'Combined Experience' },
  { target: 9.4, suffix: ' NPS', decimals: 1, label: 'Client Satisfaction Score' },
];

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ComparisonTab>('approach');

  return (
    <section
      id="about"
      className="bg-[#E9ECEF] text-[#212529] border-b border-[#212529]/10 py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Verified Metrics Ledger */}
        <Reveal className="pb-12 mb-12 border-b border-[#212529]/15">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {VERIFIED_STATS.map((stat, idx) => (
              <div key={stat.label} className="flex flex-col items-center">
                <dd
                  className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
                    idx === 0
                      ? 'text-[#FB5607]'
                      : idx === 1
                        ? 'text-[#8338EC]'
                        : 'text-[#212529]'
                  }`}
                >
                  <AnimatedNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </dd>
                <dt className="mt-1.5 text-sm font-medium text-[#212529]/75">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Authentic Team Photography with Subtle Hover Scale */}
          <Reveal className="lg:col-span-5 flex" delay={0.05}>
            <div className="group w-full overflow-hidden rounded-2xl border border-[#212529]/15 bg-white">
              <ResilientImage
                src="/src/assets/images/about_research_team_1795035403051.jpg"
                alt="The DataShop B2B research specialists collaborating on UK business intelligence and account mapping"
                className="h-72 sm:h-96 lg:h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                fallbackTitle="The DataShop Research & Verification Team"
              />
            </div>
          </Reveal>

          {/* Right Column: Clear Editorial Narrative + Interactive Comparison */}
          <Reveal className="lg:col-span-7 flex flex-col justify-center" delay={0.12}>
            <p className="text-sm font-semibold text-[#8338EC] mb-3">
              About The DataShop
            </p>

            <h2
              id="about-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#212529] leading-tight max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              More than contact lists—human-verified intelligence built around real sales timing.
            </h2>

            <p className="mt-5 text-base text-[#212529]/80 leading-relaxed max-w-2xl">
              Based in Birmingham, The DataShop CRM Ltd helps UK businesses build stronger sales
              pipelines. Rather than handing your team raw spreadsheets, we combine commercial
              research, data cleansing, human verification, and structured relationship building to
              pinpoint organisations with an active need for what you offer.
            </p>

            {/* Interactive Comparison Switcher */}
            <div className="mt-8 pt-8 border-t border-[#212529]/15">
              <div
                role="tablist"
                aria-label="Compare traditional lists with The DataShop approach"
                className="inline-flex rounded-xl bg-white p-1 border border-[#212529]/10"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'approach'}
                  onClick={() => setActiveTab('approach')}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#8338EC] ${
                    activeTab === 'approach'
                      ? 'text-white'
                      : 'text-[#212529]/75 hover:text-[#212529]'
                  }`}
                >
                  {activeTab === 'approach' && (
                    <motion.span
                      layoutId="about-tab-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-[#8338EC]"
                    />
                  )}
                  <span className="relative z-10">The DataShop Approach</span>
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'problem'}
                  onClick={() => setActiveTab('problem')}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#FB5607] ${
                    activeTab === 'problem'
                      ? 'text-white'
                      : 'text-[#212529]/75 hover:text-[#212529]'
                  }`}
                >
                  {activeTab === 'problem' && (
                    <motion.span
                      layoutId="about-tab-bg"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-[#FB5607]"
                    />
                  )}
                  <span className="relative z-10">Why Bulk Lists Fail</span>
                </button>
              </div>

              <div className="mt-5 min-h-[120px] rounded-2xl border border-[#212529]/10 bg-white p-5 sm:p-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'approach' ? (
                    <motion.div
                      key="approach"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                    >
                      <h3 className="font-display text-base font-bold text-[#8338EC]">
                        Verified decision-makers &amp; renewal timing
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#212529]/80 leading-relaxed">
                        We map named decision-makers, record contract renewal dates, and hold
                        consultative qualification calls—so prospects reach your sales calendar when
                        they are genuinely ready to engage with a supplier.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="problem"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                    >
                      <h3 className="font-display text-base font-bold text-[#FB5607]">
                        Over 60% missing or outdated data
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#212529]/80 leading-relaxed">
                        On average, more than 60% of traditionally purchased business lists contain
                        missing details or outdated contacts—leaving internal sales teams spending
                        80% of their week researching and chasing dead ends.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
