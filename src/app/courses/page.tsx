'use client';

import React, { useEffect, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import Sidebar from '@/components/Sidebar';
import { supabase } from '@/lib/supabase';

export default function CoursesListing() {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourses() {
            const { data, error } = await supabase
                .from('courses')
                .select('*')
                .order('start_date', { ascending: true });

            if (data) setCourses(data);
            setLoading(false);
        }
        fetchCourses();
    }, []);

    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                <div>
                    <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Academic Programmes</h1>
                    <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Industry-ready AI certifications designed by experts at Pravinsoft Technologies LLP. Master the future of technology in Hinjewadi, Pune.
                    </p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }}>
                <div>
                    {loading ? (
                        <p style={{ color: 'var(--muted)' }}>Loading courses...</p>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                            {courses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    id={course.id}
                                    course_name={course.course_name}
                                    faculty_name={course.faculty_name}
                                    start_date={course.start_date}
                                    time={course.time}
                                    material_url={course.material_url}
                                    registration_url={course.registration_url}
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
