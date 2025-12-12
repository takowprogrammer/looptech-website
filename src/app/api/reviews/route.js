import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
        const PLACE_ID = process.env.GOOGLE_PLACE_ID;

        if (API_KEY && PLACE_ID) {
            const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`;

            // Fetch with revalidation to avoid hitting API limit on every request
            const res = await fetch(url, { next: { revalidate: 3600 } });
            const data = await res.json();

            if (data.result && data.result.reviews) {
                return NextResponse.json({
                    reviews: data.result.reviews,
                    rating: data.result.rating,
                    total: data.result.user_ratings_total,
                    source: 'google'
                });
            }
        }

        // Fallback Mock Data if no keys provided
        const mockReviews = [
            {
                author_name: "Sarah M.",
                rating: 5,
                relative_time_description: "2 months ago",
                text: "Loop Technologies transformed our business infrastructure. Their cloud migration service was seamless, and the team was incredibly professional.",
                profile_photo_url: null
            },
            {
                author_name: "James T.",
                rating: 5,
                relative_time_description: "a month ago",
                text: "Excellent service! We hired them for a complete office network setup and CCTV installation. Highly recommended for their expertise in Buea.",
                profile_photo_url: null
            },
            {
                author_name: "Clinton F.",
                rating: 5,
                relative_time_description: "4 months ago",
                text: "Great web development team. They built our e-commerce platform exactly as we requested. The admin dashboard is very user-friendly.",
                profile_photo_url: null
            },
            {
                author_name: "Emmanuel N.",
                rating: 5,
                relative_time_description: "1 month ago",
                text: "Professional and reliable. The security system installation was done perfectly. I feel much safer now.",
                profile_photo_url: null
            }
        ];

        return NextResponse.json({
            reviews: mockReviews,
            rating: 5.0,
            total: 42,
            source: 'mock'
        });

    } catch (error) {
        console.error('Review fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}
