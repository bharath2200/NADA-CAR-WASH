import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Droplet, 
  Users, 
  CheckCircle2, 
  FileCheck2, 
  Info, 
  ArrowLeft, 
  Sparkles, 
  ArrowRight,
  Award,
  Layers,
  MapPin,
  Calendar,
  Lock
} from 'lucide-react';
import { TRUST_FACTORS } from '../data/services';

export default function AboutPage({ onBack, onOpenBooking }) {
  return (
    <div className="min-h-screen bg-[#131A21] text-[#F8FAFC] pt-24 sm:pt-28 pb-16 relative overflow-hidden">
      
      {/* Background ambient radial gradients */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[500px] bg-[#88BDF2]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[450px] bg-[#6A89A7]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12 sm:space-y-16">

        {/* Page Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC] shadow-inner">
            <Building2 className="w-4 h-4 text-[#88BDF2]" />
            <span>ESTABLISHED IN DUBAI, UAE · 2020</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            About <span className="palette-gradient-text">NADA AL RABEE</span> CAR WASHING LLC
          </h1>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal max-w-3xl mx-auto">
            Operating under the commercial brand <strong className="text-white font-semibold">NAR Car Wash & Cleaning Services</strong>, 
            we are a fully licensed, insured, and certified Dubai automotive care enterprise dedicated to pioneering 
            sustainable, scratch-free, and waterless detailing across the United Arab Emirates.
          </p>
        </div>

        {/* Key Company Numbers & Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-5 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#88BDF2] font-mono">2020</div>
            <div className="text-xs text-slate-200 font-medium">Founded in Dubai</div>
          </div>
          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-5 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#BDDDFC] font-mono">100%</div>
            <div className="text-xs text-slate-200 font-medium">Waterless Zero-Runoff</div>
          </div>
          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-5 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#88BDF2] font-mono">DED</div>
            <div className="text-xs text-slate-200 font-medium">Licensed Enterprise</div>
          </div>
          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-5 text-center space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#BDDDFC] font-mono">TPL</div>
            <div className="text-xs text-slate-200 font-medium">Insured Operations</div>
          </div>
        </div>

        {/* Story & Background Section */}
        <div className="rounded-3xl bg-[#1B242D] border border-[#384959] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#88BDF2]/20 border border-[#88BDF2]/30 text-xs font-bold text-[#BDDDFC]">
                <Award className="w-3.5 h-3.5 text-[#88BDF2]" />
                <span>OUR STORY & PHILOSOPHY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Pioneering Sustainable Automotive Care in the Desert Metropolis
              </h2>

              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Dubai is home to some of the world’s most pristine luxury vehicles, but maintaining them presents 
                unique challenges: fine desert sand, extreme pavement heat, and strict municipal regulations regarding 
                water wastage and basement runoff.
              </p>

              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Founded in 2020, <strong className="text-white">NADA AL RABEE CAR WASHING LLC</strong> was created 
                specifically to revolutionize traditional car washing. By replacing high-pressure water hoses with 
                advanced polymer encapsulation technology and hospital-grade microfibers, we clean and protect vehicles 
                right in their assigned parking bays without creating a single puddle or risk of clear-coat marring.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#BDDDFC]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2]" />
                  <span>Safe for Ceramic Coatings & PPF</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2]" />
                  <span>Approved for Underground Parking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#88BDF2]" />
                  <span>Zero Wastewater Runoff</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#384959] shadow-2xl bg-[#182029]">
                <img
                  src="/images/service-waterless.jpg"
                  alt="NADA AL RABEE Waterless Detailing in Dubai"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131A21] via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#1B242D]/95 backdrop-blur-md border border-[#4A5F74] text-xs text-slate-200">
                  <strong className="text-white block font-semibold mb-0.5">Eco-Friendly Formulation:</strong>
                  Emulsifies road dust and encapsulates abrasive sand on contact.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Corporate Trust Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Corporate Standards & Accreditations
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Six foundational pillars guaranteeing dependability, safety, and operational excellence across Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* 1. Founded 2020 */}
            <div className="glass-card p-6 rounded-2xl border border-[#384959] hover:border-[#88BDF2] space-y-3 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#384959]/50 flex items-center justify-center text-[#88BDF2]">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Founded in 2020</h3>
              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Established in Dubai in 2020, NAR has continuously provided dependable, eco-conscious car washing 
                operations tailored to local climate and residential lifestyle demands.
              </p>
            </div>

            {/* 2. DED Registered */}
            <div className="glass-card p-6 rounded-2xl border border-[#384959] hover:border-[#88BDF2] space-y-3 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#384959]/50 flex items-center justify-center text-[#BDDDFC]">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">DED Registered Enterprise</h3>
              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Officially registered and compliant with the Dubai Department of Economy and Tourism 
                (Dubai Economic Development — DED), maintaining transparent, verified business operations.
              </p>
            </div>

            {/* 3. TPL Insurance */}
            <div className="glass-card p-6 rounded-2xl border border-[#384959] hover:border-[#88BDF2] space-y-3 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#384959]/50 flex items-center justify-center text-[#88BDF2]">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Third-Party Liability (TPL)</h3>
              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Comprehensive Third-Party Liability insurance coverage protects both property owners and car owners 
                during all on-site mobile washing activities.
              </p>
            </div>

            {/* 4. Waterless Car Wash */}
            <div className="glass-card p-6 rounded-2xl border border-[#384959] hover:border-[#88BDF2] space-y-3 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#384959]/50 flex items-center justify-center text-[#BDDDFC]">
                <Droplet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Waterless Care Specialization</h3>
              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Pioneering waterless cleaning techniques that eliminate slippery underground parking puddles, 
                save millions of liters of fresh water, and safeguard clear coats from sand scratches.
              </p>
            </div>

            {/* 5. Trained Staff & Safety */}
            <div className="glass-card p-6 rounded-2xl border border-[#384959] hover:border-[#88BDF2] space-y-3 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#384959]/50 flex items-center justify-center text-[#88BDF2]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Trained Professionals & Safety</h3>
              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Our uniformed technicians undergo rigorous training in paint-safe detailing techniques, 
                color-coded microfibre separation, and respectful client property handling.
              </p>
            </div>

            {/* 6. Approved Formulations */}
            <div className="glass-card p-6 rounded-2xl border border-[#384959] hover:border-[#88BDF2] space-y-3 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#384959]/50 flex items-center justify-center text-[#BDDDFC]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Approved Cleaning Formulations</h3>
              <p className="text-sm text-slate-100 leading-relaxed font-normal">
                Our specialized car-cleaning and waxing agents are formulated to meet Dubai Municipality 
                safety and environmental standards, guaranteeing zero hazardous residues.
              </p>
            </div>

          </div>
        </div>

        {/* Operational Compliance Callout */}
        <div className="rounded-2xl bg-[#182029] border border-[#384959] p-6 text-xs sm:text-sm text-slate-200 flex items-start gap-4 shadow-xl">
          <Info className="w-5 h-5 text-[#88BDF2] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-white font-bold">Operational Compliance & Legal Notice</h4>
            <p className="leading-relaxed">
              NADA AL RABEE CAR WASHING LLC maintains full commercial licensing under the Government of Dubai 
              Department of Economy and Tourism (DED) and holds active Third-Party Liability (TPL) insurance. 
              Our waterless procedures strictly conform to Dubai Municipality environmental guidelines and are 
              approved for deployment in residential buildings, shopping mall basements, and corporate headquarters.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1B242D] via-[#232F3D] to-[#182029] border border-[#384959] p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Experience the NAR Standard of Automotive Care
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Book a waterless wash for your vehicle or contact our commercial operations desk for customized 
              residential and corporate parking contracts in Dubai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onBack}
              className="btn-secondary text-xs font-semibold py-3.5 px-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View Vehicle Cleaning Procedure</span>
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="btn-primary text-xs font-bold py-3.5 px-7 flex items-center gap-2"
            >
              <span>Book a Wash / Contact Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
