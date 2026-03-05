import React from 'react';

export default function CookiesPolicy() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Cookies Policy</h1>
            <div className="glass" style={{ padding: '3rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem', fontSize: '1.5rem' }}>What Are Cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device that help us improve your browsing experience. At Pravinsoft AI, we use them to understand how our technical content is accessed and to provide personalised platform features.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>Types of Cookies We Use</h2>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li><strong>Essential Cookies:</strong> Required for secure login and platform navigation.</li>
                        <li><strong>Analytical Cookies:</strong> Help us track traffic patterns to optimise our technical blog and course pages.</li>
                        <li><strong>Preferences:</strong> Remember your settings so you don't have to re-enter them.</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>Managing Consent</h2>
                    <p>
                        Most browsers allow you to control cookies through their settings. However, disabling certain cookies may limit your ability to use all professional features of the Pravinsoft portal.
                    </p>
                </section>
            </div>
        </main>
    );
}
