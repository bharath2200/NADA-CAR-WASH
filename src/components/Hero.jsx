import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, DropletOff, Calendar, Award } from 'lucide-react';

export default function Hero({ onOpenBooking }) {

  return (
    <section id="home" className="relative min-h-[85vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center overflow-hidden bg-[#101715]">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#087F70]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#D6B46A]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#18231F_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18231F] border border-[#2E453D] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#087F70] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-gray-200">
                NADA AL RABEE CAR WASHING LLC · DUBAI, UAE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Premium Waterless <br className="hidden sm:inline" />
              <span className="teal-gradient-text">Car Wash in Dubai</span>
            </h1>

            {/* Subtitle / Supporting message */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the pinnacle of sustainable automotive care. We deliver showroom-grade, 
              scratch-free waterless washing right to your residential parking slot, mall, or office complex. 
              Zero puddles, zero water waste, maximum gloss.
            </p>

            {/* Key Value Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18231F]/80 border border-[#23332D]">
                <DropletOff className="w-4 h-4 text-[#0CA693]" />
                <span>100% Waterless & Basement-Safe</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18231F]/80 border border-[#23332D]">
                <ShieldCheck className="w-4 h-4 text-[#D6B46A]" />
                <span>TPL Insured & DED Registered</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18231F]/80 border border-[#23332D]">
                <Calendar className="w-4 h-4 text-[#0CA693]" />
                <span>Operating Since 2020</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#booking"
                className="w-full sm:w-auto btn-primary text-base font-semibold px-8 py-3.5 shadow-xl shadow-[#087F70]/25 group"
              >
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Book a Wash</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto btn-secondary text-base font-medium px-7 py-3.5"
              >
                Explore Services
              </a>
            </div>

            {/* Package teaser */}
            <div className="pt-2 text-xs text-gray-400 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D6B46A]"></span>
              <span>Monthly 12-Wash Subscriptions start from just <strong className="text-white font-semibold">120 AED</strong> for Saloons & <strong className="text-white font-semibold">150 AED</strong> for SUVs.</span>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#087F70]/40 via-[#2E453D] to-[#D6B46A]/30 shadow-2xl overflow-hidden group">
                <div className="relative rounded-[14px] overflow-hidden bg-[#141D1A]">
                  <img
                    src="https://i.ibb.co/G3bgNsLt/NAR-Luxury-Car-Wash-Dubai-skyline.png"
                    alt="NAR Car Wash Premium Detailing in Dubai"
                    className="w-full h-[360px] sm:h-[440px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle vignette shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101715] via-transparent to-black/20" />
                </div>
              </div>

              {/* Floating Badge 1: Monthly Package */}
              <div className="absolute -bottom-4 left-2 sm:-left-6 bg-[#18231F]/95 backdrop-blur-md border border-[#2E453D] rounded-xl p-3 sm:p-3.5 shadow-2xl flex items-center gap-3">
                <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#087F70]/20 flex items-center justify-center text-[#0CA693] shrink-0">
                  <Award className="w-5 h-5 text-[#0CA693]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs text-gray-400 font-medium">Monthly 12-Wash Plan</div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-baseline gap-1">
                    <span className="text-[#D6B46A]">120 AED</span>
                    <span className="text-[10px] sm:text-[11px] text-gray-400 font-normal">/ Saloon</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Sustainable Waterless */}
              <div className="absolute -top-3 right-2 sm:-right-4 bg-[#18231F]/95 backdrop-blur-md border border-[#2E453D] rounded-xl py-2 px-3 sm:py-2.5 sm:px-3.5 shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#087F70] animate-ping shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-gray-200">
                  Zero Water Wastage
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
