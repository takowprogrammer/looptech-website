import React from 'react';

export default function TrainingOutcomes() {
  const stats = [
    { value: "200+", label: "Lab Hours" },
    { value: "100%", label: "Completion Rate" },
    { value: "3", label: "Professional Certs" },
    { value: "1-on-1", label: "Mentor Support" },
  ];

  const outcomes = [
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Architectural Mastery",
      description: "Graduate with the ability to design and deploy secure, robust cloud.",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Production Readiness",
      description: "Move beyond theory. Gain practical experience troubleshooting live infrastructure",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Career Transformation",
      description: "Position yourself for advanced roles with hands-on skills and expertise.",
    },
  ];

  return (
    <section className="bg-white pt-12 pb-10 md:pb-24 " id="practical-outcomes">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
            Practical Outcome
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl text-lg">
            Our training is engineered to produce immediate, high-impact results for your career and your organization.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-secondary-700 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ">
                {outcome.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar (Integrated) */}
        {/* <div className="bg-primary-50 rounded-sm border border-gray-200 py-10 px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-center text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${idx !== stats.length - 1 ? 'lg:border-r border-gray-200' : ''}`}>
              <div className="text-3xl md:text-4xl font-extrabold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
        
      </div>
    </section>
  );
}