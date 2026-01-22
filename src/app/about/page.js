import styles from './about.module.css';
import Link from 'next/link';
// import { AboutIllustration } from '../../components/Illustrations';
import StatsSection from '../../components/StatsSection';

export const metadata = {
    title: "About Us | Loop Technologies CO LTD",
    description: "Learn about Loop Technologies, our mission to empower businesses through technology, and our commitment to excellence in IT consulting.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className={`${styles.hero} bg-gradient-hero animate-on-scroll visible`}>
                <div className={styles.container}>
                    <span className={styles.tag}>Who We Are</span>
                    <h1>Empowering Businesses Through <span className="text-gradient">Technology</span></h1>
                    <p>We are a team of passionate technologists dedicated to simplifying IT potential for businesses in Cameroon and beyond.</p>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyGrid}>
                        <div className={`${styles.storyContent} animate-on-scroll delay-100`}>
                            <h2>Our Story</h2>
                            <p>
                                Founded in Buea, Loop Technologies began with a simple yet ambitious goal: to bridge the gap between complex technology and business needs. We recognized that many organizations struggled to leverage modern IT solutions effectively, often held back by outdated infrastructure or lack of expertise.
                            </p>
                            <p>
                                Today, we have grown into a premier IT consulting firm, trusted by businesses to deliver robust, scalable, and secure technology solutions. Our journey is defined by a relentless pursuit of excellence and a deep commitment to our clients' success.
                            </p>
                        </div>
                        {/* <div className={`${styles.storyImage} animate-on-scroll delay-200`}>
                            <AboutIllustration />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Stats Bar - Now with animated counters */}
            <StatsSection />

            {/* Values Section */}
            <section className={styles.values}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Core Values</h2>
                        <p>The principles that guide every decision we make.</p>
                    </div>
                    <div className={`${styles.valuesGrid} stagger-grid`}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>💡</div>
                            <h4>Innovation</h4>
                            <p>We constantly explore new technologies to solve problems in better ways.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h4>Integrity</h4>
                            <p>We believe in honest, transparent relationships with our clients and partners.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>⭐</div>
                            <h4>Excellence</h4>
                            <p>We deliver nothing short of the best, paying attention to every detail.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🚀</div>
                            <h4>Agility</h4>
                            <p>We adapt quickly to changes, ensuring swift and effective delivery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GCP Section */}
            <section className={styles.gcpSection}>
                <div className={styles.container}>
                    <div className={`${styles.gcpContent} glass-panel animate-on-scroll`}>
                        <div className={styles.gcpBadge}>
                            {/* GCP Partner Badge SVG Placeholder or Image */}
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" stroke="#4285F4" strokeWidth="2" />
                                <path d="M35 50L45 60L65 40" stroke="#34A853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={styles.gcpText}>
                            <h3>Google Cloud Partner</h3>
                            <p>
                                As a certified Google Cloud Partner, we have the expertise to help you navigate the cloud.
                                From migration strategies to cloud-native development, we ensure you get the most out of Google's powerful infrastructure.
                            </p>
                            <Link href="/services#cloud" className={styles.gcpLink}>
                                Learn More about Cloud Services
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className={styles.container}>
                    <h2>Ready to Work Together?</h2>
                    <p>Let's discuss how we can help your business thrive.</p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
