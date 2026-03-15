'use client';

import React, { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';
import RegistrationForm from './RegistrationForm';

export default function JavaFullStackClient() {
    const [activeTab, setActiveTab] = useState('overview');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'curriculum', label: 'Curriculum' },
        { id: 'certificate', label: 'Certificate' },
        { id: 'upcoming-batches', label: 'Upcoming Batches' },
        { id: 'training-features', label: 'Training Features' },
        { id: 'reviews', label: 'Reviews' },
    ];

    const curriculum = [
        {
            module: 'Core Java',
            topics: [
                'Introduction, Installation, Programming Elements',
                'OOPS, Data Types, Operators, Control Statements',
                'Exception Handling, Multi-Threading, Collection Framework',
                'Java I/O, File Handling, String Handling, Reflection API',
                'JDK 8 Features, Arrays, Map Interface'
            ]
        },
        {
            module: 'Advanced Java (ADV. JAVA)',
            topics: [
                'JDBC (Java Database Connectivity)',
                'Servlets & JSP',
                'MVC Architecture',
                'Web Services (RESTful)'
            ]
        },
        {
            module: 'Database',
            topics: [
                'Oracle 19c / MySQL',
                'SQL Queries, Joins, Sub-queries',
                'PL/SQL Foundations'
            ]
        },
        {
            module: 'Web Technologies (Front-End)',
            topics: [
                'HTML5 & CSS3',
                'JavaScript (ES6+)',
                'Bootstrap 5 / Tailwind CSS',
                'ReactJS Foundations'
            ]
        },
        {
            module: 'Frameworks & Back-End',
            topics: [
                'Spring Framework',
                'Spring Boot',
                'Microservices Architecture',
                'Spring Data JPA / Hibernate'
            ]
        },
        {
            module: 'Tools & DevOps',
            topics: [
                'Maven / Gradle',
                'Git & GitHub',
                'Docker Basics',
                'JUnit & Mockito'
            ]
        }
    ];

    const batches = [
        { date: 'March 16th, 2026', time: '9:00 AM (IST)', faculty: 'Mr. Hari Krishna', mode: 'Online (Live)' },
        { date: 'March 16th, 2026', time: '4:30 PM (IST)', faculty: 'Mr. Venkatesh Mansani', mode: 'Online / Classroom' },
        { date: 'March 25th, 2026', time: '7:00 AM (IST)', faculty: 'Academic Team', mode: 'Online (Live)' }
    ];

    return (
        <div style={{ paddingBottom: '5rem' }}>
            {/* Hero Section */}
            <section style={{ 
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
                padding: '4rem 0 8rem', 
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <span style={{ 
                            background: 'rgba(59, 130, 246, 0.2)', 
                            color: '#60a5fa', 
                            padding: '0.5rem 1rem', 
                            borderRadius: '50px', 
                            fontSize: '0.85rem', 
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            display: 'inline-block'
                        }}>
                             Full Stack JAVA Developer Program
                        </span>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Master <span style={{ color: '#3b82f6' }}>Full Stack Java</span> Development
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                            Become a production-ready Java Full Stack Developer. Master Core Java, Advanced Java, Spring Boot, Microservices, and Modern Front-end with React.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ padding: '1rem 2rem' }}>Enroll Course</button>
                            <button className="btn-secondary" style={{ padding: '1rem 2rem' }}>Download Curriculum</button>
                        </div>
                        
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '3rem' }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>6 Months</div>
                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Duration</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>₹20,000</div>
                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Course Fee</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>30%</div>
                                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Avg. Salary Hike</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{ 
                            aspectRatio: '16/9', 
                            background: '#000', 
                            borderRadius: '16px', 
                            overflow: 'hidden', 
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(30, 41, 59, 0.5)' }}>
                                <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
                                    <circle cx="34" cy="34" r="34" fill="#3B82F6" />
                                    <path d="M45 34L28.5 43.5263L28.5 24.4737L45 34Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        {/* Decorative background blur */}
                        <div style={{ 
                            position: 'absolute', 
                            top: '-20%', 
                            right: '-20%', 
                            width: '300px', 
                            height: '300px', 
                            background: 'rgba(59, 130, 246, 0.15)', 
                            filter: 'blur(80px)',
                            zIndex: -1
                        }}></div>
                    </div>
                </div>
            </section>

            {/* Quick Details Bar */}
            <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
                <div className="glass" style={{ 
                    padding: '2rem', 
                    background: 'white', 
                    borderRadius: '16px', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)) 300px',
                    gap: '2rem',
                    alignItems: 'center',
                    border: '1px solid #e2e8f0'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Training Type</label>
                        <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                            <option>Online Training</option>
                            <option>Classroom (Offline)</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Select Faculty</label>
                        <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                            <option>Mr. Hari Krishna</option>
                            <option>Mr. Venkatesh Mansani</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Select Date</label>
                        <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                            <option>March 16, 2026</option>
                            <option>March 25, 2026</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ flex: 1 }}>Enroll Now</button>
                    </div>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="container" style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '4rem' }}>
                <div>
                    {/* Tabs Navigation */}
                    <div style={{ 
                        display: 'flex', 
                        gap: '2.5rem', 
                        borderBottom: '1px solid #e2e8f0', 
                        marginBottom: '3rem',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap'
                    }}>
                        {tabs.map(tab => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    padding: '1rem 0',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    color: activeTab === tab.id ? '#3b82f6' : '#64748b',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: activeTab === tab.id ? '3px solid #3b82f6' : '3px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {activeTab === 'overview' && (
                            <div className="animate-fade-in">
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Course Overview</h2>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    This Full Stack Java Developer Course is designed to transform beginners and intermediate Java developers into highly skilled, industry-ready professionals. Java remains the most widely used enterprise language, and our curriculum is built to address current market demands.
                                </p>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
                                    From front-end aesthetics to robust back-end microservices, you will learn every aspect of building modern web applications. The program includes hands-on labs, real-world case studies, and a capstone project to ensure you can confidently handle enterprise-level development challenges.
                                </p>
                                
                                <div style={{ marginTop: '3rem' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>What you'll learn</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                        {[
                                            'End-to-end application development with Java',
                                            'Scalable Microservices with Spring Boot',
                                            'Responsive front-end development with React',
                                            'Database management and data persistence',
                                            'Testing frameworks and DevOps tools',
                                            'Best practices in OOPS and System Design'
                                        ].map((item, i) => (
                                            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: '#475569' }}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <circle cx="10" cy="10" r="9" fill="#D1FAE5" />
                                                    <path d="M6 10L9 13L14 7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'curriculum' && (
                            <div className="animate-fade-in">
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Detailed Syllabus</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {curriculum.map((item, idx) => (
                                        <div key={idx} className="glass" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{ 
                                                    width: '32px', 
                                                    height: '32px', 
                                                    background: '#3b82f6', 
                                                    color: 'white', 
                                                    borderRadius: '8px', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    fontSize: '0.9rem'
                                                }}>{idx + 1}</span>
                                                {item.module}
                                            </h3>
                                            <ul style={{ paddingLeft: '3rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                {item.topics.map((topic, i) => (
                                                    <li key={i}>{topic}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'certificate' && (
                            <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>Professional Certification</h2>
                                <p style={{ color: '#64748b', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                                    Validating your expertise is crucial. Upon successful completion of the course and project, you will receive an ISO-certified certificate from Pravinsoft Technologies LLP.
                                </p>
                                <div style={{ 
                                    maxWidth: '600px', 
                                    margin: '0 auto', 
                                    aspectRatio: '1.414', 
                                    background: '#f1f5f9', 
                                    borderRadius: '16px', 
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '10px solid white'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#cbd5e1' }}>Certificate of Excellence</h3>
                                        <p style={{ color: '#94a3b8' }}>Sample Preview</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'upcoming-batches' && (
                            <div className="animate-fade-in">
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem' }}>Next Scheduled Batches</h2>
                                <div className="glass" style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', textAlign: 'left' }}>
                                                <th style={{ padding: '1.25rem' }}>Start Date</th>
                                                <th style={{ padding: '1.25rem' }}>Time</th>
                                                <th style={{ padding: '1.25rem' }}>Faculty</th>
                                                <th style={{ padding: '1.25rem' }}>Training Mode</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {batches.map((batch, idx) => (
                                                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                                    <td style={{ padding: '1.25rem', fontWeight: 600 }}>{batch.date}</td>
                                                    <td style={{ padding: '1.25rem' }}>{batch.time}</td>
                                                    <td style={{ padding: '1.25rem' }}>{batch.faculty}</td>
                                                    <td style={{ padding: '1.25rem' }}>
                                                        <span style={{ 
                                                            padding: '0.25rem 0.75rem', 
                                                            background: '#dcfce7', 
                                                            color: '#166534', 
                                                            borderRadius: '50px', 
                                                            fontSize: '0.8rem', 
                                                            fontWeight: 600 
                                                        }}>{batch.mode}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {activeTab === 'training-features' && (
                            <div className="animate-fade-in">
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem' }}>Learning Experience</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                                    {[
                                        { title: "Personal Mentor", desc: "Get dedicated support from our academic mentors throughout the course." },
                                        { title: "Real-time Projects", desc: "Work on a comprehensive capstone project that simulates industry scenarios." },
                                        { title: "Job Assistance", desc: "100% placement support with resume workshops and mock interviews." },
                                        { title: "24/7 LMS Access", desc: "Access high-quality recordings and study materials anytime, anywhere." },
                                        { title: "Live Q&A Sessions", desc: "Regular interactive sessions to resolve your technical doubts." },
                                        { title: "Global Community", desc: "Network with fellow developers and industry professionals." }
                                    ].map((f, i) => (
                                        <div key={i} className="glass" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '16px' }}>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{f.title}</h4>
                                            <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.9rem' }}>{f.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'reviews' && (
                            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '4rem 0' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Student Reviews</h2>
                                <p style={{ color: '#64748b' }}>4.8 out of 5 stars based on 1,200+ students</p>
                                <div style={{ marginTop: '3rem', fontSize: '1.1rem', color: '#94a3b8', fontStyle: 'italic' }}>
                                    "Extremely satisfied with the practical approach. Spring Boot modules were a game changer for my career." - Rahul S. (SDE, Pune)
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <aside>
                    <div style={{ position: 'sticky', top: '7rem' }}>
                        <div className="glass" style={{ padding: '2.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>Reserve Your Seat</h3>
                            <RegistrationForm />
                        </div>
                    </div>
                </aside>
            </div>

            <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
