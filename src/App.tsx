/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { CredibilitySection } from './components/CredibilitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceInterest } from './data/homepageData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceInterest>(
    'Business Intelligence for Sales'
  );
  const [prefilledEmail, setPrefilledEmail] = useState('');

  const handleSelectServiceAndScroll = (
    service: ServiceInterest,
    scrollTargetId = 'contact'
  ) => {
    setSelectedService(service);
    const targetEl = document.getElementById(scrollTargetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickEnquiry = (email: string) => {
    if (email) {
      setPrefilledEmail(email);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#121417] text-[#E9ECEF]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-[#FB5607] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          <HeroSection
            onQuickEnquiry={handleQuickEnquiry}
            onSelectService={(service, targetId) =>
              handleSelectServiceAndScroll(service, targetId)
            }
          />
          <AboutSection />
          <ServicesSection
            onSelectService={(service) => handleSelectServiceAndScroll(service, 'contact')}
          />
          <ProcessSection />
          <CredibilitySection />
          <ContactSection
            selectedService={selectedService}
            prefilledEmail={prefilledEmail}
            onServiceChange={setSelectedService}
          />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
