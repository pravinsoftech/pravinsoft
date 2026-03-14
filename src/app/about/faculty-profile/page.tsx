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
    <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
      <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Academic Faculty</h1>
      <p style={{ color: 'var(--muted)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '750px' }}>
        Learn from the finest technical minds in Pune. Our teachers bring a blend of industrial rigour and academic excellence.
      </p>

      {loading ? (
        <p style={{ color: 'var(--muted)' }}>Loading faculty...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
          {faculty.map((teacher) => {
            const expertise = teacher.certification
              ? teacher.certification.split(',').map((s) => s.trim()).filter(Boolean)
              : [];
            return (
              <div key={teacher.id} className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', opacity: 0.8 }} />
                <div>
                  <h3 style={{ color: 'var(--foreground)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.2rem' }}>{teacher.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                    {teacher.educational_qualification || 'Faculty'}
                  </p>
                </div>
                {teacher.experience && (
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{teacher.experience}</p>
                )}
                {expertise.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {expertise.map((exp, eIndex) => (
                      <span
                        key={eIndex}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255,255,255,0.05)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '2rem',
                          color: 'var(--foreground)',
                          border: '1px solid var(--glass-border)',
                        }}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                )}
                {(teacher.email || teacher.mobile) && (
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                    {teacher.email && <p style={{ margin: 0 }}>✉️ {teacher.email}</p>}
                    {teacher.mobile && <p style={{ margin: teacher.email ? '0.25rem 0 0' : 0 }}>📞 {teacher.mobile}</p>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {!loading && faculty.length === 0 && (
        <div className="glass" style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
          No faculty data available at the moment.
        </div>
      )}
    </main>
  );
}
