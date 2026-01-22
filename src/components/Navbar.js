'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cloud, Shield, Cpu, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Training', href: '/training' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
  ];

  const services = [
    { name: 'Cloud Computing', href: '/services#cloud', icon: <ArrowRight className="w-4 h-4" />, desc: 'GCP Architecture & Scaling' },
    { name: 'Cyber Security', href: '/services#security', icon: <ArrowRight className="w-4 h-4" />, desc: 'Threat Detection & IAM' },
    { name: 'IT Equipment Supply', href: '/services#hardware', icon: <ArrowRight className="w-4 h-4" />, desc: 'Hardware Procurement' },
    { name: "Web Development", href: '/services#webdev', icon: <ArrowRight className="w-4 h-4" />, desc: 'Custom Web Solutions' },
    {name: "Mobile App Development", href: '/services#mobile', icon: <ArrowRight className="w-4 h-4" />, desc: 'iOS & Android Development' },
    {name: "IT training", href: '/services#training', icon: <ArrowRight className="w-4 h-4" />, desc: 'Cloud & IT Certifications' },

  ];

  // Hover handlers to prevent immediate closing when moving mouse between link and menu
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Small delay for better UX
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 h-[72px]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/images/logo.png" alt="Loop Tech" className="h-auto w-20" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive || isServicesOpen ? 'text-primary-700' : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Link>

                    {/* Framer Motion Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-[100%] left-[-20px] w-64 bg-white shadow-xl rounded-xl border border-gray-100 py-3 mt-1 overflow-hidden"
                        >
                          {/* <div className="px-3 pb-2 mb-2 border-b border-gray-50">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Our Expertise</span>
                          </div> */}
                          {services.map((service) => (
                            <Link 
                              key={service.name} 
                              href={service.href}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="mt-1 text-primary-600">{service.icon}</div>
                              <div>
                                <div className="text-sm font-bold text-gray-900 group-hover:text-primary-700">{service.name}</div>
                                <div className="text-[11px] text-gray-500">{service.desc}</div>
                              </div>
                            </Link>
                          ))}
                          {/* <Link 
                            href="/services" 
                            className="flex items-center justify-between px-4 py-3 mt-2 bg-gray-50 text-xs font-bold text-primary-700 hover:bg-primary-700 hover:text-white transition-all"
                          >
                            View All Services
                            <ArrowRight className="w-3 h-3" />
                          </Link> */}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-gray-900' : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-primary-700 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                </Link>
              );
            })}
            
            <button className="px-6 py-2 border-2 border-primary-700 text-primary-700 rounded-full hover:bg-primary-50 transition-colors font-bold text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile menu button remains the same */}
          <button className="md:hidden p-2 relative z-50" onClick={() => setIsOpen(!isOpen)}>
             <div className="w-6 h-5 flex flex-col justify-between">
               <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
               <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
               <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
             </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}

      <div

        className={`md:hidden fixed top-[72px] left-0 bottom-0 w-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-40 ${

          isOpen ? 'translate-x-0' : '-translate-x-full'

        }`}

      >

        <div className="px-6 py-8 flex flex-col space-y-6">

          {navLinks.map((link) => {

            const isActive = pathname === link.href;

            return (

              <Link

                key={link.name}

                href={link.href}

                onClick={() => setIsOpen(false)}

                className={`text-lg  transition-colors ${

                  isActive ? 'text-primary-700 font-bold' : 'text-gray-600'

                }`}

              >

                {link.name}

              </Link>

            );

          })}

         

          <div className="pt-6 space-y-4">

            <button className="w-full px-6 py-3 bg-primary-700 text-white rounded-full font-bold ">

              Get Started

            </button>

            <button className="w-full px-6 py-3 border border-primary-700 text-primary-700 rounded-full font-bold">

              Explore Services

            </button>

          </div>

        </div>

      </div>

      
      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 top-[72px]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}