'use client';

import React from 'react';
import SidebarContactForm from './SidebarContactForm';

export default function CourseSidebar() {
    return (
        <aside style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            overflow: 'visible',
            width: '100%',
            height: 'auto', // Let grid stretch it
            minHeight: '100%'
        }}>
            <style jsx>{`
                .sticky-wrapper {
                    position: sticky;
                    top: 106px;
                    z-index: 50;
                    width: 100%;
                    max-width: 300px;
                }
                @media (max-width: 991px) {
                    .sticky-wrapper {
                        position: relative;
                        top: 0;
                        margin-top: 2rem;
                    }
                }
            `}</style>
            <div className="sticky-wrapper">
                <SidebarContactForm />
                
                {/* Additional sidebar widgets can be added here in the future */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#1a367c', marginBottom: '1rem', textTransform: 'uppercase' }}>Why Us?</h5>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#475569', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ color: '#0fbcf9' }}>✓</span> 100% Placement Support
                        </li>
                        <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ color: '#0fbcf9' }}>✓</span> Real-world Projects
                        </li>
                        <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <span style={{ color: '#0fbcf9' }}>✓</span> Certified Trainers
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
