import styles from '../service.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Security & Surveillance Systems | Loop Technologies",
    description: "Enterprise CCTV, AI-powered analytics, biometric access control, and remote monitoring solutions for total physical and digital security.",
};

const service = {
    title: "Advanced Surveillance & Security Systems",
    subtitle: "Protecting What Matters Most",
    description: "Secure your assets with intelligent surveillance solutions. We install state-of-the-art CCTV systems with AI-powered analytics, remote monitoring, and cloud storage integrations, giving you 24/7 visibility and peace of mind.",
    features: [
        { icon: "📹", title: "IP & Analog Camera Systems", desc: "High-resolution cameras tailored for indoor, outdoor, and challenging environments with night vision and weatherproofing." },
        { icon: "🤖", title: "AI Motion & Face Detection", desc: "Smart analytics that detect unusual activity, recognize faces, and trigger automated alerts in real time." },
        { icon: "📱", title: "Remote Mobile Monitoring", desc: "Monitor your premises from anywhere in the world via secure mobile apps with live streaming and playback." },
        { icon: "☁️", title: "Cloud & Hybrid Storage", desc: "Flexible recording options — on-site NVR, cloud backup, or hybrid solutions for redundancy and compliance." },
        { icon: "🔐", title: "Access Control Integration", desc: "Biometric readers, RFID cards, and smart locks integrated with your surveillance for unified perimeter security." },
        { icon: "🔧", title: "24/7 Maintenance Service", desc: "Proactive monitoring and maintenance contracts to ensure your security systems never go offline." }
    ],
    benefits: [
        "Deter theft and unauthorized access",
        "Monitor operations from anywhere in the world",
        "Automated alerts for suspicious activity",
        "Evidence-grade video clarity for investigations"
    ],
    process: [
        { num: "01", title: "Risk Audit", desc: "We analyze your site's vulnerabilities and entry points." },
        { num: "02", title: "Design", desc: "Custom camera layout for zero blind spots and full coverage." },
        { num: "03", title: "Deploy", desc: "Professional cabling, camera mounting, and NVR setup." },
        { num: "04", title: "Train", desc: "We teach your team to use the monitoring tools effectively." }
    ],
    deliverables: ["Security Site Survey", "Custom Camera Layout Design", "Professional Installation", "Mobile App Configuration"]
};

export default function SecuritySurveillancePage() {
    return (
        <div className={styles.pageWrapper}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>{service.subtitle}</span>
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                        <div className={styles.ctaGroup}>
                            <Link href="/contact" className={styles.primaryBtn}>Get a Quote</Link>
                            <Link href="/services" className={styles.secondaryBtn}>All Services</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.features}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>What We Offer</h2>
                        <p>Comprehensive security solutions for homes and businesses.</p>
                    </div>
                    <div className={styles.featureGrid}>
                        {service.features.map((f, i) => (
                            <div key={i} className={styles.featureCard}>
                                <div className={styles.featureIcon}>{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why Choose Our Security Systems?</h2>
                        <p>Peace of mind backed by technology.</p>
                    </div>
                    <div className={styles.benefitsList}>
                        {service.benefits.map((b, i) => (
                            <div key={i} className={styles.benefitItem}>
                                <div className={styles.benefitCheck}>✓</div>
                                <p>{b}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.process}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Process</h2>
                        <p>From site audit to full deployment in days, not weeks.</p>
                    </div>
                    <div className={styles.processGrid}>
                        {service.process.map((s, i) => (
                            <div key={i} className={styles.processStep}>
                                <div className={styles.stepNumber}>{s.num}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.deliverables}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>What You Get</h2>
                        <p>Concrete deliverables with every installation.</p>
                    </div>
                    <div className={styles.deliverableGrid}>
                        {service.deliverables.map((d, i) => (
                            <div key={i} className={styles.deliverableCard}>
                                <div className={styles.deliverableIcon}>📄</div>
                                <span>{d}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Secure Your Premises Today</h2>
                        <p>Get a free site survey and custom security proposal from our team.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Request Free Survey</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
