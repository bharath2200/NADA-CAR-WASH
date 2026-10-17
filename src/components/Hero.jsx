import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Droplets, MapPin } from 'lucide-react';

export default function Hero({ onOpenBooking, onExploreServices }) {
  return (
    <section id="home" className="relative min-h-[100svh] min-h-[100dvh] h-[100dvh] sm:h-auto sm:min-h-screen pt-16 pb-2 sm:pt-24 sm:pb-8 flex flex-col justify-between items-center overflow-hidden bg-[#131A21]">
      {/* Background Dubai Skyline at Dusk with High Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://i.ibb.co/TqrZhWkt/Moody-Dubai-Skyline-at-Dusk.png"
          alt="Moody Dubai Skyline at Dusk"
          className="w-full h-full object-cover object-[65%_center] sm:object-center opacity-75"
        />
        {/* Soft atmospheric overlay: keeps skyline and sunset vivid while ensuring WCAG AAA text contrast */}
        <div className="absolute inset-0 bg-[#0E1620]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131A21] via-transparent to-[#131A21]/80" />
      </div>

      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#88BDF2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#6A89A7]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content - Clean, Balanced & Vertically Centered */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center flex-1 flex flex-col justify-center items-center py-1 sm:py-6">

        {/* Top Location / Service Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#1B242D]/90 backdrop-blur-md border border-[#384959] shadow-inner mb-2.5 sm:mb-6">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#88BDF2] animate-pulse" />
          <span className="text-[11px] sm:text-sm font-semibold tracking-wide text-[#BDDDFC]">
            PREMIUM WATERLESS CAR WASH · DUBAI, UAE
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="text-2xl xs:text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.14] mb-2 sm:mb-6">
          NADA AL RABEE CAR <br className="hidden sm:inline" />
          <span className="palette-gradient-text">WASHING LLC</span>
        </h1>

        {/* Subtitle / Bio */}
        <p className="text-xs sm:text-base md:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed mb-3 sm:mb-8 px-2">
          Showroom-grade, scratch-free waterless car washing delivered right to your parking bay across Dubai. Zero puddles, maximum gloss.
        </p>

        {/* Clean Trust Features */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 mb-3.5 sm:mb-9 text-[11px] sm:text-sm font-medium text-slate-300">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#1B242D]/70 border border-[#384959]/60 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>Scratch-Free Formula</span>
          </div>
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#1B242D]/70 border border-[#384959]/60 backdrop-blur-sm">
            <Droplets className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>100% Waterless</span>
          </div>
          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#1B242D]/70 border border-[#384959]/60 backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>To Your Parking Bay</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto">
          <a
            href="#contact-form"
            onClick={() => onOpenBooking && onOpenBooking()}
            className="w-full sm:w-auto btn-primary text-sm sm:text-base font-bold px-6 sm:px-8 py-2.5 sm:py-3.5 group flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#88BDF2]/20"
          >
            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Book a Wash</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={() => onExploreServices && onExploreServices()}
            className="w-full sm:w-auto btn-secondary text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-center cursor-pointer"
          >
            Explore Services
          </button>
        </div>

      </div>

      {/* Bottom Quality & Safety Guarantee */}
      <div className="relative z-10 w-full px-4 text-center pb-2 sm:pb-3 pt-0.5">
        <p className="text-[10px] sm:text-xs text-slate-300 max-w-md mx-auto text-center leading-normal">
          Proprietary scratch-free polymer formula safe for ceramic coats, wraps, and delicate clear coats.
        </p>
      </div>
    </section>
  );
}
