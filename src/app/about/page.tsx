import React from 'react';

export default function AboutPage() {
    return (
        <main className="container" style={{ padding: '6rem 2rem 4rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Hero Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="gradient-text" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.2' }}>
                        About Pravinsoft Technologies LLP
                    </h1>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Empowering the next generation of technology professionals through industry-aligned technical training.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
                    {/* Main Story */}
                    <div style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--muted)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ color: 'var(--foreground)', fontSize: '0.9rem' }}>Pravinsoft Technologies LLP</strong> is a professional technical education institute headquartered in the prominent IT hub of 
                            <strong style={{ color: 'var(--foreground)' }}> Hinjewadi, Pune</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We are committed to delivering industry-oriented training programmes for students, graduates, and working professionals. Our philosophy combines academic clarity with practical industry exposure, ensuring learners can confidently apply knowledge in real-world environments.
                        </p>
                        <p>
                            With the rapid transformation of the technology landscape, we offer carefully designed courses in 
                            <strong style={{ color: 'var(--foreground)' }}> Artificial Intelligence, Software Development, and Data Technologies</strong>.
                        </p>
                    </div>

                    {/* Vision & Approach */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h2 style={{ color: 'var(--foreground)', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                                Our Vision
                            </h2>
                            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--muted)' }}>
                                To develop technology professionals with both theoretical depth and practical expertise, empowering them to contribute effectively to the evolving digital economy.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--foreground)', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                                Our Approach
                            </h2>
                            <p style={{ fontSize: '0.85rem', lineHeight: '1.7', color: 'var(--muted)' }}>
                                Beyond theory, our courses include conceptual learning, guided exercises, and real-world project exposure to build both confidence and professional competence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Grid */}
                <div>
                    <h2 style={{ color: 'var(--foreground)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '2.5rem', fontWeight: 700 }}>
                        Why Choose Pravinsoft?
                    </h2>
                    
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        {[
                            {
                                title: "Expert Faculty",
                                desc: "Seasoned professionals with extensive industry experience and practical knowledge."
                            },
                            {
                                title: "Flexible Learning",
                                desc: "Structured online classes allowing you to learn conveniently from anywhere."
                            },
                            {
                                title: "Industry Curriculum",
                                desc: "Regularly updated content aligned with the latest technological developments."
                            },
                            {
                                title: "Affordable Fees",
                                desc: "Quality technical education priced reasonably for professional growth."
                            },
                            {
                                title: "Strategic Hub",
                                desc: "Based in Hinjewadi, Pune — staying connected with IT industry trends."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="glass" style={{ padding: '1.25rem', borderLeft: '3px solid var(--primary)' }}>
                                <h3 style={{ color: 'var(--foreground)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}