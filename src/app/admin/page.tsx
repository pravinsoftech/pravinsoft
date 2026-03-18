'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

export default function AdminOverview() {
  const [stats, setStats] = useState({
    registrations: 0,
    courses: 0,
    faculty: 0,
    submissions: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [
          { count: regCount },
          { count: courseCount },
          { count: facultyCount },
          { count: subCount }
        ] = await Promise.all([
          supabase.from('student').select('*', { count: 'exact', head: true }),
          supabase.from('courses').select('*', { count: 'exact', head: true }),
          supabase.from('faculty').select('*', { count: 'exact', head: true }),
          supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
        ]);

        setStats({
          registrations: regCount || 0,
          courses: courseCount || 0,
          faculty: facultyCount || 0,
          submissions: subCount || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const StatCard = ({ title, value, color }: { title: string, value: number | string, color: string }) => (
    <div className="glass" style={{ padding: '1.5rem', flex: 1, minWidth: '200px' }}>
      <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{title}</div>
      <div style={{ fontSize: '2rem', fontWeight: 800, color: color }}>{value}</div>
    </div>
  );

  return (
    <AdminLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Dashboard Overview
          </h1>
          <p style={{ color: 'var(--muted)' }}>Welcome back, Admin. Here's what's happening today.</p>
        </div>

        {loading ? (
          <div style={{ color: 'var(--muted)' }}>Loading stats...</div>
        ) : (
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <StatCard title="Total Registrations" value={stats.registrations} color="#3b82f6" />
            <StatCard title="Active Courses" value={stats.courses} color="#10b981" />
            <StatCard title="Faculty Members" value={stats.faculty} color="#f59e0b" />
            <StatCard title="Contact Submissions" value={stats.submissions} color="#8b5cf6" />
          </div>
        )}

        <div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Quick Actions</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => window.location.href = '/admin/courses'}>Add New Course</button>
            <button className="btn-primary" style={{ background: 'var(--glass-bg)' }} onClick={() => window.location.href = '/admin/faculty'}>Manage Faculty</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
