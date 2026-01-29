import React from 'react';

export default function ContactMap() {
  return (
    <section className="w-full bg-white">
      {/* Labeling the sector for architectural consistency */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
        <p className=" font-black uppercase tracking-[0.4em] text-primary-600">
          Locate Us
        </p>
      </div>

      {/* Map Container: 
          - grayscale-0 lg:grayscale: Keeps it clean and architectural until user interaction.
          - h-[450px] md:h-[600px]: Provides significant vertical presence.
      */}
      <div className="w-full h-[450px] md:h-[600px] bg-slate-100 relative group overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 z-10 pointer-events-none border-y border-white/10" />
        
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.336122374963!2d9.254831609512292!3d4.154151946137868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061336fe9dc7e49%3A0xeec3ce000459ee00!2sLoop%20Technologies%20Co%20LTD!5e0!3m2!1sen!2scm!4v1769683083360!5m2!1sen!2scm" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Loop Tech Headquarters"
          className=" transition-all duration-1000 ease-in-out opacity-90 hover:opacity-100"
        ></iframe>

        {/* Technical Overlay: Small detail to make it feel like an 'interface' */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:block">
          <div className="bg-white/90 backdrop-blur-md p-4 border border-slate-200 shadow-sm">
            <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-1 leading-none">Coordinates</p>
            <p className="text-xs font-mono text-slate-900 leading-none tracking-tighter">
              4.1593° N, 9.2435° E
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}