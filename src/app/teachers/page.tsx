import React from 'react';

const faculty = [
    {
        name: 'Dr. Pravin K. Shinde',
        title: 'Founder & Chief Technical Architect',
        bio: 'Over 20 years of experience in enterprise software and AI. Leading the vision at Pravinsoft Technologies LLP.',
        expertise: ['GenAI Architecture', 'MLOps Specialist']
    },
    {
        name: 'Prof. Amol Deshmukh',
        title: 'Senior AI Researcher',
        bio: 'Specialising in NLP and transformer models. Deep academic background with multiple publications in International journals.',
        expertise: ['Natural Language Processing', 'Deep Learning']
    },
    {
        name: 'Rahul Kulkarni',
        title: 'Agentic AI Lead',
        bio: 'Expert in crew orchestration and autonomous agent frameworks. Hands-on experience with Fortune 500 AI deployments.',
        expertise: ['Autonomous Agents', 'LangGraph', 'CrewAI']
    }
];

export default function TeachersListing() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Academic Faculty</h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '750px' }}>
                Learn from the finest technical minds in Pune. Our teachers bring a blend of industrial rigour and academic excellence.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                {faculty.map((teacher, index) => (
                    <div key={index} className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', opacity: 0.8 }}></div>
                        <div>
                            <h3 style={{ color: 'var(--foreground)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.2rem' }}>{teacher.name}</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>{teacher.title}</p>
                        </div>
                        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{teacher.bio}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {teacher.expertise.map((exp, eIndex) => (
                                <span key={eIndex} style={{
                                    fontSize: '0.75rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '2rem',
                                    color: 'var(--foreground)',
                                    border: '1px solid var(--glass-border)'
                                }}>{exp}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
