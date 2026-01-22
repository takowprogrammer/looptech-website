export default function WhyUs() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "12+", label: "GCP Experts" },
    { value: "24/7", label: "Active Support" },
  ];

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "GCP Certified",
      description: "Authorized partners delivering expert Google Cloud architecture.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Ironclad Security",
      description: "Advanced CCTV and network protocols to keep your data safe.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Hands-on Training",
      description: "Empowering your internal teams with modern dev skillsets.",
    },
  ];

  return (
    <section className="bg-white pt-16 pb-32 md:pt-20" id="features">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900">
            Why Loop Tech?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-secondary-700 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image & Stats Container */}
        <div className="relative">
          {/* Main Image */}
          <div className="w-full max-h-[600px] h-[300px] md:h-[450px] overflow-hidden rounded-sm">
            <img 
              src="/images/whyus.jpg" 
              alt="Loop Tech Workspace" 
              className="w-full h-full object-cover brightness-[0.85] "
            />
          </div>

          {/* Stats Bar - Passing through the bottom axis */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-5xl z-20">
            <div className="bg-primary-50  rounded-sm border border-gray-200 py-8 md:py-12 px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-center text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className={`${idx !== stats.length - 1 ? 'lg:border-r border-gray-100' : ''}`}>
                  <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}