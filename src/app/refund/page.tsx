import React from 'react';

export default function RefundPolicy() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Refund Policy</h1>
            <div className="glass" style={{ padding: '3rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                <p style={{ marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 600 }}>Last Updated: March 2026</p>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Professional Commitment</h2>
                    <p>
                        At Pravinsoft Technologies LLP, we maintain the highest standards of technical education. Our Refund Policy is designed to be fair and transparent for both the student and the Institute.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Eligibility for Refund</h2>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Requests made 7 days prior to the course commencement date are eligible for a 90% refund (10% administrative fee applies).</li>
                        <li>Requests made within 48-72 hours of commencement are eligible for a 50% refund.</li>
                        <li>No refunds shall be entertained once the course or technical module has commenced.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Course Postponement</h2>
                    <p>
                        Should the Institute postpone a course due to unforeseen technical or logistical reasons, students shall be offered a choice between an immediate full refund or a credit towards the revised dates.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Process for Refund</h2>
                    <p>
                        Formal applications for refund must be submitted via email to finance@pravinsoft.ai. Approved refunds are usually processed within 10-15 business days to the original instrument of payment.
                    </p>
                </section>
            </div>
        </main>
    );
}
