import styles from './page.module.css';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata = {
    title: "Google Cloud Training Program | Loop Technologies",
    description: "Master Google Cloud with our 7-month intensive program. Covers 3 certifications: Gen AI Leader, Cloud Digital Learner, and Associate Cloud Engineer.",
};

const curriculum = [
    {
        title: "Month 1: The Foundation",
        description: "Building the bedrock of IT knowledge for absolute beginners.",
        modules: [
            {
                name: "Module 1: Computer Basics",
                topics: ["Hardware & Software", "OS (Windows/Linux)", "File Management", "Internet & Email", "Office Suite", "Online Safety"]
            },
            {
                name: "Module 2: Linux for Cloud Engineers",
                topics: ["Linux Administration", "CLI Mastery (ssh, rsync)", "Shell Scripting (Bash)", "Networking & Security", "Virtualization"]
            },
            {
                name: "Module 3: IT Fundamentals",
                topics: ["OSI Model Layers", "Virtualization Practical", "Basic Web Development", "Cyber Security Basics", "Data Centers"]
            }
        ]
    },
    {
        title: "Months 2-3: Generative AI Leader",
        description: "Step into the future with cutting-edge AI knowledge.",
        modules: [
            {
                name: "Certification Prep",
                topics: ["GenAI Concepts", "Large Language Models", "Responsible AI", "Business Applications"]
            }
        ]
    },
    {
        title: "Months 4-5: Cloud Digital Leader",
        description: "Understand the core of Google Cloud Platform.",
        modules: [
            {
                name: "Certification Prep",
                topics: ["Digital Transformation", "Cloud Data & AI", "Infrastructure & Modernization", "Google Cloud Security"]
            }
        ]
    },
    {
        title: "Months 6-7: Associate Cloud Engineer",
        description: "Become a certified professional ready for the job market.",
        modules: [
            {
                name: "Certification Prep",
                topics: ["Setting up Cloud Environments", "Planning & Configuring Solutions", "Deploying & Implementing", "Ensuring Operation reliability", "Access & Security"]
            }
        ]
    }
];

export default function GCPTrainingPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Starts February 10th, 2026</span>
                        <h1>From Beginner to <span className={styles.gradientText}>Multi-Certified Cloud Engineer</span></h1>
                        <p>A comprehensive 7-month journey equipping you with 3 globally recognized Google Cloud certifications. Designed for beginners, developers, and IT managers.</p>
                        <div className={styles.ctaGroup}>
                            <a
                                href="https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20the%20GCP%20Training%20starting%20Feb%2010th%2E"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryBtn}
                            >
                                Reserve Your Seat
                            </a>
                            <Link href="#curriculum" className={styles.secondaryBtn}>View Curriculum</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={3} duration={1000} />
                            </span>
                            <span className={styles.statLabel}>Global Certifications</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={7} duration={1500} />
                            </span>
                            <span className={styles.statLabel}>Months Duration</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={100} suffix="%" duration={2000} />
                            </span>
                            <span className={styles.statLabel}>Beginner Friendly</span>
                        </div>
                    </div>

                    <div className={styles.programDetails}>
                        <h2>Who Is This For?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px', lineHeight: '1.6' }}>
                            Whether you have zero IT experience or are an IT manager looking to upskill, this program builds your foundation from rock bottom and scales you to a certified engineer.
                        </p>
                        <ul className={styles.targetAudience}>
                            <li>✅ Complete Beginners</li>
                            <li>✅ Software Developers</li>
                            <li>✅ IT Managers</li>
                            <li>✅ Career Switchers</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className={styles.curriculum}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Comprehensive Curriculum</h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>From CompTIA-level basics to Associate Cloud Engineer.</p>
                    </div>

                    <div className={styles.timeline}>
                        {curriculum.map((phase, index) => (
                            <div key={index} className={styles.phase}>
                                <div className={styles.phaseHeader}>
                                    <div className={styles.phaseNumber}>0{index + 1}</div>
                                    <div className={styles.phaseTitle}>
                                        <h3>{phase.title}</h3>
                                        <p>{phase.description}</p>
                                    </div>
                                </div>
                                <div className={styles.moduleGrid}>
                                    {phase.modules.map((module, mIndex) => (
                                        <div key={mIndex} className={styles.moduleCard}>
                                            <h4>{module.name}</h4>
                                            <ul>
                                                {module.topics.map((topic, i) => (
                                                    <li key={i}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section id="register" className={styles.register}>
                <div className={styles.container}>
                    <div className={styles.registerCard}>
                        <h2>Ready to Launch Your Cloud Career?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', paddingBottom: '20px' }}>Spaces are limited for the February 2026 cohort. Secure your spot today.</p>
                        <div className={styles.registerInfo}>
                            <p><strong>Start Date:</strong> February 10th, 2026</p>
                            <p><strong>Duration:</strong> 7 Months</p>
                            <p><strong>Format:</strong> Hands-on Training & Exam Prep</p>
                        </div>
                        <a
                            href="https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20the%20GCP%20Training%20starting%20Feb%2010th%2E"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.registerBtn}
                        >
                            Apply Now via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
