'use client';

import React from 'react';

interface CoursePageTabsProps {
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

export default function CoursePageTabs({ activeTab, onTabChange }: CoursePageTabsProps) {
    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'certificate', label: 'Certificate' },
        { id: 'upcoming-batches', label: 'Upcoming Batches' },
        { id: 'training-features', label: 'Training Features' },
        { id: 'reviews', label: 'Reviews' },
    ];

    return (
        <div style={{ 
            position: 'sticky', 
            top: '106px', 
            zIndex: 100, // Higher z-index to stay above content transitions
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            width: '100%',
            paddingTop: '0.5rem',
            marginBottom: '2.5rem'
        }}>
            <div style={{ 
                display: 'flex', 
                gap: '2.5rem', 
                overflowX: 'auto', 
                whiteSpace: 'nowrap',
                paddingBottom: '2px',
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none'  /* IE/Edge */
            }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        style={{
                            padding: '0.8rem 0',
                            fontSize: '15px',
                            fontWeight: 700,
                            color: activeTab === tab.id ? '#3b82f6' : '#64748b',
                            borderBottom: activeTab === tab.id ? '3px solid #3b82f6' : '3px solid transparent',
                            background: 'none',
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            marginBottom: '-1px'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}
