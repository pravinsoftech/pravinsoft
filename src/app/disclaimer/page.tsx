import React from 'react';

export default function Disclaimer() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 800 }}>Legal Disclaimer</h1>
            <div className="glass" style={{ padding: '3rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'var(--foreground)', marginBottom: '1rem', fontSize: '1.5rem' }}>Educational Purpose</h2>
                    <p>
                        The information provided by Pravinsoft Technologies LLP on our website and during our courses is for educational purposes only. While we strive for absolute technical accuracy, we make no representations or warranties of any kind regarding the completeness or reliability of the information.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>Professional Liability</h2>
                    <p>
                        AI and Machine Learning are rapidly evolving fields. Pravinsoft AI shall not be held liable for any professional outcome or technical implementation decisions made by students based on the training received. We do not guarantee employment or specific career advancement.
                    </p>
                </section>

                <section>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>External Links</h2>
                    <p>
                        Our portal may contain links to external technical resources. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                    </p>
                </section>
            </div>
        </main>
    );
}
