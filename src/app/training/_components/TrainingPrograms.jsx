import React from 'react';
import { Shield, Terminal, Layers, CheckCircle2, ArrowRight, CheckCircle, Code2 } from 'lucide-react';

export default function TrainingPrograms() {
  const programs = [
    {
      id: "01 // ASSOC",
      title: "Associate Cloud Engineer",
      summary: "Foundational cloud concepts, AI leadership, and Associate Architect status.",
      icon: <Shield className="w-5 h-5 text-primary-700" />,
      features: ["GCP Global Backbone", "Google Cloud Digital Leader", "Generative AI Leader"],
      duration: "7 Months",
      certs: "3 Certifications",
      start: "ENROLLING NOW",
      image: "/images/training/program-cloud.jpg",
      href: "/training/associate-cloud-engineer"
    },
    {
      id: "02 // ARCH",
      title: "Pro Cloud Architect",
      summary: "High-intensity path focusing on enterprise cloud architecture and migration.",
      icon: <Layers className="w-5 h-5 text-primary-700" />,
      features: ["Enterprise Architecture", "Hybrid Cloud", "Disaster Recovery"],
      duration: "7 Months",
      certs: "2 Certifications",
      start: "ENROLLING NOW",
      image: "/images/training/program-cloud.jpg",
      href: "/training/professional-cloud-architect"
    },
    {
      id: "03 // DEVOPS",
      title: "Pro DevOps Engineer",
      summary: "Automation-first residency focusing on CI/CD pipelines, GitOps, and SRE principles.",
      icon: <Terminal className="w-5 h-5 text-primary-700" />,
      features: ["Kubernetes (GKE) Mastery", "Terraform Infrastructure as Code", "Incident Response & SRE"],
      duration: "7 Months",
      certs: "2 Certifications",
      start: "ENROLLING NOW",
      image: "/images/training/program-devops.jpg",
      href: "/training/professional-devops-engineer"
    },
    {
      id: "04 // DIGITAL",
      title: "Digital Marketing",
      summary: "Master WordPress, SEO, and Digital Marketing from beginner to professional.",
      icon: <CheckCircle2 className="w-5 h-5 text-primary-700" />,
      features: ["WordPress Mastery", "SEO Optimization", "Google Generative AI Leader"],
      duration: "3 Months",
      certs: "1 Certification",
      start: "ENROLLING NOW",
      image: "/images/training/program-fullstack.jpg",
      href: "/training/digital-marketing"
    },
    {
      id: "05 // WEBDEV",
      title: "Full Stack Web Dev",
      summary: "From zero to production-ready full stack developer. HTML, React, Node.js, databases & more.",
      icon: <Code2 className="w-5 h-5 text-primary-700" />,
      features: ["React & Next.js", "Node.js & Nest.js", "PostgreSQL & MongoDB"],
      duration: "7 Months",
      certs: "16 Modules",
      start: "ENROLLING NOW",
      image: "/images/training/program-webdev.jpg",
      href: "/training/web-development"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-24" id="training-programs">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="mb-6 md:mb-12">
          <h3 className="text-[30px] md:text-5xl font-bold text-primary-900 tracking-tight">Program Specifications</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-white border border-primary-700 rounded-sm transition-all duration-300"
            >
              <div className="p-8 pt-6 space-y-4">
                <h4 className="text-2xl font-bold text-primary-900 leading-tight">
                  {program.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[60px]">
                  {program.summary}
                </p>
                
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto p-8 pt-4">
                <a href={program.href} className="w-full flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-widest text-white bg-primary-700 hover:bg-primary-800 transition-colors">
                  View Curriculum <ArrowRight className="w-4 h-4" />
                </a>
              </div>

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