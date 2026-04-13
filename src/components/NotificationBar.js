'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotificationBar() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Show only if not closed previously in this session (or use localStorage for persistence)
        // Also hide if already on the training page
        const isClosed = sessionStorage.getItem('gcp-bar-closed');
        if (!isClosed && pathname !== '/training/google-cloud') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [pathname]);

    const closeBar = () => {
        setIsVisible(false);
        sessionStorage.setItem('gcp-bar-closed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div style={{
            background: 'linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)',
            color: 'white',
            textAlign: 'center',
            padding: '10px 20px',
            fontSize: '0.9rem',
            fontWeight: '500',
            position: 'relative',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px'
        }}>
            <span>🚀 <strong>New:</strong> Become a Google Cloud Engineer in 7 Months! Enrollment Open.</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Link
                    href="/training/google-cloud"
                    style={{
                        background: 'white',
                        color: '#4f46e5',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '0.8rem',
                        textDecoration: 'none'
                    }}
                >
                    Learn More
                </Link>
                <button
                    onClick={closeBar}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255,255,255,0.8)',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    aria-label="Close"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
}
