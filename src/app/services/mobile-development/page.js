import styles from '../service.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Mobile App Development | Loop Technologies",
    description: "Native and cross-platform mobile apps for iOS and Android. React Native, Flutter, push notifications, offline sync, and App Store deployment.",
};

const service = {
    title: "Native & Cross-Platform Mobile Apps",
    subtitle: "Your Business in Every Pocket",
    description: "Engage your customers with intuitive, high-performance mobile apps. Whether for iOS or Android, we build beautiful, responsive applications that offer seamless user experiences and powerful offline capabilities.",
    features: [
        { icon: "📱", title: "iOS & Android Development", desc: "Native apps for both platforms, or cross-platform solutions that share a single codebase without compromising on performance." },
        { icon: "⚛️", title: "React Native / Flutter", desc: "Build once, deploy everywhere. Cross-platform frameworks that deliver near-native performance and native UI components." },
        { icon: "🎨", title: "UI/UX Mobile Design", desc: "Intuitive, thumb-friendly interfaces designed with mobile-first principles, accessibility, and platform-specific design guidelines." },
        { icon: "🔔", title: "Push Notifications", desc: "Engage users with targeted, timely push notifications using Firebase Cloud Messaging for both iOS and Android." },
        { icon: "📴", title: "Offline Data Sync", desc: "Apps that work seamlessly offline with intelligent data syncing when connectivity is restored." },
        { icon: "🚀", title: "App Store Optimization", desc: "Strategic ASO to maximize visibility, downloads, and ratings on both the Apple App Store and Google Play Store." }
    ],
    benefits: [
        "Direct channel to engage customers",
        "Higher retention than mobile websites",
        "Leverage device features (Camera, GPS, Biometrics)",
        "Brand presence on App Store & Play Store"
    ],
    process: [
        { num: "01", title: "Strategy", desc: "Define user personas, features, and platform strategy." },
        { num: "02", title: "Design", desc: "High-fidelity wireframes and interactive prototypes for user testing." },
        { num: "03", title: "Develop", desc: "Sprint-based development with weekly builds and QA testing." },
        { num: "04", title: "Publish", desc: "App Store submission, launch, and post-launch analytics setup." }
    ],
    deliverables: ["High-Fidelity Wireframes", "Published App Store Binaries", "Analytics Dashboard Integration", "User Guide & Training"]
};

export default function MobileDevelopmentPage() {
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
                    <div className={styles.sectionHeader}><h2>What We Build</h2><p>Mobile solutions designed for performance and engagement.</p></div>
                    <div className={styles.featureGrid}>
                        {service.features.map((f, i) => (<div key={i} className={styles.featureCard}><div className={styles.featureIcon}>{f.icon}</div><h3>{f.title}</h3><p>{f.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>Why Go Mobile?</h2><p>Meet your customers where they already are.</p></div>
                    <div className={styles.benefitsList}>
                        {service.benefits.map((b, i) => (<div key={i} className={styles.benefitItem}><div className={styles.benefitCheck}>✓</div><p>{b}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.process}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>Our Process</h2><p>From strategy to App Store — we handle the full lifecycle.</p></div>
                    <div className={styles.processGrid}>
                        {service.process.map((s, i) => (<div key={i} className={styles.processStep}><div className={styles.stepNumber}>{s.num}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.deliverables}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>What You Get</h2><p>Concrete deliverables with every mobile project.</p></div>
                    <div className={styles.deliverableGrid}>
                        {service.deliverables.map((d, i) => (<div key={i} className={styles.deliverableCard}><div className={styles.deliverableIcon}>📄</div><span>{d}</span></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Ready to Build Your App?</h2>
                        <p>Let's discuss your mobile strategy and bring your idea to life.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Start Your Project</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
