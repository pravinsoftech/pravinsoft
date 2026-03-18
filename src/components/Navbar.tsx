'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

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
        label: 'Courses',
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
            { label: 'New Batches', href: '/training/new-batches' },
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
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        async function getUser() {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        }
        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className="navbar-container"
            style={{
                position: 'fixed',
                top: '36px',
                left: 0,
                right: 0,
                width: '100%',
                zIndex: 1000,
                padding: '0.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#ffffff',
                borderBottom: '1px solid #e2e8f0',
                height: '70px'
            }}
        >
            <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Image src="/logo.jpg" alt="Pravinsoft Logo" width={200} height={45} style={{ objectFit: 'contain' }} priority />
                </Link>
            </div>

            <div style={{ flex: '1 1 auto', display: 'flex', justifyContent: 'center', maxWidth: '600px', margin: '0 2rem' }} className="hidden sm-flex">
                <SearchBox />
            </div>

            {/* Hamburger Button for Mobile */}
            <button
                className="mobile-menu-btn"
                onClick={toggleMenu}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#1e293b',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                }}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Nav Links */}
            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} style={{ flex: '0 0 auto' }}>
                {NAV_ITEMS.map((item) => {
                    if (item.children && item.children.length > 0) {
                        return (
                            <div key={item.label} className="nav-item">
                                <Link
                                    href={item.href || item.children[0]?.href}
                                    className="nav-parent"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    style={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                                >
                                    {item.label}
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
                                style={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem' }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </div>
                    );
                })}

                {user ? (
                    <Link
                        href={user.user_metadata?.role === 'admin' ? '/admin' : '/student'}
                        className="btn-primary"
                        style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span style={{ fontSize: '1.2rem' }}>👤</span>
                        {user.user_metadata?.full_name?.split(' ')[0] || 'Dashboard'}
                    </Link>
                ) : (
                    <Link
                        href="/login"
                        className="btn-primary"
                        style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Login
                    </Link>
                )}

                <button
                    onClick={toggleTheme}
                    className="theme-btn"
                    style={{
                        padding: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        background: '#f8fafc',
                        color: '#1e293b'
                    }}
                    title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}
