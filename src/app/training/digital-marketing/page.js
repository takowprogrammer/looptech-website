'use client';

import styles from './page.module.css';
import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';

const curriculum = {
    title: "Full Stack Digital Marketer & Web Designer",
    description: "Master WordPress, SEO, and Digital Marketing from beginner to professional.",
    duration: "12-16 Weeks",
    goal: "To equip students with practical skills to build professional websites, rank them on search engines, and execute profitable digital marketing campaigns.",
    bonus: "FREE Google Generative AI Leader Certification Exam",
    parts: [
        {
            id: "wordpress",
            color: "green",
            emoji: "🟢",
            title: "Part 1: WordPress Mastery",
            subtitle: "Building the Asset",
            goal: "Students will learn to build fast, secure, and mobile-responsive websites from scratch without writing code.",
            modules: [
                {
                    number: 1,
                    title: "The Fundamentals of Web Design",
                    overview: "Understanding the infrastructure of the internet and setting up a professional workspace.",
                    sections: [
                        {
                            name: "Web Basics",
                            topics: ["Domain Names: TLDs, Registrars, DNS records", "Hosting: Shared vs VPS vs Cloud", "SSL Certificates: HTTPS for security & SEO"]
                        },
                        {
                            name: "The Installation",
                            topics: ["cPanel/DirectAdmin Tour", "Installing WordPress (Manual vs Softaculous)", "Local Development with LocalWP"]
                        },
                        {
                            name: "Dashboard & Configuration",
                            topics: ["Permalinks for SEO", "Users & Roles Management", "Posts vs Pages"]
                        }
                    ]
                },
                {
                    number: 2,
                    title: "Design, Themes & Page Builders",
                    overview: "Moving beyond default templates to create custom, branded designs.",
                    sections: [
                        {
                            name: "Themes & Customization",
                            topics: ["Parent vs Child Themes", "Choosing Lightweight Themes (Astra, GeneratePress)", "Global Styles & Branding"]
                        },
                        {
                            name: "Mastering Elementor",
                            topics: ["Sections, Columns & Widgets", "The Box Model: Margins vs Padding", "Responsive Design", "Headers & Footers"]
                        },
                        {
                            name: "Essential Plugin Stack",
                            topics: ["Performance: WP Rocket/LiteSpeed", "Forms: WPForms/Fluent Forms", "Backups: UpdraftPlus"]
                        }
                    ]
                },
                {
                    number: 3,
                    title: "E-Commerce & Advanced Functionality",
                    overview: "Transforming a brochure site into a fully functional online store.",
                    sections: [
                        {
                            name: "WooCommerce Setup",
                            topics: ["Store Configuration", "Product Types: Simple, Variable, Digital", "Store Management"]
                        },
                        {
                            name: "Payments & Shipping",
                            topics: ["Payment Gateways (Stripe, PayPal, Paystack)", "Shipping Zones & Methods", "Tax Configuration"]
                        },
                        {
                            name: "Advanced Functionality",
                            topics: ["Custom Post Types with ACF", "Security Hardening", "Two-Factor Authentication"]
                        }
                    ]
                }
            ]
        },
        {
            id: "seo",
            color: "yellow",
            emoji: "🟡",
            title: "Part 2: Search Engine Optimization (SEO)",
            subtitle: "Optimizing the Asset",
            goal: "Students will learn how to drive free, organic traffic from Google to their websites.",
            modules: [
                {
                    number: 4,
                    title: "SEO Fundamentals & Keyword Research",
                    overview: "Understanding how search engines 'think' and finding what users are searching for.",
                    sections: [
                        {
                            name: "How Google Works",
                            topics: ["Crawling, Indexing & Ranking", "SERP Features", "Algorithm Updates"]
                        },
                        {
                            name: "Keyword Research Strategy",
                            topics: ["Search Intent Types", "Volume vs Keyword Difficulty", "Long-Tail Keywords", "Google Keyword Planner & Ubersuggest"]
                        }
                    ]
                },
                {
                    number: 5,
                    title: "On-Page & Technical SEO",
                    overview: "Optimizing the actual website code and content structure.",
                    sections: [
                        {
                            name: "On-Page Optimization",
                            topics: ["Title Tags & Meta Descriptions", "Header Hierarchy (H1, H2, H3)", "Image SEO & Alt Text", "Internal Linking"]
                        },
                        {
                            name: "Technical SEO",
                            topics: ["XML Sitemaps", "Robots.txt", "Core Web Vitals (LCP, FID, CLS)", "301 Redirects & 404 Fixes"]
                        },
                        {
                            name: "SEO Plugins",
                            topics: ["RankMath Setup", "Yoast Configuration", "Schema Markup"]
                        }
                    ]
                },
                {
                    number: 6,
                    title: "Off-Page & Local SEO",
                    overview: "Building authority and reputation off the website.",
                    sections: [
                        {
                            name: "Link Building",
                            topics: ["Domain Authority (DA) vs Page Authority", "Guest Blogging", "Broken Link Building", "Disavowing Toxic Links"]
                        },
                        {
                            name: "Local SEO (Google Maps)",
                            topics: ["Google Business Profile Optimization", "NAP Consistency", "Citations & Directories"]
                        }
                    ]
                }
            ]
        },
        {
            id: "marketing",
            color: "blue",
            emoji: "🔵",
            title: "Part 3: Digital Marketing & Analytics",
            subtitle: "Promoting the Asset",
            goal: "Students will learn to market their assets and measure success using data.",
            modules: [
                {
                    number: 7,
                    title: "Content Marketing & AI",
                    overview: "Creating content that ranks and converts.",
                    sections: [
                        {
                            name: "Content Strategy",
                            topics: ["Pillar-Cluster Model", "Evergreen vs Trending Content", "Content Calendar"]
                        },
                        {
                            name: "Copywriting Basics",
                            topics: ["Headlines & Power Words", "AIDA Framework", "Call-to-Action Writing"]
                        },
                        {
                            name: "AI for Marketers",
                            topics: ["ChatGPT/Claude for Content", "AI-Generated Outlines", "Human Touch & Accuracy"]
                        }
                    ]
                },
                {
                    number: 8,
                    title: "Social Media & Email Marketing",
                    overview: "Building a community and nurturing leads.",
                    sections: [
                        {
                            name: "Social Media Marketing",
                            topics: ["Platform Selection (B2B vs B2C)", "Content Calendar & Scheduling", "Buffer/Meta Business Suite"]
                        },
                        {
                            name: "Email Marketing",
                            topics: ["List Building & Lead Magnets", "Segmentation Strategies", "Welcome Sequence Automation"]
                        }
                    ]
                },
                {
                    number: 9,
                    title: "Analytics & Reporting",
                    overview: "Proving ROI to clients or employers.",
                    sections: [
                        {
                            name: "Google Analytics 4 (GA4)",
                            topics: ["Setup & Configuration", "Key Metrics: Users, Sessions, Engagement", "Traffic Acquisition Analysis"]
                        },
                        {
                            name: "Google Search Console",
                            topics: ["Performance Reports", "URL Inspection", "Indexing Issues"]
                        },
                        {
                            name: "Reporting",
                            topics: ["Looker Studio Dashboards", "Data Interpretation", "Business Decision Making"]
                        }
                    ]
                }
            ]
        }
    ],
    capstone: {
        title: "The 'Client Simulator'",
        description: "Students are assigned a fictional niche (e.g., 'Dental Clinic in [City]'). They must build a complete digital presence.",
        requirements: [
            "Build a 5-page WordPress site (Home, About, Services, Blog, Contact)",
            "Optimize all pages for green SEO scores, site speed under 2 seconds",
            "Write 2 blog posts and create a 1-month social media calendar",
            "Setup GA4 and Google Search Console",
            "10-minute presentation explaining their strategy"
        ]
    }
};

export default function DigitalMarketingPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Enrollment Open</span>
                        <h1>Become a <span className={styles.gradientText}>{curriculum.title}</span></h1>
                        <p>{curriculum.goal}</p>

                        <div className={styles.bonusBadge}>
                            🎁 {curriculum.bonus}
                        </div>

                        <div className={styles.ctaGroup}>
                            <a
                                href="https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20the%20Digital%20Marketing%20training%20program."
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
                                <AnimatedCounter end={9} duration={1000} />
                            </span>
                            <span className={styles.statLabel}>Core Modules</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={16} duration={1500} />
                            </span>
                            <span className={styles.statLabel}>Weeks Duration</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statValue}>
                                <AnimatedCounter end={100} suffix="%" duration={2000} />
                            </span>
                            <span className={styles.statLabel}>Practical Skills</span>
                        </div>
                    </div>

                    <div className={styles.skillsList}>
                        <h3>Skills You&apos;ll Master:</h3>
                        <div className={styles.skillBadges}>
                            <span className={styles.skillBadge}>WordPress</span>
                            <span className={styles.skillBadge}>Elementor</span>
                            <span className={styles.skillBadge}>WooCommerce</span>
                            <span className={styles.skillBadge}>SEO</span>
                            <span className={styles.skillBadge}>Google Analytics</span>
                            <span className={styles.skillBadge}>Social Media Marketing</span>
                            <span className={styles.skillBadge}>Email Marketing</span>
                            <span className={styles.skillBadge}>AI Content Tools</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section id="curriculum" className={styles.curriculum}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The Complete Learning Journey</h2>
                        <p>A structured approach to mastering digital marketing and web design.</p>
                    </div>

                    {curriculum.parts.map((part, partIndex) => (
                        <div key={partIndex} className={`${styles.part} ${styles[part.id]}`}>
                            <div className={styles.partHeader}>
                                <span className={styles.partEmoji}>{part.emoji}</span>
                                <div className={styles.partTitle}>
                                    <h3>{part.title}</h3>
                                    <span className={styles.partSubtitle}>{part.subtitle}</span>
                                </div>
                            </div>
                            <p className={styles.partGoal}>{part.goal}</p>

                            <div className={styles.modulesContainer}>
                                {part.modules.map((module, mIndex) => (
                                    <div key={mIndex} className={styles.module}>
                                        <div className={styles.moduleHeader}>
                                            <span className={styles.moduleNumber}>Module {module.number}</span>
                                            <h4>{module.title}</h4>
                                            <p>{module.overview}</p>
                                        </div>
                                        <div className={styles.sectionsGrid}>
                                            {module.sections.map((section, sIndex) => (
                                                <div key={sIndex} className={styles.sectionCard}>
                                                    <h5>{section.name}</h5>
                                                    <ul>
                                                        {section.topics.map((topic, tIndex) => (
                                                            <li key={tIndex}>{topic}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Capstone Project */}
                    <div className={styles.capstone}>
                        <div className={styles.capstoneContent}>
                            <span className={styles.capstoneTag}>🚀 Capstone Project</span>
                            <h3>{curriculum.capstone.title}</h3>
                            <p>{curriculum.capstone.description}</p>
                            <div className={styles.requirements}>
                                <h4>Requirements:</h4>
                                <ol>
                                    {curriculum.capstone.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Certification Exam */}
                    <div className={styles.certExam} style={{ marginTop: '40px' }}>
                        <div className={styles.certExamIcon}>🎓</div>
                        <div className={styles.certExamText}>
                            <div className={styles.certExamLabel}>Certification Milestone</div>
                            <div className={styles.certExamName}>Google Generative AI Leader Certification Exam</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section id="register" className={styles.register}>
                <div className={styles.container}>
                    <div className={styles.registerCard}>
                        <h2>Ready to Launch Your Digital Career?</h2>
                        <p>Spaces are limited. Apply today and get FREE GenAI Certification!</p>
                        <div className={styles.registerInfo}>
                            <p><strong>Duration:</strong> 12-16 Weeks</p>
                            <p><strong>Bonus:</strong> FREE Google GenAI Leader Exam</p>
                        </div>
                        <a
                            href="https://wa.me/237674081245?text=Hi%2C%20I%27m%20interested%20in%20joining%20the%20Digital%20Marketing%20program."
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
