import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Eye, X, Check } from 'lucide-react';

export default function PosterShowcase({ onOpenBooking }) {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const posters = [
    {
      id: 1,
      name: 'Poster 1',
      src: '/images/poster-1.jpg',
      badge: 'Step 01 · Exterior Care',
      title: 'Scratch-Free Waterless Hand Wash',
      desc: 'High-lubricity polymer spray encapsulates Dubai desert sand, lifted away with 500+ GSM microfiber towels without a drop of water.',
      highlights: ['Zero Swirl Marks', '100% Waterless', 'Underground Bay Safe'],
      serviceKey: 'waterless-wash',
    },
    {
      id: 2,
      name: 'Poster 2',
      src: '/images/poster-2.jpg',
      badge: 'Step 02 · Paint Protection',
      title: 'Showroom Polish & Hydrophobic Seal',
      desc: 'Ultra-slick protective polymer coat hand-buffed to a mirror finish. Repels airborne sand and shields paint from intense UAE heat.',
      highlights: ['Deep Mirror Gloss', 'UV & Heat Shield', 'Ceramic & Wrap Safe'],
      serviceKey: 'body-polish',
    },
    {
      id: 3,
      name: 'Poster 3',
      src: '/images/poster-3.jpg',
      badge: 'Step 03 · Wheels & Tyres',
      title: 'Alloy Wheels & Tyre Detailing',
      desc: 'Deep brake dust dissolution across multi-spoke rims, finished with premium non-sling satin black tyre dressing with zero floor puddles.',
      highlights: ['Safe for All Alloys', 'Non-Sling Satin Black', 'Basement Parking Safe'],
      serviceKey: 'tyre-polish',
    },
  ];

  return (
    <section id="detailing-gallery" className="py-14 sm:py-20 bg-[#131A21] relative overflow-hidden border-t border-[#384959]/50">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-[#88BDF2]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#6A89A7]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC]">
            <Sparkles className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>PRECISION HAND DETAILING IN ACTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Handcrafted Care. <span className="palette-gradient-text">Showroom Results.</span>
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            See how our trained Dubai technicians treat every vehicle with specialized scratch-free polymer formulas, 
            edgeless microfibers, and zero messy water puddles.
          </p>
        </div>

        {/* 3 Posters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="group glass-card rounded-2xl border border-[#384959] overflow-hidden hover:border-[#88BDF2] hover:bg-[#1E2833] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Poster Image Container with Interactive Zoom Trigger */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-[#182029] cursor-pointer"
                onClick={() => setSelectedPoster(poster)}
              >
                <img
                  src={poster.src}
                  alt={poster.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131A21] via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Floating Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1B242D]/95 backdrop-blur-md border border-[#384959] text-[10px] sm:text-[11px] font-semibold text-[#BDDDFC]">
                  {poster.badge}
                </div>

                {/* Click to Expand Overlay */}
                <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-[#1B242D]/90 border border-[#384959] text-slate-200 group-hover:text-white group-hover:border-[#88BDF2] transition-colors flex items-center gap-1 text-[11px]">
                  <Eye className="w-3.5 h-3.5 text-[#88BDF2]" />
                  <span className="hidden sm:inline text-[10px]">Preview</span>
                </div>
              </div>

              {/* Poster Details */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#BDDDFC] transition-colors leading-snug">
                    {poster.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {poster.desc}
                  </p>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-1.5 pt-3 border-t border-[#384959]/60">
                  {poster.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#88BDF2] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenBooking) onOpenBooking();
                      else {
                        const el = document.querySelector('#contact-form');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1B242D] text-slate-100 border border-[#384959] hover:bg-[#88BDF2] hover:text-[#0E1620] hover:border-[#BDDDFC] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Book This Wash</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Callout Banner */}
        <div className="rounded-2xl bg-[#1B242D] border border-[#384959] p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-sm sm:text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#88BDF2]" />
              <span>100% Waterless & Safe for Underground Parking</span>
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              Zero water runoff, zero puddles, and zero risk of slips. Approved across major Dubai residential towers.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (onOpenBooking) onOpenBooking();
              else {
                const el = document.querySelector('#contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-xs uppercase font-bold py-2.5 px-6 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Schedule a Wash
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Full Image Inspection */}
      {selectedPoster && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPoster(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#182029] border border-[#384959] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#384959] bg-[#1B242D]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#BDDDFC] uppercase tracking-wide">
                  {selectedPoster.name}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-300">{selectedPoster.title}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#232E3A] transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPoster.src}
                alt={selectedPoster.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#1B242D] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#384959]">
              <p className="text-xs text-slate-300 text-center sm:text-left">
                {selectedPoster.desc}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedPoster(null);
                  if (onOpenBooking) onOpenBooking();
                  else {
                    const el = document.querySelector('#contact-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary text-xs uppercase font-bold py-2 px-5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
