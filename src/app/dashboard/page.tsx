import React from 'react';
import DashboardStats from '@/components/DashboardStats';
import ProgressCard from '@/components/ProgressCard';
import Sidebar from '@/components/Sidebar';

export default function DashboardPage() {
    const activeCourses = [
        { title: 'Generative AI Masterclass', progress: 85, lastAccessed: '2 hours ago' },
        { title: 'Agentic AI Frameworks', progress: 45, lastAccessed: 'Yesterday' },
        { title: 'NLP Foundations', progress: 12, lastAccessed: '3 days ago' }
    ];

    const recentActivities = [
        { action: 'Completed "LangChain Ecosystem" lesson', time: '1 hour ago' },
        { action: 'Passed "Vector Databases" quiz', time: 'Yesterday' },
        { action: 'Earned "Prompt Engineer" badge', time: '2 days ago' }
    ];

    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <div style={{ marginBottom: '4rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Student Dashboard</h1>
                <p style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>Welcome back, Student. Your technical journey is progressing well.</p>
            </div>

            <DashboardStats />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }}>
                <section>
                    <h2 style={{ color: 'var(--foreground)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem' }}>Learning in Progress</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {activeCourses.map((course, index) => (
                            <ProgressCard key={index} {...course} />
                        ))}
                    </div>
                </section>

                <aside style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--foreground)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Recent Activity</h3>
                        <div className="glass" style={{ padding: '1.5rem' }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {recentActivities.map((activity, index) => (
                                    <li key={index} style={{ borderBottom: index !== recentActivities.length - 1 ? '1px solid var(--glass-border)' : 'none', paddingBottom: index !== recentActivities.length - 1 ? '1rem' : '0' }}>
                                        <p style={{ color: 'var(--foreground)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{activity.action}</p>
                                        <span style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{activity.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '2rem', border: '1px solid var(--primary)', background: 'var(--card-bg)' }}>
                        <h3 style={{ color: 'var(--foreground)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Next Certificate</h3>
                        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>You are 15% away from earning your Generative AI Masterclass Certification.</p>
                        <button className="btn-primary" style={{ width: '100%', padding: '0.75rem' }}>View Requirements</button>
                    </div>

                    <Sidebar />
                </aside>
            </div>
        </main>
    );
}
