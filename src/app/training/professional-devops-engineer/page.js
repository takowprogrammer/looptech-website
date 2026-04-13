'use client';

import styles from '../curriculum.module.css';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const trackData = {
    title: "Professional Cloud DevOps Engineer",
    description: "Specialized path focusing on automation, CI/CD, and site reliability.",
    certCount: 2,
    certs: ["Professional Cloud Architect", "Professional Cloud DevOps Engineer"],
    duration: 7,
    phases: [
        {
            title: "Month 1: DevOps & Linux Master",
            description: "Advanced foundations for the automation engineer.",
            modules: [
                {
                    name: "Linux for DevOps",
                    topics: ["Advanced Shell Scripting", "Task Automation (Cron)", "Permissions & Group Policy", "Kernel & Device Management"]
                },
                {
                    name: "DevOps Foundations",
                    topics: ["Agile & Kanban Basics", "Version Control (Git)", "Networking for Automation"]
                }
            ]
        },
        {
            title: "Months 2-3: Cloud Architecture (PCA) Prep",
            description: "Understanding the infrastructure you will automate.",
            certExam: "Professional Cloud Architect Certification Exam",
            modules: [
                {
                    name: "Core Infrastructure",
                    topics: ["IAM & Resource Hierarchy", "Networking & Interconnect", "System Design Basics"]
                },
                {
                    name: "Containers & Orchestration",
                    topics: ["Dockerization Basics", "GKE Cluster Management", "Autopilot vs Standard", "Configuring Ingress"]
                }
            ]
        },
        {
            title: "Months 4-6: Professional DevOps Engineering",
            description: "Elite skills in automation, SRE, and observability.",
            modules: [
                {
                    name: "Advanced IaC & CI/CD",
                    topics: ["Terraform State & Modules", "Cloud Build & Artifact Registry", "Jenkins & GitLab on GCP"]
                },
                {
                    name: "SRE & DevSecOps",
                    topics: ["SLIs, SLOs & Error Budgets", "Vulnerability Scanning (Snyk)", "Secret Management", "Cloud Operations (Logging/SRE)"]
                }
            ]
        },
        {
            title: "Month 7: DevOps Capstone",
            description: "Proving your expertise through architecture.",
            certExam: "Professional Cloud DevOps Engineer Certification Exam",
            modules: [
                {
                    name: "Capstone Project",
                    topics: ["Building End-to-End Pipeline", "Multi-Region Automation", "Project Defense/Presentation"]
                }
            ]
        }
    ]
};

export default function ProfessionalDevOpsEngineerPage() {
    return (
        <div className={styles.pageWrapper}>
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

            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}><AnimatedCounter end={trackData.certCount} duration={1000} /></span>
                            <span className={styles.statLabel}>Target Certifications</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}><AnimatedCounter end={trackData.duration} duration={1500} /></span>
                            <span className={styles.statLabel}>Months Duration</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}><AnimatedCounter end={100} suffix="%" duration={2000} /></span>
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

            <section id="curriculum" className={styles.curriculum}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The 7-Month Learning Journey</h2>
                        <p>A structured approach to mastering DevOps Engineering from zero to expert.</p>
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
