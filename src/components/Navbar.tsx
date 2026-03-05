'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="glass navbar-container" style={{
            position: 'fixed',
            top: 'calc(36px + 1rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 1000,
            padding: '0.75rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--nav-bg)'
        }}>
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
                <Link href="/courses" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
                <Link href="/teachers" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>Teachers</Link>
                <Link href="/pricing" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                <Link href="/new-batches" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>New Batches</Link>
                <Link href="/blog" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                <Link href="/about" style={{ color: 'var(--muted)', fontWeight: 500, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/dashboard" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                <Link href="/contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setIsMobileMenuOpen(false)}>Enrol Now</Link>
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
