import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

function AnimatedCounter({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
}

export default function WorkedBuildings({ onOpenBooking, onOpenCommercial }) {
  const buildingsData = [
    {
      id: 1,
      name: 'Cloud Hub Residences',
      location: 'Dubai, UAE',
      image: 'https://i.ibb.co/sp2Vdv88/imgi-24-ANWiy9-Sm-L8py-YXo-D-Cuatbzm-UNw8-Fg-S0i1-Ak-Qmse-ZGQBbh-Yzrurp-Wmqbqxq3h-OGqd-Lqy6p6xkpa-X5-Atv.jpg',
      tag: 'Residential Community',
      service: 'Underground Bay Car Washing'
    },
    {
      id: 2,
      name: 'Marina Residence 1',
      location: 'Palm Jumeirah / Dubai Marina',
      image: 'https://i.ibb.co/Yg7p9tg/imgi-22-ANWiy9-Rza5vs5-AGC-6zsbjlo-m-VCTB8-BP0f-Vjxq-SPu-MA81y-GGV8-Jg4us-gn92-WVIy-GO3-Uwhph-SVy-L4-Jskl-B.jpg',
      tag: 'Luxury Tower',
      service: 'Underground Bay Car Washing'
    },
    {
      id: 3,
      name: 'Marina Residence 2',
      location: 'Palm Jumeirah / Dubai Marina',
      image: 'https://i.ibb.co/ccwxKXLt/imgi-41-ANWiy9-Q0b-OXj6-IFz-Ld7jphob-Eunty7-Ldsig-Cy-Oc2c-KSNSYnzm-Cfj-No-WWn-KT0-Pm5kni-I8uno-Z6vh9-Uo-S.jpg',
      tag: 'Luxury Tower',
      service: 'Underground Bay Car Washing'
    },
    {
      id: 4,
      name: 'Marina Residence 3',
      location: 'Palm Jumeirah / Dubai Marina',
      image: 'https://i.ibb.co/k6Bkqhdv/imgi-20-ANWiy9-RZg8c-Q1-XRgv-Eujz-H2-GEs-R80-JSy-Myt-Ek7-NUw-FTBDo-Mck-Nhg-P4fp-Cg-U8-Ld95-Lv650-Dj-yrd4-HAFd.jpg',
      tag: 'Luxury Tower',
      service: 'Underground Bay Car Washing'
    },
    {
      id: 5,
      name: 'Marina Residence 4',
      location: 'Palm Jumeirah / Dubai Marina',
      image: 'https://i.ibb.co/gFJvds9W/imgi-20-ANWiy9-RKVWA12-TJyep-L4-Nx0wmo7-TJF8-SK3-WCi-PAHNQVus-M9y-MXW9-8o-Hp-Hhvx8-EGw6-Oi-Je-I-s-dp-XEUEt-D.jpg',
      tag: 'Luxury Tower',
      service: 'Underground Bay Car Washing'
    },
    {
      id: 6,
      name: 'Marina Residence 5',
      location: 'Palm Jumeirah / Dubai Marina',
      image: 'https://i.ibb.co/fmYrDBN/imgi-20-ANWiy9-Rv-GP5-H3s-JTrdd-ZFtr-FI2-VE37a-VGF3-ZYO-klfn-XGi-6-D5ax-Rlnq-ANM1-Sxr-Ks-Uk7x-XGfnnq-Uk-Dn.jpg',
      tag: 'Luxury Tower',
      service: 'Underground Bay Car Washing'
    },
    {
      id: 7,
      name: 'Marina Residence 6',
      location: 'Palm Jumeirah / Dubai Marina',
      image: 'https://i.ibb.co/Nn3zhWC3/imgi-11-ANWiy9-Sn-Oj7-Yg-WZZIi-Ez-QXGy-YPf-TM1-G6-Vk-IDd-Fjt-Izht-Bv6-T5-JC4-Qk4-DQod-Gj-Tn-WXPd-Tnb-Mszj-Vf.jpg',
      tag: 'Luxury Tower',
      service: 'Underground Bay Car Washing'
    }
  ];

  const whatsappInquiryUrl = createWhatsAppUrl(
    'Hello NAR Car Wash, I am interested in partnering or scheduling waterless car washing for our building/community in Dubai.'
  );

  return (
    <section id="worked-buildings" className="pt-6 pb-12 sm:pt-14 sm:pb-20 bg-[#131A21] relative overflow-hidden border-t border-[#384959]/40">
      
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#88BDF2]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[350px] bg-[#6A89A7]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1B242D] border border-[#384959] text-xs font-semibold text-[#BDDDFC]">
            <Building2 className="w-3.5 h-3.5 text-[#88BDF2]" />
            <span>ESTABLISHED DUBAI PORTFOLIO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Buildings & Properties <span className="palette-gradient-text">We Work With</span>
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            Trusted by Dubai's premier residential communities and high-rise luxury towers.
          </p>
        </div>

        {/* Operational Statistics Highlight Bar with 0 to 50+ Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-16">
          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-4 sm:p-6 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#88BDF2]">
              <AnimatedCounter target={50} suffix="+" duration={1600} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Towers & Properties</div>
            <div className="text-[11px] text-slate-300">Serviced across Dubai</div>
          </div>

          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-4 sm:p-6 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#88BDF2]">
              <AnimatedCounter target={100} suffix="K+" duration={1800} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Washes Completed</div>
            <div className="text-[11px] text-slate-300">Zero swirl marks guarantee</div>
          </div>

          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-4 sm:p-6 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#BDDDFC]">
              <AnimatedCounter target={100} suffix="%" duration={1600} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-white">Dry Floor Guarantee</div>
            <div className="text-[11px] text-slate-300">Basement & mall safe</div>
          </div>

          <div className="rounded-2xl bg-[#182029] border border-[#384959] p-4 sm:p-6 text-center space-y-1">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#88BDF2]">TPL</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Fully Insured & DED</div>
            <div className="text-[11px] text-slate-300">Third-Party Liability covered</div>
          </div>
        </div>

        {/* Buildings Showcase Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {buildingsData.map((building) => {
            const bookingWhatsApp = createWhatsAppUrl(
              `Hello NAR Car Wash, I am a resident at ${building.name} (${building.location}) and would like to book a waterless car wash.`
            );

            return (
              <div
                key={building.id}
                className="group glass-card rounded-2xl border border-[#384959] overflow-hidden hover:border-[#88BDF2] hover:bg-[#1E2833] transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                {/* Building Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#182029]">
                  <img
                    src={building.image}
                    alt={building.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131A21]/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Building Details */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-[#88BDF2] shrink-0" />
                      <span>{building.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#BDDDFC] transition-colors leading-snug">
                      {building.name}
                    </h3>

                    <p className="text-xs text-slate-300">
                      {building.service}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t border-[#384959]/60 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">
                      Underground Bay Safe
                    </span>
                    <a
                      href={bookingWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#88BDF2] hover:text-[#BDDDFC] flex items-center gap-1 transition-colors"
                      title={`Book Wash at ${building.name}`}
                    >
                      <span>Book Wash</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Banner: Bring NAR Car Wash to Your Building / Community */}
        <div className="rounded-3xl bg-[#1B242D] border border-[#384959] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 text-center flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#88BDF2]/20 border border-[#88BDF2]/30 text-xs font-bold text-[#BDDDFC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#88BDF2]" />
                <span>COMMUNITY & FACILITY PARTNERSHIPS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight text-center max-w-xl mx-auto">
                Want NAR Car Wash in Your Building or Community?
              </h3>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenBooking) onOpenBooking();
                    else {
                      const el = document.querySelector('#contact-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto btn-primary text-xs font-bold py-3.5 px-6 flex items-center justify-center gap-2 shadow-lg shadow-[#88BDF2]/15"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Service for Your Building</span>
                </a>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-secondary text-xs font-semibold py-3.5 px-6 flex items-center justify-center gap-2"
                >
                  <img src="/images/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                  <span>Chat with Building Operations</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full relative min-h-[300px]">
              <img
                src="/images/commercial-dubai.jpg"
                alt="Dubai Commercial and Residential Properties"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B242D] via-transparent to-transparent lg:block hidden" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
