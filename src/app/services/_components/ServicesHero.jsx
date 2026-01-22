import React from 'react';

export default function ServicesHero() {
  return (
    <section className="relative pt-20  bg-white overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/5 -skew-x-12 translate-x-1/4" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl text-center mx-auto">
          
          <h2 className="text-5xl md:text-7xl font-bold text-primary-900 leading-[1.1]">
            What We Do <br /> 
            <span className="text-primary-600"></span>
          </h2>
          <p className="mt-4 text-center  md:mt-8 text-xl text-slate-600 leading-relaxed">
           Innovative IT solutions tailored to elevate your business.
          </p>
        </div>
      </div>
    </section>
  );
}