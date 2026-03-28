import { useState } from 'react';
import ShareModal from './ShareModal';
import Image from 'next/image';

interface CourseCardProps {
    id: string;
    course_name: string;
    faculty_name: string;
    start_date: string;
    registration_url?: string;
    course_image_url?: string;
}

export default function CourseCard({
    id,
    course_name,
    faculty_name,
    start_date,
    registration_url,
    course_image_url
}: CourseCardProps) {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://upgradeaiskills.com';
    const courseUrl = `${origin}/courses/${id}`;

    return (
        <div id={id} style={{
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            fontFamily: "'Inter', sans-serif",
            border: '1px solid #eef2f6',
            height: '100%'
        }}>
            {/* Header with Image or Gradient */}
            <div style={{
                height: '180px',
                minHeight: '180px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {course_image_url ? (
                    <Image 
                        src={course_image_url} 
                        alt={course_name}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}>
                         <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
                            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                    <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M13,7H11V13H17V11H13V7Z" />
                                </svg>
                            </div>
                            <div style={{ 
                                color: 'white', 
                                fontSize: '0.9rem', 
                                fontWeight: 800, 
                                lineHeight: 1.2,
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {course_name}
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Overlay for better text readability if using image */}
                {course_image_url && (
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                        padding: '1rem',
                        color: 'white'
                    }}>
                        <div style={{ 
                            fontSize: '0.85rem', 
                            fontWeight: 700,
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {course_name}
                        </div>
                    </div>
                )}
            </div>

            {/* Content Body */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 700, 
                    color: '#1e293b', 
                    margin: '0', 
                    lineHeight: '1.3',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {course_name}
                </h3>

                {/* Ratings */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', margin: '0.15rem 0' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    ))}
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginLeft: '3px' }}>5</span>
                </div>

                {/* Details List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Start Date: {new Date(start_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>by : {faculty_name}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Dur: 3 Months</span>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div style={{ 
                display: 'flex', 
                borderTop: '1px solid #eef2f6',
                marginTop: 'auto'
            }}>
                <a 
                    href={registration_url || '#'} 
                    style={{ 
                        flex: 1, 
                        background: '#0066cc', 
                        color: 'white', 
                        textAlign: 'center', 
                        padding: '0.6rem', 
                        fontWeight: 700, 
                        fontSize: '0.8rem',
                        textDecoration: 'none',
                        letterSpacing: '0.5px'
                    }}
                >
                    ENROLL
                </a>
                <button 
                    onClick={() => setIsShareOpen(true)}
                    style={{ 
                        flex: 1, 
                        background: 'transparent', 
                        color: '#334155', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '0.6rem', 
                        fontWeight: 700, 
                        fontSize: '0.8rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                    SHARE
                </button>
            </div>

            <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={courseUrl} />
        </div>
    );
}
