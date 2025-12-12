'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import { ContactIllustration } from '@/components/Illustrations';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors({ ...fieldErrors, [name]: false });
        }
        setError('');
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = true;
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = true;
        if (!formData.message.trim()) errors.message = true;
        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setError('Please fill in all required fields correctly.');
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
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        } catch (err) {
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const getInputClassName = (fieldName) => {
        if (fieldErrors[fieldName]) return 'input-error';
        if (formData[fieldName] && !fieldErrors[fieldName]) return 'input-success';
        return '';
    };

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <span className={styles.tag}>Contact Us</span>
                    <h1>Let's Start a Conversation</h1>
                    <p>Have a project in mind? We&apos;d love to hear from you. Get in touch and let&apos;s discuss how we can help.</p>
                    <div style={{ maxWidth: '400px', margin: '40px auto 0' }}>
                        <ContactIllustration />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <div className={styles.formSection}>
                            <h2>Send us a Message</h2>

                            {isSubmitted ? (
                                <div className={styles.successMessage}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <h3>Thank you!</h3>
                                    <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                                    <button
                                        className={styles.resetBtn}
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    {error && (
                                        <div className={styles.errorMessage}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 8v4M12 16h.01" />
                                            </svg>
                                            {error}
                                        </div>
                                    )}

                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className={getInputClassName('name')}
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className={getInputClassName('email')}
                                            />
                                        </div>

                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+237 6XX XXX XXX"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="service">Service Interested In</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select a service</option>
                                            <option value="equipment">IT Equipment Supplies</option>
                                            <option value="cloud">Cloud Computing & Training</option>
                                            <option value="web-dev">Full Stack Web Development</option>
                                            <option value="cctv">CCTV Sales & Installation</option>
                                            <option value="network">Network Design & Installation</option>
                                            <option value="mobile">Web & Mobile App Development</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Your Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className={styles.spinner}></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoSection}>
                            <h2>Get in Touch</h2>
                            <p>We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.</p>

                            <div className={styles.contactInfo}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Visit Us</h4>
                                        <p>Beside Winners Pharmacy,<br />Iya Avenue, Great Soppo, Buea</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Call Us</h4>
                                        <p>(+237) 674 081 245<br />(+237) 693 198 398</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <p>support@luptek.com<br />infos@luptek.com</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Working Hours</h4>
                                        <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
