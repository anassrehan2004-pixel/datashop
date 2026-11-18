import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_CONTACT } from '../data/homepageData';
import { EASE_OUT_EXPO } from './MotionPrimitives';

type LegalModalType = 'privacy' | 'dataprotection' | null;

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  return (
    <footer className="bg-[#16191D] text-[#E9ECEF]/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Registered Entity */}
          <div className="lg:col-span-4">
            <a href="#top" aria-label="The DataShop Home" className="inline-block">
              <BrandLogo variant="light" />
            </a>
            <p className="mt-4 text-sm text-[#E9ECEF]/70 leading-relaxed max-w-sm">
              Business intelligence for sales, verified B2B data services, and quality-reviewed
              appointment setting for UK organisations.
            </p>
            <p className="mt-4 text-xs text-[#E9ECEF]/55 leading-relaxed">
              {COMPANY_CONTACT.companyName}
              <br />
              {COMPANY_CONTACT.address}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#top" className="hover:text-[#FB5607] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FB5607] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FB5607] transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#credibility" className="hover:text-[#FB5607] transition-colors">
                  Why The DataShop
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FB5607] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Core Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#services-intelligence" className="hover:text-[#FB5607] transition-colors">
                  Business Intelligence for Sales
                </a>
              </li>
              <li>
                <a href="#services-data" className="hover:text-[#FB5607] transition-colors">
                  B2B Data Services
                </a>
              </li>
              <li>
                <a href="#services-appointments" className="hover:text-[#FB5607] transition-colors">
                  Appointment Setting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={COMPANY_CONTACT.phoneHref}
                  className="hover:text-[#FB5607] transition-colors tabular-nums"
                >
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="hover:text-[#FB5607] transition-colors"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li className="pt-2 flex items-center gap-4 text-xs font-medium text-[#E9ECEF]/60">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E9ECEF]/55">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_CONTACT.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('dataprotection')}
              className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
            >
              Data Protection Policy
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Animated Legal Notice Dialog */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setLegalModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
              className="w-full max-w-lg rounded-lg border border-[#212529]/15 bg-white p-6 sm:p-8 text-[#212529] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#212529]/10">
                <h2 id="legal-dialog-title" className="font-display text-lg font-bold">
                  {legalModal === 'privacy' ? 'Privacy Policy Overview' : 'Data Protection Policy'}
                </h2>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  aria-label="Close legal notice"
                  className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md text-[#212529]/60 hover:bg-[#E9ECEF] hover:text-[#212529]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-sm text-[#212529]/80 leading-relaxed">
                {legalModal === 'privacy' ? (
                  <>
                    <p>
                      {COMPANY_CONTACT.companyName} respects the privacy of business contacts and
                      website visitors. Enquiry details submitted via this homepage are used solely
                      to respond to your request.
                    </p>
                    <p>
                      For full privacy documentation or subject access enquiries, contact{' '}
                      <a
                        href={`mailto:${COMPANY_CONTACT.email}`}
                        className="font-medium text-[#8338EC] hover:underline"
                      >
                        {COMPANY_CONTACT.email}
                      </a>
                      .
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Our B2B data services and outreach campaigns operate in alignment with UK
                      GDPR, PECR, FCA, and ISO27001 data governance principles, covering record
                      accuracy, consent history, and erasure requests.
                    </p>
                    <p>
                      Questions regarding data protection or compliance audits can be directed to{' '}
                      <a
                        href={`mailto:${COMPANY_CONTACT.email}`}
                        className="font-medium text-[#8338EC] hover:underline"
                      >
                        {COMPANY_CONTACT.email}
                      </a>
                      .
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
