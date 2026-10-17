import React, { useState, useEffect } from 'react';
import {
  Phone,
  Menu,
  X,
  Shield,
  Sparkles,
  ChevronRight,
  Home,
  Wrench,
  Building,
  Info,
  Mail
} from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, createWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar({ currentPage = 'home', onNavigate }) {
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

  const [activeHomeSection, setActiveHomeSection] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#contact-form' || hash === '#contact' || hash === '#booking') {
        return 'contact';
      }
    }
    return 'home';
  });

  const navLinks = [
    { id: 'home', label: 'Home', shortLabel: 'Home', href: '#home', page: 'home', icon: Home },
    {
      id: 'services',
      label: 'Services',
      shortLabel: 'Services',
      href: '#services',
      page: 'services',
      icon: Wrench
    },
    {
      id: 'commercial',
      label: 'Commercial',
      shortLabel: 'Commercial',
      href: '#commercial',
      page: 'commercial',
      icon: Building
    },
    {
      id: 'about',
      label: 'About Us',
      shortLabel: 'About Us',
      href: '#about',
      page: 'about',
      icon: Info,
      isAbout: true
    },
    { id: 'contact', label: 'Contact', shortLabel: 'Contact', href: '#contact-form', page: 'home', icon: Mail },
  ];

  // Track scroll position on home page to distinguish between Home and Contact section
  useEffect(() => {
    if (currentPage !== 'home') return;

    const checkActiveSection = () => {
      const contactEl = document.getElementById('contact-form') || document.getElementById('contact');
      if (!contactEl) {
        setActiveHomeSection('home');
        return;
      }
      
      const isAtBottom =
        window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight - 80);
      
      const rect = contactEl.getBoundingClientRect();
      if (isAtBottom || (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 120)) {
        setActiveHomeSection('contact');
      } else {
        setActiveHomeSection('home');
      }
    };

    window.addEventListener('scroll', checkActiveSection, { passive: true });
    checkActiveSection();

    return () => window.removeEventListener('scroll', checkActiveSection);
  }, [currentPage]);

  // Sync with browser hash changes for contact form vs home
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#contact-form' || window.location.hash === '#contact' || window.location.hash === '#booking') {
        setActiveHomeSection('contact');
      } else if (window.location.hash === '#home' || !window.location.hash) {
        if (currentPage === 'home') {
          setActiveHomeSection('home');
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const quickWhatsAppUrl = createWhatsAppUrl(
    'Hello NAR Car Wash team, I would like to inquire about your waterless car cleaning services in Dubai.'
  );

  const isLinkActive = (link) => {
    if (currentPage === 'home') {
      if (link.id === 'contact' || link.href === '#contact-form') {
        return activeHomeSection === 'contact';
      }
      if (link.id === 'home' || link.href === '#home') {
        return activeHomeSection === 'home';
      }
      return false;
    }
    return currentPage === link.page;
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.page === 'about' || link.page === 'services' || link.page === 'commercial') {
      if (onNavigate) {
        onNavigate(link.page);
      } else {
        window.location.hash = `#${link.page}`;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Home navigation
    if (link.id === 'contact' || link.href === '#contact-form') {
      setActiveHomeSection('contact');
    } else if (link.id === 'home' || link.href === '#home') {
      setActiveHomeSection('home');
    }

    if (onNavigate) {
      onNavigate('home', link.href);
    } else {
      window.location.hash = link.href;
      if (link.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveHomeSection('contact');
    if (onNavigate) {
      onNavigate('home', '#contact-form');
    } else {
      const el = document.querySelector('#contact-form') || document.querySelector('#booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${mobileMenuOpen
          ? 'bg-[#131A21] border-b border-[#384959] shadow-2xl'
          : isScrolled
            ? 'bg-[#131A21]/95 backdrop-blur-md border-b border-[#384959] shadow-xl'
            : 'bg-[#131A21]/90 backdrop-blur-sm sm:bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-3 sm:gap-4">

          {/* Brand Header Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, { id: 'home', page: 'home', href: '#home' })}
            className="flex items-center focus:outline-none shrink-0"
            aria-label="NAR Car Wash Home"
          >
            <img
              src="/Logo.png"
              alt="NAR Car Wash - NADA AL RABEE CAR WASHING LLC"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain block"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-xs xl:text-sm font-semibold transition-all whitespace-nowrap px-2.5 py-1.5 rounded-lg relative ${isActive
                      ? 'text-[#88BDF2]'
                      : 'text-slate-100 hover:text-[#BDDDFC] hover:bg-[#1B242D]/50'
                    }`}
                >
                  {link.shortLabel || link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons for Desktop */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Call Button (Large screens) */}
            <a
              href={`tel:+${BUSINESS_PHONE_RAW}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#1B242D] text-slate-100 border border-[#384959] hover:border-[#88BDF2] hover:text-[#BDDDFC] hover:bg-[#232E3A] hover:shadow-md hover:shadow-[#88BDF2]/20 active:border-[#BDDDFC] active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <img
                src="/images/phone.png"
                alt="Phone"
                className="w-3.5 h-3.5 brightness-0 invert object-contain"
              />
              <span>{BUSINESS_PHONE_DISPLAY}</span>
            </a>

            {/* Primary Book CTA */}
            <button
              type="button"
              onClick={handleBookClick}
              className="btn-primary text-xs uppercase tracking-wider font-bold !py-2.5 !px-5 whitespace-nowrap shrink-0 inline-flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">BOOK A WASH</span>
            </button>
          </div>

          {/* Mobile Right Controls: Book Button + Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleBookClick}
              className="btn-primary text-xs uppercase font-bold !py-2 !px-3 sm:!px-4 whitespace-nowrap shrink-0 cursor-pointer"
            >
              BOOK A WASH
            </button>

            {/* Hamburger Button on Right Side */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-slate-100 hover:text-white bg-[#1B242D] border border-[#384959] hover:border-[#88BDF2] focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-[#88BDF2]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay & Menu (Hamburg Menu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#131A21] border-t border-[#384959] px-4 sm:px-6 py-5 pb-8 overflow-y-auto z-50">
          <div className="max-w-md mx-auto min-h-full flex flex-col justify-between space-y-5">

            {/* Navigation Links list */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 px-3 pb-1 flex items-center justify-between">
                <span>Menu Navigation</span>
                <span className="text-[10px] text-[#BDDDFC]">Dubai Operations</span>
              </div>

              {navLinks.map((link) => {
                const isCurrent = isLinkActive(link);
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`w-full flex items-center justify-between text-left text-sm sm:text-base font-semibold px-4 py-3 rounded-xl transition-all border ${isCurrent
                        ? 'border-[#88BDF2] bg-[#232E3A] text-[#BDDDFC]'
                        : 'border-[#384959] bg-[#1B242D] text-slate-100 hover:text-[#BDDDFC] hover:bg-[#232E3A] hover:border-[#88BDF2]'
                      }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </button>
                );
              })}
            </div>

            {/* Bottom Group: Quick Action Buttons & Credential Badge */}
            <div className="mt-auto pt-6 space-y-4">
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleBookClick}
                  className="w-full py-3.5 rounded-full bg-[#88BDF2] text-[#0E1620] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-none hover:bg-[#BDDDFC] active:scale-95 transition-all outline-none focus:outline-none ring-0 border-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>BOOK A WASH NOW</span>
                </button>

                <a
                  href={`tel:+${BUSINESS_PHONE_RAW}`}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#1B242D] text-slate-100 border border-[#384959] font-medium text-xs sm:text-sm hover:border-[#88BDF2] hover:text-[#BDDDFC] transition-colors"
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
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#1B242D] text-[#88BDF2] border border-[#6A89A7]/50 font-semibold text-xs sm:text-sm hover:bg-[#232E3A] hover:border-[#88BDF2] transition-colors"
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
              <div className="pt-1 text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs text-[#BDDDFC] font-semibold">
                  <Shield className="w-3.5 h-3.5 text-[#88BDF2]" />
                  <span>DED Licensed · TPL Insured</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  NADA AL RABEE CAR WASHING LLC · Dubai, UAE
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
