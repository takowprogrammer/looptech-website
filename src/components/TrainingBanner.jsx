import React from 'react';
import { ArrowRight, GraduationCap, Laptop } from 'lucide-react';

export default function TrainingBanner() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-md min-h-[480px] flex items-center shadow-2xl group">
          
          {/* 1. BACKGROUND IMAGE WITH DARK OVERLAY */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/training-bg.avif" 
              alt="People working on laptops" 
              className="w-full h-full object-cover transition-transform duration-700 "
            />
            {/* Darker, more uniform overlay to match your attached image */}
            <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
          </div>

          {/* 2. CONTENT LAYER */}
          <div className="relative z-20 w-full px-6 md:px-8 py-12 md:px-16 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Heading & Description */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-900 shadow-xl">
                <span className="text-[10px] font-black uppercase tracking-widest">Enrollment Open</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Launch Your <br />
                Cloud Career!
              </h2>

              <p className="text-lg text-slate-300 max-w-md leading-relaxed">
                Become a Google Cloud Professional. Master architecture, security, and data with hands-on labs.
              </p>
            </div>

            {/* Right: The Pill Stack (Matching the image) */}
            <div className="flex flex-col gap-4 lg:items-end">
              
              {/* Info Pill 1 */}
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-md flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Training Duration</p>
                  <p className="text-white font-bold">7 Months Training</p>
                </div>
              </div>

              {/* Info Pill 2 */}
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-md flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/50 flex items-center justify-center text-white shrink-0">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Curriculum</p>
                  <p className="text-white font-bold">3 Certifications Included</p>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href="https://wa.me/237674081245?text=Hello%20LoopTech!%20I%20am%20interested%20in%20securing%20my%20spot%20for%20the%20Google%20Cloud%20training%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md py-4 bg-white text-slate-900 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:bg-indigo-50 transition-all shadow-2xl active:scale-[0.98]"
              >
                Secure Your Spot
                <ArrowRight className="w-6 h-6 text-indigo-600" />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}