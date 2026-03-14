import HeroCarousel from '@/components/HeroCarousel';
import FullStackPageClient from '@/components/FullStackPageClient';
import { supabase } from '@/lib/supabase';

// Helper to fetch full-stack courses
async function getFullStackCourses() {
  const { data } = await supabase
    .from('courses')
    .select('*')
    .or('course_name.ilike.%full stack%,course_name.ilike.%full-stack%')
    .order('start_date', { ascending: true });
  return data || [];
}

// Helper to fetch upcoming full-stack batches
async function getUpcomingFullStackBatches() {
  const { data } = await supabase
    .from('upcoming_courses_batch')
    .select(`
      id,
      training_nature,
      start_date,
      start_time,
      course:course_id ( course_name ),
      faculty:faculty_id ( name )
    `)
    .order('start_date', { ascending: true });

  // Normalize batches to ensure course and faculty are objects, not arrays
  const normalizedBatches: any[] = (data || []).map((b: any) => ({
    ...b,
    course: Array.isArray(b.course) ? b.course[0] : b.course,
    faculty: Array.isArray(b.faculty) ? b.faculty[0] : b.faculty,
  }));

  // Filter batches for full-stack courses
  const fullStackBatches = normalizedBatches.filter((batch: any) => {
    const name = (batch.course?.course_name || '').toLowerCase();
    return name.includes('full stack') || name.includes('full-stack');
  });

  return fullStackBatches;
}

export default async function FullStackCoursesPage() {
  const [courses, batches] = await Promise.all([
    getFullStackCourses(),
    getUpcomingFullStackBatches()
  ]);

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>
      <HeroCarousel />
      <FullStackPageClient courses={courses} batches={batches} />
    </main>
  );
}

