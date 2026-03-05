import React from 'react';

interface ProgressCardProps {
    title: string;
    progress: number;
    lastAccessed: string;
}

export default function ProgressCard({ title, progress, lastAccessed }: ProgressCardProps) {
    return (
        <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.25rem' }}>{title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Last accessed {lastAccessed}</p>
            </div>

            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--muted)' }}>Course Progress</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                        boxShadow: '0 0 10px var(--glow-primary)',
                        transition: 'width 1s ease-out'
                    }}></div>
                </div>
            </div>

            <button className="btn-primary" style={{ alignSelf: 'flex-start', padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                Continue Learning
            </button>
        </div>
    );
}
