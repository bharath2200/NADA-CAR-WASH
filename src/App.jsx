import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CommercialSolutions from './components/CommercialSolutions';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, BUSINESS_PHONE_DISPLAY } from './utils/whatsapp';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId) => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingWhatsAppUrl = createWhatsAppUrl(
    'Hello NAR Car Wash, I would like to book a waterless wash in Dubai.'
  );

  return (
    <div className="min-h-screen bg-[#101715] text-[#F3F4F6] selection:bg-[#087F70] selection:text-white font-['Poppins',sans-serif] relative">
      
      {/* Sticky Header Navigation */}
      <Navbar onSelectPackage={handleSelectPlan} />

      {/* Main Page Content */}
      <main>
        {/* 01: Hero Section */}
        <Hero onOpenBooking={() => handleSelectPlan(null)} />

        {/* 02: About Us & Trust */}
        <About />

        {/* 03: Services */}
        <Services onSelectService={handleSelectService} />

        {/* 04: Commercial Solutions */}
        <CommercialSolutions />

        {/* 05: Pricing */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 06: Dedicated Interactive Booking Form */}
        <BookingForm preselectedData={selectedPlan} />

        {/* 07: Contact */}
        <Contact />
      </main>

      {/* 08: Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Quick-Access Button */}
      <aside aria-label="WhatsApp quick contact">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-[#087F70] text-white shadow-2xl hover:bg-[#0CA693] transition-all duration-300 hover:scale-105 border border-white/20"
          title={`Chat with NAR Car Wash on WhatsApp (${BUSINESS_PHONE_DISPLAY})`}
        >
          <div className="relative flex items-center justify-center">
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6 object-contain"
            />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D6B46A] border-2 border-[#087F70]" />
          </div>
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            Book on WhatsApp
          </span>
        </a>
      </aside>

    </div>
  );
}
