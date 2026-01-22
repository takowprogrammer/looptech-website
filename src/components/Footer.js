import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030d1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* LEFT BRAND SECTION (Primary 500 Background) */}
        <div className="bg-primary-800 p-8 md:p-16 lg:w-[35%] flex flex-col justify-between">
          <div>
            {/* Logo placeholder - replace with your actual img tag if needed */}
            <div className="mb-10">
              <img src="/images/logo.png" alt="Loop Tech" className="h-12 w-auto grayscale brightness-200" />
            </div>
            
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Loop Tech is an IT Consulting company with aim to empower individuals and businesses achieve 
              their maximum potentials through the provision of innovative technological solutions. 
              We are dedicated to supporting the growth and realization of ideas by delivering 
              comprehensive technological support.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex gap-4 text-sm font-medium">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <span className="opacity-50">|</span>
              <a href="/terms" className="hover:underline">Terms and Conditions</a>
            </div>
          </div>
        </div>

        {/* RIGHT LINKS SECTION (Dark Background) */}
        <div className="p-8 md:p-16 lg:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary-800 shrink-0 mt-1" />
                <span className="text-sm">Iya Avenue, Great Soppo, Buea</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary-800 shrink-0" />
                <span className="text-sm">support@luptek.com</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary-800 shrink-0" />
                <span className="text-sm">(+237) 674 081 245 / 693 198 398</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-primary-800 flex items-center justify-center rounded hover:bg-primary-700 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Meet The Team', 'Contact Us', 'Core Values', 'Testimonials',].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-800 text-sm flex items-center gap-2 transition-colors group">
                     
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Popular Links</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Meet The Team', 'Latest Blog', 'Contact Us', 'Portfolio'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-800 text-sm flex items-center gap-2 transition-colors group">
                     
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='text-white md:hidden border-t border-white/20 pt-8 text-sm'>
           © 2025 LoopTech. All rights reserved.
          </div>

        </div>
        
      </div>
      
    </footer>
  );
}