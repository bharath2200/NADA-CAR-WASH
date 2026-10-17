/**
 * NAR Car Wash & Cleaning Services - Service & Pricing Data
 * Business: NADA AL RABEE CAR WASHING LLC (Founded 2020, Dubai, UAE)
 */

export const SERVICES = [
  {
    id: 'waterless-wash',
    title: 'Waterless Car Washing',
    tagline: 'Eco-Friendly & Scratch-Free Care',
    description:
      'Advanced polymer formula emulsifies and lifts sand and road grime away from the clear coat without a single drop of wastewater, preventing swirl marks.',
    image: '/images/poster-1.jpg',
    features: [
      'High-lubricity encapsulation technology',
      'Zero wastewater runoff – 100% eco-friendly',
      'Safe for ceramic coats, wraps, and matte paint',
      'Convenient cleaning in underground residential parking',
    ],
    recommendedFor: 'Saloon & SUV Daily Care',
  },
  {
    id: 'tyre-polish',
    title: 'Tyre Conditioning & Polish',
    tagline: 'Deep Black Satin Finish',
    description:
      'Specialized UV-inhibiting tyre dressing that shields rubber against intense Dubai heat, road grit, and fading while delivering a rich satin gloss.',
    image: '/images/poster-3.jpg',
    features: [
      'Non-sling hydrophobic formula',
      'UV & ozone cracking prevention',
      'Restores deep showroom satin black sheen',
      'Repels brake dust and desert sand',
    ],
    recommendedFor: 'All Vehicles',
  },
  {
    id: 'rims-mirrors',
    title: 'Rims & Mirrors Detailing',
    tagline: 'Streak-Free Precision Clarity',
    description:
      'Meticulous removal of stubborn brake dust and road film from multi-spoke alloy wheels, paired with streak-free optical glass polishing on all mirrors.',
    image: '/images/poster-3.jpg',
    features: [
      'Safe for diamond-cut, painted & forged alloys',
      'Acid-free neutral pH brake dust dissolution',
      'Streak-free clarity for side mirrors and windshields',
      'Restores crystal optical clarity for night driving',
    ],
    recommendedFor: 'Luxury & High-Performance Wheels',
  },
  {
    id: 'body-polish',
    title: 'Body Polish & Paint Protection',
    tagline: 'Mirror-Like Depth & Slickness',
    description:
      'Protective gloss enhancer buffs out light surface oxidation and creates a slick polymer barrier that keeps desert dust from clinging to paint.',
    image: '/images/poster-2.jpg',
    features: [
      'Ultra-slick hydrophobic protective layer',
      'Deep optical gloss reflection',
      'Minimizes dust adhesion in UAE conditions',
      'Preserves paintwork between monthly washes',
    ],
    recommendedFor: 'Showroom Finish Enthusiasts',
  },
  {
    id: 'equipment-cloths',
    title: 'Microfiber Care & Equipment',
    tagline: 'Hospital-Grade Cleanliness Standards',
    description:
      'We utilize ultra-soft 500+ GSM edgeless microfiber towels and specialized tools to guarantee zero surface marring on delicate clear coats.',
    image: '/images/service-equipment.jpg',
    features: [
      'Dedicated color-coded towels for paint, wheels & glass',
      'Continuous laundering and grit-inspection protocol',
      'Ergonomic pressure-regulated mist dispensers',
      'Dubai Municipality compliant eco formulations',
    ],
    recommendedFor: 'Safety & Paint Preservation',
  },
];

export const PRICING_PLANS = [
  {
    id: 'saloon-monthly',
    vehicleType: 'Saloon / Sedan',
    category: 'Monthly Package',
    washes: '12 Washes / Month',
    price: 120,
    currency: 'AED',
    rateNote: 'Only ~10 AED per professional wash',
    badge: 'Most Popular',
    popular: true,
    description: 'Complete waterless exterior cleaning scheduled 3 times per week directly at your parking slot.',
    inclusions: [
      '12 Waterless exterior cleans per month',
      'Tire conditioning & satin polish',
      'Rims brake dust wipe-down',
      'Exterior mirrors & glass cleaning',
      'Dedicated residential parking service',
      'TPL Insured & trained detailing staff',
    ],
    ctaText: 'Book Saloon Package',
  },
  {
    id: 'suv-monthly',
    vehicleType: 'SUV / 4x4 / Luxury Crossover',
    category: 'Monthly Package',
    washes: '12 Washes / Month',
    price: 150,
    currency: 'AED',
    rateNote: 'Only 12.5 AED per wash for larger vehicles',
    badge: 'Best Value for SUVs',
    popular: false,
    description: 'Designed for larger frame SUVs, crossovers and 4x4s requiring comprehensive surface coverage.',
    inclusions: [
      '12 Full SUV waterless cleans per month',
      'Deep tire polish & UV protection',
      'Oversized alloy rims detailing',
      'Panoramic glass & side mirror cleaning',
      'Underground or surface parking bay care',
      'TPL Insured & professional operators',
    ],
    ctaText: 'Book SUV Package',
  },
  {
    id: 'single-wash',
    vehicleType: 'Saloon or SUV',
    category: 'On-Demand Single Wash',
    washes: '1 Single Wash',
    price: '20 – 25',
    currency: 'AED',
    rateNote: '20 AED for Saloon · 25 AED for SUV',
    badge: 'Flexible / Trial',
    popular: false,
    description: 'Perfect for visitors, occasional touch-ups, or trying out our waterless detailing before subscribing.',
    inclusions: [
      '1 On-demand comprehensive waterless wash',
      'Tire dressing and rim cleaning',
      'Mirror & window wipe down',
      'Quick response across covered Dubai zones',
      'Zero water puddles in your parking bay',
    ],
    ctaText: 'Book Single Wash',
  },
];

export const TRUST_FACTORS = [
  {
    title: 'Founded in 2020',
    description: 'Established track record of dependable car care operations across Dubai.',
    icon: 'Calendar',
  },
  {
    title: 'DED Registered',
    description: 'Fully licensed commercial enterprise under Dubai Economic Development (NADA AL RABEE CAR WASHING LLC).',
    icon: 'ShieldCheck',
  },
  {
    title: 'TPL Insurance Coverage',
    description: 'Third-Party Liability insurance ensures peace of mind for property owners and vehicle owners.',
    icon: 'Lock',
  },
  {
    title: 'Trained Detailing Staff',
    description: 'Uniformed, background-verified professionals trained in paint-safe waterless protocols.',
    icon: 'UserCheck',
  },
  {
    title: 'Municipality Compliant',
    description: 'Cleaning solutions adhere to Dubai Municipality chemical & environmental safety guidelines.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Zero Puddle Waterless',
    description: '100% dry basement-friendly process approved for indoor residential & mall parkings.',
    icon: 'Droplets',
  },
];

export const COMMERCIAL_SOLUTIONS = [
  {
    id: 'malls',
    title: 'Shopping Malls & Retail Centers',
    summary: 'Turn unused visitor parking dwell-time into an upscale amenity with zero water mess or drainage requirements.',
    benefits: [
      'Clean dry parking environment with zero water runoff',
      'Value-added amenity for high-spending shoppers',
      'Flexible revenue sharing or concession models',
      'Uniformed, branded, courteous staff',
    ],
  },
  {
    id: 'communities',
    title: 'Residential Communities & Towers',
    summary: 'Convenient overnight or scheduled daytime parking spot cleaning for homeowners and tenants.',
    benefits: [
      'Eliminates water wastage and messy underground wet floors',
      'Convenient monthly direct billing or tenant subscriptions',
      'Full compliance with Master Community & Owners Association rules',
      'Full TPL liability protection coverage for building management',
    ],
  },
  {
    id: 'complexes',
    title: 'Business Parks & Corporate Complexes',
    summary: 'Fleet and executive employee vehicle wash programs during working hours while cars sit idle.',
    benefits: [
      'Executive car care without interrupting workday schedules',
      'Enhances company sustainability & ESG compliance',
      'Custom corporate billing packages',
      'Dedicated on-site supervisors',
    ],
  },
  {
    id: 'facilities',
    title: 'Facility Management Companies',
    summary: 'Subcontract your car cleaning operations to a specialized, insured, and licensed DED operator.',
    benefits: [
      'Seamless subcontracting with SLA guarantees',
      'Comprehensive Third-Party Liability (TPL) insurance',
      'Audit-ready documentation and municipality-compliant materials',
      'Scalable manpower deployments across Dubai',
    ],
  },
];
