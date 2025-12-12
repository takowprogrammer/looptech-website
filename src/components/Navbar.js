'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div style={{
                        position: 'relative',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--white)',
                        boxShadow: '0 0 10px rgba(37, 99, 235, 0.2)',
                        background: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            src="/images/logo.jpg"
                            alt="Loop Technologies"
                            width={80}
                            height={80}
                            style={{
                                objectFit: 'cover',
                                transform: 'scale(1.2)'
                            }}
                            priority
                        />
                    </div>
                    <span className={styles.logoText} style={{ marginLeft: '12px', fontWeight: 'bold' }}>LoopTech</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact" className={`${styles.ctaButton} btn-ripple`}>
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact" className={styles.mobileCta} onClick={() => setIsMobileMenuOpen(false)}>
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
