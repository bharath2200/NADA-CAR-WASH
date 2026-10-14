import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Sparkles, ChevronRight, Home, Wrench, DollarSign, Building, Info, Mail } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, createWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar({ onSelectPackage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Services', href: '#services', icon: Wrench },
    { label: 'Pricing', href: '#pricing', icon: DollarSign },
    { label: 'Commercial', href: '#commercial', icon: Building },
    { label: 'About', href: '#about', icon: Info },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  const quickWhatsAppUrl = createWhatsAppUrl(
    'Hello NAR Car Wash team, I would like to inquire about your waterless car cleaning services in Dubai.'
  );

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        mobileMenuOpen
          ? 'bg-[#101715] border-b border-[#23332D] shadow-2xl'
          : isScrolled
          ? 'bg-[#101715]/95 backdrop-blur-md border-b border-[#23332D] shadow-xl'
          : 'bg-[#101715]/90 backdrop-blur-sm sm:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Name Text - Single Line (Total White) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1.5 sm:gap-2 focus:outline-none shrink-0 group py-1"
            aria-label="NAR Car Wash Home"
          >
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-gray-200 transition-colors">
              NAR CAR WASH
            </span>
          </a>

          {/* Desktop Nav Links (Home, Services, Pricing, Commercial, About, Contact) - Decreased padding */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-4.5 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm font-medium text-gray-300 hover:text-[#38E1CD] active:text-[#D6B46A] active:scale-95 transition-all whitespace-nowrap px-1.5 py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#087F70] after:to-[#D6B46A] after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons for Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Call Button (Large screens) */}
            <a
              href={`tel:+${BUSINESS_PHONE_RAW}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#18231F] text-gray-300 border border-[#23332D] hover:border-[#D6B46A] hover:text-[#D6B46A] hover:bg-[#1E2B25] hover:shadow-md hover:shadow-[#D6B46A]/20 active:border-[#38E1CD] active:text-[#38E1CD] active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <img
                src="/images/phone.png"
                alt="Phone"
                className="w-3.5 h-3.5 brightness-0 invert object-contain"
              />
              <span>{BUSINESS_PHONE_DISPLAY}</span>
            </a>

            {/* Primary Book CTA - Enforced Single Line */}
            <a
              href="#booking"
              className="btn-primary text-xs uppercase tracking-wider font-bold !py-2.5 !px-5 shadow-lg shadow-[#087F70]/20 whitespace-nowrap shrink-0 inline-flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">BOOK A WASH</span>
            </a>
          </div>

          {/* Mobile Right Controls: Book Button + Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-xs uppercase font-bold !py-2 !px-3 sm:!px-4 whitespace-nowrap shrink-0"
            >
              BOOK A WASH
            </a>
            
            {/* Hamburger Button on Right Side */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-gray-200 hover:text-white bg-[#18231F] border border-[#23332D] hover:border-[#087F70] focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-[#0CA693]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#23332D] px-4 sm:px-6 py-5 pb-24 space-y-5 bg-[#101715] max-h-[calc(100vh-66px)] overflow-y-auto">
          <div className="max-w-md mx-auto space-y-5">
            
            {/* Navigation Links list */}
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 pb-2">
                Menu Navigation
              </div>
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-sm sm:text-base font-semibold text-gray-200 hover:text-[#38E1CD] hover:bg-[#18231F] hover:border-[#0CA693] active:text-[#D6B46A] active:bg-[#1E2B25] active:border-[#D6B46A] active:scale-[0.98] px-3.5 py-2.5 rounded-xl transition-all border border-[#1C2723] bg-[#141D1A]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#18231F] flex items-center justify-center text-[#0CA693] group-active:text-[#D6B46A]">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </a>
                );
              })}
            </div>

            {/* Quick Actions Inside Mobile Menu */}
            <div className="pt-2 border-t border-[#1F2C27] space-y-3">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>BOOK A WASH NOW</span>
              </a>

              <a
                href={`tel:+${BUSINESS_PHONE_RAW}`}
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#18231F] text-gray-200 border border-[#23332D] font-medium text-xs sm:text-sm hover:border-[#D6B46A] transition-colors"
              >
                <img
                  src="/images/phone.png"
                  alt="Phone"
                  className="w-4 h-4 brightness-0 invert object-contain"
                />
                <span>Call {BUSINESS_PHONE_DISPLAY}</span>
              </a>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#18231F] text-[#0CA693] border border-[#087F70]/40 font-medium text-xs sm:text-sm hover:bg-[#1E2B25] transition-colors"
              >
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="w-4 h-4 object-contain"
                />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Credential Badge in Mobile Menu */}
            <div className="pt-2 text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#0CA693] font-medium">
                <Shield className="w-3.5 h-3.5" />
                <span>DED Licensed · TPL Insured</span>
              </div>
              <p className="text-[11px] text-gray-400">
                NADA AL RABEE CAR WASHING LLC · Dubai, UAE
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
