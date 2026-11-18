import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Copy,
  Check,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACT, ServiceInterest } from '../data/homepageData';
import { Reveal, EASE_OUT_EXPO } from './MotionPrimitives';

interface ContactSectionProps {
  selectedService: ServiceInterest;
  prefilledEmail?: string;
  onServiceChange: (service: ServiceInterest) => void;
}

type AudienceScope = 'UK SMEs' | 'Mid-Market' | 'Enterprise & Public Sector' | 'Multi-Sector UK';
type CampaignTimeline = 'Immediate Start' | 'Within 30 Days' | 'Next Quarter' | 'Exploring Options';

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: ServiceInterest;
  audience: AudienceScope;
  timeline: CampaignTimeline;
  message: string;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  message?: string;
}

const SERVICE_OPTIONS: {
  id: ServiceInterest;
  shortLabel: string;
  hint: string;
}[] = [
  {
    id: 'Business Intelligence for Sales',
    shortLabel: 'Business Intelligence',
    hint: 'Identify target companies, decision-makers, and contract renewal dates.',
  },
  {
    id: 'B2B Data Services',
    shortLabel: 'B2B Data Services',
    hint: 'Targeted UK datasets, CRM cleansing, and GDPR/PECR compliance support.',
  },
  {
    id: 'Appointment Setting',
    shortLabel: 'Appointment Setting',
    hint: 'Consultative outreach and quality-reviewed meetings booked for your team.',
  },
  {
    id: 'General Enquiry',
    shortLabel: 'Full Funnel / Other',
    hint: 'Combine research, verified data, and appointment setting into one programme.',
  },
];

const AUDIENCE_OPTIONS: AudienceScope[] = [
  'UK SMEs',
  'Mid-Market',
  'Enterprise & Public Sector',
  'Multi-Sector UK',
];

const TIMELINE_OPTIONS: CampaignTimeline[] = [
  'Immediate Start',
  'Within 30 Days',
  'Next Quarter',
  'Exploring Options',
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService,
  prefilledEmail = '',
  onServiceChange,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: prefilledEmail,
    phone: '',
    service: selectedService,
    audience: 'Mid-Market',
    timeline: 'Within 30 Days',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  useEffect(() => {
    if (prefilledEmail) {
      setFormData((prev) => ({ ...prev, email: prefilledEmail }));
      setSubmitted(false);
    }
  }, [prefilledEmail]);

  const activeServiceMeta =
    SERVICE_OPTIONS.find((item) => item.id === formData.service) || SERVICE_OPTIONS[0];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your name.';
    }
    if (!formData.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your work email address.';
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Please share a brief note about your sales or data requirements.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopiedBrief(false);
  };

  const compiledBriefText = [
    `Name: ${formData.fullName}`,
    `Company: ${formData.companyName}`,
    `Work Email: ${formData.email}`,
    `Phone: ${formData.phone || 'Not provided'}`,
    `Primary Service: ${formData.service}`,
    `Target Audience: ${formData.audience}`,
    `Preferred Timeframe: ${formData.timeline}`,
    ``,
    `Requirements:`,
    formData.message,
  ].join('\n');

  const mailtoFallbackHref = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(
    `Enquiry: ${formData.service} — ${formData.companyName || 'Website Visitor'}`
  )}&body=${encodeURIComponent(compiledBriefText)}`;

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(compiledBriefText);
      setCopiedBrief(true);
      window.setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#121417] text-[#E9ECEF] border-b border-white/10 py-16 lg:py-24"
      aria-labelledby="contact-heading"
    >
      {/* Subtle Ambient Horizon Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 w-[680px] h-[520px] rounded-full opacity-45"
        style={{
          background:
            'radial-gradient(circle, rgba(131, 56, 236, 0.25) 0%, rgba(251, 86, 7, 0.14) 45%, transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 w-[560px] h-[420px] rounded-full opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(251, 86, 7, 0.2) 0%, rgba(131, 56, 236, 0.12) 50%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Final CTA, Direct Contact & Expected Next Steps */}
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#FB5607] mb-3">
              Start a Conversation
            </p>
            <h2
              id="contact-heading"
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Ready to find your next sales opportunity?
            </h2>
            <p className="mt-4 text-base text-[#E9ECEF]/80 leading-relaxed">
              Talk to The DataShop about your business intelligence, B2B data, and
              appointment-setting requirements. Share a short campaign brief opposite and our
              Birmingham specialists will prepare a tailored recommendation.
            </p>

            {/* Direct Contact Channels */}
            <div className="mt-8 space-y-5 pt-8 border-t border-white/15">
              <div className="flex items-start gap-3.5">
                <Phone className="h-5 w-5 text-[#FB5607] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-[#E9ECEF]/60">Telephone</p>
                  <a
                    href={COMPANY_CONTACT.phoneHref}
                    className="mt-0.5 block font-display text-base font-semibold text-white hover:text-[#FB5607] transition-colors tabular-nums"
                  >
                    {COMPANY_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="h-5 w-5 text-[#8338EC] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-[#E9ECEF]/60">Email</p>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="mt-0.5 block font-display text-base font-semibold text-white hover:text-[#FB5607] transition-colors"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="h-5 w-5 text-[#FB5607] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-[#E9ECEF]/60">Head Office</p>
                  <p className="mt-0.5 text-sm text-[#E9ECEF]/85 leading-relaxed">
                    {COMPANY_CONTACT.companyName}
                    <br />
                    {COMPANY_CONTACT.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Process Expectations */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-display text-sm font-semibold text-white">
                What happens after you enquire
              </p>
              <ol className="mt-3 space-y-2.5 text-xs sm:text-sm text-[#E9ECEF]/75">
                <li className="flex items-baseline gap-2.5">
                  <span className="font-display font-bold text-[#FB5607] tabular-nums">01.</span>
                  <span>We review your target sectors, ideal company profile, and decision-makers.</span>
                </li>
                <li className="flex items-baseline gap-2.5">
                  <span className="font-display font-bold text-[#8338EC] tabular-nums">02.</span>
                  <span>We scope available UK business records and renewal-date intelligence.</span>
                </li>
                <li className="flex items-baseline gap-2.5">
                  <span className="font-display font-bold text-[#FB5607] tabular-nums">03.</span>
                  <span>You receive a clear campaign plan focused on qualified sales conversations.</span>
                </li>
              </ol>
            </div>
          </Reveal>

          {/* Right Column: Advanced Dark-Glass Interactive Scoping & Enquiry Form */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="rounded-2xl border border-white/15 bg-[#181B20]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/40">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="confirmation"
                    role="status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                    className="py-2"
                  >
                    <div className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="h-6 w-6 text-[#FB5607] shrink-0" aria-hidden="true" />
                      <h3 className="font-display text-xl sm:text-2xl font-bold">
                        Your enquiry brief is ready
                      </h3>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-[#E9ECEF]/80 leading-relaxed">
                      Thank you, <span className="font-semibold text-white">{formData.fullName}</span>.
                      Dispatch this structured brief to our Birmingham team via your email client,
                      or copy it directly below.
                    </p>

                    <div className="mt-6 rounded-xl border border-white/10 bg-[#121417] p-5 space-y-3 text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-white/10">
                        <div>
                          <span className="block text-xs text-[#E9ECEF]/55">Company</span>
                          <span className="font-medium text-white">{formData.companyName}</span>
                        </div>
                        <div>
                          <span className="block text-xs text-[#E9ECEF]/55">Service Focus</span>
                          <span className="font-medium text-[#FB5607]">{formData.service}</span>
                        </div>
                        <div>
                          <span className="block text-xs text-[#E9ECEF]/55">Target Audience</span>
                          <span className="font-medium text-white">{formData.audience}</span>
                        </div>
                        <div>
                          <span className="block text-xs text-[#E9ECEF]/55">Timeframe</span>
                          <span className="font-medium text-[#8338EC]">{formData.timeline}</span>
                        </div>
                      </div>
                      <div>
                        <span className="block text-xs text-[#E9ECEF]/55 mb-1">
                          Project Notes
                        </span>
                        <p className="text-[#E9ECEF]/85 leading-relaxed whitespace-pre-line">
                          {formData.message}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={mailtoFallbackHref}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#FB5607] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#E04B05] transition-colors"
                      >
                        Send via Email Client
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                      >
                        {copiedBrief ? (
                          <>
                            <Check className="h-4 w-4 text-[#8338EC]" aria-hidden="true" />
                            <span>Copied Brief</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" aria-hidden="true" />
                            <span>Copy Brief</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-[#E9ECEF]/75 hover:text-white transition-colors"
                      >
                        Edit Details
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/10">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">
                          Scope your enquiry
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[#E9ECEF]/65">
                          Select your focus area and share your sales goals below.
                        </p>
                      </div>
                      <span className="text-xs font-medium text-[#E9ECEF]/55">
                        * Required fields
                      </span>
                    </div>

                    {/* Step 1: Interactive Service Focus Selector */}
                    <div>
                      <span className="block text-xs font-semibold text-[#E9ECEF]/80 mb-2.5">
                        1. Primary service interest
                      </span>
                      <div
                        role="radiogroup"
                        aria-label="Primary service interest"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                      >
                        {SERVICE_OPTIONS.map((option) => {
                          const isSelected = formData.service === option.id;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, service: option.id }));
                                onServiceChange(option.id);
                              }}
                              className={`relative flex flex-col items-start text-left rounded-xl border px-4 py-3 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#FB5607] ${
                                isSelected
                                  ? 'border-[#FB5607] bg-[#FB5607]/12 text-white'
                                  : 'border-white/10 bg-white/[0.03] text-[#E9ECEF]/80 hover:border-white/25 hover:bg-white/[0.06]'
                              }`}
                            >
                              <span className="font-display text-sm font-semibold">
                                {option.shortLabel}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="mt-2 text-xs text-[#E9ECEF]/65">
                        {activeServiceMeta.hint}
                      </p>
                    </div>

                    {/* Step 2: Target Audience & Timeline Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/10">
                      <div>
                        <label
                          htmlFor="enquiry-audience"
                          className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                        >
                          2. Target market focus
                        </label>
                        <div className="relative">
                          <select
                            id="enquiry-audience"
                            name="audience"
                            value={formData.audience}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                audience: e.target.value as AudienceScope,
                              }))
                            }
                            className="w-full min-h-[44px] appearance-none rounded-xl border border-white/15 bg-white/[0.04] pl-3.5 pr-10 py-2 text-sm text-white focus:bg-[#1E2228] focus:outline-none focus:ring-2 focus:ring-[#8338EC]/30 focus:border-[#8338EC] transition-colors cursor-pointer"
                          >
                            {AUDIENCE_OPTIONS.map((audience) => (
                              <option
                                key={audience}
                                value={audience}
                                className="bg-[#181B20] text-white"
                              >
                                {audience}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#E9ECEF]/60"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-timeline"
                          className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                        >
                          3. Preferred timeframe
                        </label>
                        <div className="relative">
                          <select
                            id="enquiry-timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                timeline: e.target.value as CampaignTimeline,
                              }))
                            }
                            className="w-full min-h-[44px] appearance-none rounded-xl border border-white/15 bg-white/[0.04] pl-3.5 pr-10 py-2 text-sm text-white focus:bg-[#1E2228] focus:outline-none focus:ring-2 focus:ring-[#8338EC]/30 focus:border-[#8338EC] transition-colors cursor-pointer"
                          >
                            {TIMELINE_OPTIONS.map((timeline) => (
                              <option
                                key={timeline}
                                value={timeline}
                                className="bg-[#181B20] text-white"
                              >
                                {timeline}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#E9ECEF]/60"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                      <div>
                        <label
                          htmlFor="enquiry-name"
                          className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                        >
                          Full name <span className="text-[#FB5607]">*</span>
                        </label>
                        <input
                          id="enquiry-name"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          aria-invalid={Boolean(errors.fullName)}
                          aria-describedby={errors.fullName ? 'error-name' : undefined}
                          className={`w-full min-h-[44px] rounded-xl border px-3.5 py-2 text-sm text-white placeholder:text-[#E9ECEF]/35 bg-white/[0.04] focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#FB5607]/25 focus:border-[#FB5607] transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-white/15'
                          }`}
                          placeholder="e.g. Sarah Jenkins"
                        />
                        {errors.fullName && (
                          <p
                            id="error-name"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-company"
                          className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                        >
                          Company name <span className="text-[#FB5607]">*</span>
                        </label>
                        <input
                          id="enquiry-company"
                          name="companyName"
                          type="text"
                          autoComplete="organization"
                          value={formData.companyName}
                          onChange={(e) => {
                            setFormData({ ...formData, companyName: e.target.value });
                            if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                          }}
                          aria-invalid={Boolean(errors.companyName)}
                          aria-describedby={errors.companyName ? 'error-company' : undefined}
                          className={`w-full min-h-[44px] rounded-xl border px-3.5 py-2 text-sm text-white placeholder:text-[#E9ECEF]/35 bg-white/[0.04] focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#FB5607]/25 focus:border-[#FB5607] transition-colors ${
                            errors.companyName ? 'border-red-500' : 'border-white/15'
                          }`}
                          placeholder="e.g. Midlands Commercial Ltd"
                        />
                        {errors.companyName && (
                          <p
                            id="error-company"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.companyName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-email"
                          className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                        >
                          Work email <span className="text-[#FB5607]">*</span>
                        </label>
                        <input
                          id="enquiry-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'error-email' : undefined}
                          className={`w-full min-h-[44px] rounded-xl border px-3.5 py-2 text-sm text-white placeholder:text-[#E9ECEF]/35 bg-white/[0.04] focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#FB5607]/25 focus:border-[#FB5607] transition-colors ${
                            errors.email ? 'border-red-500' : 'border-white/15'
                          }`}
                          placeholder="name@company.co.uk"
                        />
                        {errors.email && (
                          <p
                            id="error-email"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="enquiry-phone"
                          className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                        >
                          Telephone (optional)
                        </label>
                        <input
                          id="enquiry-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full min-h-[44px] rounded-xl border border-white/15 px-3.5 py-2 text-sm text-white placeholder:text-[#E9ECEF]/35 bg-white/[0.04] focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#FB5607]/25 focus:border-[#FB5607] transition-colors"
                          placeholder="0121 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-message"
                        className="block text-xs font-semibold text-[#E9ECEF]/85 mb-1.5"
                      >
                        Campaign goals &amp; target decision-makers{' '}
                        <span className="text-[#FB5607]">*</span>
                      </label>
                      <textarea
                        id="enquiry-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'error-message' : undefined}
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-white placeholder:text-[#E9ECEF]/35 bg-white/[0.04] focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-[#FB5607]/25 focus:border-[#FB5607] transition-colors ${
                          errors.message ? 'border-red-500' : 'border-white/15'
                        }`}
                        placeholder="Describe your target sectors, decision-maker roles, or upcoming sales goals..."
                      />
                      {errors.message && (
                        <p
                          id="error-message"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#FB5607] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#E04B05] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB5607]"
                      >
                        Talk to Our Team
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </button>
                      <p className="text-xs text-[#E9ECEF]/55">
                        Handled in line with UK GDPR &amp; PECR standards.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
