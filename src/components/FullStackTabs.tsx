'use client';

import { useState } from 'react';

const TABS = [
    { id: 'courses', label: 'Courses' },
    { id: 'training-features', label: 'Training Features' },
    { id: 'certificate', label: 'Certificate' },
    { id: 'batch-time-table', label: 'Batch Time Table' }
];

export default function FullStackTabs() {
    const [activeTab, setActiveTab] = useState('courses');

    const handleClick = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for fixed header if any
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div style={{ 
            position: 'sticky',
            top: '0',
            backgroundColor: '#f8fafc',
            zIndex: 100,
            borderBottom: '1px solid #e2e8f0', 
            marginBottom: '2rem',
            display: 'flex',
            gap: '2rem',
            paddingTop: '1rem'
        }}>
            {TABS.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => handleClick(tab.id)}
                    style={{
                        padding: '0.75rem 0',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: activeTab === tab.id ? '#3b82f6' : '#64748b',
                        background: 'none',
                        border: 'none',
                        borderBottom: activeTab === tab.id ? '2px solid #3b82f6' : '2px solid transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        marginBottom: '-1px'
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
