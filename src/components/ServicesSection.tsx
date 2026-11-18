import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServiceInterest } from '../data/homepageData';
import { ResilientImage } from './ResilientImage';
import { Reveal, EASE_OUT_EXPO } from './MotionPrimitives';

interface ServicesSectionProps {
  onSelectService: (service: ServiceInterest) => void;
}

const BI_OUTCOMES = [
  'Identify target UK sectors and relevant companies aligned with your ideal customer profile.',
  'Pinpoint named decision-makers and map buying responsibilities across each organisation.',
  'Track contract renewal timelines so your team engages when suppliers are under review.',
  'Equip sales representatives with clear commercial context for better-informed sales decisions.',
];

const DATA_PILLARS = [
  {
    id: 'demand',
    title: 'Data on Demand',
    summary: 'Targeted UK business datasets built to your exact commercial brief.',
    description:
      'Bespoke, targeted UK business datasets built to your exact campaign criteria—providing verified decision-maker details rather than stale bulk lists.',
  },
  {
    id: 'management',
    title: 'Data Management & CRM Build',
    summary: 'Structured cleansing, sectorisation, and ongoing CRM enrichment.',
    description:
      'Structured cleansing, sectorisation, deduplication, and CRM organisation covering past, current, and prospective customers so sales and marketing stay aligned.',
  },
  {
    id: 'compliance',
    title: 'Data Compliance Support',
    summary: 'GDPR, PECR, FCA, and ISO27001 audit and governance workflows.',
    description:
      'Audit, preventative, and remedial data governance aligned with GDPR, PECR, FCA, and ISO27001 requirements—including data access, consent history, and erasure.',
  },
];

const APPOINTMENT_HIGHLIGHTS = [
  'Consultative outreach by experienced B2B specialists who handle early objections professionally.',
  'Independent Quality Manager review of every call against your criteria before any meeting is booked.',
  'Targeted, PECR-compliant email campaigns and 24-hour exhibition follow-up to capture event momentum.',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeDataPillar, setActiveDataPillar] = useState(0);

  return (
    <section id="services" aria-labelledby="services-heading">
      {/* Service 01: Business Intelligence for Sales (Crisp White Canvas) */}
      <div className="bg-white text-[#212529] border-b border-[#212529]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-[#FB5607] mb-3">
              Our Three Core Services
            </p>
            <h2
              id="services-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#212529] leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Connected capabilities designed to build a reliable sales pipeline.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#212529]/75 leading-relaxed">
              Whether you need sharper market insight, cleaner B2B records, or qualified meetings in
              your sales team’s diary, each service works individually or as one integrated funnel.
            </p>
          </Reveal>
        </div>

        <div
          id="services-intelligence"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch pt-10 border-t border-[#212529]/10">
            <Reveal className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-sm font-semibold text-[#8338EC] tabular-nums mb-2">
                01. Core Service
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#212529]">
                Business Intelligence for Sales
              </h3>
              <p className="mt-4 text-base text-[#212529]/80 leading-relaxed">
                In plain terms, business intelligence means knowing who to speak to, why they may
                need your product or service, and when they are ready to review suppliers—before
                your sales team picks up the phone.
              </p>

              <ul className="mt-6 space-y-2 border-t border-[#212529]/10 pt-6">
                {BI_OUTCOMES.map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 rounded-lg p-2.5 -mx-2.5 text-sm sm:text-base text-[#212529]/85 transition-colors hover:bg-[#E9ECEF]/75"
                  >
                    <Check
                      className="h-4 w-4 text-[#8338EC] shrink-0 mt-1 transition-transform duration-150 group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onSelectService('Business Intelligence for Sales')}
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#212529] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#FB5607] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
                >
                  Discuss Business Intelligence
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 flex" delay={0.1}>
              <div className="group w-full overflow-hidden rounded-2xl border border-[#212529]/15 bg-[#E9ECEF]">
                <ResilientImage
                  src="/src/assets/images/service_business_intelligence_1795035403685.jpg"
                  alt="Senior researcher reviewing UK company market intelligence notes and sector data"
                  className="h-72 sm:h-96 lg:h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="01. Business Intelligence for Sales"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Service 02: B2B Data Services (Platinum Mist Canvas with Fixed Masked Data Grid) */}
      <div
        id="services-data"
        className="relative overflow-hidden bg-[#E9ECEF] text-[#212529] border-b border-[#212529]/10 py-16 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 data-grid-backdrop"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <Reveal className="lg:col-span-5 order-2 lg:order-1 flex" delay={0.08}>
              <div className="group w-full overflow-hidden rounded-2xl border border-[#212529]/15 bg-white">
                <ResilientImage
                  src="/src/assets/images/service_b2b_data_1795035403938.jpg"
                  alt="Structured UK business consultancy workspace reflecting organised CRM and verified B2B records"
                  className="h-72 sm:h-96 lg:h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="02. B2B Data Services"
                />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              <p className="text-sm font-semibold text-[#FB5607] tabular-nums mb-2">
                02. Core Service
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#212529]">
                B2B Data Services
              </h3>
              <p className="mt-4 text-base text-[#212529]/80 leading-relaxed max-w-2xl">
                Drawing on instant access to over 1.7 million UK business records, we help you
                acquire, cleanse, and govern accurate customer and prospect data for sales and
                marketing teams.
              </p>

              {/* Interactive Accordion / Selector List */}
              <div className="mt-6 space-y-2.5">
                {DATA_PILLARS.map((pillar, idx) => {
                  const isOpen = idx === activeDataPillar;
                  return (
                    <div
                      key={pillar.id}
                      className={`rounded-xl border transition-colors duration-200 ${
                        isOpen
                          ? 'bg-white border-[#8338EC]'
                          : 'bg-white/70 border-[#212529]/10 hover:bg-white'
                      }`}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setActiveDataPillar(idx)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#8338EC]"
                      >
                        <div>
                          <span className="font-display text-base font-bold text-[#212529] block">
                            {pillar.title}
                          </span>
                          <span className="text-xs sm:text-sm text-[#212529]/70 block mt-0.5">
                            {pillar.summary}
                          </span>
                        </div>
                        <span
                          aria-hidden="true"
                          className={`font-display text-sm font-bold tabular-nums shrink-0 ${
                            isOpen ? 'text-[#8338EC]' : 'text-[#212529]/45'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-4 pt-2 text-sm text-[#212529]/80 leading-relaxed border-t border-[#212529]/10">
                              {pillar.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onSelectService('B2B Data Services')}
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#8338EC] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#7028D4] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8338EC]"
                >
                  Discuss B2B Data Services
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Service 03: Appointment Setting (Deep Obsidian Band with Atmospheric Backlight) */}
      <div
        id="services-appointments"
        className="relative overflow-hidden bg-[#121417] text-[#E9ECEF] border-b border-white/10 py-16 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full opacity-55"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 86, 7, 0.22) 0%, rgba(131, 56, 236, 0.14) 45%, transparent 72%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-5">
              <p className="text-sm font-semibold text-[#FB5607] tabular-nums mb-2">
                03. Core Service
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Appointment Setting
              </h3>
              <p className="mt-4 text-base text-[#E9ECEF]/80 leading-relaxed">
                We manage the time-intensive pre-sales outreach—engaging relevant decision-makers,
                qualifying genuine buyer interest, and booking structured sales meetings directly
                into your team’s calendar.
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                {APPOINTMENT_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#E9ECEF]/90">
                    <Check
                      className="h-4 w-4 text-[#FB5607] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onSelectService('Appointment Setting')}
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#FB5607] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#E04B05] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
                >
                  Discuss Appointment Setting
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="group overflow-hidden rounded-2xl border border-white/15 bg-[#1B1F24]">
                <ResilientImage
                  src="/src/assets/images/service_appointment_setting_1795035405018.jpg"
                  alt="Two B2B professionals engaged in a qualified sales appointment inside a sunlit modern UK boardroom"
                  className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  fallbackTitle="03. Qualified Appointment Setting"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
