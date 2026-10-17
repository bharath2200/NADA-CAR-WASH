import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkedBuildings from './components/WorkedBuildings';
import PosterShowcase from './components/PosterShowcase';
import Contact from './components/Contact';
import ServicesPage from './components/ServicesPage';
import CommercialPage from './components/CommercialPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import { createWhatsAppUrl, BUSINESS_PHONE_DISPLAY } from './utils/whatsapp';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#about') return 'about';
      if (hash === '#services' || hash === '#procedure') return 'services';
      if (hash === '#commercial') return 'commercial';
    }
    return 'home';
  });

  const [selectedService, setSelectedService] = useState(null);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services' || hash === '#procedure') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#commercial') {
        setCurrentPage('commercial');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page, hash) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      window.location.hash = '#services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'commercial') {
      window.location.hash = '#commercial';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (hash) {
        window.location.hash = hash;
        setTimeout(() => {
          if (hash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const target = document.querySelector(hash);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 60);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    handleNavigate('home', '#contact-form');
  };

  return (
    <div className="min-h-screen bg-[#131A21] text-[#F8FAFC] selection:bg-[#88BDF2] selection:text-[#131A21] font-['Poppins',sans-serif] relative">
      
      {/* Sticky Header Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* Main Page View Switching */}
      {currentPage === 'about' ? (
        /* Dedicated About NADA AL RABEE CAR WASHING LLC Page */
        <main>
          <AboutPage 
            onBack={() => handleNavigate('home', '#home')}
            onOpenBooking={() => handleNavigate('home', '#contact-form')}
          />
        </main>
      ) : currentPage === 'services' ? (
        /* Dedicated Standardized Vehicle Cleaning Procedure & Care Page */
        <main>
          <ServicesPage
            onBack={() => handleNavigate('home', '#home')}
            onOpenBooking={() => handleNavigate('home', '#contact-form')}
            onSelectService={handleSelectService}
          />
        </main>
      ) : currentPage === 'commercial' ? (
        /* Dedicated Commercial Solutions Page */
        <main>
          <CommercialPage
            onBack={() => handleNavigate('home', '#home')}
            onOpenBooking={() => handleNavigate('home', '#contact-form')}
          />
        </main>
      ) : (
        /* Streamlined High-Converting Homepage: Hero -> Worked Buildings -> Posters Showcase -> Get in touch -> Footer */
        <main>
          {/* 01: Hero Section */}
          <Hero 
            onOpenBooking={() => handleNavigate('home', '#contact-form')} 
            onExploreServices={() => handleNavigate('services')}
          />

          {/* 02: Worked Buildings Section */}
          <WorkedBuildings 
            onOpenBooking={() => handleNavigate('home', '#contact-form')}
            onOpenCommercial={() => handleNavigate('commercial')}
          />

          {/* 03: Detailing Showcase (Posters 1, 2, 3) */}
          <PosterShowcase 
            onOpenBooking={() => handleNavigate('home', '#contact-form')}
          />

          {/* 04: Unified Get In Touch & Booking Form */}
          <Contact preselectedService={selectedService} />
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
