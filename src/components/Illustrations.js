'use client';
import Image from 'next/image';

// Helper to keep wrappers consistent
const IconWrapper = ({ children, className = "w-12 h-12 relative" }) => (
    <div className={className}>{children}</div>
);

export const NetworkIllustration = () => (
    <IconWrapper>
        <Image src="/images/3d/network.png" alt="Network" fill className="object-contain" priority />
    </IconWrapper>
);

export const SecurityIllustration = () => (
    <IconWrapper>
        <Image src="/images/3d/cctv.png" alt="Security" fill className="object-contain" priority />
    </IconWrapper>
);

export const CloudIllustration = () => (
    <IconWrapper>
        <Image src="/images/3d/cloud.png" alt="Cloud" fill className="object-contain" priority />
    </IconWrapper>
);

export const WebDevIllustration = () => (
    <IconWrapper>
        <Image src="/images/3d/development.png" alt="Web Dev" fill className="object-contain" priority />
    </IconWrapper>
);

// FIXED: Equipment SVG (Using real colors instead of CSS variables that might be missing)
export const EquipmentIllustration = () => (
    <IconWrapper>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="40" y="60" width="120" height="80" rx="4" stroke="#3b82f6" strokeWidth="4" fill="white" />
            <path d="M40 120 L160 120 L150 140 H50 L40 120Z" fill="#e5e7eb" />
            <circle cx="100" cy="90" r="8" fill="#3b82f6" />
        </svg>
    </IconWrapper>
);

export const MobileIllustration = () => (
    <IconWrapper>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect x="70" y="40" width="60" height="120" rx="8" stroke="#3b82f6" strokeWidth="4" fill="white" />
            <circle cx="100" cy="145" r="5" fill="#9ca3af" />
        </svg>
    </IconWrapper>
);