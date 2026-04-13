import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ResidencyDetailSplit() {
  const deepDivePoints = [
    {
      title: "Architecture-First Approach",
      desc: "We don't just teach tools; we teach systems design. Learn how to balance availability, cost, and performance at a global scale."
    },
    {
      title: "Production-Grade Labs",
      desc: "Access dedicated GCP sandboxes. You will implement CI/CD pipelines, manage GKE clusters, and configure VPC peering from scratch."
    },
    {
      title: "Mentor-Led Code Reviews",
      desc: "Your architectural diagrams and Terraform scripts are reviewed 1-on-1 by certified Professional Cloud Architects."
    }
  ];

  return (
    <section className="bg-white pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-24 items-start">
          
          {/* Left Side: Content Detail */}
          <div className=" space-y-6 md:space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              {/* <h2 className="text-sm font-black uppercase tracking-[0.4em] text-secondary-600">
                The Residency Experience
              </h2> */}
              <h3 className="text-3xl md:text-5xl font-bold text-primary-900 leading-tight">
                A curriculum forged in  real-world engineering
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                This isn't a bootcamp. It’s a 7-month technical residency designed for engineers who want to lead. We bridge the gap between "knowing the cloud" and "building the cloud."
              </p>
            </div>

            {/* Elaborations List */}
            <div className="space-y-10">
              {deepDivePoints.map((point, i) => (
                <div key={i} className="md:flex gap-5 hidden">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">{point.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div></div>
          </div>

          {/* Right Side: Tall Long Image */}
          <div className="relative h-[600px] md:h-[900px] w-full order-1 lg:order-2 group">
            {/* Design Element: Decorative border frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-secondary-100 rounded-sm -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
            
            <div className="w-full h-full overflow-hidden rounded-sm ">
              <img 
                src="/images/training-sub.jpg" 
                alt="Cloud architecture whiteboard session" 
                className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Subtle Overlay Label */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 border-l-4 border-primary-600 shadow-xl">
               <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Live Session</p>
               <p className="text-sm font-bold text-gray-900 italic">"Teaching the logic behind the infrastructure."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}