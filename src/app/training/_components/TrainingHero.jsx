import React from 'react';

export default function TrainingHero() {
  return (
    <section className="relative h-[500px] md:h-[500px] bg-[#0f172a] overflow-hidden flex items-center">
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/trainingHero.avif" 
          alt="Technical Training" 
          className="w-full h-full object-cover object-center opacity-40 md:opacity-50"
        />
        {/* Subtle dark gradient overlay from left to right for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="max-w-2xl space-y-6">
          {/* Smaller, tighter heading to prevent mobile wrapping issues */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            A 7-month transformation to get <span className="italic font-serif text-slate-300">expertly</span> certified.
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-4xl leading-relaxed">
            Transition from basic IT support into a Google Cloud Professional Architect.
          </p>

          <div className="pt-2">
            <a href="#training-programs" className="px-8 py-4 bg-primary-700 hover:bg-primary-600 text-white rounded-full font-bold transition-all active:scale-95 shadow-lg inline-block">
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}