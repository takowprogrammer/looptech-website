import { 
  EquipmentIllustration, 
  CloudIllustration, 
  WebDevIllustration 
} from '@/components/Illustrations';

export default function ServicesPreview() {
  const services = [
    {
        icon: <EquipmentIllustration />,
        title: "IT Equipment Supplies",
        description: "Premium hardware procurement and setup services. We source quality computers, servers, and peripherals tailored to your business needs.",
        href: "/services#equipment"
    },
    {
        icon: <CloudIllustration />,
        title: "Cloud Computing & Training",
        description: "As a certified GCP Partner, we provide comprehensive cloud solutions and training programs to accelerate your cloud journey.",
        href: "/services#cloud"
    },
    {
        icon: <WebDevIllustration />,
        title: "Full Stack Web Development",
        description: "Master modern technologies with hands-on courses. Learn React, Node.js, databases, and deployment strategies from industry experts.",
        href: "/services#web-dev"
    }
  ];

  return (
    <section className="py-24 md:mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl text-primary-800 font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions to empower your business growth.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-6 md:mb-16">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="flex flex-col p-8 rounded-xl border border-gray-200 bg-white transition-all"
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
                  
                  {/* The Underline Track (Gray 100/faint) */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gray-100">
                    {/* The Loading Line (Primary-500) */}
                    <span className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-primary-700 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex">
          <button className="px-10 py-3 border-2 bg-primary-700 w-full md:w-fit text-white rounded-full font-bold hover:bg-gray-900 transition-all active:scale-95">
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
}