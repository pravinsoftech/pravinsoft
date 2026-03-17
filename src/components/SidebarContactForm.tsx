'use client';

import React from 'react';

export default function SidebarContactForm() {
    return (
        <div style={{ 
            background: 'white', 
            borderRadius: '6px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            border: '1px solid #f1f5f9',
            width: '100%', // Use full width of sticky-wrapper
            maxWidth: '300px',
            margin: '0 auto'
        }}>
            {/* Very Compact Header */}
            <div style={{ 
                background: '#233145', 
                padding: '0.8rem 1rem', 
                color: 'white',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '13px', fontWeight: 600, margin: 0, lineHeight: 1.2 }}>Top 5 Technologies</h4>
                    <p style={{ fontSize: '12px', fontWeight: 500, margin: '2px 0 0 0', opacity: 0.9 }}>Register for Course</p>
                </div>
                
                {/* User Icon Circle - Smaller */}
                <div style={{ 
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    marginLeft: '8px'
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
            </div>

            {/* Very Compact Form Body */}
            <form style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', color: '#475569' }}
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', color: '#475569' }}
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', color: '#475569' }}
                    />
                </div>
                <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', appearance: 'none', background: '#fff', cursor: 'pointer', outline: 'none', color: '#475569' }}>
                        <option>Select Course</option>
                        <option>Software Testing</option>
                    </select>
                    <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <select style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', appearance: 'none', background: '#fff', cursor: 'pointer', outline: 'none', color: '#475569' }}>
                        <option>Mode of Training</option>
                        <option>Online Training</option>
                        <option>Classroom Training</option>
                    </select>
                    <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <input type="checkbox" id="terms-compact" style={{ width: '14px', height: '14px', marginTop: '2px', cursor: 'pointer' }} />
                    <label htmlFor="terms-compact" style={{ fontSize: '10px', color: '#64748b', lineHeight: 1.4 }}>
                        Agree to <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>Terms</a> & <a href="#" style={{ color: '#1a73e8', textDecoration: 'none' }}>Privacy</a>
                    </label>
                </div>

                <button type="submit" style={{ 
                    background: '#0d6efd', 
                    color: 'white', 
                    border: 'none', 
                    padding: '0.7rem', 
                    borderRadius: '6px', 
                    fontWeight: 700, 
                    fontSize: '14px', 
                    cursor: 'pointer', 
                    boxShadow: '0 4px 10px rgba(13, 110, 253, 0.15)'
                }}>
                    Submit
                </button>
            </form>
        </div>
    );
}
