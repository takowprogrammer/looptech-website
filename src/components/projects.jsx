import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    title: "AidSync platform",
    category: "Support Infrastructure",
    description: "A comprehensive ticket-based IT support platform designed to streamline IT issue.",
    image: "/images/projects/aidsync.png",
    color: "#5649c5",
  },
  {
    title: "Dunamis InfoTech",
    category: "IT Commerce & Booking",
    description: "A hybrid platform for booking IT services and procuring high-end hardware.",
    image: "/images/projects/dunamis.png",
    color: "#0d9488",
  },
  {
    title: "GCP Global Migration",
    category: "Cloud Architecture",
    description: "Architecting a seamless transition to Google Cloud for multi-regional enterprise scaling.",
    image: "/images/projects/cloud.png",
    color: "#1d4ed8",
  }
];

export default function ProjectsSection() {
  return (
    <section className=" py-10 md:py-24 bg-primary-100" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl text-primary-800 font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Real world problem, Proven solutions deployed globally.
            </p>
          </div>
        </div>

        {/* Inline Desktop Grid */}
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
          {projects.map((project, i) => (
            <div key={i} className="group flex flex-col bg-white py-6 px-4 rounded-lg shadow-[2px]">
              
              {/* Image Container - No distinct BG, just a subtle glow on hover */}
              <div className="relative aspect-[4/3] mb-4 md:mb-6 overflow-hidden rounded-md bg-gray-50 flex items-center justify-center transition-all duration-500 group-hover:bg-gray-100/50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover duration-500 "
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                {/* <span 
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span> */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Custom Link with animated underline */}
                {/* --- LINK WITH ANIMATED UNDERLINE --- */}
              <div className="w-fit">
                <a 
                  href={"#"}
                  className="group relative inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-primary-700"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  
                  {/* The Underline Track (Gray 100/faint) */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gray-100">
                    {/* The Loading Line (Primary-500) */}
                    <span className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-primary-700 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-6 md:mt-6  flex">
          <button className="px-10 py-4 w-full md:w-fit bg-primary-700 text-white rounded-full font-bold hover:bg-primary-600 transition-all active:scale-95 shadow-lg shadow-gray-200">
            Explore All Projects
          </button>
        </div>

      </div>
    </section>
  );
}