import React from 'react';
import { Check } from 'lucide-react';

export default function WhyUsSection() {
  const highlights = [
    "Certified GCP Partner with Architect-led support",
    "24/7 proactive infrastructure monitoring",
    "Full-lifecycle project management",
    "Local expertise with global engineering standards"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary-600">
                The Loop Tech Difference
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-primary-900 leading-[1.1]">
                Engineering Excellence, <br />
                <span className="text-slate-400">Trusted Partnership.</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                We don't just provide parts; we integrate with your vision. Our team delivers 
                high-performance infrastructure designed to scale with your enterprise, 
                ensuring zero friction as you grow.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 pt-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center border border-primary-100 group-hover:bg-primary-600 group-hover:border-primary-600 transition-colors">
                    <Check className="w-3 h-3 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <button className="group flex items-center gap-4 text-primary-900 font-bold tracking-tight">
                <span className="underline decoration-primary-200 underline-offset-8 decoration-2 group-hover:decoration-primary-600 transition-all">
                  Learn about our methodology
                </span>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary-900 group-hover:text-white transition-all">
                  →
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE - Long Upright */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/why-us-vertical.jpg" 
                alt="Our Engineering Team" 
                className="w-full h-[600px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>

        
            
            {/* Floating Experience Card */}
            {/* <div className="absolute bottom-12 -left-8 bg-white p-6 shadow-xl rounded-sm z-20 border-l-4 border-primary-600 hidden md:block">
               <p className="text-3xl font-bold text-primary-900 leading-none">10+</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Years of Infrastructure Expertise</p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}