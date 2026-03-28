'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

interface Course {
  id: string;
  course_name: string;
  faculty_name: string;
  start_date: string;
  time: string;
  course_image_url?: string;
  created_at?: string;
}

const CourseForm = ({ course, onCancel, onSave }: { course: Course | null, onCancel: () => void, onSave: (e: React.FormEvent<HTMLFormElement>) => void }) => (
  <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
      {course ? 'Edit Course' : 'Add New Course'}
    </h2>
    <form onSubmit={onSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Course Name</label>
        <input name="course_name" defaultValue={course?.course_name} className="glass" style={{ padding: '0.75rem' }} required />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Faculty Name</label>
        <input name="faculty_name" defaultValue={course?.faculty_name} className="glass" style={{ padding: '0.75rem' }} required />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Start Date</label>
        <input name="start_date" type="date" defaultValue={course?.start_date} className="glass" style={{ padding: '0.75rem' }} required />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Time</label>
        <input name="time" defaultValue={course?.time} className="glass" style={{ padding: '0.75rem' }} required />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Image URL</label>
        <input name="course_image_url" defaultValue={course?.course_image_url} className="glass" style={{ padding: '0.75rem' }} />
      </div>
      <div style={{ display: 'flex', gap: '1rem', gridColumn: 'span 2' }}>
        <button type="submit" className="btn-primary">Save Changes</button>
        <button type="button" className="glass" style={{ padding: '0.75rem 1.5rem' }} onClick={onCancel}>Cancel</button>
      </div>
    </form>
  </div>
);

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const fetchCourses = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
    setCourses(data || []);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCourses(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const courseData = Object.fromEntries(formData.entries());

    if (editingCourse) {
      const { error } = await supabase.from('courses').update(courseData).eq('id', editingCourse.id);
      if (error) alert(error.message);
    } else {
      const { error } = await supabase.from('courses').insert([courseData]);
      if (error) alert(error.message);
    }

    setEditingCourse(null);
    setIsAdding(false);
    fetchCourses();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      const { error } = await supabase.from('courses').delete().eq('id', id);
      if (error) alert(error.message);
      fetchCourses();
    }
  };

  return (
    <AdminLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Manage Courses
            </h1>
            <p style={{ color: 'var(--muted)' }}>Add, edit, or remove courses from the platform.</p>
          </div>
          {!isAdding && !editingCourse && (
            <button className="btn-primary" onClick={() => setIsAdding(true)}>+ Add Course</button>
          )}
        </div>

        {(isAdding || editingCourse) && (
          <CourseForm course={editingCourse} onCancel={() => { setIsAdding(false); setEditingCourse(null); }} onSave={handleSave} />
        )}

        {loading ? (
          <div style={{ color: 'var(--muted)' }}>Loading courses...</div>
        ) : (
          <div className="glass" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Course Name</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Faculty</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Start Date</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td style={{ padding: '1rem' }}>{course.course_name}</td>
                    <td style={{ padding: '1rem' }}>{course.faculty_name}</td>
                    <td style={{ padding: '1rem' }}>{course.start_date}</td>
                    <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setEditingCourse(course)}>Edit</button>
                      <button className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: '#ef4444' }} onClick={() => handleDelete(course.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
