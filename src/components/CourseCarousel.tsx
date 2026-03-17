'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import CourseCard from './CourseCard';

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
             <div key={`${course.id}-${idx}`} style={{ width: '260px', flexShrink: 0 }}>
             <CourseCard 
               id={course.id}
               course_name={course.course_name}
               course_image_url={course.course_image_url}
               faculty_name="Expert Faculty"
               start_date={new Date().toISOString()}
               time="10:00 AM"
               registration_url={`/courses/${course.id}`}
             />
           </div>
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
