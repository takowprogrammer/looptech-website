import styles from '../service.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Enterprise Network Infrastructure | Loop Technologies",
    description: "Custom LAN/WAN design, fiber optic cabling, secure Wi-Fi, VPN setup, and firewall configuration for mission-critical business operations.",
};

const service = {
    title: "Enterprise Network Infrastructure",
    subtitle: "The Backbone of Your Business",
    description: "A slow network kills productivity. We design and install robust, high-speed network infrastructures using fiber optics, enterprise-grade routers, and secure firewalls. Guaranteed 99.9% uptime for mission-critical operations.",
    features: [
        { icon: "🌐", title: "LAN/WAN Network Design", desc: "Custom-designed local and wide-area networks optimized for your building layout, user count, and bandwidth requirements." },
        { icon: "🔌", title: "Fiber Optic Cabling", desc: "Future-proof fiber infrastructure capable of multi-gigabit speeds with professional structured cabling and certification." },
        { icon: "📶", title: "Secure Wi-Fi (WLAN) Setup", desc: "Enterprise-grade wireless coverage with heat mapping, access point placement, and WPA3 security protocols." },
        { icon: "🔒", title: "VPN & Remote Access", desc: "Secure site-to-site and client VPN configurations enabling your team to work safely from anywhere." },
        { icon: "🛡️", title: "Network Security & Firewalls", desc: "Next-gen firewall deployment, intrusion detection systems, and network segmentation for threat containment." },
        { icon: "📊", title: "Bandwidth Management", desc: "QoS policies, traffic shaping, and monitoring to prioritize critical applications and eliminate bottlenecks." }
    ],
    benefits: [
        "Eliminate dead zones and connection drops",
        "Secure internal data from external threats",
        "Support high-bandwidth applications (Video, VoIP)",
        "Future-proof cabling infrastructure"
    ],
    process: [
        { num: "01", title: "Site Survey", desc: "Physical inspection and requirements gathering for your premises." },
        { num: "02", title: "Design", desc: "Network topology design with equipment specifications and cabling routes." },
        { num: "03", title: "Install", desc: "Certified technicians install cabling, switches, routers, and access points." },
        { num: "04", title: "Test", desc: "End-to-end network performance testing with detailed certification reports." }
    ],
    deliverables: ["Network Topology Diagram", "Certified Cabling Installation", "Hardware Configuration", "Network Performance Report"]
};

export default function NetworkInfrastructurePage() {
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
                        <p>End-to-end network solutions for businesses of all sizes.</p>
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
                        <h2>Why Invest in Network Infrastructure?</h2>
                        <p>Reliable connectivity is non-negotiable for modern business.</p>
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
                    <div className={styles.sectionHeader}><h2>Our Process</h2><p>Professional network deployment from start to finish.</p></div>
                    <div className={styles.processGrid}>
                        {service.process.map((s, i) => (<div key={i} className={styles.processStep}><div className={styles.stepNumber}>{s.num}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.deliverables}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>What You Get</h2><p>Certified deliverables with every project.</p></div>
                    <div className={styles.deliverableGrid}>
                        {service.deliverables.map((d, i) => (<div key={i} className={styles.deliverableCard}><div className={styles.deliverableIcon}>📄</div><span>{d}</span></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Need a Reliable Network?</h2>
                        <p>Let our certified engineers design and deploy a network built for performance and security.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Contact Sales Engineer</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
