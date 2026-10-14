import React, { useState, useEffect } from 'react';
import {
  Car,
  Calendar,
  MapPin,
  Phone,
  User,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_RAW, createWhatsAppUrl, generateBookingMessage } from '../utils/whatsapp';

export default function BookingForm({ preselectedData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    vehicleType: 'Saloon', // 'Saloon' | 'SUV'
    serviceType: 'monthly', // 'monthly' | 'single'
    location: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 13:00)',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState(false);

  // Sync external preselected props (e.g. from Pricing card clicks)
  useEffect(() => {
    if (preselectedData) {
      setFormData((prev) => ({
        ...prev,
        vehicleType: preselectedData.vehicleType?.includes('SUV') ? 'SUV' : 'Saloon',
        serviceType: preselectedData.category?.includes('Single') ? 'single' : 'monthly',
      }));
    }
  }, [preselectedData]);

  // Set default preferred date to tomorrow if empty
  useEffect(() => {
    if (!formData.preferredDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const iso = tomorrow.toISOString().split('T')[0];
      setFormData((prev) => ({ ...prev, preferredDate: iso }));
    }
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else {
      // Basic phone check (allowing UAE numbers like 050..., +971..., 55...)
      const cleaned = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (cleaned.length < 8) {
        newErrors.phone = 'Please enter a valid 9 to 12 digit phone number';
      }
    }

    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select your vehicle type';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please choose a service package';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Building name, community, or parking bay is required';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred service date';
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errs = validate();
    if (errs[field]) {
      setErrors((prev) => ({ ...prev, [field]: errs[field] }));
    }
  };

  const handlePrepareWhatsAppBooking = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        fullName: true,
        phone: true,
        vehicleType: true,
        serviceType: true,
        location: true,
        preferredDate: true,
      });
      // Scroll to first error
      return;
    }

    setErrors({});

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#087F70', '#D6B46A', '#0CA693', '#FFFFFF'],
      });
    } catch (e) {
      // fallback
    }

    const message = generateBookingMessage(formData);
    const url = createWhatsAppUrl(message);

    // Open WhatsApp in new tab / deep link
    window.open(url, '_blank', 'noopener,noreferrer');
    setHasOpenedWhatsApp(true);
  };

  // Live estimated pricing based on selection
  const estimatedRate =
    formData.serviceType === 'monthly'
      ? formData.vehicleType === 'SUV'
        ? '150 AED / Month (12 Washes)'
        : '120 AED / Month (12 Washes)'
      : formData.vehicleType === 'SUV'
      ? '25 AED / Single Wash'
      : '20 AED / Single Wash';

  return (
    <section id="booking" className="py-12 sm:py-16 bg-[#101715] relative overflow-hidden border-t border-[#1C2723]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#087F70]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18231F] border border-[#23332D] text-xs font-semibold text-[#0CA693]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EFFORTLESS DUBAI RESERVATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book Your <span className="teal-gradient-text">Car Wash</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Fill in your details below to prepare your customized WhatsApp reservation with our Dubai dispatch team. 
            Direct, quick, and hassle-free.
          </p>
        </div>

        {/* Focused Centered Booking Card */}
        <div className="bg-[#141D1A] rounded-2xl sm:rounded-3xl border border-[#23332D] p-5 sm:p-8 shadow-2xl space-y-6">
          
          <form onSubmit={handlePrepareWhatsAppBooking} className="space-y-5 sm:space-y-6">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Full Name <span className="text-[#087F70]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="e.g. Rashid Al Maktoum"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#18231F] border ${
                        errors.fullName ? 'border-red-500' : 'border-[#23332D]'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Phone / WhatsApp Number <span className="text-[#087F70]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      placeholder="+971 55 123 4567"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#18231F] border ${
                        errors.phone ? 'border-red-500' : 'border-[#23332D]'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
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

              {/* Vehicle Type Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                  Vehicle Type <span className="text-[#087F70]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleChange('vehicleType', 'Saloon')}
                    className={`p-3.5 sm:p-4 rounded-xl border flex items-center gap-3.5 transition-all text-left cursor-pointer ${
                      formData.vehicleType === 'Saloon'
                        ? 'bg-gradient-to-r from-[#1E2E28] to-[#15221E] border-[#0CA693] ring-2 ring-[#0CA693] shadow-lg shadow-[#087F70]/30'
                        : 'bg-[#18231F] border-[#23332D] hover:border-[#0CA693] hover:bg-[#1B2723] hover:shadow-md hover:shadow-[#087F70]/20 active:border-[#D6B46A] active:bg-[#15221E] active:scale-[0.98]'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        formData.vehicleType === 'Saloon'
                          ? 'bg-[#087F70] text-white'
                          : 'bg-[#141C19] text-gray-400 group-hover:text-[#0CA693]'
                      }`}
                    >
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Saloon / Sedan</div>
                      <div className="text-[11px] text-gray-400">Coupes, Hatchbacks & Sedans</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleChange('vehicleType', 'SUV')}
                    className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all text-left cursor-pointer ${
                      formData.vehicleType === 'SUV'
                        ? 'bg-gradient-to-r from-[#1E2E28] to-[#15221E] border-[#0CA693] ring-2 ring-[#0CA693] shadow-lg shadow-[#087F70]/30'
                        : 'bg-[#18231F] border-[#23332D] hover:border-[#0CA693] hover:bg-[#1B2723] hover:shadow-md hover:shadow-[#087F70]/20 active:border-[#D6B46A] active:bg-[#15221E] active:scale-[0.98]'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        formData.vehicleType === 'SUV'
                          ? 'bg-[#087F70] text-white'
                          : 'bg-[#141C19] text-gray-400 group-hover:text-[#0CA693]'
                      }`}
                    >
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">SUV / 4x4 / Truck</div>
                      <div className="text-[11px] text-gray-400">Large Crossovers, 4WDs</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Service Plan Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                  Service Package <span className="text-[#087F70]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleChange('serviceType', 'monthly')}
                    className={`p-4 rounded-xl border transition-all text-left relative cursor-pointer ${
                      formData.serviceType === 'monthly'
                        ? 'bg-gradient-to-r from-[#1E2E28] to-[#15221E] border-[#D6B46A] ring-2 ring-[#D6B46A] shadow-lg shadow-[#D6B46A]/25'
                        : 'bg-[#18231F] border-[#23332D] hover:border-[#D6B46A] hover:bg-[#1B2723] hover:shadow-md hover:shadow-[#D6B46A]/20 active:border-[#38E1CD] active:bg-[#15221E] active:scale-[0.98]'
                    }`}
                  >
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold px-2 py-0.5 rounded bg-[#D6B46A]/20 text-[#D6B46A] border border-[#D6B46A]/30">
                      Best Value
                    </span>
                    <div className="text-sm font-bold text-white">Monthly Package</div>
                    <div className="text-xs text-[#0CA693] font-medium mt-0.5">12 Washes / Month</div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      {formData.vehicleType === 'SUV' ? '150 AED / month' : '120 AED / month'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleChange('serviceType', 'single')}
                    className={`p-4 rounded-xl border transition-all text-left cursor-pointer ${
                      formData.serviceType === 'single'
                        ? 'bg-gradient-to-r from-[#1E2E28] to-[#15221E] border-[#0CA693] ring-2 ring-[#0CA693] shadow-lg shadow-[#087F70]/30'
                        : 'bg-[#18231F] border-[#23332D] hover:border-[#0CA693] hover:bg-[#1B2723] hover:shadow-md hover:shadow-[#087F70]/20 active:border-[#D6B46A] active:bg-[#15221E] active:scale-[0.98]'
                    }`}
                  >
                    <div className="text-sm font-bold text-white">Single Wash</div>
                    <div className="text-xs text-gray-300 font-medium mt-0.5">On-Demand Wash</div>
                    <div className="text-[11px] text-gray-400 mt-1">
                      {formData.vehicleType === 'SUV' ? '25 AED / wash' : '20 AED / wash'}
                    </div>
                  </button>
                </div>
              </div>

              {/* Location / Building / Parking Slot */}
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                  Location / Building / Parking Bay <span className="text-[#087F70]">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    onBlur={() => handleBlur('location')}
                    placeholder="e.g. Dubai Marina Gate 2, Basement 2, Bay #B-241"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#18231F] border ${
                      errors.location ? 'border-red-500' : 'border-[#23332D]'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors`}
                  />
                </div>
                {errors.location && (
                  <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.location}</span>
                  </p>
                )}
                <p className="text-[11px] text-gray-400 mt-1">
                  Specify tower name, community, and basement parking bay number for seamless technician access.
                </p>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Preferred Date <span className="text-[#087F70]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      onBlur={() => handleBlur('preferredDate')}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#18231F] border ${
                        errors.preferredDate ? 'border-red-500' : 'border-[#23332D]'
                      } text-white text-sm focus:outline-none focus:border-[#087F70] transition-colors scheme-dark`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#18231F] border border-[#23332D] text-white text-sm focus:outline-none focus:border-[#087F70] transition-colors"
                    >
                      <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                      <option value="Afternoon (13:00 - 17:00)">Afternoon (13:00 - 17:00)</option>
                      <option value="Evening (18:00 - 22:00)">Evening (18:00 - 22:00)</option>
                      <option value="Overnight Parking Clean (22:00 - 06:00)">Overnight Parking Clean (22:00 - 06:00)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Additional Instructions / Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-300 mb-2">
                  Additional Instructions (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => handleChange('notes', e.target.value)}
                    placeholder="e.g. White Porsche Cayenne, please focus on wheel brake dust or call upon security gate arrival..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#18231F] border border-[#23332D] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#087F70] transition-colors"
                  />
                </div>
              </div>

              {/* Live Selection & Price Estimate Bar */}
              <div className="p-4 rounded-xl bg-[#18231F] border border-[#2E453D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    Live Booking Selection
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{formData.vehicleType}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#0CA693]">
                      {formData.serviceType === 'monthly' ? 'Monthly Package (12 Washes)' : 'Single Wash'}
                    </span>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-gray-400 block sm:inline sm:mr-2">Estimated Rate:</span>
                  <span className="text-base sm:text-lg font-bold text-[#D6B46A]">{estimatedRate}</span>
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 sm:py-4 px-6 text-sm sm:text-base font-bold flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#087F70]/30"
                >
                  <img
                    src="/images/whatsapp.png"
                    alt="WhatsApp"
                    className="w-5 h-5 object-contain shrink-0"
                  />
                  <span>Prepare WhatsApp Booking</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Confirmation Alert after WhatsApp launched */}
              {hasOpenedWhatsApp && (
                <div className="p-4 rounded-xl bg-[#087F70]/15 border border-[#087F70] text-center space-y-1">
                  <div className="text-xs font-bold text-white flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0CA693]" />
                    <span>WhatsApp Booking Message Prepared</span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Your reservation details have been formatted. Please tap Send in WhatsApp to reach our Dubai dispatch desk.
                  </p>
                </div>
              )}

              {/* Disclaimer Notice required by PRD FR-05 */}
              <div className="p-3.5 rounded-xl bg-[#18231F] border border-[#23332D] text-xs text-gray-400 space-y-1">
                <div className="flex items-center gap-1.5 text-gray-300 font-semibold">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#D6B46A]" />
                  <span>Notice & WhatsApp Confirmation Policy:</span>
                </div>
                <p>
                  Opening WhatsApp will prefill your reservation inquiry directly with the NAR dispatch desk at{' '}
                  <strong className="text-white">{BUSINESS_PHONE_DISPLAY}</strong>. 
                  Opening WhatsApp does not immediately confirm a booking; our dispatchers will confirm slot availability 
                  and building parking access with you directly.
                </p>
              </div>

            </form>

        </div>
      </div>
    </section>
  );
}
