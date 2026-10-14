import React from 'react';
import { Check, Sparkles, Shield, ArrowUpRight, Droplet, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/services';

export default function Services({ onSelectService }) {
  const procedureSteps = [
    {
      step: '01',
      title: 'Surface Assessment & Poly-Mist Spray',
      desc: 'High-lubricity polymer mist penetrates and encapsulates fine sand and desert grit, floating dirt away from clear coat without water.',
      highlight: 'Scratch-free lift',
    },
    {
      step: '02',
      title: '500+ GSM Microfiber Lift Stroke',
      desc: 'Hospital-grade edgeless microfiber towels sweep in gentle single-direction linear passes, rolling away encapsulated dirt without friction.',
      highlight: 'Zero swirl marks',
    },
    {
      step: '03',
      title: 'Secondary Buff & Hydrophobic Shield',
      desc: 'Clean ultra-dense microfiber buffs the polymer into an ultra-slick anti-static shield that repels desert sand and enhances gloss depth.',
      highlight: 'Deep mirror shine',
    },
    {
      step: '04',
      title: 'Non-Sling Tyre Conditioning',
      desc: 'Specialized UV-inhibiting tyre dressing shields rubber against intense Dubai asphalt heat, restoring a rich satin showroom black.',
      highlight: 'UV & heat defence',
    },
    {
      step: '05',
      title: 'Rims & Brake Dust Precision Detail',
      desc: 'Neutral-pH formulation breaks down stubborn metallic brake dust and road grime across complex alloy wheels and spokes.',
      highlight: 'Safe for all alloys',
    },
    {
      step: '06',
      title: 'Optical Clarity Glass & Mirror Polish',
      desc: 'Streak-free optical cleaning removes haze from side mirrors, panoramic roofs, and windshields for spotless night driving clarity.',
      highlight: 'Streak-free optical clarity',
    },
  ];

  return (
    <section id="procedure" className="py-14 sm:py-20 bg-[#131A21] relative overflow-hidden border-t border-[#384959]/50">
      {/* Anchor alias for services */}
      <span id="services" className="absolute -top-24 pointer-events-none" />

      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#88BDF2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#6A89A7]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC]">
            <Sparkles className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>STANDARDIZED OPERATIONAL PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Standardized <span className="palette-gradient-text">Vehicle Cleaning Procedure</span>
          </h2>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
            Engineered specifically for Dubai’s climate and luxury automotive finishes.
            Our 6-step waterless procedure encapsulates desert sand, protects ceramic coats,
            and delivers showroom gloss right at your parking spot with zero wastewater runoff.
          </p>
        </div>

        {/* 6-Step Visual Procedure Workflow Timeline */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#88BDF2]"></span>
              <span>The 6-Step Waterless Detailing Workflow</span>
            </h3>
            <span className="text-xs text-[#BDDDFC] font-medium hidden sm:inline-block">
              Hospital-Grade Automotive Protocols
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {procedureSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="rounded-2xl bg-[#182029] border border-[#384959] p-5 sm:p-6 space-y-3 relative group hover:border-[#88BDF2] hover:bg-[#1E2833] transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#88BDF2] font-mono tracking-wider">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1B242D] border border-[#4A5F74] text-[#BDDDFC]">
                    {stepItem.highlight}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#BDDDFC] transition-colors">
                  {stepItem.title}
                </h4>
                <p className="text-xs text-slate-100 leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Procedure Capabilities Grid */}
        <div className="mb-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Specialized Care & Equipment Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Each component of our service utilizes dedicated tools, color-coded microfiber towels, and certified eco formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group glass-card rounded-2xl overflow-hidden border border-[#384959] hover:border-[#88BDF2] flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative h-52 overflow-hidden bg-[#182029]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#182029] via-transparent to-black/20" />

                    {/* Recommended badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#1B242D]/95 backdrop-blur-md border border-[#4A5F74] text-[11px] font-semibold text-[#BDDDFC]">
                      {service.recommendedFor}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-[#88BDF2] tracking-wide uppercase">
                        {service.tagline}
                      </span>
                      <h4 className="text-xl font-bold text-white mt-1 group-hover:text-[#BDDDFC] transition-colors">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-100 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="pt-2 border-t border-[#384959]/70 space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-100">
                          <Check className="w-3.5 h-3.5 text-[#88BDF2] shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-100">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <a
                    href="#contact-form"
                    onClick={() => onSelectService && onSelectService(service.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1B242D] text-slate-100 border border-[#384959] hover:bg-[#88BDF2] hover:text-[#0E1620] hover:border-[#BDDDFC] hover:shadow-lg hover:shadow-[#88BDF2]/30 active:bg-[#6A89A7] active:text-white active:scale-95 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Select for Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}

            {/* 6th Card: Eco Safety & Quality Guarantee */}
            <div className="glass-card rounded-2xl p-6 border-2 border-[#88BDF2]/60 flex flex-col justify-between bg-gradient-to-b from-[#232F3D] to-[#182029] relative overflow-hidden shadow-xl shadow-[#88BDF2]/10">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#88BDF2]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#88BDF2]/20 border border-[#88BDF2]/40 text-[11px] font-bold text-[#BDDDFC]">
                  <Shield className="w-3 h-3 text-[#88BDF2]" />
                  <span>ENVIRONMENTAL & SAFETY CERTIFIED</span>
                </div>

                <h4 className="text-xl font-bold text-white">
                  Zero-Runoff & Clear Coat Safety Guarantee
                </h4>

                <p className="text-sm text-slate-100 leading-relaxed font-normal">
                  Our waterless cleaning protocols comply with Dubai Municipality environmental directives.
                  Approved for all luxury indoor residential and mall parking structures.
                </p>

                <div className="p-4 rounded-xl bg-[#131A21] border border-[#384959] space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                    <span>Zero wastewater runoff or slippery parking floor puddles</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                    <span>Third-Party Liability (TPL) comprehensive coverage</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                    <span>Trained detailing technicians with background verification</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 relative">
                <a
                  href="#contact-form"
                  className="btn-primary w-full text-xs font-bold py-3 uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <span>Book Vehicle Cleaning Procedure</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
