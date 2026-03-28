import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
    title: string;
    excerpt?: string;
    date?: string;
    imageColor?: string;
    slug?: string;
}

export default function BlogCard({ title, excerpt, date, imageColor = "#3b82f6", slug = "#" }: BlogCardProps) {
    return (
        <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            border: '1px solid #e2e8f0',
            padding: '1rem',
            display: 'grid',
            gridTemplateColumns: 'minmax(120px, 1fr) 1.5fr',
            gap: '1rem',
            alignItems: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}>
            {/* Blog Image/Poster Area */}
            <div style={{ 
                height: '80px', 
                background: imageColor,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                textAlign: 'center'
            }}>
                <span style={{ color: 'white', fontSize: '0.65rem', fontWeight: 800, lineHeight: 1.2 }}>
                    {title}
                </span>
            </div>

            {/* Content Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h4 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 800, 
                    color: '#111827', 
                    margin: 0,
                    lineHeight: 1.3,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {title}
                </h4>

                {date && <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{date}</span>}
                
                {excerpt && (
                    <p style={{ 
                        fontSize: '0.85rem', 
                        color: '#475569', 
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {excerpt}
                    </p>
                )}
                
                <Link href={slug} style={{ 
                    color: '#3b82f6', 
                    fontSize: '0.85rem', 
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none',
                    marginTop: '0.25rem'
                }}>
                    Read more <span>→</span>
                </Link>
            </div>
        </div>
    );
}
