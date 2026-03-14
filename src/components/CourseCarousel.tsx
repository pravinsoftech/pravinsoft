'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

interface Course {
  id: string;
  course_name: string;
  category: string;
  course_image_url?: string;
}

export default function CourseCarousel() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const { data } = await supabase.from('courses').select('*').limit(10);
      if (data) setCourses(data);
    }
    fetchCourses();
  }, []);

  if (courses.length === 0) return null;

  // Duplicate the array to create an infinite scroll effect
  const duplicatedCourses = [...courses, ...courses];

  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      padding: '4rem 0',
      background: 'var(--background)',
      borderBottom: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }} className="gradient-text">Explore Our Top Courses</h2>
      </div>

      <div style={{ position: 'relative', width: '100%', display: 'flex' }}>
        <div style={{
          display: 'flex',
          gap: '2rem',
          animation: 'scroll 40s linear infinite',
          whiteSpace: 'nowrap',
          padding: '0 1rem'
        }}>
          {duplicatedCourses.map((course, idx) => (
            <Link key={`${course.id}-${idx}`} href={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
              <div className="glass" style={{
                width: '300px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '100%', aspectRatio: '2/1', backgroundColor: '#2a2a35', position: 'relative' }}>
                  {course.course_image_url ? (
                    <Image src={course.course_image_url} alt={course.course_name} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
                      2:1 Image
                    </div>
                  )}
                </div>
                <div style={{ padding: '1.5rem', whiteSpace: 'normal' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {course.category || 'Technology'}
                  </span>
                  <h3 style={{ margin: '0.5rem 0 0 0', fontSize: '1.1rem', fontWeight: 600, color: 'var(--foreground)', lineHeight: 1.4 }}>
                    {course.course_name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } 
        }
      `}</style>
    </div>
  );
}
