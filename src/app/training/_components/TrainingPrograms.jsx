import React from 'react';
import { Shield, Terminal, Layers, CheckCircle2, ArrowRight, CheckCircle } from 'lucide-react';

export default function TrainingPrograms() {
  const programs = [
    {
      id: "01 // CLOUD",
      title: "Cloud Architecture Residency",
      summary: "High-intensity path from foundational cloud concepts to Professional Architect status.",
      icon: <Shield className="w-5 h-5 text-primary-700" />,
      features: ["GCP Global Backbone", "Enterprise Security Protocols", "Hybrid Cloud Connectivity"],
      duration: "7 Months",
      certs: "3 Professional",
      start: "FEB 10 START",
      image: "/images/training/program-cloud.jpg"
    },
    {
      id: "02 // DEVOPS",
      title: "DevOps Engineering Track",
      summary: "Automation-first residency focusing on CI/CD pipelines, GitOps, and SRE principles.",
      icon: <Terminal className="w-5 h-5 text-primary-700" />,
      features: ["Kubernetes (GKE) Mastery", "Terraform Infrastructure as Code", "Incident Response & SRE"],
      duration: "6 Months",
      certs: "2 Professional",
      start: "MARCH 01 START",
      image: "/images/training/program-devops.jpg"
    },
    {
      id: "03 // FULLSTACK",
      title: "Cloud-Native Development",
      summary: "Building scalable, distributed applications using modern React and Node.js frameworks.",
      icon: <Layers className="w-5 h-5 text-primary-700" />,
      features: ["Microservices Architecture", "Serverless Deployment", "Edge Computing & Auth"],
      duration: "8 Months",
      certs: "Full-Stack Badge",
      start: "APRIL 15 START",
      image: "/images/training/program-fullstack.jpg"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-24" id="training-programs">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="mb-6 md:mb-12">
          {/* <h2 className="text-sm font-black uppercase tracking-[0.5em] text-gray-400 mb-4">Educational Tracks</h2> */}
          <h3 className="text-[30px] md:text-5xl font-bold text-primary-900 tracking-tight">Program Specifications</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-white border  rounded-sm transition-all duration-300 border-primary-700"
            >
              {/* Top Section: Tag & Icon */}
              {/* <div className="p-8 pb-0 flex justify-between items-start">
                <span className="text-[10px] font-black font-mono text-gray-400 uppercase tracking-widest">
                  [ {program.id} ]
                </span>
                <div className="w-10 h-10 border border-gray-100 flex items-center justify-center rounded-sm group-hover:bg-primary-50 transition-colors">
                  {program.icon}
                </div>
              </div> */}

              {/* Middle Section: Heading & Summary */}
              <div className="p-8 pt-6 space-y-4">
                <h4 className="text-2xl font-bold text-primary-900 leading-tight">
                  {program.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                  {program.summary}
                </p>
                
                {/* Feature List */}
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Section: Data Readout Bar */}
              <div className="mt-auto p-8 pt-4">
                {/* <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-sm mb-6">
                  <div className="bg-white p-3 text-center">
                    <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Duration</p>
                    <p className="text-xs font-bold text-gray-900">{program.duration}</p>
                  </div>
                  <div className="bg-white p-3 text-center">
                    <p className="text-[9px] font-black text-gray-400 uppercase mb-1">Status</p>
                    <p className="text-xs font-bold text-primary-700 uppercase tracking-tighter">Enrolling</p>
                  </div>
                </div> */}

                <button className="w-full flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-widest  text-white bg-primary-700 hover:bg-primary-800 transition-colors">
                  Enroll Program <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Final Footer Bar */}
              <div className="bg-primary-900 py-2 text-center overflow-hidden">
                <p className="text-[9px] font-black text-white/80 tracking-[0.3em]">
                   // {program.start} //
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}