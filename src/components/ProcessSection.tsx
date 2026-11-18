import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../data/homepageData';
import { Reveal, EASE_OUT_EXPO } from './MotionPrimitives';

export const ProcessSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPausedByHover, setIsPausedByHover] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !isAutoPlaying || isPausedByHover) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying, isPausedByHover]);

  const activeStep = PROCESS_STEPS[activeIndex];
  const progressFraction = (activeIndex + 1) / PROCESS_STEPS.length;

  const handleSelectStep = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white text-[#212529] border-b border-[#212529]/10 py-16 lg:py-24"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 data-grid-backdrop"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-[#212529]/10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#8338EC] mb-3">
              How We Work
            </p>
            <h2
              id="process-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#212529] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              From raw business data to a qualified sales appointment.
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <p className="text-sm sm:text-base text-[#212529]/75 max-w-md leading-relaxed lg:text-right">
              Our six-stage funnel shortcuts the pre-sales journey—moving verified records through
              research, qualification, and quality review.
            </p>

          </div>
        </Reveal>

        {/* Interactive Stage Selector Bar with Live Animated Progress Connector */}
        <div
          onMouseEnter={() => setIsPausedByHover(true)}
          onMouseLeave={() => setIsPausedByHover(false)}
          className="mt-10"
        >
          {/* Progress Rail */}
          <div
            aria-hidden="true"
            className="hidden lg:block h-1.5 w-full rounded-full bg-[#E9ECEF] overflow-hidden mb-5"
          >
            <motion.div
              animate={{ scaleX: progressFraction }}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#FB5607] to-[#8338EC]"
            />
          </div>

          <div
            role="tablist"
            aria-label="Six stages of The DataShop sales funnel"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5"
          >
            {PROCESS_STEPS.map((stage, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={stage.step}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`process-panel-${stage.step}`}
                  id={`process-tab-${stage.step}`}
                  onClick={() => handleSelectStep(index)}
                  className={`relative flex flex-col items-start text-left rounded-xl border p-4 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607] ${
                    isSelected
                      ? 'bg-[#121417] border-[#121417] text-white shadow-lg shadow-black/10'
                      : 'bg-[#E9ECEF]/60 border-[#212529]/10 text-[#212529] hover:border-[#8338EC]/60 hover:bg-[#E9ECEF]'
                  }`}
                >
                  <span
                    className={`font-display text-xs font-semibold tabular-nums ${
                      isSelected ? 'text-[#FB5607]' : 'text-[#8338EC]'
                    }`}
                  >
                    Stage {stage.step}
                  </span>
                  <span className="mt-1 font-display text-sm sm:text-base font-bold leading-snug">
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Focused Animated Stage Detail Panel */}
          <div
            role="tabpanel"
            id={`process-panel-${activeStep.step}`}
            aria-labelledby={`process-tab-${activeStep.step}`}
            className="relative mt-6 rounded-2xl border border-[#212529]/15 bg-[#121417] text-[#E9ECEF] p-6 sm:p-8 lg:p-10 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-35"
              style={{
                background:
                  'radial-gradient(circle, rgba(131, 56, 236, 0.45) 0%, transparent 70%)',
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 text-xs font-semibold text-[#FB5607] tabular-nums">
                    <span>Stage {activeStep.step} of 06</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#E9ECEF]">{activeStep.title}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                    {activeStep.summary}
                  </h3>
                  <p className="mt-3 text-base text-[#E9ECEF]/80 leading-relaxed max-w-2xl">
                    {activeStep.detail}
                  </p>
                </div>

                <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8">
                  <p className="text-xs font-semibold text-[#8338EC]">
                    Stage Outcome
                  </p>
                  <p className="mt-1.5 font-display text-base font-semibold text-white">
                    {activeStep.output}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Full 6-Stage Summary Ledger */}
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pt-10 border-t border-[#212529]/10">
          {PROCESS_STEPS.map((stage, index) => {
            const isCurrent = index === activeIndex;
            return (
              <li
                key={stage.step}
                className="flex flex-col justify-between pb-6 border-b border-[#212529]/10 md:border-b-0 md:pb-0"
              >
                <div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-display text-sm font-bold tabular-nums ${
                        isCurrent ? 'text-[#FB5607]' : 'text-[#8338EC]'
                      }`}
                    >
                      {stage.step}.
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSelectStep(index)}
                      className="font-display text-lg font-bold text-[#212529] hover:text-[#FB5607] transition-colors text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
                    >
                      {stage.title}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-[#212529]/75 leading-relaxed">
                    {stage.summary}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
