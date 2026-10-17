import React, { useState } from 'react';
import { Phone, Mail, Globe, Shield, MessageCircle, ArrowUp, X, CheckCircle2 } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, BUSINESS_EMAIL, createWhatsAppUrl } from '../utils/whatsapp';

export default function Footer({ onNavigate }) {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappFooterUrl = createWhatsAppUrl(
    'Hi NAR Car Wash, I am browsing your website narcarwash.com and would like more information.'
  );

  return (
    <footer className="bg-[#0F141B] border-t border-[#384959]/50 text-slate-200 text-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" onClick={scrollToTop} className="inline-block group focus:outline-none mb-3" aria-label="NAR Car Wash">
              <img
                src="/Logo.png"
                alt="NAR Car Wash & Cleaning Services"
                className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">NADA AL RABEE CAR WASHING LLC</strong> provides premium, 
              eco-friendly waterless car wash and detailing services across residential communities, 
              shopping malls, and commercial towers throughout Dubai, UAE.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#88BDF2] font-medium">
              <Shield className="w-4 h-4 text-[#BDDDFC]" />
              <span>DED Licensed · Third-Party Liability (TPL) Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('home', '#home');
                    else window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('services');
                    else window.location.hash = '#services';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Cleaning Procedure
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('about');
                    else window.location.hash = '#about';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  About Us (Profile)
                </a>
              </li>
              <li>
                <a 
                  href="#commercial" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('commercial');
                    else window.location.hash = '#commercial';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Commercial Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#contact-form" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('home', '#contact-form');
                    else {
                      const el = document.querySelector('#contact-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Book a Wash / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Procedure Care
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('services');
                    else window.location.hash = '#services';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Waterless Car Wash
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('services');
                    else window.location.hash = '#services';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Tyre Polish & Shine
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('services');
                    else window.location.hash = '#services';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Rims & Mirrors Detailing
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('services');
                    else window.location.hash = '#services';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Body Polish & Wax
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('services');
                    else window.location.hash = '#services';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Microfiber Protocol
                </a>
              </li>
              <li>
                <a 
                  href="#commercial" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('commercial');
                    else window.location.hash = '#commercial';
                  }}
                  className="text-slate-200 hover:text-[#BDDDFC] transition-colors font-medium"
                >
                  Mall & Tower Fleets
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Booking
            </h4>
            
            <div className="space-y-2.5">
              <a
                href={`tel:+${BUSINESS_PHONE_RAW}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors"
              >
                <img
                  src="/images/phone.png"
                  alt="Phone"
                  className="w-4 h-4 brightness-0 invert object-contain"
                />
                <span>{BUSINESS_PHONE_DISPLAY}</span>
              </a>

              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-[#88BDF2] transition-colors"
              >
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="w-4 h-4 object-contain"
                />
                <span>WhatsApp: +971 55 696 5470</span>
              </a>

              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors"
              >
                <img
                  src="/images/email.png"
                  alt="Email"
                  className="w-4 h-4 brightness-0 invert object-contain"
                />
                <span>{BUSINESS_EMAIL}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Globe className="w-4 h-4 text-[#6A89A7]" />
                <span>narcarwash.com · Dubai, UAE</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="btn-primary text-xs font-bold py-2.5 px-4 w-full text-center"
              >
                Book Your Wash Now
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-[#384959]/50 bg-[#0A0E13] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="text-[11px] text-slate-300">
              © {new Date().getFullYear()} NADA AL RABEE CAR WASHING LLC (NAR Car Wash & Cleaning Services). All rights reserved.
            </p>
            <p className="text-[10px] text-slate-400">
              Licensed by Dubai Economic Development (DED). Cleaning products compliant with Dubai Municipality regulations.
            </p>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="text-slate-300 hover:text-[#BDDDFC] underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTermsModalOpen(true)}
              className="text-slate-300 hover:text-[#BDDDFC] underline cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#182029] border border-[#384959] text-slate-200 hover:text-white hover:border-[#88BDF2] transition-all ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#182029] border border-[#384959] rounded-2xl max-w-lg w-full p-6 text-left space-y-4 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#384959] pb-3">
              <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="text-slate-300 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-200 space-y-3 leading-relaxed">
              <p>
                <strong className="text-white">NADA AL RABEE CAR WASHING LLC</strong> respects your privacy. When using our website or booking service, we collect contact information (such as name, phone number, vehicle details, and parking location) strictly to facilitate on-site car cleaning operations.
              </p>
              <p>
                <strong className="text-white">Customer Data Handling:</strong> We do not sell, rent, or expose customer contact information or parking locations to third parties or public URL parameters. WhatsApp inquiries are conducted through secure end-to-end encrypted messaging directly with our dispatch team at +971 55 696 5470.
              </p>
              <p>
                For any data queries or deletion requests, please contact us at <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[#88BDF2] underline">{BUSINESS_EMAIL}</a>.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="btn-primary text-xs font-semibold py-2 px-5"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {termsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#182029] border border-[#384959] rounded-2xl max-w-lg w-full p-6 text-left space-y-4 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#384959] pb-3">
              <h3 className="text-lg font-bold text-white">Terms of Service</h3>
              <button
                onClick={() => setTermsModalOpen(false)}
                className="text-slate-300 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-200 space-y-3 leading-relaxed">
              <p>
                <strong className="text-white">Service Availability:</strong> Services are subject to parking bay accessibility and building security clearance in designated Dubai communities.
              </p>
              <p>
                <strong className="text-white">Booking Confirmation:</strong> Submitting a WhatsApp booking inquiry notifies our dispatch desk. Service slots are finalized only upon confirmation from the NAR team.
              </p>
              <p>
                <strong className="text-white">Insurance & Liability:</strong> NADA AL RABEE CAR WASHING LLC maintains Third-Party Liability (TPL) insurance coverage for licensed operational procedures.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setTermsModalOpen(false)}
                className="btn-primary text-xs font-semibold py-2 px-5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
