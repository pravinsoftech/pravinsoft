'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface FacultyRow {
  id: string;
  name: string;
  mobile: string | null;
  email: string | null;
  educational_qualification: string | null;
  certification: string | null;
  experience: string | null;
}

export default function TeachersListing() {
  const [faculty, setFaculty] = useState<FacultyRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaculty() {
      const { data, error } = await supabase
        .from('faculty')
        .select('id, name, mobile, email, educational_qualification, certification, experience')
        .order('name', { ascending: true });

      if (!error && data) setFaculty(data as FacultyRow[]);
      setLoading(false);
    }
    fetchFaculty();
  }, []);

  return (
    <main className="container" style={{ padding: '6rem 2rem 4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: '1.2' }}>Academic Faculty</h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '3rem', maxWidth: '600px', lineHeight: '1.6' }}>
          Learn from the finest technical minds in Pune. Our trainers bring a blend of industrial rigour and academic excellence to help you build a strong career.
        </p>

        {loading ? (
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Loading faculty...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {faculty.map((teacher) => {
              const expertise = teacher.certification
                ? teacher.certification.split(',').map((s) => s.trim()).filter(Boolean)
                : [];
              return (
                <div key={teacher.id} className="glass" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', borderLeft: '3px solid var(--primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', opacity: 0.8, flexShrink: 0 }} />
                    <div>
                      <h3 style={{ color: 'var(--foreground)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.1rem', lineHeight: '1.2' }}>{teacher.name}</h3>
                      <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.75rem' }}>
                        {teacher.educational_qualification || 'Technical Consultant'}
                      </p>
                    </div>
                  </div>
                  
                  {teacher.experience && (
                    <p style={{ color: 'var(--muted)', fontSize: '0.8rem', lineHeight: 1.5, flexGrow: 1 }}>{teacher.experience}</p>
                  )}
                  
                  {expertise.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {expertise.map((exp, eIndex) => (
                        <span
                          key={eIndex}
                          style={{
                            fontSize: '0.7rem',
                            background: 'rgba(255,255,255,0.04)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            color: 'var(--muted)',
                            border: '1px solid var(--glass-border)',
                          }}
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {(teacher.email || teacher.mobile) && (
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {teacher.email && <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span>✉️</span> {teacher.email}</p>}
                      {teacher.mobile && <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}><span>📞</span> {teacher.mobile}</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {!loading && faculty.length === 0 && (
          <div className="glass" style={{ padding: '2rem', textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem' }}>
            No faculty data available at the moment.
          </div>
        )}
      </div>
    </main>
  );
}
