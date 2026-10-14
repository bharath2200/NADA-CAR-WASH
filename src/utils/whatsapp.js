/**
 * WhatsApp Helper Utilities for NAR Car Wash & Cleaning Services
 * Business Phone: +971 55 696 5470
 */

export const BUSINESS_PHONE_RAW = '971556965470';
export const BUSINESS_PHONE_DISPLAY = '+971 55 696 5470';
export const BUSINESS_EMAIL = 'info@narcarwash.com';

/**
 * Generates formatted text for a customer car wash booking.
 */
export function generateBookingMessage({
  fullName,
  phone,
  vehicleType,
  serviceType,
  location,
  preferredDate,
  preferredTime,
  notes,
}) {
  const serviceLabel =
    serviceType === 'monthly'
      ? 'Monthly Package (12 Washes / Month)'
      : serviceType === 'single'
      ? 'Single On-Demand Wash'
      : serviceType;

  return [
    '✨ *NAR CAR WASH — NEW BOOKING INQUIRY*',
    '------------------------------------------',
    `👤 *Client Name:* ${fullName || 'Not provided'}`,
    `📞 *Contact Number:* ${phone || 'Not provided'}`,
    `🚗 *Vehicle Type:* ${vehicleType || 'Not specified'}`,
    `🧼 *Service:* ${serviceLabel || 'Not specified'}`,
    `📍 *Location / Tower:* ${location || 'Not provided'}`,
    `📅 *Preferred Date:* ${preferredDate || 'Earliest available'}${preferredTime ? ` (${preferredTime})` : ''}`,
    notes ? `📝 *Notes:* ${notes}` : null,
    '------------------------------------------',
    '🌐 *Source:* Online Booking at narcarwash.com',
    '⚠️ *Note:* Awaiting confirmation from NAR dispatch team.',
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Builds direct WhatsApp URL with prefilled encoded message.
 */
export function createWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_PHONE_RAW}?text=${encoded}`;
}

/**
 * Generates formatted text for commercial partnerships.
 */
export function generateCommercialMessage({
  contactPerson,
  companyName,
  email,
  phone,
  propertyType,
  parkingSpaces,
  requirements,
}) {
  return [
    '🏢 *NAR CAR WASH — COMMERCIAL SOLUTION INQUIRY*',
    '------------------------------------------',
    `👤 *Contact Person:* ${contactPerson}`,
    `🏛️ *Company:* ${companyName}`,
    `📧 *Email:* ${email}`,
    `📞 *Phone:* ${phone}`,
    `🏗️ *Property Type:* ${propertyType}`,
    parkingSpaces ? `🅿️ *Approx. Bays / Vehicles:* ${parkingSpaces}` : null,
    `📋 *Scope / Requirements:* ${requirements}`,
    '------------------------------------------',
    '🌐 *Source:* Commercial Portal at narcarwash.com',
  ]
    .filter(Boolean)
    .join('\n');
}
