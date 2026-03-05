import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                    Have technical queries or seeking career guidance? Our academic counsellors are ready to assist you.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h2 style={{ color: 'var(--foreground)', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 700 }}>Visit Our Campus</h2>
                    <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
                        <p style={{ color: 'var(--foreground)', fontWeight: 600, marginBottom: '0.5rem' }}>Pravinsoft Technologies LLP</p>
                        <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                            S50, Phase 1, Hinjewadi IT Park,<br />
                            Pune, Maharashtra 411057<br />
                            India
                        </p>
                    </div>

                    <h3 style={{ color: 'var(--foreground)', fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 600 }}>Technical Support</h3>
                    <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Email: support@pravinsoft.ai</p>
                    <p style={{ color: 'var(--muted)' }}>Phone: +91 20 6655 XXXX</p>

                    <div className="glass" style={{ marginTop: '3rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed' }}>
                        <p style={{ color: '#3f3f46' }}>[Interactive Map Placeholder for Hinjewadi, Pune]</p>
                    </div>
                </div>

                <div>
                    <h2 style={{ color: 'var(--foreground)', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 700 }}>Enquiry Form</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
