import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    title: "AidSync Platform",
    category: "Support Infrastructure",
    description: "A comprehensive ticket-based IT support platform designed to streamline issue tracking and technical resolution workflows.",
    image: "/images/projects/aidsync.png",
    color: "#5649c5",
  },
  {
    title: "Dunamis InfoTech",
    category: "E-Commerce & Booking",
    description: "A hybrid platform for booking professional IT services and procuring high-end enterprise hardware.",
    image: "/images/projects/dunamis.png",
    color: "#0d9488",
  },
  {
    title: "Emmaris Wedding System",
    category: "Management Software",
    description: "A specialized wedding management system streamlining guest lists, vendor coordination, and event scheduling.",
    image: "/images/projects/emmaris.png",
    color: "#db2777",
  },
  {
    title: "Luptek Portfolio",
    category: "Web Development",
    description: "A modern, high-performance portfolio website showcasing technical expertise and digital brand identity.",
    image: "/images/projects/luptek.png",
    color: "#4f46e5",
  },
  {
    title: "GCP Global Migration",
    category: "Cloud Architecture",
    description: "Architecting a seamless transition to Google Cloud for multi-regional enterprise scaling and data redundancy.",
    image: "/images/projects/cloud.png",
    color: "#1d4ed8",
  },
  {
    title: "CCTV Live Installation",
    category: "Security Engineering",
    description: "Large-scale deployment of live-streaming surveillance systems with remote access and encrypted storage.",
    image: "/images/projects/cctv.png",
    color: "#1f2937",
  }
];

export default function ProjectsSection() {
  return (
    <section className="pt-32 pb-16 bg-secondary-50 relative" id="projects">
      {/* Wave Divider Restored */}
      <div className="absolute w-full top-0 h-24 overflow-hidden">
        <svg 
          className="w-full h-[120px]" 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L1440,0 L1440,20 Q720,150 0,20 Z" 
            fill="white" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group flex flex-col p-5 rounded-xl border border-gray-200 bg-white transition-all hover:border-secondary-100 hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-video mb-6 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <span 
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: project.color }}
              >
                {project.category}
              </span>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              {/* Link with animated underline */}
              <div className="w-fit">
                <a 
                  href={"#"}
                  className="group/link relative inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-primary-700"
                >
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gray-100 overflow-hidden">
                    <span className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-primary-700 transition-transform duration-300 ease-out group-hover/link:scale-x-100" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Updated Project CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl text-white font-bold mb-2">Have a project in mind?</h4>
                <p className="text-slate-400">Let’s discuss how we can build your next high-performance digital solution.</p>
            </div>
            <button className="px-10 py-4 bg-primary-700 whitespace-nowrap text-white rounded-full font-bold hover:bg-primary-600 transition-all active:scale-95 shadow-lg shadow-primary-900/20">
                Start a Consultation
            </button>
        </div>

      </div>
    </section>
  );
}