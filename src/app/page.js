import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { EquipmentIllustration, CloudIllustration, WebDevIllustration, SecurityIllustration, NetworkIllustration, MobileIllustration } from '@/components/Illustrations';
import styles from './page.module.css';
import Link from 'next/link';
import ReviewsSection from '@/components/ReviewsSection';

// Service Images are now imported from Illustrations

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
    },
    {
        icon: <SecurityIllustration />,
        title: "CCTV Sales & Installation",
        description: "State-of-the-art surveillance solutions for offices, retail spaces, and industrial facilities with professional installation.",
        href: "/services#cctv"
    },
    {
        icon: <NetworkIllustration />,
        title: "Network Design & Installation",
        description: "Custom network architecture crafted for your business needs, ensuring scalability, security, and optimal performance.",
        href: "/services#network"
    },
    {
        icon: <MobileIllustration />,
        title: "Web & Mobile App Development",
        description: "Custom applications that engage users and drive business results. From idea to launch with cutting-edge frameworks.",
        href: "/services#mobile"
    }
];

export default function Home() {
    return (
        <>
            <div className={`${styles.hero} animate-fadeInUp`}>
                <Hero />
            </div>

            {/* Services Section */}
            <section className={`${styles.services} animate-fadeInUp`} id="services" style={{ animationDelay: '0.2s' }}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Our Services</span>
                        <h2>Comprehensive IT Solutions for Your Business</h2>
                        <p>From cloud computing to security systems, we provide end-to-end IT services to help your business thrive in the digital age.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Section */}
            <section className={styles.training}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Training & Certification</span>
                        <h2>Empower Your Business with Expert IT Training & Certification</h2>
                    </div>

                    <div className={styles.trainingGrid}>
                        <div className={styles.trainingCard}>
                            <div className={styles.trainingIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </div>
                            <h3>Full Stack Web Development</h3>
                            <p>Master the latest technologies with hands-on courses designed for real-world impact. Learn React, Node.js, databases, and deployment strategies from industry experts.</p>
                        </div>

                        <div className={styles.trainingCard}>
                            <div className={styles.trainingIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                                </svg>
                            </div>
                            <h3>Google Cloud Training</h3>
                            <p>Gain industry-recognized certifications to accelerate your cloud career and optimize your infrastructure. Comprehensive courses cover architecture, security, and data engineering.</p>
                        </div>

                        <div className={styles.trainingCard}>
                            <div className={styles.trainingIcon}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Tailored Programs</h3>
                            <p>Transform your team&apos;s skills and unlock new growth opportunities with Loop&apos;s customized training programs. We adapt to your schedule, skill level, and business objectives.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className={styles.whyUs}>
                <div className={styles.container}>
                    <div className={styles.whyUsContent}>
                        <span className={styles.sectionTag}>Why Choose Us</span>
                        <h2>Building Reliable Foundations for Your Digital Future</h2>
                        <p>With years of experience and a commitment to excellence, Loop Technologies delivers solutions that drive real business results.</p>

                        <div className={styles.statsGrid}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>100+</span>
                                <span className={styles.statLabel}>Projects Completed</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>Happy Clients</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>24/7</span>
                                <span className={styles.statLabel}>Support Available</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.whyUsIllustration}>
                        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Network Diagram */}
                            <rect x="175" y="20" width="50" height="40" rx="4" fill="#6366f1" />
                            <rect x="185" y="30" width="30" height="4" rx="2" fill="#fff" />
                            <rect x="185" y="38" width="20" height="4" rx="2" fill="#a5b4fc" />
                            <rect x="185" y="46" width="25" height="4" rx="2" fill="#fff" />

                            {/* Connection lines */}
                            <path d="M200 60 L200 100 L100 140" stroke="#c4b5fd" strokeWidth="2" />
                            <path d="M200 60 L200 100 L200 140" stroke="#c4b5fd" strokeWidth="2" />
                            <path d="M200 60 L200 100 L300 140" stroke="#c4b5fd" strokeWidth="2" />

                            {/* Server nodes */}
                            <rect x="70" y="140" width="60" height="50" rx="4" fill="#7c3aed" />
                            <rect x="80" y="150" width="8" height="8" rx="1" fill="#fff" />
                            <rect x="92" y="150" width="8" height="8" rx="1" fill="#fff" />
                            <rect x="104" y="150" width="8" height="8" rx="1" fill="#c4b5fd" />

                            <rect x="170" y="140" width="60" height="50" rx="4" fill="#8b5cf6" />
                            <rect x="180" y="150" width="8" height="8" rx="1" fill="#fff" />
                            <rect x="192" y="150" width="8" height="8" rx="1" fill="#fff" />
                            <rect x="204" y="150" width="8" height="8" rx="1" fill="#ddd6fe" />

                            <rect x="270" y="140" width="60" height="50" rx="4" fill="#6366f1" />
                            <rect x="280" y="150" width="8" height="8" rx="1" fill="#fff" />
                            <rect x="292" y="150" width="8" height="8" rx="1" fill="#fff" />
                            <rect x="304" y="150" width="8" height="8" rx="1" fill="#a5b4fc" />

                            {/* Bottom connections */}
                            <path d="M100 190 L100 220 L200 250" stroke="#c4b5fd" strokeWidth="2" />
                            <path d="M200 190 L200 250" stroke="#c4b5fd" strokeWidth="2" />
                            <path d="M300 190 L300 220 L200 250" stroke="#c4b5fd" strokeWidth="2" />

                            {/* Central hub */}
                            <circle cx="200" cy="260" r="20" fill="url(#hubGrad)" />
                            <circle cx="200" cy="260" r="10" fill="#fff" />

                            <defs>
                                <linearGradient id="hubGrad" x1="180" y1="240" x2="220" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6366f1" />
                                    <stop offset="1" stopColor="#7c3aed" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewsSection />

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>Ready to Transform Your Business?</h2>
                        <p>Let&apos;s discuss how Loop Technologies can help you achieve your digital goals. Schedule a free consultation today.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className={styles.ctaPrimary}>
                                Schedule Consultation
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link href="/projects" className={styles.ctaSecondary}>
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
