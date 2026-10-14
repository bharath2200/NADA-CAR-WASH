import React from 'react';
import { Check, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-12 sm:py-16 bg-[#101715] relative overflow-hidden border-t border-[#1C2723]">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#087F70]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18231F] border border-[#23332D] text-xs font-semibold text-[#0CA693]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECO-FRIENDLY AUTOMOTIVE CARE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Professional <span className="teal-gradient-text">Car Wash Services</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            From precision waterless hand washing to high-gloss polymer paint protection, 
            each service is engineered to keep your vehicle immaculate in Dubai’s desert environment.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group glass-card rounded-2xl overflow-hidden border border-[#23332D] hover:border-[#087F70] flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-52 overflow-hidden bg-[#141D1A]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141D1A] via-transparent to-black/20" />
                  
                  {/* Recommended badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#18231F]/90 backdrop-blur-md border border-[#2E453D] text-[11px] font-semibold text-[#D6B46A]">
                    {service.recommendedFor}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-[#0CA693] tracking-wide uppercase">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#0CA693] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 border-t border-[#1F2C27] space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-[#0CA693] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href="#booking"
                  onClick={() => onSelectService && onSelectService(service.id)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#18231F] text-gray-200 border border-[#2E453D] hover:bg-[#087F70] hover:text-white hover:border-[#D6B46A] hover:shadow-lg hover:shadow-[#087F70]/30 active:bg-[#D6B46A] active:text-[#101715] active:border-[#F5DFAB] active:scale-95 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Select for Booking</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Bonus Promo Card: Complete Monthly Package Bundle */}
          <div className="glass-card rounded-2xl p-6 border-2 border-[#D6B46A]/40 flex flex-col justify-between bg-gradient-to-b from-[#18231F] to-[#121A17] relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D6B46A]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#D6B46A]/20 border border-[#D6B46A]/30 text-[11px] font-bold text-[#D6B46A]">
                <Shield className="w-3 h-3" />
                <span>COMPLETE CARE PACKAGE</span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Monthly Package Includes All Services
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Save significantly with our 12-wash monthly program. Get continuous waterless washing, 
                tyre gloss, alloy brake dust removal, and mirror cleaning delivered directly to your assigned parking bay.
              </p>

              <div className="p-4 rounded-xl bg-[#141D1A] border border-[#23332D] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-300">Saloon 12 Washes</span>
                  <span className="font-bold text-white text-sm">120 AED <span className="text-gray-400 font-normal text-[10px]">/ mo</span></span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-[#1C2723]">
                  <span className="text-gray-300">SUV 12 Washes</span>
                  <span className="font-bold text-white text-sm">150 AED <span className="text-gray-400 font-normal text-[10px]">/ mo</span></span>
                </div>
              </div>
            </div>

            <div className="pt-6 relative">
              <a
                href="#pricing"
                className="btn-gold w-full text-xs font-bold py-3 uppercase tracking-wider text-center"
              >
                View Package Details
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
