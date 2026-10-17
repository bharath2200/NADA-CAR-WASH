import React, { useState, useEffect } from 'react';
import {
  Car,
  Building,
  MessageSquare,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Send,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_RAW,
  BUSINESS_EMAIL,
  createWhatsAppUrl
} from '../utils/whatsapp';

export default function Contact({ preselectedService }) {
  // Tabs: 'vehicle' | 'commercial' | 'general'
  const [inquiryType, setInquiryType] = useState('vehicle');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    // Vehicle wash specific
    vehicleType: 'Saloon', // 'Saloon' | 'SUV'
    serviceSelected: 'Waterless Car Washing',
    location: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 13:00)',
    // Commercial specific
    companyName: '',
    propertyType: 'Residential Community / Tower',
    parkingSpaces: '',
    // Common
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set default preferred date to tomorrow if empty
  useEffect(() => {
    if (!formData.preferredDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const iso = tomorrow.toISOString().split('T')[0];
      setFormData((prev) => ({ ...prev, preferredDate: iso }));
    }
  }, []);

  // Update selected service if passed from upper cards
  useEffect(() => {
    if (preselectedService) {
      setInquiryType('vehicle');
      setFormData((prev) => ({
        ...prev,
        serviceSelected: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone / WhatsApp number is required';
    } else {
      const cleaned = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (cleaned.length < 8) {
        errs.phone = 'Please enter a valid phone number';
      }
    }

    if (inquiryType === 'commercial') {
      if (!formData.companyName.trim()) {
        errs.companyName = 'Company / Property name is required';
      }
      if (!formData.email.trim()) {
        errs.email = 'Official business email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please enter a valid email address';
      }
    }

    if (inquiryType === 'vehicle') {
      if (!formData.location.trim()) {
        errs.location = 'Building name, community, or parking bay is required';
      }
      if (!formData.preferredDate) {
        errs.preferredDate = 'Please select a preferred date';
      }
    }

    return errs;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmitOnline = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#88BDF2', '#BDDDFC', '#6A89A7', '#384959', '#FFFFFF'],
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 400);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    let text = '';
    if (inquiryType === 'vehicle') {
      text =
        `*NAR CAR WASH - VEHICLE CLEANING BOOKING*\n\n` +
        `👤 *Name:* ${formData.fullName}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `🚗 *Vehicle Type:* ${formData.vehicleType}\n` +
        `✨ *Service:* ${formData.serviceSelected}\n` +
        `📍 *Parking Location:* ${formData.location}\n` +
        `📅 *Date:* ${formData.preferredDate}\n` +
        `⏰ *Time Slot:* ${formData.preferredTime}\n` +
        (formData.message ? `📝 *Notes:* ${formData.message}\n` : '') +
        `\nPlease confirm availability for my parking slot.`;
    } else if (inquiryType === 'commercial') {
      text =
        `*NAR CAR WASH - COMMERCIAL PROPOSAL INQUIRY*\n\n` +
        `👤 *Contact Person:* ${formData.fullName}\n` +
        `🏢 *Company / Property:* ${formData.companyName}\n` +
        `🏷️ *Property Type:* ${formData.propertyType}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `🅿️ *Parking Spaces:* ${formData.parkingSpaces || 'TBD'}\n` +
        (formData.message ? `📝 *Requirements:* ${formData.message}\n` : '') +
        `\nPlease connect me with your commercial operations manager.`;
    } else {
      text =
        `*NAR CAR WASH - GENERAL INQUIRY*\n\n` +
        `👤 *Name:* ${formData.fullName}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        (formData.email ? `📧 *Email:* ${formData.email}\n` : '') +
        `💬 *Message:* ${formData.message || 'I have a question regarding NAR services.'}`;
    }

    const url = createWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const directWhatsAppUrl = createWhatsAppUrl(
    'Hello NAR Car Wash team, I have a general inquiry about your services in Dubai.'
  );

  return (
    <section
      id="contact-form"
      className="py-14 sm:py-20 bg-[#131A21] relative overflow-hidden border-t border-[#384959]/50"
    >
      {/* Anchor alias for existing links */}
      <span id="booking" className="absolute -top-24 pointer-events-none" />
      <span id="contact" className="absolute -top-24 pointer-events-none" />

      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#88BDF2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC]">
            <Sparkles className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>UNIFIED DUBAI INQUIRIES & BOOKING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch & <span className="palette-gradient-text">Book Our Services</span>
          </h2>
          <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
            Whether you need a waterless vehicle clean at your assigned parking bay,
            submit your request below for immediate dispatch confirmation.
          </p>
        </div>

        {/* The 1 Form At Last Card */}
        <div className="rounded-3xl bg-[#182029] border border-[#384959] p-6 sm:p-10 shadow-2xl mb-14 relative">

          {/* Inquiry Type Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 rounded-2xl bg-[#131A21] border border-[#384959]">
            <button
              type="button"
              onClick={() => {
                setInquiryType('vehicle');
                setSubmitted(false);
              }}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${inquiryType === 'vehicle'
                ? 'bg-[#88BDF2] text-[#0E1620] shadow-md shadow-[#88BDF2]/20'
                : 'text-slate-200 hover:text-white hover:bg-[#1B242D]'
                }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>Vehicle Wash Booking</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setInquiryType('commercial');
                setSubmitted(false);
              }}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${inquiryType === 'commercial'
                ? 'bg-[#88BDF2] text-[#0E1620] shadow-md shadow-[#88BDF2]/20'
                : 'text-slate-200 hover:text-white hover:bg-[#1B242D]'
                }`}
            >
              <Building className="w-4 h-4 shrink-0" />
              <span>Commercial Proposal</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setInquiryType('general');
                setSubmitted(false);
              }}
              className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${inquiryType === 'general'
                ? 'bg-[#88BDF2] text-[#0E1620] shadow-md shadow-[#88BDF2]/20'
                : 'text-slate-200 hover:text-white hover:bg-[#1B242D]'
                }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>General Inquiry</span>
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4 space-y-6 rounded-2xl bg-[#1B242D] border border-[#88BDF2]">
              <div className="w-16 h-16 rounded-full bg-[#88BDF2]/20 text-[#88BDF2] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Request Received Successfully</h3>
                <p className="text-sm text-slate-100 max-w-md mx-auto">
                  Thank you, <strong className="text-white font-semibold">{formData.fullName}</strong>.
                  Our dispatch operations team at NADA AL RABEE CAR WASHING LLC has received your details
                  and will contact you directly to confirm.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="btn-primary text-xs font-semibold py-3 px-6 flex items-center gap-2"
                >
                  <img src="/images/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                  <span>Speed up via WhatsApp Confirmation</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-300 hover:text-white underline py-2"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitOnline} className="space-y-6">

              {/* Customer Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                    Full Name <span className="text-[#88BDF2]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="e.g. Rashid Al Mansoori"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131A21] border ${errors.fullName ? 'border-red-400' : 'border-[#384959]'
                        } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                    Phone / WhatsApp Number <span className="text-[#88BDF2]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+971 55 123 4567"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131A21] border ${errors.phone ? 'border-red-400' : 'border-[#384959]'
                        } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Vehicle Wash Fields */}
              {inquiryType === 'vehicle' && (
                <div className="space-y-5 pt-2 border-t border-[#384959]/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Vehicle Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Vehicle Classification
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => handleChange('vehicleType', 'Saloon')}
                          className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${formData.vehicleType === 'Saloon'
                            ? 'bg-[#1B242D] border-[#88BDF2] text-[#BDDDFC]'
                            : 'bg-[#131A21] border-[#384959] text-slate-300 hover:border-[#6A89A7]'
                            }`}
                        >
                          <Car className="w-4 h-4" />
                          <span>Saloon / Sedan</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleChange('vehicleType', 'SUV')}
                          className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${formData.vehicleType === 'SUV'
                            ? 'bg-[#1B242D] border-[#88BDF2] text-[#BDDDFC]'
                            : 'bg-[#131A21] border-[#384959] text-slate-300 hover:border-[#6A89A7]'
                            }`}
                        >
                          <Car className="w-4 h-4" />
                          <span>SUV / 4x4</span>
                        </button>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Preferred Cleaning Service
                      </label>
                      <select
                        value={formData.serviceSelected}
                        onChange={(e) => handleChange('serviceSelected', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                      >
                        <option value="Waterless Car Washing">Waterless Car Washing (Hand Clean)</option>
                        <option value="Comprehensive Detailing & Tyre Polish">Comprehensive Detailing & Tyre Polish</option>
                        <option value="Body Polish & Paint Protection">Body Polish & Paint Protection</option>
                        <option value="Monthly Scheduled Parking Care">Monthly Scheduled Parking Care</option>
                      </select>
                    </div>
                  </div>

                  {/* Location & Preferred Date/Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Location / Parking Bay <span className="text-[#88BDF2]">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleChange('location', e.target.value)}
                          placeholder="Tower name & Bay number"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#131A21] border ${errors.location ? 'border-red-400' : 'border-[#384959]'
                            } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors`}
                        />
                      </div>
                      {errors.location && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.location}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Preferred Date <span className="text-[#88BDF2]">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleChange('preferredDate', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => handleChange('preferredTime', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                        >
                          <option value="Morning (09:00 - 13:00)">Morning (09:00 - 13:00)</option>
                          <option value="Afternoon (13:00 - 17:00)">Afternoon (13:00 - 17:00)</option>
                          <option value="Evening (17:00 - 21:00)">Evening (17:00 - 21:00)</option>
                          <option value="Overnight Slot (Residential)">Overnight Slot (Residential)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Commercial Proposal Fields */}
              {inquiryType === 'commercial' && (
                <div className="space-y-5 pt-2 border-t border-[#384959]/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Company / Property Name <span className="text-[#88BDF2]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="e.g. Marina Horizon Residences / Emaar Mall"
                        className={`w-full px-4 py-3 rounded-xl bg-[#131A21] border ${errors.companyName ? 'border-red-400' : 'border-[#384959]'
                          } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Official Business Email <span className="text-[#88BDF2]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="name@company.ae"
                        className={`w-full px-4 py-3 rounded-xl bg-[#131A21] border ${errors.email ? 'border-red-400' : 'border-[#384959]'
                          } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Property Classification
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => handleChange('propertyType', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                      >
                        <option value="Residential Community / Tower">Residential Community / Tower</option>
                        <option value="Shopping Mall / Retail Center">Shopping Mall / Retail Center</option>
                        <option value="Corporate Park / Business Complex">Corporate Park / Business Complex</option>
                        <option value="Facility Management Partner">Facility Management Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                        Approx. Parking Spaces / Bays
                      </label>
                      <input
                        type="text"
                        value={formData.parkingSpaces}
                        onChange={(e) => handleChange('parkingSpaces', e.target.value)}
                        placeholder="e.g. 150 bays"
                        className="w-full px-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* General Inquiry Fields (Email) */}
              {inquiryType === 'general' && (
                <div className="pt-2 border-t border-[#384959]/60">
                  <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                  />
                </div>
              )}

              {/* Common Message / Special Instructions */}
              <div>
                <label className="block text-xs font-semibold uppercase text-slate-200 mb-2">
                  {inquiryType === 'commercial'
                    ? 'Project Requirements & Site Survey Notes'
                    : inquiryType === 'vehicle'
                      ? 'Special Vehicle Instructions (Optional)'
                      : 'Your Message'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder={
                    inquiryType === 'commercial'
                      ? 'Describe property layout, desired frequency, or operational hours...'
                      : inquiryType === 'vehicle'
                        ? 'e.g. Please take extra care of wrapped front hood, gate code is 1234...'
                        : 'How can our Dubai team assist you?'
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#131A21] border border-[#384959] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#88BDF2] transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 btn-primary py-3.5 px-6 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Online Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:flex-1 btn-secondary py-3.5 px-6 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <img src="/images/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
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
