'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

type NavChild = {
    label: string;
    href: string;
};

type NavItem = {
    label: string;
    href?: string;
    children?: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
    {
        label: 'All Courses',
        href: '/courses',
        children: [
            { label: 'Full Stack Courses', href: '/courses/full-stack' },
            { label: 'Job Assistance Courses', href: '/courses/job-assistance' },
            { label: 'Certification Courses', href: '/courses/certification' },
            { label: 'Trending Courses', href: '/courses/trending' },
            { label: 'Internship', href: '/courses/internship' },
        ],
    },
    {
        label: 'Services',
        href: '/services',
        children: [
            { label: 'Online Training', href: '/services/online-training' },
            { label: 'Weekend Training', href: '/services/weekend-training' },
            { label: 'Workshops', href: '/services/workshops' },
            { label: 'Real-Time Projects', href: '/services/real-time-projects' },
            { label: 'Internships', href: '/services/internships' },
            { label: 'Corporate Trainings', href: '/services/corporate-trainings' },
        ],
    },
    {
        label: 'Training',
        children: [
            { label: 'New Batches', href: '/new-batches' },
            { label: 'Interview Questions', href: '/interview-questions' },
            { label: 'Blog', href: '/blog' },
            { label: 'Placement Registration', href: '/placement-registration' },
            { label: 'Job Assistance', href: '/job-assistance' },
        ],
    },
    {
        label: 'About',
        href: '/about',
        children: [
            { label: 'About PravinSoft', href: '/about' },
            { label: 'Faculty Profile', href: '/about/faculty-profile' },
            { label: 'Our Vision', href: '/about/our-vision' },
            { label: 'Careers', href: '/about/careers' },
            { label: 'Testimonials', href: '/about/testimonials' },
            { label: 'News & Events', href: '/about/news-events' },
        ],
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className="glass navbar-container"
            style={{
                position: 'fixed',
                top: '36px',
                left: 0,
                right: 0,
                width: '100%',
                zIndex: 1000,
                padding: '0.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--nav-bg)',
                borderRadius: 0,
                borderLeft: 'none',
                borderRight: 'none',
            }}
        >
            <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--foreground)' }} className="gradient-text">
                Pravinsoft AI
            </Link>

            {/* Hamburger Button for Mobile */}
            <button
                className="mobile-menu-btn"
                onClick={toggleMenu}
                style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--foreground)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    display: 'none', // Hidden on desktop
                }}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Nav Links */}
            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                {NAV_ITEMS.map((item) => {
                    if (item.children && item.children.length > 0) {
                        return (
                            <div key={item.label} className="nav-item">
                                <Link
                                    href={item.href || item.children[0]?.href}
                                    className="nav-parent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                <div className="dropdown-menu">
                                    <div className="dropdown-column">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="dropdown-link"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={item.label} className="nav-item">
                            <Link
                                href={item.href || '#'}
                                style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </div>
                    );
                })}

                <Link
                    href="/login"
                    className="btn-primary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Login
                </Link>

                <button
                    onClick={toggleTheme}
                    className="glass theme-btn"
                    style={{
                        padding: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--glass-border)',
                        background: 'none',
                        color: 'var(--foreground)'
                    }}
                    title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}
