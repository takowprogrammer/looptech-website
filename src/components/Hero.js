'use client';

import { useEffect, useState } from "react";

export default function Hero() {

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  checkMobile(); // Check on mount
  window.addEventListener('resize', checkMobile);
  
  return () => window.removeEventListener('resize', checkMobile);
}, []);


  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-12 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            
           
            {/* --- End Badge --- */}

            <h1 className="text-[30px] md:text-5xl font-bold text-gray-900 leading-tight">
              Reliable Cloud Solutions
              <br />
              for Scale & Growth
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md">
              Empowering Businesses with Scalable Infrastructure and Expert Google Cloud Training.
            </p>

             

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 w-full md:w-fit py-3 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition-all font-medium shadow-md hover:shadow-lg active:scale-95">
                Contact Us
              </button>
              <button className="px-8 w-full md:w-fit py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
                Our Services
              </button>
            </div>
          </div>
    

          {/* Right Column - Hero Image */}
          {/* Right Column - Hero Image */}
<div className="relative ">
  <div className="relative z-10">
    <picture>
      {/* If screen is 768px or wider, use desktop image */}
      <source media="(min-width: 768px)" srcSet="/images/hero.png" />
      {/* Default/Fallback is the mobile image */}
      <img 
        src="/images/hero-mobile.png" 
        alt="Loop Tech Cloud Solutions"
        className="w-full h-auto"
        priority="true" // Tells Next.js to load this immediately
      />
    </picture>
  </div>
</div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative h-24">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64 C240,100 480,100 720,80 C960,60 1200,40 1440,64 L1440,120 L0,120 Z" fill="#dbeafe" />
        </svg>
      </div>
    </section>
  );
}