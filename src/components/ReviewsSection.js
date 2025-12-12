'use client';

import { useEffect, useState } from 'react';
import styles from './ReviewsSection.module.css';
import ReviewCard from './ReviewCard';

export default function ReviewsSection() {
    const [reviews, setReviews] = useState([]);
    const [stats, setStats] = useState({ rating: 5.0, total: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch('/api/reviews');
                // Check if response is valid JSON before parsing
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const data = await res.json();
                    if (data.reviews) {
                        setReviews(data.reviews);
                        if (data.rating) setStats({ rating: data.rating, total: data.total });
                    }
                }
            } catch (err) {
                console.error("Failed to load reviews", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) return null;

    // Filter to show max 3 reviews for cleaner layout
    const displayReviews = reviews.slice(0, 3);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>Testimonials</span>
                    <h2>What Our Clients Say</h2>
                    <p>Don&apos;t just take our word for it. Here&apos;s what our partners have to say about our services.</p>

                    <div className={styles.summary}>
                        <span style={{ color: '#fbbf24', fontSize: '18px' }}>★★★★★</span>
                        <span>{stats.rating}</span>
                        <span>({stats.total} reviews)</span>
                        on Google
                    </div>
                </div>

                <div className={styles.grid}>
                    {displayReviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
