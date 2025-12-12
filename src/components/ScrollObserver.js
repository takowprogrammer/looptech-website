'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));

        // Cleanup
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }); // Run on every render to catch new elements (simple version) making sure to be careful with perf or use a mutation observer if needed, but for this site pure useEffect without dependency or with pathname dependency might be enough if we re-trigger. 
    // Actually, simple useEffect with no deps in Next.js might run once. Let's make it more robust by running on pathname change if possible, or just export a hook. 
    // For simplicity in this `app` directory setup, let's just run it once on mount and maybe expose a way to re-run, or just stick to standard mount. 
    // Better yet, let's try to target elements effectively.

    // Revised approach: A mutation observer or just running it on mount + regular intervals or route changes. 
    // Given the simple structure, running on mount + MutationObserver on body is safest for client-side rendering updates.

    useEffect(() => {
        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Run once
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        const observeElements = () => {
            const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
            elements.forEach(el => observer.observe(el));
        };

        observeElements();

        // Watch for DOM changes to catch new elements (like after navigation)
        const mutationObserver = new MutationObserver(observeElements);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            mutationObserver.disconnect();
            observer.disconnect();
        };
    }, []);

    return null;
}
