import styles from './ReviewsSection.module.css';

const StarRating = ({ rating }) => {
    return (
        <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default function ReviewCard({ review }) {
    const initial = review.author_name ? review.author_name.charAt(0) : 'G';

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                    {review.profile_photo_url ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = initial; }}
                        />
                    ) : (
                        initial
                    )}
                </div>
                <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{review.author_name}</span>
                    <span className={styles.time}>{review.relative_time_description}</span>
                </div>
            </div>

            <StarRating rating={review.rating} />

            <p className={styles.text}>
                {review.text && review.text.length > 150
                    ? `${review.text.substring(0, 150)}...`
                    : review.text
                }
            </p>

            {/* Google G Logo SVG */}
            <svg className={styles.googleIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" />
                <path fill="#EA4335" d="M12 4.36c1.61 0 3.06.55 4.21 1.64l3.16-3.16C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        </div>
    );
}
