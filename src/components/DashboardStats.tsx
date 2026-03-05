import React from 'react';

interface StatProps {
    label: string;
    value: string;
    icon: string;
}

const StatItem = ({ label, value, icon }: StatProps) => (
    <div className="glass" style={{ padding: '1.5rem', flex: 1, minWidth: '200px' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</div>
        <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--foreground)' }}>{value}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
);

export default function DashboardStats() {
    return (
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <StatItem label="Enrolled Courses" value="3" icon="📚" />
            <StatItem label="Completed Lessons" value="24" icon="✅" />
            <StatItem label="Average Progress" value="68%" icon="📈" />
            <StatItem label="Learning Hours" value="12.5" icon="⚡" />
        </div>
    );
}
