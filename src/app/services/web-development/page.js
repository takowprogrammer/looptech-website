import styles from '../service.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Full Stack Web & Software Engineering | Loop Technologies",
    description: "High-performance web applications built with Next.js, React, Node.js. Custom web apps, e-commerce, PWAs, and API integrations.",
};

const service = {
    title: "Full Stack Web & Software Engineering",
    subtitle: "Building The Future of Web",
    description: "We craft high-performance, pixel-perfect web applications that captivate users and drive conversions. Our engineering team leverages the latest frameworks (Next.js, React, Node) to build scalable, SEO-optimized, and secure digital platforms.",
    features: [
        { icon: "🌐", title: "Custom Web App Development", desc: "Bespoke web applications built from scratch using Next.js, React, and modern JavaScript to meet your exact business requirements." },
        { icon: "📱", title: "Progressive Web Apps (PWA)", desc: "Apps that work offline, load instantly, and feel native — delivering app-like experiences through the browser." },
        { icon: "🛒", title: "E-commerce & Payment Systems", desc: "Full-featured online stores with secure payment gateways, inventory management, and order tracking systems." },
        { icon: "🔗", title: "API Design & Integration", desc: "RESTful and GraphQL APIs designed for scalability, plus seamless integration with third-party services and platforms." },
        { icon: "📝", title: "Headless CMS Implementation", desc: "Content management solutions using Strapi, Sanity, or Contentful for easy, non-technical content updates." },
        { icon: "⚡", title: "Performance Optimization", desc: "Sub-second load times through code splitting, caching strategies, image optimization, and CDN deployment." }
    ],
    benefits: [
        "Lightning-fast load times for better SEO",
        "Seamless experience across all devices",
        "Robust security against modern web threats",
        "Easy-to-manage content systems"
    ],
    process: [
        { num: "01", title: "Discovery", desc: "Requirements gathering, user research, and technical specification." },
        { num: "02", title: "Design", desc: "UI/UX wireframes and high-fidelity prototypes in Figma for approval." },
        { num: "03", title: "Develop", desc: "Agile sprints with regular demos, code reviews, and testing." },
        { num: "04", title: "Launch", desc: "Deployment, monitoring, and 3 months of post-launch support." }
    ],
    deliverables: ["Interactive UI/UX Prototypes", "Production-Ready Source Code", "Admin Dashboard & Documentation", "3 Months Post-Launch Support"]
};

export default function WebDevelopmentServicePage() {
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
                    <div className={styles.sectionHeader}><h2>What We Build</h2><p>Modern web solutions engineered for scale.</p></div>
                    <div className={styles.featureGrid}>
                        {service.features.map((f, i) => (<div key={i} className={styles.featureCard}><div className={styles.featureIcon}>{f.icon}</div><h3>{f.title}</h3><p>{f.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>Why Choose Us?</h2><p>Code quality and user experience, never compromised.</p></div>
                    <div className={styles.benefitsList}>
                        {service.benefits.map((b, i) => (<div key={i} className={styles.benefitItem}><div className={styles.benefitCheck}>✓</div><p>{b}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.process}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>Our Process</h2><p>Agile development from concept to deployment.</p></div>
                    <div className={styles.processGrid}>
                        {service.process.map((s, i) => (<div key={i} className={styles.processStep}><div className={styles.stepNumber}>{s.num}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.deliverables}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}><h2>What You Get</h2><p>Every project comes with these concrete deliverables.</p></div>
                    <div className={styles.deliverableGrid}>
                        {service.deliverables.map((d, i) => (<div key={i} className={styles.deliverableCard}><div className={styles.deliverableIcon}>📄</div><span>{d}</span></div>))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.container}>
                    <div className={styles.ctaCard}>
                        <h2>Have a Project in Mind?</h2>
                        <p>Let's turn your idea into a high-performance web application.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Start Your Project</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
