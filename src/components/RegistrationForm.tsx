'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile: '',
        course: '',
        training_mode: '',
        agreed: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agreed) {
            setStatus({ type: 'error', message: 'Please agree to the Terms of Use and Privacy Policy.' });
            return;
        }
        setIsSubmitting(true);
        setStatus(null);

        try {
            const { error } = await supabase
                .from('course_registrations')
                .insert([
                    {
                        full_name: formData.full_name,
                        email: formData.email,
                        mobile: formData.mobile,
                        course_name: formData.course,
                        training_mode: formData.training_mode
                    }
                ]);

            if (error) throw error;

            setStatus({ type: 'success', message: 'Registration successful! We will contact you soon.' });
            setFormData({
                full_name: '',
                email: '',
                mobile: '',
                course: '',
                training_mode: '',
                agreed: false
            });
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    return (
        <div className="glass" style={{ padding: '0', overflow: 'hidden', height: 'fit-content' }}>
            <div style={{
                background: 'linear-gradient(90deg, #1e293b 0%, #334155 100%)',
                padding: '1rem',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'white', margin: 0 }}>
                        Top 5 Technologies to learn
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)', margin: '0.2rem 0 0' }}>
                        Register for the Course
                    </p>
                </div>
                <div style={{ width: '45px', height: '45px', position: 'relative' }}>
                   {/* Placeholder for the person icon/image seen in the UI */}
                   <div style={{ 
                        width: '100%', 
                        height: '100%', 
                        background: 'rgba(255,255,255,0.1)', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                   }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                   </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    style={{
                        padding: '0.7rem',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: '#1e293b'
                    }}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    style={{
                        padding: '0.7rem',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: '#1e293b'
                    }}
                    required
                />
                <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    style={{
                        padding: '0.7rem',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: '#1e293b'
                    }}
                    required
                />
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    style={{
                        padding: '0.7rem',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: '#1e293b',
                        appearance: 'none'
                    }}
                    required
                >
                    <option value="" disabled>Select Course</option>
                    <option value="Full Stack Java">Full Stack Java</option>
                    <option value="Full Stack Python">Full Stack Python</option>
                    <option value="UI Full Stack Web Development">UI Full Stack Web Development</option>
                    <option value="Full Stack Data Science & AI">Full Stack Data Science & AI</option>
                    <option value="Full Stack Software Testing">Full Stack Software Testing</option>
                </select>

                <select
                    name="training_mode"
                    value={formData.training_mode}
                    onChange={handleChange}
                    style={{
                        padding: '0.7rem',
                        background: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: '#1e293b',
                        appearance: 'none'
                    }}
                    required
                >
                    <option value="" disabled>Mode of Training</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Hybrid">Hybrid</option>
                </select>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <input
                        type="checkbox"
                        name="agreed"
                        id="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        style={{ marginTop: '0.2rem' }}
                    />
                    <label htmlFor="agreed" style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: '1.3' }}>
                        By Providing your contact details, you agree to our <a href="/terms" style={{ color: '#3b82f6', textDecoration: 'none' }}>Terms of use</a> & <a href="/privacy" style={{ color: '#3b82f6', textDecoration: 'none' }}>Privacy Policy</a>
                    </label>
                </div>

                {status && (
                    <div style={{
                        padding: '0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        backgroundColor: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        color: status.type === 'success' ? '#22c55e' : '#ef4444',
                        border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`
                    }}>
                        {status.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        padding: '0.75rem',
                        background: '#1d4ed8',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1,
                        marginTop: '0.25rem'
                    }}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
