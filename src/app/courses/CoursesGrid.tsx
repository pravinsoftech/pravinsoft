'use client';

import React, { useEffect, useMemo, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import CourseSidebar from '@/components/CourseSidebar';
import CourseHero from '@/components/CourseHero';
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

  const breadcrumbs = [
    { label: title }
  ];

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <CourseHero 
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
      />

      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem', alignItems: 'start' }}>
          <div>
            {loading ? (
              <p style={{ color: 'var(--muted)' }}>Loading courses...</p>
            ) : (
              <div
                className="courses-list-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1.5rem',
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
          <CourseSidebar />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .courses-list-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 850px) {
          .courses-list-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .courses-list-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

