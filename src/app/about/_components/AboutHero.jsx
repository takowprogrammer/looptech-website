import React from 'react';

export default function AboutHero() {
  return (
     <section className="relative h-[300px] md:h-[400px] bg-[#0f172a] overflow-hidden flex items-center">
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/whyus.jpg" 
          alt="Technical Training" 
          className="w-full h-full object-cover object-center opacity-40 md:opacity-50"
        />
        {/* Subtle dark gradient overlay from left to right for text readability */}
        <div className="absolute inset-0 bg-[#0f172a]/60 to-transparent" />
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="text-center space-y-6">
          {/* Smaller, tighter heading to prevent mobile wrapping issues */}
          <h1 className="text-7xl md:text-7xl font-bold text-white leading-tight">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}