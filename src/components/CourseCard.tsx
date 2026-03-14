import Link from 'next/link';

interface CourseCardProps {
    id: string;
    course_name: string;
    faculty_name: string;
    start_date: string;
    time: string;
    material_url?: string;
    registration_url?: string;
    course_image_url?: string;
}

import { useState } from 'react';
import ShareModal from './ShareModal';
import Image from 'next/image';

export default function CourseCard({
    id,
    course_name,
    faculty_name,
    start_date,
    time,
    material_url,
    registration_url,
    course_image_url
}: CourseCardProps) {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://upgradeaiskills.com';
    const courseUrl = `${origin}/courses/${id}`;

    return (
        <div id={id} className="glass" style={{
            position: 'relative',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'transform 0.3s ease',
            height: '100%',
            overflow: 'hidden'
        }}>
            <button
                onClick={() => setIsShareOpen(true)}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                aria-label="Share Course"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
            </button>

            <div style={{ width: '100%', aspectRatio: '2/1', backgroundColor: '#2a2a35', position: 'relative' }}>
                {course_image_url ? (
                    <Image src={course_image_url} alt={course_name} fill style={{ objectFit: 'cover' }} />
                ) : (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
                        No Image Available (2:1)
                    </div>
                )}
            </div>

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                <div>
                    <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--primary)',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '2rem',
                        display: 'inline-block',
                        marginBottom: '1rem'
                    }}>Course</span>
                    <h3 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>{course_name}</h3>
                    <p style={{ color: 'var(--foreground)', fontSize: '1rem', fontWeight: 600 }}>Faculty: {faculty_name}</p>
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>📅 Starts: {new Date(start_date).toLocaleDateString()}</p>
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>🕒 Time: {time}</p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
                    {registration_url && (
                        <a href={registration_url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center', width: '100%', padding: '0.75rem' }}>
                            Register Now
                        </a>
                    )}
                    {material_url && (
                        <a href={material_url} target="_blank" rel="noopener noreferrer" className="glass" style={{ textAlign: 'center', width: '100%', padding: '0.75rem', fontSize: '0.85rem' }}>
                            📄 Download Material
                        </a>
                    )}
                </div>
            </div>

            <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={courseUrl} />
        </div>
    );
}
