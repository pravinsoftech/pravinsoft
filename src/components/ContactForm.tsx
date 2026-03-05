'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([formData]);

            if (error) throw error;

            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({ full_name: '', email: '', subject: '', message: '' });
        } catch (error: any) {
            setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="glass"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Full Name</label>
                    <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="glass"
                        style={{ padding: '0.75rem', color: 'var(--foreground)' }}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="glass"
                        style={{ padding: '0.75rem', color: 'var(--foreground)' }}
                        placeholder="your@email.com"
                        required
                    />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass"
                    style={{ padding: '0.75rem', color: 'var(--foreground)' }}
                    placeholder="Query regarding..."
                    required
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass"
                    rows={5}
                    style={{ padding: '0.75rem', color: 'var(--foreground)', resize: 'none' }}
                    placeholder="Type your message here..."
                    required
                ></textarea>
            </div>

            {status && (
                <div style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: status.type === 'success' ? '#22c55e' : '#ef4444',
                    border: `1px solid ${status.type === 'success' ? '#22c55e' : '#ef4444'}`
                }}>
                    {status.message}
                </div>
            )}

            <button
                className="btn-primary"
                type="submit"
                disabled={isSubmitting}
                style={{
                    alignSelf: 'flex-start',
                    padding: '1rem 2rem',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
