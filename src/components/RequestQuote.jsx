import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function RequestQuote() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden" id="contact">
      {/* Background Decorative Element */}
      <div className="absolute hidden md:block top-0 right-0 w-1/3 h-full bg-primary-500/5 -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & Info */}
          <div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ready to <span className="">Scale</span> Your Business or project?
            </h2>
            
            <p className="text-lg text-gray-600  max-w-lg leading-relaxed">
              Whether you need a full cloud migration, hardware procurement, or specialized training, 
              our team is ready to architect your solution.
            </p>

            {/* <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Call Us Directly</p>
                  <p className="text-gray-600">+237 679 574 561</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Email Support</p>
                  <p className="text-gray-600">hello@looptech.com</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side: The Form Card */}
          <div className="bg-secondary-600 py-8 px-6 md:px-8 md:p-10 rounded-md border border-gray-100 min-h-[700px]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Select Service</label>
                <select className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900 appearance-none">
                  <option>Cloud Infrastructure</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Hardware Procurement</option>
                  <option>IT Training & Consulting</option>
                  <option>CCTV & Security</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..."
                  className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900 resize-none"
                />
              </div>

              <button className="w-full py-5 bg-primary-600 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary-700 transition-all active:scale-[0.98]">
                Send Request
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}