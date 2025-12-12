import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Pattern */}
            <div className={styles.bgPattern}>
                <svg viewBox="0 0 800 600" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#f5d0fe" stopOpacity="0.4" />
                        </linearGradient>
                    </defs>
                    <circle cx="650" cy="100" r="200" fill="url(#heroGrad)" />
                    <circle cx="100" cy="450" r="150" fill="url(#heroGrad)" />
                    <circle cx="700" cy="500" r="100" fill="url(#heroGrad)" />
                </svg>
            </div>

            {/* Tech Lines */}
            <div className={styles.techLines}>
                <svg viewBox="0 0 800 400" preserveAspectRatio="none">
                    <path d="M0 300 Q 200 250 400 300 T 800 280" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.5" />
                    <path d="M0 320 Q 200 280 400 320 T 800 310" stroke="#a5b4fc" strokeWidth="1" fill="none" opacity="0.3" />
                </svg>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>Loop Technologies:</span>
                        <span className={styles.titleGradient}>Your Trusted IT Consulting Partner for Digital Success</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Transform your business with cutting-edge IT solutions designed for the modern enterprise.
                        Loop Technologies delivers comprehensive consulting services that empower organizations
                        to thrive in the digital age.
                    </p>

                    <div className={styles.ctaGroup}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            <span>Schedule Consultation</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/services" className={styles.secondaryBtn}>
                            Explore Services
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className={styles.trustBadges}>
                        <div className={styles.badge}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#7c3aed" />
                                <path d="M2 17l10 5 10-5" stroke="#7c3aed" strokeWidth="2" fill="none" />
                                <path d="M2 12l10 5 10-5" stroke="#7c3aed" strokeWidth="2" fill="none" />
                            </svg>
                            <span>GCP Partner</span>
                        </div>
                        <div className={styles.badge}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Certified Experts</span>
                        </div>
                        <div className={styles.badge}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>

                {/* Hero Illustration */}
                <div className={styles.illustration}>
                    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Main Circle */}
                        <circle cx="200" cy="200" r="150" fill="url(#mainCircleGrad)" opacity="0.2" />
                        <circle cx="200" cy="200" r="100" fill="url(#innerCircleGrad)" opacity="0.3" />

                        {/* Server Stack */}
                        <g transform="translate(140, 120)">
                            <rect x="0" y="0" width="120" height="30" rx="4" fill="#6366f1" />
                            <rect x="10" y="8" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="20" y="8" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="30" y="8" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="90" y="10" width="20" height="10" rx="2" fill="#a5b4fc" />

                            <rect x="0" y="40" width="120" height="30" rx="4" fill="#7c3aed" />
                            <rect x="10" y="48" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="20" y="48" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="30" y="48" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="90" y="50" width="20" height="10" rx="2" fill="#c4b5fd" />

                            <rect x="0" y="80" width="120" height="30" rx="4" fill="#8b5cf6" />
                            <rect x="10" y="88" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="20" y="88" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="30" y="88" width="6" height="6" rx="1" fill="#fff" />
                            <rect x="90" y="90" width="20" height="10" rx="2" fill="#ddd6fe" />
                        </g>

                        {/* Cloud Element */}
                        <g transform="translate(160, 280)">
                            <ellipse cx="40" cy="20" rx="40" ry="20" fill="#c4b5fd" />
                            <ellipse cx="25" cy="25" rx="25" ry="15" fill="#ddd6fe" />
                            <ellipse cx="55" cy="25" rx="30" ry="18" fill="#e0e7ff" />
                        </g>

                        {/* Connection Lines */}
                        <path d="M200 230 L200 280" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="200" cy="230" r="4" fill="#6366f1" />
                        <circle cx="200" cy="280" r="4" fill="#6366f1" />

                        {/* Floating Elements */}
                        <g className={styles.float1}>
                            <circle cx="80" cy="150" r="15" fill="#f5d0fe" />
                            <circle cx="80" cy="150" r="8" fill="#ddd6fe" />
                        </g>
                        <g className={styles.float2}>
                            <circle cx="320" cy="180" r="12" fill="#c4b5fd" />
                            <circle cx="320" cy="180" r="6" fill="#e0e7ff" />
                        </g>
                        <g className={styles.float3}>
                            <circle cx="300" cy="300" r="10" fill="#a5b4fc" />
                        </g>

                        <defs>
                            <linearGradient id="mainCircleGrad" x1="50" y1="50" x2="350" y2="350" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#c4b5fd" />
                                <stop offset="1" stopColor="#f5d0fe" />
                            </linearGradient>
                            <linearGradient id="innerCircleGrad" x1="100" y1="100" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6366f1" />
                                <stop offset="1" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
}
