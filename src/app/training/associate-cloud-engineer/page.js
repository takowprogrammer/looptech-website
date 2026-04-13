'use client';

import styles from '../curriculum.module.css';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const trackData = {
    title: "Associate Cloud Engineer",
    description: "Focus on broad cloud architecture, AI leadership, and digital transformation.",
    certCount: 3,
    certs: ["Google Cloud Digital Leader", "Generative AI Leader", "Associate Cloud Engineer"],
    duration: 7,
    phases: [
        {
            title: "Month 1: IT & Linux Foundations",
            description: "Building the bedrock of IT knowledge for absolute beginners.",
            modules: [
                {
                    name: "IT Infrastructure Basics",
                    topics: ["Hardware & Software OS", "OSI Model & Networking", "Online Safety & Security"]
                },
                {
                    name: "Linux for Cloud Engineers",
                    topics: ["Mastering CLI (Bash)", "File & User Management", "Network Config", "Virtualization Mastery"]
                }
            ]
        },
        {
            title: "Months 2-3: Generative AI Leader",
            description: "Mastering the AI-first approach with Google Cloud.",
            certExam: "Google Generative AI Leader Certification Exam",
            modules: [
                {
                    name: "GenAI Foundations",
                    topics: ["LLMs & Foundation Models", "Multimodal & Diffusion Models", "Responsible AI Principles"]
                },
                {
                    name: "Advanced Vertex AI",
                    topics: ["Vertex AI Studio vs Garden", "Prompt Engineering (RAG)", "Building AI Agents"]
                }
            ]
        },
        {
            title: "Months 4-5: Cloud Digital Leader",
            description: "Strategy and digital transformation on GCP.",
            certExam: "Google Cloud Digital Leader Certification Exam",
            modules: [
                {
                    name: "Business Transformation",
                    topics: ["Cloud ROI & Value", "Data Transformation focus", "Modernizing Infrastructure"]
                },
                {
                    name: "Security & Trust",
                    topics: ["Shared Responsibility Model", "IAM & Compliance", "Threat Mitigation"]
                }
            ]
        },
        {
            title: "Months 6-7: Associate Cloud Engineer",
            description: "Hands-on engineering and job-ready skills.",
            certExam: "Associate Cloud Engineer Certification Exam",
            modules: [
                {
                    name: "GCP Engineering",
                    topics: ["Setting up Resource Hierarchy", "GKE & Compute Engine", "vPC Networking", "Storage & Databases"]
                },
                {
                    name: "FinOps & Finale",
                    topics: ["Budgeting & Cost Controls", "Committed Use Discounts", "Capstone Project Defense"]
                }
            ]
        }
    ]
};

export default function AssociateCloudEngineerPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Enrollment Open</span>
                        <h1><span className={styles.gradientText}>{trackData.title}</span></h1>
                        <p>{trackData.description} A comprehensive 7-month journey from foundational IT to professional certification.</p>

                        <div className={styles.ctaGroup}>
                            <a
                                href={`https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20the%20${trackData.title}%20program.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryBtn}
                            >
                                Enroll Now
                            </a>
                            <Link href="#curriculum" className={styles.secondaryBtn}>Explore Curriculum</Link>
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
                                <AnimatedCounter end={trackData.certCount} duration={1000} />
                            </span>
                            <span className={styles.statLabel}>Target Certifications</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={trackData.duration} duration={1500} />
                            </span>
                            <span className={styles.statLabel}>Months Duration</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={100} suffix="%" duration={2000} />
                            </span>
                            <span className={styles.statLabel}>Job Readiness</span>
                        </div>
                    </div>

                    <div className={styles.certificationList}>
                        <h3>Included Certifications:</h3>
                        <div className={styles.certBadges}>
                            {trackData.certs.map((cert, i) => (
                                <span key={i} className={styles.certBadge}>{cert}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className={styles.curriculum}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The 7-Month Learning Journey</h2>
                        <p>A structured approach to mastering Google Cloud from zero to expert.</p>
                    </div>

                    <div className={styles.timeline}>
                        {trackData.phases.map((phase, index) => (
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
                                {phase.certExam && (
                                    <div className={styles.certExam}>
                                        <div className={styles.certExamIcon}>🎓</div>
                                        <div className={styles.certExamText}>
                                            <div className={styles.certExamLabel}>Certification Milestone</div>
                                            <div className={styles.certExamName}>{phase.certExam}</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Career Launchpad */}
                    <div className={styles.careerLaunchpad}>
                        <div className={styles.launchpadContent}>
                            <span className={styles.launchpadTag}>Bonus Phase</span>
                            <h3>Universal Career Launchpad</h3>
                            <p>Post-training support to ensure you land your dream role.</p>
                            <div className={styles.launchpadGrid}>
                                <div className={styles.launchpadItem}>
                                    <strong>Portfolio Building</strong>
                                    <span>Professional GitHub documentation of your Capstone projects.</span>
                                </div>
                                <div className={styles.launchpadItem}>
                                    <strong>LinkedIn Mastery</strong>
                                    <span>Recruiter-attraction strategies and profile optimization.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section id="register" className={styles.register}>
                <div className={styles.container}>
                    <div className={styles.registerCard}>
                        <h2>Ready to Build Your Future?</h2>
                        <p>Spaces are limited. Apply today.</p>
                        <div className={styles.registerInfo}>
                            <p><strong>Path:</strong> {trackData.title}</p>
                            <p><strong>Duration:</strong> 28 Weeks</p>
                        </div>
                        <a
                            href={`https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20joining%20the%20${trackData.title}%20program.`}
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
