'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

interface CourseRow {
  id: string;
  course_name: string;
}

interface FAQRow {
  id: string;
  question: string;
  answer: string;
}

export default function ChatWidget() {
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  
  const [courses, setCourses] = useState<CourseRow[]>([]);
  const [faqs, setFaqs] = useState<FAQRow[]>([]);
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaq, setSelectedFaq] = useState<FAQRow | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course_interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Fetch initial data
  useEffect(() => {
    async function fetchData() {
      const [coursesRes, faqsRes] = await Promise.all([
        supabase.from('courses').select('id, course_name').order('course_name'),
        supabase.from('faqs').select('id, question, answer').order('sort_order', { ascending: true })
      ]);
      
      if (coursesRes.data) setCourses(coursesRes.data);
      if (faqsRes.data) setFaqs(faqsRes.data);
    }
    fetchData();
  }, []);

  // Auto-open lead capture after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeadOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Find course name to submit instead of ID
      const selectedCourse = courses.find(c => c.id === formData.course_interest);
      const courseNameToSubmit = selectedCourse ? selectedCourse.course_name : formData.course_interest;

      const payload = {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        course_interest: courseNameToSubmit,
      };

      const { error } = await supabase.from('chat_leads').insert([payload]);

      if (error) {
         // Fallback to contact_submissions if chat_leads isn't created appropriately
         await supabase.from('contact_submissions').insert([{
             full_name: formData.name,
             email: formData.email,
             subject: `Chat Assistant Lead - ${formData.mobile}`,
             message: `Interested in course: ${courseNameToSubmit || 'None specified'}`
         }]);
      }

      setStatus({ type: 'success', message: 'Thank you! We will reach out to you shortly.' });
      setFormData({ name: '', mobile: '', email: '', course_interest: '' });
      setTimeout(() => setIsLeadOpen(false), 3000);
    } catch (error: any) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredFaqs = faqs.filter(f => f.question.toLowerCase().includes(faqSearch.toLowerCase()));

  return (
    <>
      <div style={{ position: 'fixed', bottom: '20px', right: '25px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 9999 }}>
        
        {/* WhatsApp Icon (Top) */}
        <a 
          href="https://wa.me/919881120025?text=I%20want%20to%20know%20more%20about%20the%20courses" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="WhatsApp"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={40} height={40} />
        </a>

        {/* Lead Capture Icon (Middle) */}
        <button
          onClick={() => { setIsLeadOpen(!isLeadOpen); setIsFaqOpen(false); }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary)',
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="Chat Assistance"
        >
          <Image src="/chat.svg" alt="Chat" width={30} height={30} />
        </button>

        {/* FAQ Icon (Bottom) */}
        <button
          onClick={() => { setIsFaqOpen(!isFaqOpen); setIsLeadOpen(false); }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#0ea5e9',
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          aria-label="FAQs"
        >
          <Image src="/faqs.svg" alt="FAQs" width={30} height={30} />
        </button>
      </div>

      {/* Lead Capture Popup */}
      {isLeadOpen && (
        <div
          className="glass"
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '95px',
            width: '320px',
            borderRadius: '12px',
            padding: '1.5rem',
            zIndex: 9999,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            border: '1px solid var(--glass-border)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Chat Assistance</h3>
            <button onClick={() => setIsLeadOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              required
              value={formData.mobile}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID *"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'var(--background)', color: 'var(--foreground)' }}
            />
            <select
              name="course_interest"
              value={formData.course_interest}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'var(--background)', color: 'var(--foreground)' }}
            >
              <option value="">Select a Course (Optional)</option>
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.course_name}
                </option>
              ))}
            </select>

            {status && (
              <div style={{ fontSize: '0.85rem', color: status.type === 'success' ? '#22c55e' : '#ef4444' }}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ padding: '0.6rem', width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      )}

      {/* FAQ Popup */}
      {isFaqOpen && (
        <div
          className="glass"
          style={{
            position: 'fixed',
            bottom: '25px',
            right: '95px',
            width: '320px',
            height: '400px',
            borderRadius: '12px',
            padding: '1.5rem',
            zIndex: 9999,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            border: '1px solid var(--glass-border)',
            animation: 'fadeIn 0.2s ease-out',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Ask a Question</h3>
            <button onClick={() => { setIsFaqOpen(false); setSelectedFaq(null); }} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {selectedFaq ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                  onClick={() => setSelectedFaq(null)} 
                  style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: '#0ea5e9', cursor: 'pointer', fontSize: '0.85rem', padding: 0 }}
                >
                  ← Back to questions
                </button>
                <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.95rem', color: 'var(--foreground)' }}>Q: {selectedFaq.question}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.5' }}>A: {selectedFaq.answer}</p>
                </div>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'var(--background)', color: 'var(--foreground)', marginBottom: '0.5rem' }}
                />
                
                {filteredFaqs.length === 0 ? (
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', textAlign: 'center', marginTop: '1rem' }}>No FAQs found.</p>
                ) : (
                  filteredFaqs.map(faq => (
                    <button
                      key={faq.id}
                      onClick={() => setSelectedFaq(faq)}
                      style={{
                        background: 'var(--background)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--foreground)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}
                    >
                      {faq.question}
                    </button>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
