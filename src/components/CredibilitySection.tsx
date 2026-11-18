import React from 'react';
import { motion } from 'motion/react';
import { VERIFIED_DOORS_OPENED } from '../data/homepageData';
import { AnimatedNumber, Reveal, EASE_OUT_EXPO } from './MotionPrimitives';

const ANIMATED_CREDIBILITY_METRICS = [
  {
    prefix: '',
    target: 96,
    suffix: '%',
    label: 'Proposal Opportunity Rate',
    context:
      '96% of appointments result in an opportunity for your salesperson to submit a formal proposal.',
    accent: 'text-[#FB5607]',
  },
  {
    prefix: 'Up to ',
    target: 12,
    suffix: '×',
    label: 'Campaign Return on Investment',
    context:
      'Proven campaign structures designed to deliver up to 12× ROI and a 2 to 3-year market advantage.',
    accent: 'text-[#8338EC]',
  },
  {
    prefix: '',
    target: 80,
    suffix: '%',
    label: 'Pre-Sales Effort Removed',
    context:
      'We shoulder the research, cleansing, and qualification workload that typically consumes 80% of a rep’s week.',
    accent: 'text-[#212529]',
  },
];

export const CredibilitySection: React.FC = () => {
  return (
    <section
      id="credibility"
      className="bg-[#E9ECEF] text-[#212529] border-b border-[#212529]/10 py-16 lg:py-24"
      aria-labelledby="credibility-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Row: Why The DataShop */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#212529]/15">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#8338EC] mb-3">
              Why The DataShop
            </p>
            <h2
              id="credibility-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#212529] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Commercial accountability backed by verifiable results.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-[#212529]/80 leading-relaxed">
              Our team brings over 80 years of combined database design, research, and B2B lead
              generation experience. Every appointment is reviewed by a Quality Manager against your
              campaign brief before handover—giving your sales team qualified meetings rather than
              speculative cold calls.
            </p>
          </div>
        </Reveal>

        {/* Verified Performance Figures with Live Count-Up */}
        <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 py-12 border-b border-[#212529]/15">
          {ANIMATED_CREDIBILITY_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-[#212529]/10 bg-white p-6 sm:p-8 transition-colors hover:border-[#8338EC]/50"
            >
              <dd
                className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${metric.accent}`}
              >
                <AnimatedNumber
                  prefix={metric.prefix}
                  target={metric.target}
                  suffix={metric.suffix}
                />
              </dd>
              <dt className="mt-2 font-display text-base font-bold text-[#212529]">
                {metric.label}
              </dt>
              <p className="mt-2 text-sm text-[#212529]/75 leading-relaxed">
                {metric.context}
              </p>
            </motion.div>
          ))}
        </dl>

        {/* Verified Client Reach / Doors Opened */}
        <Reveal className="pt-12" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold text-[#212529]">
                Enterprise &amp; institutional doors opened for our clients
              </h3>
              <p className="mt-1.5 text-sm text-[#212529]/75 max-w-2xl">
                Alongside supporting ambitious UK SMEs, our campaigns have secured direct access to
                decision-makers inside major national retailers, manufacturers, professional
                services firms, and universities.
              </p>
            </div>
          </div>

          <ul
            aria-label="Examples of UK organisations reached by The DataShop campaigns"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#212529]/15 border border-[#212529]/15 rounded-2xl overflow-hidden"
          >
            {VERIFIED_DOORS_OPENED.map((org) => (
              <li
                key={org}
                className="bg-[#121417] px-4 py-4 flex items-center justify-center text-center text-sm font-medium text-[#E9ECEF] transition-colors duration-150 hover:bg-[#212529] hover:text-white"
              >
                {org}
              </li>
            ))}
            <li className="bg-[#121417] px-4 py-4 flex items-center justify-center text-center text-sm font-semibold text-[#FB5607]">
              &amp; UK-wide SMEs
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
};
