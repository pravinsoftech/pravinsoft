'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export default function SidebarContactForm() {
    const [courses, setCourses] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        course_name: 'Select Course',
        training_mode: 'Mode of Training'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    useEffect(() => {
        async function fetchUpcomingCourses() {
            const { data, error } = await supabase
                .from('upcoming_courses_batch')
                .select(`
                    courses (
                        course_name
                    )
                `)
                .eq('status', 'live');

            if (!error && data) {
                const uniqueCourses = Array.from(new Set(data.map(item => (item.courses as any)?.course_name).filter(Boolean)));
                setCourses(uniqueCourses as string[]);
            }
        }
        fetchUpcomingCourses();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // Basic validation
        if (formData.course_name === 'Select Course' || formData.training_mode === 'Mode of Training') {
            setStatus({ type: 'error', message: 'Please select a course and training mode.' });
            setIsSubmitting(false);
            return;
        }

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([{
                    full_name: formData.full_name,
                    email: formData.email,
                    phone: formData.phone,
                    course_name: formData.course_name,
                    training_mode: formData.training_mode,
                    subject: `Course Registration: ${formData.course_name}`,
                    message: `Registration request for ${formData.course_name} via ${formData.training_mode}`
                }]);

            if (error) throw error;

            setStatus({ type: 'success', message: 'Registration successful!' });
            setFormData({
                full_name: '',
                email: '',
                phone: '',
                course_name: 'Select Course',
                training_mode: 'Mode of Training'
            });
        } catch (err) {
            const error = err as Error;
            setStatus({ type: 'error', message: error.message || 'Something went wrong.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{ 
            background: 'white', 
            borderRadius: '6px', 
            overflow: 'hidden', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            border: '1px solid #f1f5f9',
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto'
        }}>
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

            <form style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }} onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Full Name" 
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', color: '#475569' }}
                        required
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address" 
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', color: '#475569' }}
                        required
                    />
                </div>
                <div>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number" 
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', outline: 'none', color: '#475569' }}
                        required
                    />
                </div>
                <div style={{ position: 'relative' }}>
                    <select 
                        name="course_name"
                        value={formData.course_name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', appearance: 'none', background: '#fff', cursor: 'pointer', outline: 'none', color: '#475569' }}
                        required
                    >
                        <option disabled>Select Course</option>
                        {courses.length > 0 ? (
                            courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))
                        ) : (
                            <option>Software Testing</option>
                        )}
                    </select>
                    <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <select 
                        name="training_mode"
                        value={formData.training_mode}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '13px', appearance: 'none', background: '#fff', cursor: 'pointer', outline: 'none', color: '#475569' }}
                        required
                    >
                        <option disabled>Mode of Training</option>
                        <option value="Online Training">Online Training</option>
                        <option value="Classroom Training">Classroom Training</option>
                    </select>
                    <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <input type="checkbox" id="terms-compact" style={{ width: '14px', height: '14px', marginTop: '2px', cursor: 'pointer' }} required />
                    <label htmlFor="terms-compact" style={{ fontSize: '10px', color: '#64748b', lineHeight: 1.4 }}>
                        Agree to <a href="/terms" style={{ color: '#1a73e8', textDecoration: 'none' }}>Terms</a> & <a href="/privacy" style={{ color: '#1a73e8', textDecoration: 'none' }}>Privacy</a>
                    </label>
                </div>

                {status && (
                    <div style={{ 
                        fontSize: '11px', 
                        padding: '8px', 
                        borderRadius: '4px', 
                        background: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
                        color: status.type === 'success' ? '#16a34a' : '#dc2626',
                        border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`
                    }}>
                        {status.message}
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ 
                        background: '#0d6efd', 
                        color: 'white', 
                        border: 'none', 
                        padding: '0.7rem', 
                        borderRadius: '6px', 
                        fontWeight: 700, 
                        fontSize: '14px', 
                        cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                        opacity: isSubmitting ? 0.7 : 1,
                        boxShadow: '0 4px 10px rgba(13, 110, 253, 0.15)'
                    }}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
