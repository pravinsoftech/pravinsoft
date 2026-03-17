'use client';

import React from 'react';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface CourseHeroProps {
    title: string;
    subtitle: string;
    breadcrumbs: Breadcrumb[];
    bannerBg?: string;
    duration?: string;
    fee?: string;
}

export default function CourseHero({ 
    title, 
    subtitle, 
    breadcrumbs, 
    bannerBg = '#1a367c',
    duration = '6 Months',
    fee = 'Contact Us'
}: CourseHeroProps) {
    return (
        <section style={{ padding: '0 0 0 0', background: '#f8fafc' }}>
            <style jsx>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 2rem;
                    align-items: center;
                    position: relative;
                    overflow: visible;
                }
                .hero-title {
                    font-size: 4.8rem;
                    font-weight: 800;
                    margin: 0 0 1.2rem 0;
                    line-height: 1.05;
                    letter-spacing: -1px;
                }
                .hero-subtitle {
                    font-size: 1.4rem; 
                    font-weight: 500; 
                    margin-bottom: 0.2rem; 
                    opacity: 0.9;
                }

                /* Enroll Section Styles */
                .enroll-card {
                    background: white;
                    border-radius: 8px;
                    padding: 1.5rem 2rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.12);
                    border: 1px solid #f1f5f9;
                    width: 100%;
                    max-width: 1100px;
                    margin: -2.8rem auto 0;
                    position: relative;
                    z-index: 20;
                }
                .enroll-grid {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }
                .enroll-item {
                    flex: 1;
                }
                .enroll-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    color: #475569;
                }
                .enroll-info-group {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    min-width: 130px;
                    border-left: 1px solid #e2e8f0;
                    padding-left: 1.5rem;
                }
                .enroll-button {
                    background: #0066ff;
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 16px;
                    cursor: pointer;
                    white-space: nowrap;
                    box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
                    transition: all 0.2s ease;
                }

                @media (max-width: 991px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                        padding: 2rem 1.5rem 4rem !important;
                        gap: 3rem;
                    }
                    .hero-title {
                        font-size: 3rem;
                    }
                    .hero-subtitle {
                        font-size: 1.2rem;
                    }
                    .hero-line {
                        margin: 0 auto;
                    }
                    
                    /* Mobile Enroll Styles */
                    .enroll-card {
                        padding: 1rem !important;
                        border-radius: 12px !important;
                        margin-top: -3.5rem;
                    }
                    .enroll-grid {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 0.75rem;
                    }
                    .enroll-label {
                        margin-bottom: 4px;
                        font-size: 12px;
                    }
                    .enroll-info-group {
                        flex-direction: row;
                        justify-content: space-between;
                        border-left: none;
                        padding-left: 0;
                        border-top: 1px solid #f1f5f9;
                        padding-top: 0.75rem;
                        margin-top: 0.25rem;
                        min-width: 0;
                    }
                    .enroll-button {
                        width: 100%;
                        padding: 0.75rem;
                        font-size: 14px;
                        margin-top: 0.5rem;
                    }
                    select {
                        padding: 0.6rem 0.8rem !important;
                        font-size: 13px !important;
                    }
                }
            `}</style>

            <div className="container" style={{ paddingTop: '2rem' }}>
                {/* Breadcrumbs */}
                <div style={{ display: 'flex', gap: '8px', fontSize: '13px', marginBottom: '1rem', color: '#64748b', flexWrap: 'wrap' }}>
                    <a href="/courses" style={{ color: '#3b82f6', textDecoration: 'none' }}>Courses</a>
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            <span style={{ color: '#cbd5e1' }}>/</span>
                            {crumb.href ? (
                                <a href={crumb.href} style={{ color: crumb.href ? '#334155' : '#94a3b8', textDecoration: 'none' }}>{crumb.label}</a>
                            ) : (
                                <span style={{ color: '#94a3b8' }}>{crumb.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Main Banner */}
                <div className="hero-grid" style={{ 
                    background: bannerBg, 
                    borderRadius: '4px', 
                    padding: '3rem 4rem 5rem', 
                    color: 'white',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <div>
                        <h3 className="hero-subtitle">{subtitle}</h3>
                        <h1 className="hero-title">{title}</h1>
                        <div className="hero-line" style={{ width: '180px', height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{ 
                            borderRadius: '4px', 
                            overflow: 'hidden', 
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            background: '#000',
                            aspectRatio: '1.77',
                            position: 'relative',
                            border: '1px solid rgba(255,255,255,0.15)'
                        }}>
                             <div style={{ 
                                width: '100%', 
                                height: '100%', 
                                background: '#f8fafc',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1rem',
                                color: '#334155',
                                position: 'relative'
                             }}>
                                <div style={{ textAlign: 'right', fontSize: '12px', fontWeight: 600, marginBottom: '1rem' }}>
                                    Successfully Placed Students:
                                </div>
                                
                                <div style={{ 
                                    border: '2px dashed #3b82f6', 
                                    padding: '0.5rem', 
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    background: 'white'
                                }}>
                                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ color: '#1a367c', fontWeight: 800, fontSize: '14px' }}>CONGRATULATIONS</div>
                                        <div style={{ background: '#1a367c', color: 'white', padding: '2px 8px', borderRadius: '2px', fontWeight: 900, fontSize: '18px' }}>254</div>
                                    </div>
                                    <div style={{ fontSize: '10px', fontWeight: 700 }}>Students Placed in November 2022</div>
                                    
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '2px', width: '100%' }}>
                                        {[...Array(30)].map((_, i) => (
                                            <div key={i} style={{ aspectRatio: '1', background: '#e2e8f0', borderRadius: '1px' }}></div>
                                        ))}
                                    </div>
                                    
                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ fontSize: '10px', color: '#64748b' }}>Average Pkg: <span style={{ color: '#1a367c', fontWeight: 700 }}>3-4 LPA</span></div>
                                        <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '12px' }}>NARESH <span style={{ color: '#ffd700' }}>i</span></div>
                                    </div>
                                </div>

                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: '0', 
                                    left: '0', 
                                    right: '0', 
                                    height: '40px', 
                                    background: 'rgba(0,0,0,0.85)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 0.8rem',
                                    gap: '0.8rem'
                                }}>
                                    <div style={{ width: '16px', height: '16px', background: 'white', clipPath: 'polygon(20% 0%, 20% 100%, 100% 50%)' }}></div>
                                    <div style={{ flex: 1, height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
                                        <div style={{ width: '25%', height: '100%', background: '#3b82f6', borderRadius: '2px' }}></div>
                                        <div style={{ position: 'absolute', left: '25%', top: '50%', transform: 'translate(-50%, -50%)', width: '10px', height: '100%', background: '#3b82f6', borderRadius: '50%' }}></div>
                                    </div>
                                    <div style={{ fontSize: '10px', color: 'white', fontWeight: 600 }}>01:06</div>
                                    <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
                                        {[...Array(4)].map((_, i) => <div key={i} style={{ width: '12px', height: '12px', border: '1px solid white', borderRadius: '2px' }}></div>)}
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                        <div style={{ 
                            position: 'absolute', 
                            top: '1rem', 
                            right: '-1.5rem', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '0.5rem',
                            zIndex: 5
                        }}>
                             <div className="hidden sm-flex" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                                <div style={{ width: '32px', height: '32px', background: '#0a0a0a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                </div>
                                <div style={{ width: '32px', height: '32px', background: '#0a0a0a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                                </div>
                                <div style={{ width: '32px', height: '32px', background: '#0a0a0a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Enroll Card Section (Merged from CourseQuickEnroll) */}
                <div className="enroll-card">
                    <div className="enroll-grid">
                        {/* Training Type */}
                        <div className="enroll-item">
                            <div className="enroll-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
                                Training Type
                            </div>
                            <div style={{ position: 'relative' }}>
                                <select style={{ 
                                    width: '100%', 
                                    padding: '0.8rem 1rem', 
                                    borderRadius: '8px', 
                                    border: '1px solid #e2e8f0', 
                                    background: '#fff', 
                                    fontSize: '14px', 
                                    color: '#64748b', 
                                    cursor: 'pointer',
                                    appearance: 'none',
                                    outline: 'none'
                                }}>
                                    <option>Select training type</option>
                                    <option>Online Live Training</option>
                                    <option>Classroom Training</option>
                                </select>
                                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                                </div>
                            </div>
                        </div>

                        {/* Faculty */}
                        <div className="enroll-item">
                            <div className="enroll-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                Select faculty
                            </div>
                            <div style={{ position: 'relative' }}>
                                <select style={{ 
                                    width: '100%', 
                                    padding: '0.8rem 1rem', 
                                    borderRadius: '8px', 
                                    border: '1px solid #e2e8f0', 
                                    background: '#fff', 
                                    fontSize: '14px', 
                                    color: '#64748b', 
                                    cursor: 'pointer',
                                    appearance: 'none',
                                    outline: 'none'
                                }}>
                                    <option>Select Faculty</option>
                                </select>
                                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                                </div>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="enroll-item">
                            <div className="enroll-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                Select Date
                            </div>
                            <div style={{ position: 'relative' }}>
                                <select style={{ 
                                    width: '100%', 
                                    padding: '0.8rem 1rem', 
                                    borderRadius: '8px', 
                                    border: '1px solid #e2e8f0', 
                                    background: '#fff', 
                                    fontSize: '14px', 
                                    color: '#64748b', 
                                    cursor: 'pointer',
                                    appearance: 'none',
                                    outline: 'none'
                                }}>
                                    <option>Select Batch Time</option>
                                </select>
                                <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                                </div>
                            </div>
                        </div>

                        {/* Details Group */}
                        <div className="enroll-info-group">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                <span>Dur: {duration}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569', fontWeight: 600 }}>
                                <span style={{ fontSize: '16px', fontWeight: 800 }}>₹</span>
                                <span>Fee: {fee} /-</span>
                            </div>
                        </div>

                        <button className="enroll-button">
                            Download Curriculum
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
