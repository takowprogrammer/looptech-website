'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './CampaignBanner.module.css';

export default function CampaignBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/training/google-cloud') {
            setIsVisible(false);
            document.documentElement.style.setProperty('--banner-height', '0px');
        } else {
            setIsVisible(true);
            document.documentElement.style.setProperty('--banner-height', '60px');
        }

        return () => {
            document.documentElement.style.setProperty('--banner-height', '0px');
        };
    }, [pathname]);

    const closeBanner = () => {
        setIsVisible(false);
        document.documentElement.style.setProperty('--banner-height', '0px');
    };

    if (!isVisible) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <span className={styles.emoji}>🚀</span>
                    <div>
                        <p className={styles.headline}>Launch Your Cloud Career!</p>
                        <p className={styles.subline}>Google Cloud Training starts Feb 10th. 3 Certifications in 7 Months.</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Link href="/training/google-cloud" className={styles.cta}>
                        View Program
                    </Link>
                    <button onClick={closeBanner} className={styles.closeBtn} aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
