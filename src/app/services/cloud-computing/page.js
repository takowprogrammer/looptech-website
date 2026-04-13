import styles from '../service.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Cloud Computing & Digital Transformation | Loop Technologies",
    description: "Accelerate your digital journey with Google Cloud. Migration, modernization, Kubernetes, AI/ML pipelines, and enterprise-grade cloud architecture.",
};

const service = {
    title: "Cloud Computing & Digital Transformation",
    subtitle: "GCP Certified Premier Partner",
    description: "Accelerate your digital journey with Google Cloud. We help businesses migrate, modernize, and innovate with secure, scalable cloud architectures. From simple data backups to complex AI/ML pipelines, we unlock the full power of the cloud.",
    features: [
        { icon: "☁️", title: "Legacy to Cloud Migration", desc: "Seamlessly move your existing workloads to Google Cloud with zero downtime and a structured migration plan." },
        { icon: "🔄", title: "Hybrid & Multi-Cloud Strategy", desc: "Design architectures that span on-premise and cloud environments using Anthos and GKE Enterprise." },
        { icon: "⚙️", title: "Kubernetes & Microservices", desc: "Deploy containerized applications with GKE, implement service mesh, and build resilient microservice architectures." },
        { icon: "📊", title: "Data Warehouse & Analytics", desc: "Build modern data pipelines using BigQuery, Dataflow, and Looker for real-time business intelligence." },
        { icon: "🔒", title: "Cloud Security Posture Mgmt", desc: "Implement IAM policies, VPC Service Controls, and Security Command Center for enterprise compliance." },
        { icon: "🛡️", title: "Disaster Recovery Planning", desc: "Design multi-region failover strategies with automated backups and RPO/RTO guarantees." }
    ],
    benefits: [
        "Scale resources instantly based on demand",
        "Cut infrastructure maintenance costs by 40%",
        "Enhance data security with enterprise-grade compliance",
        "Boost developer productivity with modern CI/CD"
    ],
    process: [
        { num: "01", title: "Discovery", desc: "We audit your current infrastructure and define cloud goals." },
        { num: "02", title: "Architecture", desc: "Design a cloud-native architecture blueprint tailored to your needs." },
        { num: "03", title: "Migration", desc: "Execute the migration with minimal disruption to your operations." },
        { num: "04", title: "Optimize", desc: "Continuous cost optimization and performance tuning post-launch." }
    ],
    deliverables: ["Cloud Architecture Blueprint", "Migration Execution Plan", "Cost Optimization Report", "Staff Training Sessions"]
};

export default function CloudComputingPage() {
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
                        <p>End-to-end cloud solutions powered by Google Cloud Platform.</p>
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
                        <h2>Why Go Cloud?</h2>
                        <p>Tangible business outcomes from day one.</p>
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
                        <p>A proven methodology for successful cloud adoption.</p>
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
                        <p>Concrete deliverables at the end of every engagement.</p>
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
                        <h2>Ready to Move to the Cloud?</h2>
                        <p>Let our certified engineers design the perfect cloud strategy for your business.</p>
                        <Link href="/contact" className={styles.ctaBtn}>Contact Sales Engineer</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
