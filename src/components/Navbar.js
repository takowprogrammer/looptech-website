'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cloud, Shield, Cpu, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const timeoutRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', dropdownKey: 'services' },
    { name: 'Training', href: '/training', dropdownKey: 'training' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Cloud Computing', href: '/services/cloud-computing', icon: <ArrowRight className="w-4 h-4" />, desc: 'GCP Architecture & Scaling' },
    { name: 'Security & Surveillance', href: '/services/security-surveillance', icon: <ArrowRight className="w-4 h-4" />, desc: 'CCTV & Access Control' },
    { name: 'IT Equipment Supply', href: '/services/it-equipment', icon: <ArrowRight className="w-4 h-4" />, desc: 'Hardware Procurement' },
    { name: "Web Development", href: '/services/web-development', icon: <ArrowRight className="w-4 h-4" />, desc: 'Custom Web Solutions' },
    { name: "Mobile App Development", href: '/services/mobile-development', icon: <ArrowRight className="w-4 h-4" />, desc: 'iOS & Android Development' },
    { name: "IT Training", href: '/training', icon: <ArrowRight className="w-4 h-4" />, desc: 'Cloud & IT Certifications' },
  ];

  const trainings = [
    { name: 'Associate Cloud Engineer', href: '/training/associate-cloud-engineer', icon: <ArrowRight className="w-4 h-4" />, desc: '3 Google Cloud Certs · 7 Months' },
    { name: 'Pro Cloud Architect', href: '/training/professional-cloud-architect', icon: <ArrowRight className="w-4 h-4" />, desc: '2 Google Cloud Certs · 7 Months' },
    { name: 'Pro DevOps Engineer', href: '/training/professional-devops-engineer', icon: <ArrowRight className="w-4 h-4" />, desc: '2 Google Cloud Certs · 7 Months' },
    { name: 'Digital Marketing', href: '/training/digital-marketing', icon: <ArrowRight className="w-4 h-4" />, desc: 'GenAI Leader Cert · 3 Months' },
    { name: 'Full Stack Web Dev', href: '/training/web-development', icon: <ArrowRight className="w-4 h-4" />, desc: '16 Modules · 7 Months' },
  ];

  const dropdownItems = {
    services,
    training: trainings,
  };

  const handleMouseEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Mobile: toggle sub-menu
  const [mobileSubOpen, setMobileSubOpen] = useState(null);

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
              
              if (link.dropdownKey) {
                const items = dropdownItems[link.dropdownKey];
                const isThisOpen = openDropdown === link.dropdownKey;
                return (
                  <div 
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.dropdownKey)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive || isThisOpen ? 'text-primary-700' : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isThisOpen ? 'rotate-180' : ''}`} />
                      </div>
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-primary-700 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
                    </Link>

                    <AnimatePresence>
                      {isThisOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-[100%] left-[-20px] w-72 bg-white shadow-xl rounded-xl border border-gray-100 py-3 mt-1 overflow-hidden"
                        >
                          {items.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="mt-1 text-primary-600">{item.icon}</div>
                              <div>
                                <div className="text-sm font-bold text-gray-900 group-hover:text-primary-700">{item.name}</div>
                                <div className="text-[11px] text-gray-500">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
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

          {/* Mobile menu button */}
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
        className={`md:hidden fixed top-[72px] left-0 bottom-0 w-full bg-white shadow-2xl transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            if (link.dropdownKey) {
              const items = dropdownItems[link.dropdownKey];
              const isSubOpen = mobileSubOpen === link.dropdownKey;
              return (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileSubOpen(isSubOpen ? null : link.dropdownKey)}
                    className={`w-full flex items-center justify-between text-lg py-3 transition-colors ${
                      isActive ? 'text-primary-700 font-bold' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isSubOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSubOpen && (
                    <div className="pl-4 pb-2 space-y-1">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm font-bold text-primary-700"
                      >
                        View All →
                      </Link>
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-primary-700"
                        >
                          {item.name}
                          <span className="block text-[11px] text-gray-400">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg py-3 transition-colors ${
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