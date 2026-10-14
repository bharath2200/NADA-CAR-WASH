import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Shield, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight,
  Droplet,
  Award,
  Layers,
  Wrench
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { createWhatsAppUrl, BUSINESS_PHONE_DISPLAY } from '../utils/whatsapp';

export default function ServicesPage({ onBack, onOpenBooking, onSelectService }) {
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

  const whatsappServicesUrl = createWhatsAppUrl(
    'Hello NAR Car Wash, I am reviewing your Vehicle Cleaning Procedure and Services and would like to book a wash.'
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
            <Wrench className="w-4 h-4 text-[#88BDF2]" />
            <span>STANDARDIZED OPERATIONAL PROCESS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Standardized <span className="palette-gradient-text">Vehicle Cleaning Procedure</span>
          </h1>

          <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Engineered specifically for Dubai’s climate, high temperatures, and luxury automotive finishes. 
            Our 6-step waterless procedure encapsulates desert sand, protects ceramic coats, 
            and delivers showroom gloss right at your parking spot with zero wastewater runoff.
          </p>
        </div>

        {/* Flagship Dubai Detailing Showcase Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-tr from-[#88BDF2]/40 via-[#384959] to-[#6A89A7]/40 shadow-2xl overflow-hidden">
          <div className="relative rounded-[22px] overflow-hidden bg-[#182029]">
            <img
              src="https://i.ibb.co/G3bgNsLt/NAR-Luxury-Car-Wash-Dubai-skyline.png"
              alt="NAR Car Wash Premium Detailing in Dubai"
              className="w-full h-[260px] sm:h-[380px] md:h-[440px] object-cover object-center"
            />
            {/* Subtle vignette shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131A21] via-transparent to-black/20" />

            {/* Floating Badge 1: Safe Detailing Protocol */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-6 bg-[#1B242D]/95 backdrop-blur-md border border-[#4A5F74] rounded-xl p-2.5 sm:p-3.5 shadow-2xl flex items-center gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-[#384959]/50 flex items-center justify-center text-[#88BDF2] shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#88BDF2]" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-medium">Safe Detailing Protocol</div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-baseline gap-1">
                  <span className="text-[#BDDDFC]">Scratch-Free</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 font-normal">Hand Clean</span>
                </div>
              </div>
            </div>

            {/* Floating Badge 2: Sustainable Waterless */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-6 bg-[#1B242D]/95 backdrop-blur-md border border-[#4A5F74] rounded-xl py-1.5 px-2.5 sm:py-2.5 sm:px-3.5 shadow-2xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#88BDF2] animate-ping shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold text-slate-100">
                Zero Water Wastage
              </span>
            </div>
          </div>
        </div>

        {/* 6-Step Visual Procedure Workflow Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#88BDF2]"></span>
              <span>The 6-Step Waterless Detailing Workflow</span>
            </h2>
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
                <h3 className="text-base font-bold text-white group-hover:text-[#BDDDFC] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-100 leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Procedure Capabilities Grid */}
        <div className="space-y-8 pt-6 border-t border-[#384959]/50">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC]">
              <Layers className="w-3.5 h-3.5 text-[#88BDF2]" />
              <span>EQUIPMENT & FORMULATION EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Specialized Care & Equipment Capabilities
            </h2>
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
                      <h3 className="text-xl font-bold text-white mt-1 group-hover:text-[#BDDDFC] transition-colors">
                        {service.title}
                      </h3>
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
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(service.id);
                      } else if (onOpenBooking) {
                        onOpenBooking();
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1B242D] text-slate-100 border border-[#384959] hover:bg-[#88BDF2] hover:text-[#0E1620] hover:border-[#BDDDFC] hover:shadow-lg hover:shadow-[#88BDF2]/30 active:bg-[#6A89A7] active:text-white active:scale-95 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Select for Booking</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Eco Safety & Quality Guarantee */}
            <div className="glass-card rounded-2xl p-6 border-2 border-[#88BDF2]/60 flex flex-col justify-between bg-gradient-to-b from-[#232F3D] to-[#182029] relative overflow-hidden shadow-xl shadow-[#88BDF2]/10">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#88BDF2]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#88BDF2]/20 border border-[#88BDF2]/40 text-[11px] font-bold text-[#BDDDFC]">
                  <Shield className="w-3 h-3 text-[#88BDF2]" />
                  <span>ENVIRONMENTAL & SAFETY CERTIFIED</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Zero-Runoff & Clear Coat Safety Guarantee
                </h3>

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
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="btn-primary w-full text-xs font-bold py-3 uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Vehicle Cleaning Procedure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1B242D] via-[#232F3D] to-[#182029] border border-[#384959] p-8 sm:p-10 text-center space-y-5 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Experience Dubai's Finest Waterless Detailing?
            </h3>
            <p className="text-slate-100 text-sm">
              We bring showroom gloss directly to your assigned parking bay. 
              Zero hassle, zero mess, 100% satisfaction guaranteed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-primary text-xs font-bold py-3.5 px-7 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book a Wash Online</span>
            </button>

            <a
              href={whatsappServicesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs font-semibold py-3.5 px-6 flex items-center gap-2"
            >
              <img src="/images/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Book Instant on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
