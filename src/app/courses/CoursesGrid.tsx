'use client';

import React, { useEffect, useMemo, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

type Variant =
  | 'all'
  | 'full-stack'
  | 'job-assistance'
  | 'certification'
  | 'trending'
  | 'internship';

interface CoursesGridProps {
  variant: Variant;
  title: string;
  subtitle: string;
}

export default function CoursesGrid({ variant, title, subtitle }: CoursesGridProps) {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data } = await supabase
        .from('courses')
        .select('*')
        .order('start_date', { ascending: true });

      if (data) setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    if (variant === 'all') return courses;

    const nameMatches = (name: string | null | undefined, patterns: string[]) => {
      const n = (name || '').toLowerCase();
      return patterns.some((p) => n.includes(p));
    };

    const subset = courses.filter((course) => {
      const name = course.course_name as string | null | undefined;

      switch (variant) {
        case 'full-stack':
          return nameMatches(name, ['full stack', 'full-stack']);
        case 'job-assistance':
          return nameMatches(name, ['job', 'placement', 'career']);
        case 'certification':
          return nameMatches(name, ['certification', 'certificate', 'certified']);
        case 'trending':
          return nameMatches(name, ['advanced', 'ai', 'data', 'cloud']);
        case 'internship':
          return nameMatches(name, ['intern', 'internship', 'project']);
        default:
          return true;
      }
    });

    // Fallback to all courses if no match, so page is never empty
    return subset.length > 0 ? subset : courses;
  }, [courses, variant]);

  return (
    <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
        }}
      >
        <div>
          <h1
            className="gradient-text"
            style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}
          >
            {title}
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px' }}>{subtitle}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }}>
        <div>
          {loading ? (
            <p style={{ color: 'var(--muted)' }}>Loading courses...</p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  course_name={course.course_name}
                  faculty_name={course.faculty_name}
                  start_date={course.start_date}
                  time={course.time}
                  material_url={course.material_url}
                  registration_url={course.registration_url}
                  course_image_url={course.course_image_url}
                />
              ))}
            </div>
          )}
        </div>
        <Sidebar />
      </div>
      
    </main>
  );
}

