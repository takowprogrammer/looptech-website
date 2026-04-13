import { 
  EquipmentIllustration, 
  CloudIllustration, 
  WebDevIllustration,
  NetworkIllustration,
  SecurityIllustration,
  MobileIllustration
} from '@/components/Illustrations';

export default function ServicesListing() {
  const services = [
    {
        icon: <CloudIllustration />,
        title: "Cloud Computing & Training",
        description: "As a certified GCP Partner, we provide comprehensive cloud solutions and training programs to accelerate your cloud journey.",
        href: "/services/cloud-computing"
    },
    {
        icon: <SecurityIllustration />,
        title: "Security & Surveillance",
        description: "Enterprise-grade CCTV, biometric access control, and network hardening to secure your physical and digital perimeters.",
        href: "/services/security-surveillance"
    },
    {
        icon: <NetworkIllustration />,
        title: "Network Infrastructure",
        description: "Custom network design, implementation, and management using industry-leading hardware for maximum uptime.",
        href: "/services/network-infrastructure"
    },
    {
        icon: <EquipmentIllustration />,
        title: "IT Equipment Supplies",
        description: "Premium hardware procurement and setup services. We source quality computers, servers, and peripherals tailored to your business needs.",
        href: "/services/it-equipment"
    },
    {
        icon: <WebDevIllustration />,
        title: "Full Stack Web Development",
        description: "Master modern technologies with hands-on courses. Learn React, Node.js, databases, and deployment strategies from industry experts.",
        href: "/services/web-development"
    },
    {
        icon: <MobileIllustration />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile solutions designed for performance, security, and seamless user experiences.",
        href: "/services/mobile-development"
    }
  ];

  return (
    <section className=" pt-32 pb-16 bg-primary-50 relative">
          {/* Wave Divider */}
      {/* Tilted C / Gentle U-Shape Divider */}
<div className="absolute w-full top-0  h-24 w-full overflow-hidden">
  <svg 
    className=" w-full h-[120px]" 
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
        
      

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="flex flex-col p-8 rounded-xl border border-gray-200 bg-white transition-all  hover:border-primary-100"
            >
              <div className="relative w-14 h-14 mb-6 flex items-center justify-center">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              {/* --- LINK WITH ANIMATED UNDERLINE --- */}
              <div className="w-fit">
                <a 
                  href={service.href}
                  className="group relative inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors hover:text-primary-700"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  
                  {/* Underline Animation Logic */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gray-100 overflow-hidden">
                    <span className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-primary-700 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact/Support CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl text-white font-bold mb-2">Need a custom solution?</h4>
                <p className="text-slate-400">Our engineers are ready to architect your specific infrastructure needs.</p>
            </div>
            <a href="/contact" className="px-10 py-4 bg-primary-700 whitespace-nowrap text-white rounded-full font-bold hover:bg-primary-600 transition-all active:scale-95 shadow-lg shadow-primary-900/20 inline-block">
                Contact Sales Engineer
            </a>
        </div>

      </div>
    </section>
  );
}