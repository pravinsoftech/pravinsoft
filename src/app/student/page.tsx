'use client';

import React, { useEffect, useState } from 'react';
import StudentLayout from '@/components/student/StudentLayout';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';

interface Course {
  id: string;
  course_name: string;
  faculty_name: string;
  course_image_url?: string;
}

export default function StudentDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // In a real app, we'd join with a student_enrollments table
        // For now, let's show all upcoming courses as "available"
        const { data } = await supabase.from('courses').select('*').limit(3);
        setCourses(data || []);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <StudentLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Welcome, {user?.user_metadata?.full_name || 'Learner'}!
          </h1>
          <p style={{ color: 'var(--muted)' }}>Track your learning progress and access your course materials.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Your Learning Progress</h2>
            <div style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
              You are currently enrolled in <strong>{courses.length}</strong> courses.
            </div>
            <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '30%', height: '100%', background: 'var(--primary)' }}></div>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)', textAlign: 'right' }}>30% Complete</div>
          </div>

          <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Account Info</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Email: {user?.email}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Role: {user?.user_metadata?.role || 'Student'}</div>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Recommended Courses</h2>
          {loading ? (
            <p style={{ color: 'var(--muted)' }}>Loading courses...</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {courses.map((course) => (
                <div key={course.id} className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {course.course_image_url && (
                    <div style={{ position: 'relative', width: '100%', height: '150px' }}>
                      <Image 
                        src={course.course_image_url} 
                        alt={course.course_name} 
                        fill
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                        unoptimized={true}
                      />
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{course.course_name}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>By {course.faculty_name}</div>
                  <button className="btn-primary" style={{ marginTop: 'auto', padding: '0.75rem' }}>View Details</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </StudentLayout>
  );
}
