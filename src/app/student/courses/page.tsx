'use client';

import React, { useEffect, useState } from 'react';
import StudentLayout from '@/components/student/StudentLayout';
import { supabase } from '@/lib/supabase';

export default function StudentCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
      setCourses(data || []);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    <StudentLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            My Courses
          </h1>
          <p style={{ color: 'var(--muted)' }}>Access your learning materials and stay on track with your curriculum.</p>
        </div>

        {loading ? (
          <p style={{ color: 'var(--muted)' }}>Loading your dashboard...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {courses.map((course) => (
              <div key={course.id} className="glass" style={{ display: 'flex', flexDirection: 'column' }}>
                {course.course_image_url && (
                  <img src={course.course_image_url} alt={course.course_name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
                )}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{course.course_name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    <span>Faculty: {course.faculty_name}</span>
                    <span>Starts: {course.start_date}</span>
                  </div>
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
                    <button className="btn-primary" style={{ flex: 1, padding: '0.75rem' }} onClick={() => course.material_url && window.open(course.material_url, '_blank')}>View Materials</button>
                    <button className="glass" style={{ flex: 1, padding: '0.75rem' }}>Course Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StudentLayout>
  );
}
