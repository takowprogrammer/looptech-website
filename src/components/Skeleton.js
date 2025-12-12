'use client';

import styles from './Skeleton.module.css';

// Basic skeleton with shimmer effect
export const Skeleton = ({ width = '100%', height = '20px', borderRadius = '4px', className = '' }) => (
    <div
        className={`${styles.skeleton} ${className}`}
        style={{ width, height, borderRadius }}
    />
);

// Image placeholder skeleton
export const ImageSkeleton = ({ width = '100%', height = '200px', className = '' }) => (
    <div
        className={`${styles.skeleton} ${styles.imageSkeleton} ${className}`}
        style={{ width, height }}
    />
);

// Card skeleton for service cards
export const CardSkeleton = ({ className = '' }) => (
    <div className={`${styles.cardSkeleton} ${className}`}>
        <div className={styles.skeleton} style={{ width: '60px', height: '60px', borderRadius: '12px' }} />
        <div className={styles.skeleton} style={{ width: '70%', height: '24px', marginTop: '16px' }} />
        <div className={styles.skeleton} style={{ width: '100%', height: '16px', marginTop: '12px' }} />
        <div className={styles.skeleton} style={{ width: '90%', height: '16px', marginTop: '8px' }} />
        <div className={styles.skeleton} style={{ width: '40%', height: '16px', marginTop: '8px' }} />
    </div>
);

// Text block skeleton
export const TextSkeleton = ({ lines = 3, className = '' }) => (
    <div className={className}>
        {Array.from({ length: lines }).map((_, i) => (
            <div
                key={i}
                className={styles.skeleton}
                style={{
                    width: i === lines - 1 ? '60%' : '100%',
                    height: '16px',
                    marginBottom: '8px'
                }}
            />
        ))}
    </div>
);
