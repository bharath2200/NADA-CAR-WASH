import React, { useState } from 'react';
import { Phone, Mail, Globe, Shield, MessageCircle, ArrowUp, X, CheckCircle2 } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, BUSINESS_EMAIL, createWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappFooterUrl = createWhatsAppUrl(
    'Hi NAR Car Wash, I am browsing your website narcarwash.com and would like more information.'
  );

  return (
    <footer className="bg-[#0C1210] border-t border-[#1C2723] text-gray-400 text-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-flex flex-col group focus:outline-none" aria-label="NAR Car Wash">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-wider text-white">
                  NAR
                </span>
                <span className="text-2xl font-extrabold tracking-wider text-[#0CA693]">
                  CAR WASH
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B46A] font-medium mt-0.5">
                Premium Care · Sustainable Cleaning
              </span>
            </a>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-white">NADA AL RABEE CAR WASHING LLC</strong> provides premium, 
              eco-friendly waterless car wash and detailing services across residential communities, 
              shopping malls, and commercial towers throughout Dubai, UAE.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#0CA693]">
              <Shield className="w-4 h-4 text-[#087F70]" />
              <span>DED Licensed · Third-Party Liability (TPL) Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#0CA693] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0CA693] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0CA693] transition-colors">Services</a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-[#0CA693] transition-colors">Commercial</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#0CA693] transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#0CA693] transition-colors">Book a Wash</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0CA693] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#0CA693] transition-colors">Waterless Car Wash</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0CA693] transition-colors">Tyre Polish & Shine</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0CA693] transition-colors">Rims & Mirrors Detailing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0CA693] transition-colors">Body Polish & Wax</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#0CA693] transition-colors">Saloon Monthly Plan</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#0CA693] transition-colors">SUV Monthly Plan</a>
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
                className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
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
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#0CA693] transition-colors"
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
                className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
              >
                <img
                  src="/images/email.png"
                  alt="Email"
                  className="w-4 h-4 brightness-0 invert object-contain"
                />
                <span>{BUSINESS_EMAIL}</span>
              </a>

              <div className="flex items-center gap-2.5 text-gray-400">
                <Globe className="w-4 h-4 text-gray-500" />
                <span>narcarwash.com · Dubai, UAE</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="btn-primary text-xs font-semibold py-2 px-4 w-full text-center"
              >
                Book Your Wash Now
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="border-t border-[#1C2723] bg-[#0A0F0D] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="space-y-1">
            <p className="text-[11px] text-gray-400">
              © {new Date().getFullYear()} NADA AL RABEE CAR WASHING LLC (NAR Car Wash & Cleaning Services). All rights reserved.
            </p>
            <p className="text-[10px] text-gray-400">
              Licensed by Dubai Economic Development (DED). Cleaning products compliant with Dubai Municipality regulations.
            </p>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="text-gray-400 hover:text-white underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setTermsModalOpen(true)}
              className="text-gray-400 hover:text-white underline cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141C19] border border-[#23332D] text-gray-300 hover:text-white hover:border-[#087F70] transition-all ml-2"
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
          <div className="bg-[#141D1A] border border-[#2E453D] rounded-2xl max-w-lg w-full p-6 text-left space-y-4 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#23332D] pb-3">
              <h3 className="text-lg font-bold text-white">Privacy Policy</h3>
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
              <p>
                <strong>NADA AL RABEE CAR WASHING LLC</strong> respects your privacy. When using our website or booking service, we collect contact information (such as name, phone number, vehicle details, and parking location) strictly to facilitate on-site car cleaning operations.
              </p>
              <p>
                <strong>Customer Data Handling:</strong> We do not sell, rent, or expose customer contact information or parking locations to third parties or public URL parameters. WhatsApp inquiries are conducted through secure end-to-end encrypted messaging directly with our dispatch team at +971 55 696 5470.
              </p>
              <p>
                For any data queries or deletion requests, please contact us at <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[#0CA693] underline">{BUSINESS_EMAIL}</a>.
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
          <div className="bg-[#141D1A] border border-[#2E453D] rounded-2xl max-w-lg w-full p-6 text-left space-y-4 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#23332D] pb-3">
              <h3 className="text-lg font-bold text-white">Terms of Service</h3>
              <button
                onClick={() => setTermsModalOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
              <p>
                <strong>Service Availability:</strong> Services are subject to parking bay accessibility and building security clearance in designated Dubai communities.
              </p>
              <p>
                <strong>Booking Confirmation:</strong> Submitting a WhatsApp booking inquiry notifies our dispatch desk. Service slots are finalized only upon confirmation from the NAR team.
              </p>
              <p>
                <strong>Insurance & Liability:</strong> NADA AL RABEE CAR WASHING LLC maintains Third-Party Liability (TPL) insurance coverage for licensed operational procedures.
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
