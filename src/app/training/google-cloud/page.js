'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const curricula = {
    associate_cloud: {
        title: "Associate Cloud Engineer",
        description: "Focus on broad cloud architecture, AI leadership, and digital transformation.",
        certCount: 3,
        certs: ["Google Cloud Digital Leader", "Generative AI Leader", "Associate Cloud Engineer"],
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
    },
    professional_architect: {
        title: "Professional Cloud Architect",
        description: "Master enterprise cloud architecture, migration strategies, and system design.",
        certCount: 2,
        certs: ["Associate Cloud Engineer", "Professional Cloud Architect"],
        phases: [
            {
                title: "Months 1-3: Associate Cloud Engineer Fundamentals",
                description: "Deep dive into GCP infrastructure and core services.",
                modules: [
                    {
                        name: "Infrastructure Setup",
                        topics: ["IAM & Resource Management", "Compute Engine & Autoscaling", "Virtual Private Cloud (VPC)"]
                    },
                    {
                        name: "Data & Storage",
                        topics: ["Cloud Storage & SQL", "Spanner & Bigtable basics", "Containerization with GKE"]
                    }
                ]
            },
            {
                title: "Months 4-5: Enterprise Architecture",
                description: "Designing reliable, scalable, and highly available systems.",
                modules: [
                    {
                        name: "System Design Patterns",
                        topics: ["Microservices Architecture", "Disaster Recovery Planning", "Multi-region Deployments"]
                    },
                    {
                        name: "Migration & Modernization",
                        topics: ["Lift-and-Shift vs Refactoring", "Migrating Databases", "Anthos & Hybrid Cloud"]
                    }
                ]
            },
            {
                title: "Month 6: Security, Compliance & Optimization",
                description: "Ensuring your architecture meets industry standards.",
                modules: [
                    {
                        name: "Enterprise Security",
                        topics: ["VPC Service Controls", "Identity-Aware Proxy (IAP)", "Encryption Strategies (CMEK)"]
                    },
                    {
                        name: "Cost & Performance Analysis",
                        topics: ["Cloud Monitoring & Logging", "Cost Optimization Strategies", "Performance Tuning"]
                    }
                ]
            },
            {
                title: "Month 7: Case Studies & Defense",
                description: "Applying architecture principles to real-world scenarios.",
                modules: [
                    {
                        name: "PCA Preparation",
                        topics: ["EHR Healthcare Case Study", "Mountkirk Games Study", "Final Architecture Defense"]
                    }
                ]
            }
        ]
    },
    professional_devops: {
        title: "Professional Cloud DevOps Engineer",
        description: "Specialized path focusing on automation, CI/CD, and site reliability.",
        certCount: 2,
        certs: ["Professional Cloud Architect", "Professional Cloud DevOps Engineer"],
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
                modules: [
                    {
                        name: "Capstone Project",
                        topics: ["Building End-to-End Pipeline", "Multi-Region Automation", "Project Defense/Presentation"]
                    }
                ]
            }
        ]
    },
    marketing: {
        title: "Digital Marketing Training",
        description: "Master WordPress, SEO, and Digital Marketing from beginner to professional.",
        certCount: 1,
        certs: ["Google Generative AI Leader"],
        duration: "12-16 Weeks",
        phases: [
            {
                title: "Part 1: WordPress Mastery",
                description: "Build fast, secure, mobile-responsive websites without code.",
                modules: [
                    {
                        name: "Web Design Fundamentals",
                        topics: ["Domains, Hosting & SSL", "WordPress Installation", "Dashboard Configuration"]
                    },
                    {
                        name: "Themes & Page Builders",
                        topics: ["Parent vs Child Themes", "Mastering Elementor", "Essential Plugin Stack"]
                    },
                    {
                        name: "E-Commerce & WooCommerce",
                        topics: ["Store Setup", "Payment Gateways", "Security Hardening"]
                    }
                ]
            },
            {
                title: "Part 2: SEO Optimization",
                description: "Drive free, organic traffic from Google.",
                modules: [
                    {
                        name: "Keyword Research",
                        topics: ["How Google Works", "Search Intent", "Long-Tail Keywords"]
                    },
                    {
                        name: "On-Page & Technical SEO",
                        topics: ["Title Tags & Meta", "Core Web Vitals", "RankMath/Yoast"]
                    },
                    {
                        name: "Off-Page & Local SEO",
                        topics: ["Link Building", "Google Business Profile", "NAP Consistency"]
                    }
                ]
            },
            {
                title: "Part 3: Digital Marketing",
                description: "Market your assets and measure success.",
                modules: [
                    {
                        name: "Content & AI Marketing",
                        topics: ["Pillar-Cluster Model", "AIDA Copywriting", "AI Tools (ChatGPT/Claude)"]
                    },
                    {
                        name: "Social & Email Marketing",
                        topics: ["Platform Strategy", "Email Automation", "Lead Magnets"]
                    },
                    {
                        name: "Analytics & Reporting",
                        topics: ["Google Analytics 4", "Search Console", "Looker Studio Dashboards"]
                    }
                ]
            },
            {
                title: "Capstone: Client Simulator",
                description: "Build a complete digital presence for a fictional client.",
                modules: [
                    {
                        name: "Final Project",
                        topics: ["5-Page WordPress Site", "SEO Optimization", "Social Media Calendar", "Presentation Defense"]
                    }
                ]
            }
        ]
    }
};

export default function GCPTrainingPage() {
    const [activeTrack, setActiveTrack] = useState('associate_cloud');
    const trackData = curricula[activeTrack];

    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Enrollment Open</span>
                        <h1><span className={styles.gradientText}>{trackData.title}</span></h1>
                        <p>{trackData.description} {activeTrack === 'marketing' ? 'A comprehensive 3-month program.' : 'A comprehensive 7-month journey from foundational IT to professional certification.'}</p>

                        <div className={styles.trackSwitcher}>
                            <button
                                className={`${styles.trackTab} ${activeTrack === 'associate_cloud' ? styles.active : ''}`}
                                onClick={() => setActiveTrack('associate_cloud')}
                            >
                                Associate Cloud Engineer
                            </button>
                            <button
                                className={`${styles.trackTab} ${activeTrack === 'professional_architect' ? styles.active : ''}`}
                                onClick={() => setActiveTrack('professional_architect')}
                            >
                                Pro Cloud Architect
                            </button>
                            <button
                                className={`${styles.trackTab} ${activeTrack === 'professional_devops' ? styles.active : ''}`}
                                onClick={() => setActiveTrack('professional_devops')}
                            >
                                Pro DevOps Engineer
                            </button>
                            <button
                                className={`${styles.trackTab} ${activeTrack === 'marketing' ? styles.active : ''}`}
                                onClick={() => setActiveTrack('marketing')}
                            >
                                Digital Marketing
                            </button>
                        </div>

                        <div className={styles.ctaGroup}>
                            <a
                                href={`https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20the%20${trackData.title}%20program.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryBtn}
                            >
                                Enroll in this Track
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
                                <AnimatedCounter key={`cert-${activeTrack}`} end={trackData.certCount} duration={1000} />
                            </span>
                            <span className={styles.statLabel}>Target Certifications</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter key={`duration-${activeTrack}`} end={activeTrack === 'marketing' ? 3 : 7} duration={1500} />
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
                        <h2>The {activeTrack === 'marketing' ? 'Week-by-Week' : '7-Month'} Learning Journey</h2>
                        <p>A structured approach to mastering {activeTrack === 'marketing' ? 'Digital Marketing' : 'Google Cloud'} from zero to expert.</p>
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
                        <p>Spaces are limited. Select your path and apply today.</p>
                        <div className={styles.registerInfo}>
                            <p><strong>Path:</strong> {trackData.title}</p>
                            <p><strong>Duration:</strong> {activeTrack === 'marketing' ? '12 Weeks' : '28 Weeks'}</p>
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
