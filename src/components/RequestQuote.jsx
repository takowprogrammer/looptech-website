'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cloud Infrastructure',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'Cloud Infrastructure', message: '' });
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          </div>

          {/* Right Side: The Form Card */}
          <div className="bg-secondary-600 py-8 px-6 md:px-8 md:p-10 rounded-md border border-gray-100 min-h-[700px]">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <CheckCircle className="w-16 h-16 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-300 mb-8 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white ml-1">Full Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white ml-1">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+237 6XX XXX XXX"
                    className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Select Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900 appearance-none"
                  >
                    <option>Cloud Infrastructure</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Hardware Procurement</option>
                    <option>IT Training & Consulting</option>
                    <option>Security & Surveillance</option>
                    <option>Network Infrastructure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Message *</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 rounded-md bg-primary-50 border border-gray-100 focus:border-primary-500 focus:bg-white focus:outline-none transition-all text-gray-900 resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 px-4 py-3 rounded-lg">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary-600 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-primary-700 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}