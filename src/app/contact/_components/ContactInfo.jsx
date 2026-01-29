import React from 'react';

export default function ContactInfo() {
  const contactData = [
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Get in Touch",
      lineOne: "+237 000 000 000",
      lineTwo: "eng@looptech.com",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Location",
      lineOne: " Opposite OIC Pavillion Hotel",
      lineTwo: "Buea, South W. Cameroon",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working Hours",
      lineOne: "Mon - Fri: 8am to 5pm",
      lineTwo: "Saturday:  9am to 1pm",
    },
  ];

  return (
    <section className="bg-white pt-16 pb-16 md:pt-20 px-6 md:px-8" id="contact-info">
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {contactData.map((item, index) => (
          <div key={index} className="flex gap-6 items-start">
            {/* Circular SVG Housing */}
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-secondary-700 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
              {item.icon}
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {item.lineOne}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.lineTwo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}