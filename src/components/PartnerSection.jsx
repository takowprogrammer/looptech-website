'use client'; // Required for Next.js App Router

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const partners = [
  { name: "Google Cloud", src: "/images/google-cloud.png" },
  { name: "AWS", src: "/images/aws.png" },
  { name: "Azure", src: "/images/Azure.png" },
  { name: "Microsoft", src: "/images/microsoft.png" },
  { name: "Cisco", src: "/images/cisco.png" },
  { name: "Fortinet", src: "/images/fortinet.png" },
  { name: "Dell", src: "/images/dell.png" },
];

export default function PartnerSection() {
  // We remove the Autoplay plugin here for a clean, manual feel
  const [emblaRef] = useEmblaCarousel({ 
    loop: false, // Professional sites often don't loop if there are only a few items
    align: 'start', 
    dragFree: true 
  })

  return (
    <section className="py-12 md:py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-12">
          Global Technology Partners
        </p>

        {/* DESKTOP: Clean, static row */}
        <div className="hidden md:grid grid-cols-7 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center group">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-16 w-auto object-contain  transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* MOBILE: Manual Embla Scroll */}
        <div className="md:hidden overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {partners.map((partner, index) => (
              <div key={index} className="flex-[0_0_35%] min-w-0 pr-10 flex justify-center">
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-9 w-auto object-contain "
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}