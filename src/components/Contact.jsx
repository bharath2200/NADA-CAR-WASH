import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, Globe, ExternalLink } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, BUSINESS_EMAIL, createWhatsAppUrl } from '../utils/whatsapp';

export default function Contact() {
  const directWhatsAppUrl = createWhatsAppUrl(
    'Hello NAR Car Wash team, I have a general inquiry about your services in Dubai.'
  );

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#101715] relative overflow-hidden border-t border-[#1C2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18231F] border border-[#23332D] text-xs font-semibold text-[#0CA693]">
            <img
              src="/images/phone.png"
              alt="Phone"
              className="w-3.5 h-3.5 brightness-0 invert object-contain"
            />
            <span>CONNECT WITH NAR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch with <span className="text-[#087F70]">Our Team</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Whether you need a quick wash at your residential parking spot or want to establish a commercial 
            cleaning contract for your property, our team is at your service across Dubai.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          
          {/* Phone Card */}
          <a
            href={`tel:+${BUSINESS_PHONE_RAW}`}
            className="glass-card p-5 sm:p-6 rounded-2xl border border-[#23332D] space-y-3 block group hover:border-[#D6B46A] hover:bg-[#15221E] active:border-[#38E1CD] active:bg-[#0E201B] active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center group-hover:bg-[#D6B46A]/20 group-hover:scale-110 group-active:bg-[#38E1CD]/25 transition-all">
              <img
                src="/images/phone.png"
                alt="Phone"
                className="w-5 h-5 brightness-0 invert object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 font-medium transition-colors">Customer Support & Dispatch</div>
              <div className="text-base font-bold text-white group-hover:text-[#D6B46A] group-active:text-[#38E1CD] transition-colors mt-1">
                {BUSINESS_PHONE_DISPLAY}
              </div>
            </div>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              Direct voice line for urgent dispatch or slot coordination.
            </p>
          </a>

          {/* WhatsApp Card */}
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 sm:p-6 rounded-2xl border border-[#23332D] space-y-3 block group hover:border-[#0CA693] hover:bg-[#15221E] active:border-[#D6B46A] active:bg-[#0E201B] active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center group-hover:bg-[#087F70]/30 group-hover:scale-110 group-active:bg-[#D6B46A]/25 transition-all">
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 font-medium transition-colors">WhatsApp Booking Chat</div>
              <div className="text-base font-bold text-[#0CA693] group-hover:text-[#38E1CD] group-active:text-[#D6B46A] transition-colors flex items-center gap-1.5 mt-1">
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              Instant responses, photos of completed washes & confirmations.
            </p>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${BUSINESS_EMAIL}`}
            className="glass-card p-5 sm:p-6 rounded-2xl border border-[#23332D] space-y-3 block group hover:border-[#D6B46A] hover:bg-[#15221E] active:border-[#38E1CD] active:bg-[#0E201B] active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D6B46A]/15 flex items-center justify-center group-hover:bg-[#D6B46A]/30 group-hover:scale-110 group-active:bg-[#38E1CD]/25 transition-all">
              <img
                src="/images/email.png"
                alt="Email"
                className="w-5 h-5 brightness-0 invert object-contain"
              />
            </div>
            <div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 font-medium transition-colors">Official Correspondence</div>
              <div className="text-base font-bold text-white group-hover:text-[#D6B46A] group-active:text-[#38E1CD] transition-colors mt-1">
                {BUSINESS_EMAIL}
              </div>
            </div>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              For corporate contracts, property management & tender inquiries.
            </p>
          </a>

          {/* Service Area Card */}
          <a
            href="#booking"
            className="glass-card p-5 sm:p-6 rounded-2xl border border-[#23332D] space-y-3 block group hover:border-[#0CA693] hover:bg-[#15221E] active:border-[#D6B46A] active:bg-[#0E201B] active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center text-[#0CA693] group-hover:bg-[#087F70]/30 group-hover:text-[#38E1CD] group-hover:scale-110 group-active:bg-[#D6B46A]/25 group-active:text-[#D6B46A] transition-all">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-400 group-hover:text-gray-300 font-medium transition-colors">Headquarters & Zones</div>
              <div className="text-base font-bold text-white group-hover:text-[#0CA693] group-active:text-[#D6B46A] transition-colors mt-1">
                Dubai, United Arab Emirates
              </div>
            </div>
            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              Marina, Downtown, Business Bay, JLT, Palm Jumeirah & greater Dubai.
            </p>
          </a>

        </div>

        {/* Operating Hours & Corporate Credential Bar */}
        <div className="rounded-2xl bg-[#141D1A] border border-[#23332D] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#18231F] border border-[#2E453D] flex items-center justify-center text-[#0CA693] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Flexible Operating Schedule</h4>
              <p className="text-xs text-gray-400 mt-0.5">
                Daytime & Overnight Parking Bay Operations Available · 7 Days a Week
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="btn-primary text-xs font-semibold py-2.5 px-6"
            >
              Book Now
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs font-semibold py-2.5 px-6 flex items-center gap-2"
            >
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="w-4 h-4 object-contain"
              />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
