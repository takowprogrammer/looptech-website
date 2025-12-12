import styles from './projects.module.css';
import Link from 'next/link';

export const metadata = {
    title: "Our Projects | Loop Technologies CO LTD",
    description: "Explore our portfolio of successful IT projects including web applications, e-commerce platforms, and custom software solutions.",
};

const projects = [
    {
        id: 1,
        title: "Dunamis IT Solutions Platform",
        category: "Full-Stack Development",
        description: "Complete business platform for US-based client featuring a professional website, full e-commerce online store, and comprehensive admin dashboard for managing the entire platform.",
        tags: ["Next.js", "E-Commerce", "Admin Dashboard", "Payment Integration"],
        stats: { metric: "3-in-1", label: "Platform Suite" },
        color: "#6366f1",
        url: "https://dunamisitsolutions.com"
    },
    {
        id: 2,
        title: "Emmaris25 Wedding Platform",
        category: "Custom Software",
        description: "Innovative wedding management system with static wedding website, admin dashboard for generating and sharing WhatsApp invitations, unique QR code generation for guests, Excel export, and custom mobile app for scanning guests on wedding day.",
        tags: ["React", "QR Code", "Mobile App", "WhatsApp API", "Admin Panel"],
        stats: { metric: "End-to-End", label: "Wedding Solution" },
        color: "#7c3aed",
        url: "https://emmaris25.com"
    },
    {
        id: 3,
        title: "Enterprise Network Infrastructure",
        category: "Network Design",
        description: "Complete network overhaul for business clients, reducing outages and significantly improving data transfer speeds with enterprise-grade equipment.",
        tags: ["Cisco", "Fiber Optics", "VLAN", "Security"],
        stats: { metric: "99.9%", label: "Uptime" },
        color: "#8b5cf6",
        url: null
    },
    {
        id: 4,
        title: "Cloud Migration & Training",
        category: "Cloud Computing",
        description: "Migrated legacy infrastructure to Google Cloud Platform with comprehensive staff training programs for businesses in Cameroon.",
        tags: ["GCP", "Kubernetes", "DevOps", "Training"],
        stats: { metric: "50%", label: "Cost Reduction" },
        color: "#6366f1",
        url: null
    }
];

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <section className={`${styles.hero} bg-gradient-hero animate-on-scroll visible`}>
                <div className={styles.container}>
                    <span className={styles.tag}>Our Work</span>
                    <h1>Projects That Drive Results</h1>
                    <p>Explore our portfolio of successful IT solutions that have helped businesses transform and grow.</p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className={styles.projects}>
                <div className={styles.container}>
                    <div className={`${styles.projectsGrid} stagger-grid visible`}>
                        {projects.map((project) => (
                            <div key={project.id} className={styles.projectCard}>
                                <div className={styles.cardHeader} style={{ background: project.color }}>
                                    <span className={styles.category}>{project.category}</span>
                                    <div className={styles.stat}>
                                        <span className={styles.statNumber}>{project.stats.metric}</span>
                                        <span className={styles.statLabel}>{project.stats.label}</span>
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={styles.tagItem}>{tag}</span>
                                        ))}
                                    </div>
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.visitLink}
                                        >
                                            Visit Project
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Highlight */}
            <section className={styles.caseStudy}>
                <div className={styles.container}>
                    <div className={`${styles.caseStudyContent} animate-on-scroll`}>
                        <span className={styles.tag}>Featured Case Study</span>
                        <h2>Emmaris25 - Complete Wedding Management System</h2>
                        <p>
                            We built an end-to-end wedding management platform that revolutionizes how couples manage
                            their special day. From a beautiful wedding website to automated WhatsApp invitations with
                            unique QR codes, and a mobile app for seamless guest check-in on the wedding day.
                        </p>
                        <div className={styles.caseStudyStats}>
                            <div className={styles.caseStat}>
                                <span>100%</span>
                                <p>Automated Invitations</p>
                            </div>
                            <div className={styles.caseStat}>
                                <span>QR</span>
                                <p>Guest Check-in</p>
                            </div>
                            <div className={styles.caseStat}>
                                <span>Excel</span>
                                <p>Guest Export</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to Start Your Project?</h2>
                    <p>Let&apos;s discuss how we can help bring your vision to life.</p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
