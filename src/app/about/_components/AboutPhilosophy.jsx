import React from 'react';

export default function AboutPhilosophy() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20 md:space-y-40">
        
        {/* --- SECTION 1: Content Left (Mobile) / Content Right (Desktop) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
          
          {/* Content: Appears first on mobile */}
          <div className="flex flex-col justify-center space-y-6 lg:order-last">
            <h2 className="text-3xl text-slate-900 font-semibold mb-2 md:mb-4">
              A Vision for Growth
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed  ">
              Loop Tech was founded on a singular premise, that technology should be a silent engine of growth.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              We observed a gap in the market between "IT Support" and "True Engineering." Most firms fix what's broken; we build so things don't break.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Whether it's training the next generation of Cloud Architects or securing a multi-site enterprise world wide.
            </p>
          </div>

          {/* Image: Appears second on mobile, first on desktop */}
          <div className="w-full h-full min-h-[300px] md:min-h-[450px]">
            <img 
              src="/images/whyus.jpg" 
              alt="Engineering Vision" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- SECTION 2: Content Left (Mobile) / Content Left (Desktop) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
          
          {/* Content: Appears first on mobile and desktop */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl text-slate-900 font-normal mb-2 md:mb-4">
              Built for Excellence
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed  ">
              We are committed to bridging the technical divide through rigorous training and high-precision infrastructure.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Our mission is to empower African businesses with the same caliber of cloud-native tools used by Silicon Valley. By focusing on Google Cloud Platform and advanced networking.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              From our headquarters in Buea, we mentor the architects of tomorrow while securing the mission-critical systems of today's enterprises.
            </p>
          </div>

          {/* Image: Appears second on mobile and desktop */}
          <div className="w-full h-full min-h-[300px] md:min-h-[450px]">
            <img 
              src="/images/whyus.jpg" 
              alt="Engineering Mission" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}