import styles from '../service.module.css';
import Link from 'next/link';

export const metadata = {
    title: "IT Equipment Analysis & Procurement | Loop Technologies",
    description: "Strategic hardware procurement, enterprise laptop and desktop fleets, servers, storage, and lifecycle management for your business.",
};

const service = {
    title: "IT Equipment Analysis & Procurement",
    subtitle: "Enterprise-Grade Hardware Solutions",
    description: "We don't just sell hardware; we provide a strategic analysis of your infrastructure needs. Our procurement service ensures you get high-performance, durable, and cost-effective equipment that aligns with your long-term business goals.",
    features: [
        { icon: "🔍", title: "Needs Assessment & Consulting", desc: "We analyze your workflow, user count, and technical requirements to recommend the right hardware stack for your budget." },
        { icon: "💻", title: "Enterprise Laptop & Desktop Fleets", desc: "Bulk procurement of business-grade machines from HP, Dell, Lenovo, and Apple with warranty and support packages." },
        { icon: "🖥️", title: "High-Performance Servers & Storage", desc: "Rack, tower, and blade servers with RAID configurations, NAS/SAN storage solutions for your data center." },
        { icon: "🔌", title: "Network Peripherals & Cabling", desc: "Switches, routers, access points, patch panels, and structured cabling components from Ubiquiti, Cisco, and MikroTik." },
        { icon: "📋", title: "Bulk Software Licensing", desc: "Volume licensing for Microsoft 365, Google Workspace, antivirus, and enterprise productivity tools." },
        { icon: "♻️", title: "Lifecycle Management", desc: "Equipment tracking, warranty management, planned refresh cycles, and responsible e-waste disposal." }
    ],
    benefits: [
        "Reduce procurement costs by up to 20%",
        "Ensure hardware compatibility and longevity",
        "Minimize downtime with reliable, warranty-backed gear",
        "Streamlined setup and deployment services"
    ],
    process: [
        { num: "01", title: "Audit", desc: "We audit your existing hardware and identify gaps and upgrade needs." },
        { num: "02", title: "Recommend", desc: "Custom procurement strategy aligned with your budget and goals." },
        { num: "03", title: "Procure", desc: "We source, test, and deliver certified equipment at competitive prices." },
        { num: "04", title: "Deploy", desc: "Professional installation, imaging, and configuration of all devices." }
    ],
    deliverables: ["Hardware Audit Report", "Custom Procurement Strategy", "Installation & Configuration", "3-Year Warranty & Support"]
};

export default function ITEquipmentPage() {
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
                    <div className={styles.sectionHeader}><h2>What We Offer</h2><p>Complete hardware lifecycle solutions for your business.</p></div>
                    <div className={styles.featureGrid}>
                        {service.features.map((f, i) => (<div key={i} className={styles.featureCard}><div className={styles.featureIcon}>{f.icon}</div><h3>{f.title}</h3><p>{f.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>Why Choose Us?</h2><p>Strategic procurement that saves money and time.</p></div>
                    <div className={styles.benefitsList}>
                        {service.benefits.map((b, i) => (<div key={i} className={styles.benefitItem}><div className={styles.benefitCheck}>✓</div><p>{b}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.process}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>Our Process</h2><p>From audit to deployment — we handle everything.</p></div>
                    <div className={styles.processGrid}>
                        {service.process.map((s, i) => (<div key={i} className={styles.processStep}><div className={styles.stepNumber}>{s.num}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.deliverables}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>What You Get</h2><p>Tangible deliverables with every engagement.</p></div>
                    <div className={styles.deliverableGrid}>
                        {service.deliverables.map((d, i) => (<div key={i} className={styles.deliverableCard}><div className={styles.deliverableIcon}>📄</div><span>{d}</span></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Need IT Equipment?</h2>
                        <p>Get a free hardware audit and procurement proposal from our team.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Request Free Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
