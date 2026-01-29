import React from 'react';
import { Linkedin, Mail, Cpu } from 'lucide-react';

export default function MeetTheArchitects() {
  const team = [
    {
      name: "John Doe",
      role: "Lead Cloud Architect",
      specialty: "GCP / Kubernetes",
      bio: "12+ years engineering distributed systems. Expert in multi-cloud migration and zero-trust security.",
      social: { linkedin: "#", email: "mailto:john@looptech.com" },
      image: "/images/avatar1.avif"
    },
    {
      name: "Jane Smith",
      role: "Infrastructure Engineer",
      specialty: "Network Hardening",
      bio: "Specializes in the intersection of physical surveillance and high-security digital backbones.",
      social: { linkedin: "#", email: "mailto:jane@looptech.com" },
       image: "/images/avatar2.jpg"
    },
    {
      name: "Samuel Ngwa",
      role: "Full-Stack Engineer",
      specialty: "React / Node.js",
      bio: "Focused on building the bridge between complex cloud logic and seamless user interfaces.",
      social: { linkedin: "#", email: "mailto:sam@looptech.com" },
       image: "/images/avatar4.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
            Meet the Team
          </h3>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {team.map((member, i) => (
            <div key={i} className="group">
              {/* Photo Container with Tech Badge */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover  transition-all duration-700   group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary-900 text-white p-3 backdrop-blur-md flex items-center gap-2">
                    <Cpu className="w-3 h-3 text-primary-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{member.specialty}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
                <p className="text-xs font-black uppercase tracking-widest text-primary-600">{member.role}</p>
                <p className="text-slate-500 leading-relaxed text-sm pt-2">
                  {member.bio}
                </p>
                
                {/* Social links */}
                <div className="flex gap-4 pt-4">
                  <a href={member.social.linkedin} className="text-slate-400 hover:text-primary-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.email} className="text-slate-400 hover:text-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}