import React from 'react';
import { ShieldCheck, Droplet, Users, Building2, CheckCircle2, FileCheck2, Info } from 'lucide-react';
import { TRUST_FACTORS } from '../data/services';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#101715] relative overflow-hidden border-t border-[#1C2723]">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#087F70]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18231F] border border-[#23332D] text-xs font-semibold text-[#0CA693]">
            <Building2 className="w-3.5 h-3.5" />
            <span>COMPANY PROFILE & STANDARDS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-[#087F70]">NADA AL RABEE</span> CAR WASHING LLC
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Operating under the brand <strong className="text-white font-medium">NAR Car Wash & Cleaning Services</strong>, 
            we are a specialized Dubai automotive cleaning enterprise dedicated to providing clean, sustainable, 
            and waterless car care across the emirate.
          </p>
        </div>

        {/* Corporate Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          
          {/* Card 1: Founded 2020 */}
          <div className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center text-[#0CA693]">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Founded in 2020</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Established in Dubai in 2020, NAR has continuously provided dependable, eco-conscious car washing operations 
              tailored to local climate and residential lifestyle demands.
            </p>
          </div>

          {/* Card 2: DED Registration */}
          <div className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#D6B46A]/15 flex items-center justify-center text-[#D6B46A]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">DED Registered Enterprise</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Officially registered and compliant with the Dubai Department of Economy and Tourism (Dubai Economic Development — DED), 
              maintaining transparent business practices.
            </p>
          </div>

          {/* Card 3: TPL Insurance Coverage */}
          <div className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center text-[#0CA693]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Third-Party Liability (TPL)</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Comprehensive Third-Party Liability insurance coverage protects both property owners and car owners during all 
              on-site washing activities.
            </p>
          </div>

          {/* Card 4: Waterless Specialization */}
          <div className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center text-[#0CA693]">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Waterless Car Wash Specialization</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pioneering waterless cleaning techniques that eliminate slippery underground parking puddles, 
              save critical water resources, and safeguard paintwork from sand scratches.
            </p>
          </div>

          {/* Card 5: Trained Staff & Safety */}
          <div className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#D6B46A]/15 flex items-center justify-center text-[#D6B46A]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Trained Professionals & Safety</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our uniformed technicians undergo rigorous training in paint-safe detailing techniques, 
              two-bucket microfibre separation, and respectful client property handling.
            </p>
          </div>

          {/* Card 6: Municipality Approved Products */}
          <div className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#087F70]/15 flex items-center justify-center text-[#0CA693]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Approved Cleaning Formulations</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our specialized car-cleaning and waxing agents are formulated to meet Dubai Municipality safety and environmental 
              standards, guaranteeing zero harmful residues.
            </p>
          </div>

        </div>

        {/* Informational Compliance Note as specified in PRD */}
        <div className="rounded-xl bg-[#141D1A] border border-[#23332D] p-4 text-xs text-gray-400 flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
          <p>
            <strong className="text-gray-300">Operational Compliance Notice:</strong> NADA AL RABEE CAR WASHING LLC operates with active 
            commercial registration with Dubai Economic Development (DED) and maintains Third-Party Liability (TPL) insurance. 
            All service protocols respect property guidelines and municipal environmental requirements.
          </p>
        </div>

      </div>
    </section>
  );
}
