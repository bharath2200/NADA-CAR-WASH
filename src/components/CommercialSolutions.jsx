import React, { useState } from 'react';
import { Building, ShieldCheck, CheckCircle2, MessageSquare, Phone, Send, ArrowRight, Check } from 'lucide-react';
import { COMMERCIAL_SOLUTIONS } from '../data/services';
import { createWhatsAppUrl, generateCommercialMessage } from '../utils/whatsapp';

export default function CommercialSolutions() {
  const [formData, setFormData] = useState({
    contactPerson: '',
    companyName: '',
    email: '',
    phone: '',
    propertyType: 'Residential Community',
    parkingSpaces: '',
    requirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const propertyTypes = [
    'Residential Community / Tower',
    'Shopping Mall / Retail Center',
    'Commercial Office Complex',
    'Facility Management Subcontract',
    'Corporate Fleet Operator',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Contact person name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company / property name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required';
    }
    if (!formData.requirements.trim()) {
      errs.requirements = 'Please describe your property or service requirements';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable API endpoint submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleWhatsAppCommercial = () => {
    const msg = generateCommercialMessage(formData);
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="commercial" className="py-12 sm:py-16 bg-[#101715] relative overflow-hidden border-t border-[#1C2723]">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#087F70]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18231F] border border-[#23332D] text-xs font-semibold text-[#0CA693]">
            <Building className="w-3.5 h-3.5" />
            <span>B2B & PROPERTY PARTNERSHIPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Commercial Solutions for <span className="text-[#D6B46A]">Malls & Communities</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Partner with NADA AL RABEE CAR WASHING LLC to elevate parking amenities, enhance resident satisfaction, 
            and eliminate water damage in basements with our fully insured, DED-compliant waterless service.
          </p>
        </div>

        {/* Commercial Banner & Highlights */}
        <div className="relative rounded-3xl overflow-hidden border border-[#23332D] mb-8 sm:mb-10 bg-[#18231F]/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6B46A]">
                Turnkey Operations
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Zero Water Wastewater. <br />
                Maximum Property Value.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Traditional wet car washes create hazardous, slippery basement puddles, promote mold, 
                and violate Dubai water conservation directives. Our waterless system guarantees 
                100% dry floors, uniformed staff, and comprehensive Third-Party Liability insurance protection.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#0CA693] shrink-0" />
                  <span>Full TPL Insurance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0CA693] shrink-0" />
                  <span>DED Licensed Crew</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0CA693] shrink-0" />
                  <span>Dry Parking Floors</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0CA693] shrink-0" />
                  <span>Custom Revenue Share</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 h-72 sm:h-96 relative">
              <img
                src="/images/commercial-dubai.jpg"
                alt="Dubai Commercial and Residential Properties"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#18231F] via-transparent to-transparent lg:block hidden" />
            </div>

          </div>
        </div>

        {/* 4 Commercial Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-10">
          {COMMERCIAL_SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className="glass-card p-6 rounded-2xl border border-[#23332D] space-y-3.5 hover:border-[#087F70] transition-colors"
            >
              <h4 className="text-xl font-bold text-white flex items-center justify-between">
                <span>{solution.title}</span>
                <span className="w-2 h-2 rounded-full bg-[#087F70]"></span>
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {solution.summary}
              </p>
              <div className="pt-2 border-t border-[#1F2C27] space-y-2">
                {solution.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#D6B46A] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Inquiry Form (FR-06) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#141D1A] border border-[#2E453D] p-6 sm:p-8 shadow-2xl relative">
          
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Request a Commercial Proposal & Site Survey
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Submit your property details below. Our management team will conduct a site feasibility assessment and prepare a customized operational plan.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4 space-y-5 rounded-2xl bg-[#18231F] border border-[#087F70]">
              <div className="w-16 h-16 rounded-full bg-[#087F70]/20 text-[#0CA693] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Proposal Request Received</h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.contactPerson}</strong>. Our commercial team at NADA AL RABEE CAR WASHING LLC will review your property requirements and contact you within 24 business hours.
                </p>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppCommercial}
                  className="btn-primary text-xs font-semibold py-2.5 px-5 flex items-center gap-2"
                >
                  <img
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span>Speed up on WhatsApp (+971 55 696 5470)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      contactPerson: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      propertyType: 'Residential Community',
                      parkingSpaces: '',
                      requirements: '',
                    });
                  }}
                  className="text-xs text-gray-400 hover:text-white underline py-2"
                >
                  Submit another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Contact Person */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Contact Person Name <span className="text-[#087F70]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Tariq Al Mansoori"
                    className={`w-full px-4 py-3 rounded-xl bg-[#18231F] border ${
                      errors.contactPerson ? 'border-red-500' : 'border-[#23332D]'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                  />
                  {errors.contactPerson && (
                    <p className="text-xs text-red-400 mt-1">{errors.contactPerson}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Company / Property Name <span className="text-[#087F70]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Al Wasl Residence / Marina Mall"
                    className={`w-full px-4 py-3 rounded-xl bg-[#18231F] border ${
                      errors.companyName ? 'border-red-500' : 'border-[#23332D]'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                  />
                  {errors.companyName && (
                    <p className="text-xs text-red-400 mt-1">{errors.companyName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Official Email <span className="text-[#087F70]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.ae"
                    className={`w-full px-4 py-3 rounded-xl bg-[#18231F] border ${
                      errors.email ? 'border-red-500' : 'border-[#23332D]'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Direct Phone / Mobile <span className="text-[#087F70]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className={`w-full px-4 py-3 rounded-xl bg-[#18231F] border ${
                      errors.phone ? 'border-red-500' : 'border-[#23332D]'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#18231F] border border-[#23332D] text-white text-sm focus:outline-none focus:border-[#087F70] transition-colors"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#18231F] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approx Parking Spaces / Vehicles */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Approx. Parking Spaces / Fleet Size (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.parkingSpaces}
                    onChange={(e) => setFormData({ ...formData, parkingSpaces: e.target.value })}
                    placeholder="e.g. 150 bays or 40 fleet vehicles"
                    className="w-full px-4 py-3 rounded-xl bg-[#18231F] border border-[#23332D] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors"
                  />
                </div>

              </div>

              {/* Message / Requirements */}
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                  Service Requirements & Scope <span className="text-[#087F70]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Detail your operational preferences, preferred cleaning schedule (day/night), current car wash concessions, or specific requirements..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#18231F] border ${
                    errors.requirements ? 'border-red-500' : 'border-[#23332D]'
                  } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                />
                {errors.requirements && (
                  <p className="text-xs text-red-400 mt-1">{errors.requirements}</p>
                )}
              </div>

              {/* Form Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-primary py-3.5 px-8 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Commercial Inquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCommercial}
                  className="w-full sm:w-auto btn-secondary text-xs font-medium py-3 px-5 flex items-center gap-2"
                >
                  <img
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span>Send via WhatsApp (+971 55 696 5470)</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
