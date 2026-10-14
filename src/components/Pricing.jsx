import React from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/services';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-12 sm:py-16 bg-[#131A21] relative overflow-hidden border-t border-[#384959]/50">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#88BDF2]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC]">
            <Sparkles className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>TRANSPARENT VALUE RATES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple, Transparent <span className="palette-gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
            Choose our signature 12-wash monthly package for effortless, routine car care directly at your parking slot, 
            or request an on-demand single wash anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 sm:p-7 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#253546] to-[#182029] border-2 border-[#88BDF2] shadow-2xl shadow-[#88BDF2]/20 scale-[1.02] z-10'
                    : 'glass-card border border-[#384959] hover:border-[#6A89A7]'
                }`}
              >
                {/* Popular Ribbon / Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-md ${
                        isPopular
                          ? 'bg-[#88BDF2] text-[#0E1620]'
                          : 'bg-[#1B242D] text-[#BDDDFC] border border-[#6A89A7]/50'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Card Top */}
                <div className="space-y-6">
                  
                  {/* Vehicle Type & Category */}
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                      {plan.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {plan.vehicleType}
                    </h3>
                    <p className="text-xs text-slate-200 mt-1 font-medium">
                      {plan.washes}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className="py-4 border-y border-[#384959] flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-[#BDDDFC]">{plan.currency}</span>
                      <span className="text-[11px] text-slate-300">
                        {plan.id === 'single-wash' ? '/ wash' : '/ month'}
                      </span>
                    </div>
                  </div>

                  {/* Rate breakdown note */}
                  <div className="text-xs font-medium text-[#BDDDFC] bg-[#384959]/40 border border-[#6A89A7]/40 rounded-lg p-2.5">
                    {plan.rateNote}
                  </div>

                  {/* Plan description */}
                  <p className="text-sm text-slate-100 leading-relaxed font-normal">
                    {plan.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold uppercase text-slate-200 tracking-wider">
                      Included in this plan:
                    </div>
                    {plan.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-100">
                        <Check className="w-4 h-4 text-[#88BDF2] shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-100">{inc}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6">
                  <a
                    href="#booking"
                    onClick={() => onSelectPlan && onSelectPlan(plan)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'btn-primary shadow-lg shadow-[#88BDF2]/30'
                        : 'bg-[#1B242D] text-white border border-[#384959] hover:border-[#88BDF2] hover:bg-[#232F3D]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Policy Disclaimer note */}
        <div className="mt-8 rounded-xl bg-[#182029] border border-[#384959] p-4 sm:p-5 text-xs text-slate-200 max-w-3xl mx-auto flex items-start gap-3 shadow-md">
          <HelpCircle className="w-4 h-4 text-[#88BDF2] shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <p className="text-white font-semibold">Pricing & Currency Clarification (AED):</p>
            <p className="text-slate-200">
              All rates are quoted in United Arab Emirates Dirham (AED). 
              Monthly subscriptions cover 12 wash sessions per calendar month (averaging 3 sessions weekly at your designated parking spot). 
              Single wash rates range between 20–25 AED based on vehicle classification and location access. 
              Commercial fleet contracts and property agreements are customized upon request.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
