import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Sparkles, 
  ArrowLeft,
  Building2,
  FileCheck2,
  Send
} from 'lucide-react';
import { COMMERCIAL_SOLUTIONS } from '../data/services';
import { createWhatsAppUrl } from '../utils/whatsapp';

export default function CommercialPage({ onBack, onOpenBooking }) {
  const whatsappCommercialUrl = createWhatsAppUrl(
    'Hello NAR Car Wash team, I am an asset/property manager interested in a commercial waterless car washing contract in Dubai.'
  );

  return (
    <div className="min-h-screen bg-[#131A21] text-[#F8FAFC] pt-24 sm:pt-28 pb-16 relative overflow-hidden">
      
      {/* Background ambient radial gradients */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-[#88BDF2]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[450px] bg-[#6A89A7]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12 sm:space-y-16">

        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC] shadow-inner">
            <Building className="w-4 h-4 text-[#88BDF2]" />
            <span>B2B & PROPERTY PARTNERSHIPS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Commercial <span className="palette-gradient-text">Car Wash Solutions</span>
          </h1>

          <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Turn your parking infrastructure into an upscale, zero-water revenue-generating amenity. 
            We partner with Dubai's premier residential communities, shopping malls, and corporate parks.
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="rounded-3xl bg-[#1B242D] border border-[#384959] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#88BDF2]/20 border border-[#88BDF2]/30 text-xs font-bold text-[#BDDDFC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#88BDF2]" />
                <span>ZERO CAPEX · FULLY INSURED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Turnkey Operations for Asset & Property Managers
              </h2>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal">
                Eliminate messy water hoses, dangerous wet floors, and plumbing overhead. 
                Our uniformed, DED-licensed, and TPL-insured detailing teams deliver scheduled waterless car cleaning directly in assigned bays.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                  <span>Zero Water Drainage</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                  <span>Third-Party Liability (TPL)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                  <span>Dry Parking Floors</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2] shrink-0" />
                  <span>Custom Concession Models</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 h-72 sm:h-96 relative">
              <img
                src="/images/commercial-dubai.jpg"
                alt="Dubai Commercial and Residential Properties"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B242D] via-transparent to-transparent lg:block hidden" />
            </div>

          </div>
        </div>

        {/* 4 Commercial Sectors Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Specialized Solutions by Property Sector
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Customized operating workflows adapted to your facility access, parking bay volume, and tenant demographics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMMERCIAL_SOLUTIONS.map((solution) => (
              <div
                key={solution.id}
                className="glass-card p-6 rounded-2xl border border-[#384959] space-y-3.5 hover:border-[#88BDF2] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    <span>{solution.title}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#88BDF2]"></span>
                  </h3>
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    {solution.summary}
                  </p>
                  <div className="pt-2 border-t border-[#384959]/70 space-y-2">
                    {solution.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-100">
                        <Check className="w-3.5 h-3.5 text-[#88BDF2] shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-100">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#384959]/40">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-[#88BDF2] hover:text-[#BDDDFC] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Proposal for this Sector</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Inquiry CTA Bar */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#1B242D] via-[#232F3D] to-[#182029] border border-[#384959] p-8 sm:p-10 shadow-2xl relative text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A21] border border-[#4A5F74] text-xs font-semibold text-[#BDDDFC]">
              <Sparkles className="w-3.5 h-3.5 text-[#88BDF2]" />
              <span>CUSTOM COMMERCIAL CONTRACTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready for a Tailored Commercial Proposal & Site Survey?
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Our management team conducts complete on-site feasibility assessments for shopping malls, residential towers, 
              business parks, and facility managers across Dubai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-primary text-xs font-bold py-3.5 px-7 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Commercial Inquiry</span>
            </button>
            <a
              href={whatsappCommercialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs font-semibold py-3.5 px-6 flex items-center justify-center gap-2"
            >
              <img src="/images/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Direct WhatsApp Discussion</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
