import React from 'react';

export default function Terms() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Terms & Conditions</h1>
            <div className="glass" style={{ padding: '3rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                <p style={{ marginBottom: '1.5rem', color: 'var(--foreground)', fontWeight: 600 }}>Version 1.2 | Effective: March 2026</p>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Acceptance of Terms</h2>
                    <p>
                        By accessing the website and enrolling in our AI training programmes, you agree to be bound by these legal terms. These terms constitute a legally binding agreement between you and Pravinsoft Technologies LLP, Pune.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Intellectual Property</h2>
                    <p>
                        All course materials, code repositories, and proprietary technical methodologies provided by Pravinsoft AI are the exclusive intellectual property of the Institute. Unauthorised distribution or commercial use is strictly prohibited and shall be prosecuted under the relevant Indian statutes.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Professional Conduct</h2>
                    <p>
                        Students are expected to maintain professional decorum during both online and offline sessions. The Institute reserves the right to terminate the enrolment of any individual exhibiting disruptive or unethical behaviour without any liability for refund.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Jurisdiction</h2>
                    <p>
                        Any legal disputes arising from these terms or the services provided by the Institute shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra.
                    </p>
                </section>
            </div>
        </main>
    );
}
