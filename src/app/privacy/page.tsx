import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Privacy Policy</h1>
            <div className="glass" style={{ padding: '3rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                <p style={{ marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 600 }}>Extant Date: March 2026</p>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Introduction</h2>
                    <p>
                        Pravinsoft Technologies LLP ("The Institute", "We", "Us", or "Our"), located in Hinjewadi, Pune, is committed to protecting the privacy of our students and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information in accordance with Indian IT laws.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Information Collection</h2>
                    <p>
                        We collect information that you provide directly to us through enrolment forms, contact requests, and newsletter subscriptions. This may include your full name, educational background, professional experience, contact details, and payment information.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Data Usage</h2>
                    <p>
                        Your data is strictly utilised for academic purposes, including course administration, certification issuance, and providing technical updates. The Institute maintains an authoritative stance on data security and does not share your information with third-party marketing agencies.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Security Standards</h2>
                    <p>
                        We implement enterprise-grade security protocols to prevent unauthorised access to our databases. All transactions are processed through secured, industry-standard gateways.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Contact for Grievances</h2>
                    <p>
                        For any privacy-related queries or data access requests, please contact our Compliance Officer at the Hinjewadi office or via legal@pravinsoft.ai.
                    </p>
                </section>
            </div>
        </main>
    );
}
