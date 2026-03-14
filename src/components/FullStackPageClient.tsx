'use client';

import React, { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';
import RegistrationForm from './RegistrationForm';
import FullStackTabs from './FullStackTabs';

interface Course {
    id: string;
    course_name: string;
    course_image_url?: string;
}

interface Batch {
    id: string;
    training_nature: string;
    start_date: string;
    start_time: string;
    course: { course_name: string } | null;
    faculty: { name: string } | null;
}

interface Props {
    courses: Course[];
    batches: Batch[];
}

export default function FullStackPageClient({ courses, batches }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="container" style={{ marginTop: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem' }}>
                Full Stack Courses
            </h1>

            <FullStackTabs />

            <div id="courses" style={{ marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '2rem' }}>
                    Full stack Courses
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '2rem', alignItems: 'start' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem'
                    }}>
                        {courses.map((course) => (
                            <div key={course.id} className="glass" style={{
                                padding: '0',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px'
                            }}>
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                                    <img
                                        src={course.course_image_url || 'https://via.placeholder.com/400x300?text=Course+Image'}
                                        alt={course.course_name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem', minHeight: '2.5rem' }}>
                                        {course.course_name}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', marginBottom: '1rem' }}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} width="12" height="12" viewBox="0 0 24 24" fill={star <= 4 ? "#fbbf24" : "#e2e8f0"}>
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                        <span style={{ fontSize: '0.75rem', color: '#64748b', marginLeft: '0.25rem' }}>4.5</span>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.4rem', marginTop: 'auto' }}>
                                        <button onClick={() => setIsModalOpen(true)} style={{
                                            flex: 1,
                                            background: '#0284c7',
                                            color: 'white',
                                            border: 'none',
                                            padding: '0.5rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            fontSize: '0.7rem',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                            Enroll
                                        </button>
                                        <button style={{
                                            padding: '0.5rem',
                                            background: 'white',
                                            border: '1px solid #e2e8f0',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ position: 'sticky', top: '5rem' }}>
                        <RegistrationForm />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                    <button style={{
                        background: 'linear-gradient(135deg, #581c87 0%, #0891b2 100%)',
                        color: 'white',
                        border: 'none',
                        padding: '0.8rem 2rem',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        cursor: 'pointer'
                    }}>
                        Explore Our Courses
                    </button>
                </div>
            </div>

            {/* Training Features Section */}
            <div id="training-features" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
                    Key Learning Advantages
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { title: "Comprehensive Curriculum", desc: "Master web development with a full-stack curriculum covering front-end, back-end, databases, and more." },
                        { title: "Hands-On Projects", desc: "Apply skills to real-world projects for practical experience and enhanced learning." },
                        { title: "Expert Instructors", desc: "Learn from industry experts for insights and guidance in full-stack development." },
                        { title: "Job Placement Assistance", desc: "Access job placement assistance for career support and employer connections." },
                        { title: "Certification upon Completion", desc: "Receive a recognized certification validating your full-stack development skills." },
                        { title: "24/7 Support", desc: "Access round-the-clock support for immediate assistance, ensuring a seamless learning journey." }
                    ].map((feature, idx) => (
                        <div key={idx} className="glass" style={{ padding: '2rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certificate Section */}
            <div id="certificate" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
                    Our Certificate
                </h2>
                <div className="glass" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '3rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', alignItems: 'center' }}>
                    <div style={{ width: '100%', aspectRatio: '1/1', background: '#f1f5f9', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ color: '#94a3b8' }}>[Certificate Image Placeholder]</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '1.5rem' }}>
                            Earn a Industry-Recognized Certificate
                        </h3>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                            Our certification is highly valued by top employers in the tech industry. It validates your skills as a professional full-stack developer and demonstrates your commitment to quality and excellence. Gain the edge you need to stand out in the competitive job market.
                        </p>
                        <a
                            href="tel:+919881120025"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 1.5rem',
                                background: '#1d4ed8',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '1rem'
                            }}
                        >
                            Talk to Advisor +91 9881120025
                        </a>
                    </div>
                </div>
            </div>

            {/* Batch Time Table Section */}
            <div id="batch-time-table" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
                    Batch Time Table
                </h2>
                <div className="glass" style={{ padding: '1.5rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                                    <th style={{ padding: '1rem' }}>Course</th>
                                    <th style={{ padding: '1rem' }}>Training Mode</th>
                                    <th style={{ padding: '1rem' }}>Date</th>
                                    <th style={{ padding: '1rem' }}>Time</th>
                                    <th style={{ padding: '1rem' }}>Faculty</th>
                                    <th style={{ padding: '1rem' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {batches.map((batch) => (
                                    <tr key={batch.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>{batch.course?.course_name}</td>
                                        <td style={{ padding: '1rem' }}>{batch.training_nature}</td>
                                        <td style={{ padding: '1rem' }}>{new Date(batch.start_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                                        <td style={{ padding: '1rem' }}>{batch.start_time}</td>
                                        <td style={{ padding: '1rem' }}>{batch.faculty?.name}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <button
                                                onClick={() => setIsModalOpen(true)}
                                                style={{ padding: '0.4rem 0.8rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
                                            >
                                                Enroll Now
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {batches.length === 0 && (
                        <p style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>No upcoming batches scheduled at the moment.</p>
                    )}
                </div>
            </div>
            <a
                href="tel:+919881120025"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem 1.5rem',
                    background: '#1d4ed8',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem'
                }}
            >
                Enroll Now
            </a>
            <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
