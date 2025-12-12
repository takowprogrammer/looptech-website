import styles from './ServiceCard.module.css';
import Link from 'next/link';

export default function ServiceCard({ icon, title, description, href = '#' }) {
    return (
        <Link href={href} className={`${styles.card} card-3d`}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <span className={styles.learnMore}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </span>
        </Link>
    );
}

