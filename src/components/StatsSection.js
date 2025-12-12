'use client';

import AnimatedCounter from './AnimatedCounter';
import styles from './StatsSection.module.css';

export default function StatsSection() {
    const stats = [
        { value: 5, suffix: '+', label: 'Years Experience' },
        { value: 50, suffix: '+', label: 'Projects Delivered' },
        { value: 24, suffix: '/7', label: 'Support Available' },
        { value: 100, suffix: '%', label: 'Client Satisfaction' },
    ];

    return (
        <section className={styles.statsBar}>
            <div className={styles.container}>
                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statItem}>
                            <span className={styles.statNumber}>
                                <AnimatedCounter
                                    end={stat.value}
                                    suffix={stat.suffix}
                                    duration={2000}
                                />
                            </span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
