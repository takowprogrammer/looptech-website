'use client';

import styles from '../curriculum.module.css';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const trackData = {
    title: "Full Stack Web Development",
    description: "Master modern web technologies from absolute zero. Learn HTML, CSS, JavaScript, React, Node.js, databases, DevOps, and more.",
    certCount: 16,
    certCountLabel: "Modules",
    certs: ["HTML/CSS/JS", "React & Vue.js", "Node.js & Nest.js", "PostgreSQL & MongoDB", "Docker & Kubernetes", "UI/UX Design (Figma)"],
    duration: 7,
    phases: [
        {
            title: "Month 1: Computer Basics & Web Foundations",
            description: "Building the bedrock — from computer literacy to your first web pages.",
            modules: [
                {
                    name: "Module 1: Computer Basics",
                    topics: [
                        "Hardware, Software & Peripherals",
                        "Windows & Linux OS Navigation",
                        "Keyboarding & File Management",
                        "Internet, Email & Online Safety",
                        "Word Processing, Spreadsheets & Presentations"
                    ]
                },
                {
                    name: "Module 2: Web Development Basics",
                    topics: [
                        "HTML Structure & Semantic Elements",
                        "CSS Styling, Layouts & Responsive Design",
                        "JavaScript Fundamentals (Variables, Functions, Control Flow)",
                        "DOM Manipulation & Event Handling",
                        "Asynchronous Programming (AJAX & Promises)"
                    ]
                },
                {
                    name: "Module 3: Version Control",
                    topics: [
                        "Git Workflow & Branching",
                        "Merging & Conflict Resolution",
                        "GitHub Collaboration & Pull Requests"
                    ]
                }
            ]
        },
        {
            title: "Months 2-3: Frontend Development & Design",
            description: "Building beautiful, interactive user interfaces with modern frameworks and design tools.",
            modules: [
                {
                    name: "Module 4: Linux for Developers",
                    topics: [
                        "Command Line Interface (CLI)",
                        "File System & Permissions",
                        "Package Managers & Process Management",
                        "Shell Scripting & File Transfer"
                    ]
                },
                {
                    name: "Module 5A: Frontend Frameworks",
                    topics: [
                        "React — Components, State & Props",
                        "Vue.js — Reactive Data & Directives",
                        "Building Interactive & Scalable UIs",
                        "Component Lifecycle & Hooks"
                    ]
                },
                {
                    name: "Module 5B: UI/UX Design (Figma)",
                    topics: [
                        "Design Principles & Wire Framing",
                        "Designing Apps, Blogs & Websites in Figma",
                        "UI/UX Design Essentials",
                        "Interaction Design vs Interactive Design",
                        "Shortcuts & Techniques for Effective Design"
                    ]
                }
            ]
        },
        {
            title: "Months 4-5: Backend Development & Databases",
            description: "Server-side programming, database mastery, and secure API architecture.",
            modules: [
                {
                    name: "Module 6: Backend Development",
                    topics: [
                        "Server-Side Programming with Node.js",
                        "RESTful API Concepts & Routing",
                        "Database Interactions & Middleware"
                    ]
                },
                {
                    name: "Module 7: Databases",
                    topics: [
                        "SQL — PostgreSQL & MySQL",
                        "NoSQL — MongoDB & Firebase",
                        "Data Modeling & Relationships",
                        "CRUD Operations & Queries"
                    ]
                },
                {
                    name: "Module 8: Server-Side Frameworks",
                    topics: [
                        "Express.js — REST APIs & Middleware",
                        "Nest.js — Enterprise Architecture & MVC",
                        "TypeScript for Backend Development"
                    ]
                },
                {
                    name: "Module 9: Authentication & Authorization",
                    topics: [
                        "Passport.js & JWT (JSON Web Tokens)",
                        "Session Management & OAuth",
                        "Role-Based Access Control (RBAC)"
                    ]
                }
            ]
        },
        {
            title: "Months 6-7: Advanced Topics & Capstone",
            description: "Production-grade skills — testing, deployment, security, and your final collaborative project.",
            certExam: "Full Stack Web Development Certificate",
            modules: [
                {
                    name: "Modules 10-11: Testing & DevOps",
                    topics: [
                        "Unit Testing & Testing Frameworks",
                        "Debugging Tools & Techniques",
                        "Docker Containerization",
                        "Kubernetes Orchestration",
                        "CI/CD Pipelines (Jenkins, GitLab CI)",
                        "Google Cloud Deployment"
                    ]
                },
                {
                    name: "Modules 12-13: Performance & Security",
                    topics: [
                        "Caching, Lazy Loading & Network Optimization",
                        "Performance Monitoring & Profiling",
                        "Input Validation & SQL Injection Prevention",
                        "XSS & CSRF Protection"
                    ]
                },
                {
                    name: "Modules 14-15: APIs & Advanced Topics",
                    topics: [
                        "REST & GraphQL API Integration",
                        "Swagger & Postman Documentation",
                        "WebSockets & Real-Time Apps",
                        "Serverless Architecture & Microservices"
                    ]
                },
                {
                    name: "Module 16: Capstone Project",
                    topics: [
                        "Collaborative Project with Cloud Computing Dept.",
                        "Real-World Team Roles & Task Assignment",
                        "Full Stack: Next.js + Nest.js + PostgreSQL + MongoDB",
                        "Project Defense & Presentation"
                    ]
                }
            ]
        }
    ]
};

export default function WebDevelopmentPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Enrollment Open</span>
                        <h1><span className={styles.gradientText}>{trackData.title}</span></h1>
                        <p>{trackData.description}</p>
                        <div className={styles.ctaGroup}>
                            <a
                                href="https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20the%20Full%20Stack%20Web%20Development%20program."
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

            {/* Overview */}
            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={trackData.certCount} duration={1000} />
                            </span>
                            <span className={styles.statLabel}>Training Modules</span>
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
                        <h3>Core Technologies:</h3>
                        <div className={styles.certBadges}>
                            {trackData.certs.map((cert, i) => (
                                <span key={i} className={styles.certBadge}>{cert}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum" className={styles.curriculum}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The 7-Month Learning Journey</h2>
                        <p>From absolute beginner to production-ready full stack developer. No prior knowledge required.</p>
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
                                            <div className={styles.certExamLabel}>Completion Milestone</div>
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
                                <div className={styles.launchpadItem}>
                                    <strong>Cross-Team Collaboration</strong>
                                    <span>Work alongside Cloud Computing students on real-world projects.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration */}
            <section id="register" className={styles.register}>
                <div className={styles.container}>
                    <div className={styles.registerCard}>
                        <h2>Ready to Become a Full Stack Developer?</h2>
                        <p>No prior knowledge required — just your willingness to learn.</p>
                        <div className={styles.registerInfo}>
                            <p><strong>Path:</strong> {trackData.title}</p>
                            <p><strong>Duration:</strong> 28 Weeks</p>
                        </div>
                        <a
                            href="https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20joining%20the%20Full%20Stack%20Web%20Development%20program."
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
