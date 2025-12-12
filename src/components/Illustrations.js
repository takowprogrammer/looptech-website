'use client';
import Image from 'next/image';

// Premium 3D Illustrations using generated images
// Images should be placed in public/images/3d/

export const NetworkIllustration = () => (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
            src="/images/3d/network.png"
            alt="Network Infrastructure"
            fill
            style={{ objectFit: 'contain' }}
            priority
        />
    </div>
);

export const SecurityIllustration = () => (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
            src="/images/3d/cctv.png"
            alt="Security and CCTV"
            fill
            style={{ objectFit: 'contain' }}
            priority
        />
    </div>
);

export const CloudIllustration = () => (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
            src="/images/3d/cloud.png"
            alt="Cloud Hosting"
            fill
            style={{ objectFit: 'contain' }}
            priority
        />
    </div>
);

export const WebDevIllustration = () => (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
            src="/images/3d/development.png"
            alt="Web Development"
            fill
            style={{ objectFit: 'contain' }}
            priority
        />
    </div>
);

export const AboutIllustration = () => (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
            src="/images/3d/team.png"
            alt="Our Team"
            fill
            style={{ objectFit: 'contain' }}
            priority
        />
    </div>
);

export const ContactIllustration = () => (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
            src="/images/3d/team.png"
            alt="Contact Support"
            fill
            style={{ objectFit: 'contain' }}
            priority
        />
    </div>
);

// Fallback illustrations using simple SVGs for equipment and mobile
export const EquipmentIllustration = () => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="60" width="120" height="80" rx="4" stroke="var(--brand-blue)" strokeWidth="2" fill="var(--white)" />
        <path d="M40 120 L160 120 L150 140 H50 L40 120Z" fill="var(--gray-200)" />
        <rect x="70" y="80" width="60" height="20" rx="2" fill="var(--violet-100)" />
        <circle cx="100" cy="90" r="5" fill="var(--brand-blue)" />
    </svg>
);

export const MobileIllustration = () => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="40" width="60" height="120" rx="8" stroke="var(--brand-blue)" strokeWidth="3" fill="var(--white)" />
        <line x1="85" y1="50" x2="115" y2="50" stroke="var(--gray-300)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="145" r="3" fill="var(--gray-300)" />
        <rect x="76" y="60" width="48" height="70" rx="2" fill="var(--violet-50)" />
        <rect x="80" y="70" width="40" height="4" rx="2" fill="var(--brand-blue-light)" />
        <rect x="80" y="80" width="20" height="4" rx="2" fill="var(--violet-200)" />
    </svg>
);
