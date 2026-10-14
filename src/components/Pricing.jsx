import React from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/services';

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="pricing" className="py-12 sm:py-16 bg-[#101715] relative overflow-hidden border-t border-[#1C2723]">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#087F70]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18231F] border border-[#23332D] text-xs font-semibold text-[#D6B46A]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT VALUE RATES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple, Transparent <span className="teal-gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
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
                    ? 'bg-gradient-to-b from-[#1C2924] to-[#141E1A] border-2 border-[#087F70] shadow-2xl shadow-[#087F70]/20 scale-[1.02] z-10'
                    : 'glass-card border border-[#23332D] hover:border-[#2E453D]'
                }`}
              >
                {/* Popular Ribbon / Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-md ${
                        isPopular
                          ? 'bg-[#087F70] text-white'
                          : 'bg-[#18231F] text-[#D6B46A] border border-[#D6B46A]/40'
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
                    <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">
                      {plan.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {plan.vehicleType}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {plan.washes}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className="py-4 border-y border-[#23332D] flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-[#D6B46A]">{plan.currency}</span>
                      <span className="text-[11px] text-gray-400">
                        {plan.id === 'single-wash' ? '/ wash' : '/ month'}
                      </span>
                    </div>
                  </div>

                  {/* Rate breakdown note */}
                  <div className="text-xs font-medium text-[#0CA693] bg-[#087F70]/10 border border-[#087F70]/20 rounded-lg p-2.5">
                    {plan.rateNote}
                  </div>

                  {/* Plan description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold uppercase text-gray-400 tracking-wider">
                      Included in this plan:
                    </div>
                    {plan.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#087F70] shrink-0 mt-0.5" />
                        <span>{inc}</span>
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
                        ? 'btn-primary shadow-lg shadow-[#087F70]/30'
                        : 'bg-[#18231F] text-white border border-[#2E453D] hover:border-[#087F70] hover:bg-[#202F29]'
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

        {/* Pricing Policy Disclaimer note as required by PRD FR-04 */}
        <div className="mt-8 rounded-xl bg-[#141D1A] border border-[#23332D] p-4 sm:p-5 text-xs text-gray-400 max-w-3xl mx-auto flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-[#D6B46A] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-gray-300 font-semibold">Pricing & Currency Clarification (AED):</p>
            <p>
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
