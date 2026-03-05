import React from 'react';

export default function AboutPage() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>
                    About Pravinsoft Technologies LLP
                </h1>

                <div style={{ lineHeight: '1.8', color: 'var(--muted)', fontSize: '1.1rem' }}>

                    <p style={{ marginBottom: '2rem' }}>
                        <strong style={{ color: 'var(--foreground)' }}>Pravinsoft Technologies LLP</strong> is a professional technical education institute headquartered in the prominent IT hub of
                        <strong style={{ color: 'var(--foreground)' }}> Hinjewadi, Pune</strong>.
                        The institute is committed to delivering industry-oriented training programmes for students, graduates, and working professionals who aspire to build strong careers in modern technologies.
                        Our training philosophy focuses on combining academic clarity with practical industry exposure so that learners can confidently apply their knowledge in real-world environments.
                    </p>

                    <p style={{ marginBottom: '2rem' }}>
                        With the rapid transformation of the technology landscape, professionals must continuously upgrade their technical competencies.
                        Pravinsoft Technologies LLP addresses this need by offering carefully designed courses in areas such as
                        <strong style={{ color: 'var(--foreground)' }}> Artificial Intelligence, Software Development, Data Technologies, and emerging digital platforms</strong>.
                        All training programmes are conducted through well-structured
                        <strong style={{ color: 'var(--foreground)' }}> online learning sessions</strong>, enabling learners from across India to access high-quality technical education without geographical limitations.
                    </p>

                    <h2 style={{ color: 'var(--foreground)', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                        Our Vision
                    </h2>

                    <p style={{ marginBottom: '2rem' }}>
                        Our vision is to develop a generation of technology professionals who possess both theoretical depth and practical expertise.
                        By delivering structured technical training aligned with current industry requirements, we aim to empower learners to confidently contribute to the evolving digital economy.
                        Being situated in Pune’s thriving technology ecosystem, we remain closely aligned with the expectations of the modern IT industry.
                    </p>

                    <h2 style={{ color: 'var(--foreground)', fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                        Our Approach to Learning
                    </h2>

                    <p style={{ marginBottom: '2rem' }}>
                        At Pravinsoft Technologies LLP, education goes beyond conventional theory.
                        Our courses are structured to include conceptual learning, guided practical exercises, real-world project exposure, and industry-oriented insights.
                        This approach enables learners to build both technical confidence and professional competence required in modern software and technology roles.
                    </p>

                    <div className="glass" style={{ padding: '3rem', marginTop: '4rem', borderLeft: '4px solid var(--primary)' }}>
                        <h3 style={{ color: 'var(--foreground)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                            Why Choose Pravinsoft Technologies LLP?
                        </h3>

                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <li>
                                <strong style={{ color: 'var(--foreground)' }}>Expert Faculty:</strong>
                                Our trainers are seasoned professionals and subject matter experts with extensive industry experience.
                                They bring practical knowledge and professional insight into every training session.
                            </li>

                            <li>
                                <strong style={{ color: 'var(--foreground)' }}>Flexible Online Learning:</strong>
                                All programmes are delivered through structured online classes, allowing students and working professionals to learn conveniently from anywhere.
                            </li>

                            <li>
                                <strong style={{ color: 'var(--foreground)' }}>Industry-Oriented Curriculum:</strong>
                                Our course content is regularly updated to align with the latest technologies and current industry practices.
                            </li>

                            <li>
                                <strong style={{ color: 'var(--foreground)' }}>Pocket-Friendly Course Fees:</strong>
                                We believe quality technical education should be accessible.
                                Our programmes are priced reasonably so that learners can invest in their professional growth without financial burden.
                            </li>

                            <li>
                                <strong style={{ color: 'var(--foreground)' }}>Strategic Location:</strong>
                                Based in Hinjewadi, Pune — one of India’s leading IT corridors — we remain closely connected with the technological developments shaping the industry.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}