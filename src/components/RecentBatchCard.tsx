'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Course {
  id: string;
  name: string;
  slug: string | null;
}

interface Faculty {
  id: string;
  name: string;
}

interface BatchRow {
  id: string;
  start_date: string;
  start_time: string | null;
  training_nature: string;
  course: Course | null;
  faculty: Faculty | null;
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + 'Z');
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return null;
  try {
    const [h, m] = timeStr.split(':');
    const hour = parseInt(h, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const h12 = hour % 12 || 12;
    return `${h12}:${m || '00'} ${ampm}`;
  } catch {
    return timeStr;
  }
}

export default function RecentBatchCard() {
  const [show, setShow] = useState(false);
  const [batch, setBatch] = useState<BatchRow | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    async function fetchRecent() {
      const { data, error } = await supabase
        .from('upcoming_courses_batch')
        .select(
          `
          id,
          start_date,
          start_time,
          training_nature,
          course:course_id ( id, name, slug ),
          faculty:faculty_id ( id, name )
        `
        )
        .eq('status', 'live')
        .order('start_date', { ascending: true })
        .order('start_time', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (!error && data) setBatch(data as unknown as BatchRow);
    }
    fetchRecent();
  }, []);

  useEffect(() => {
    if (dismissed || !batch) return;
    const t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, [batch, dismissed]);

  if (!show || !batch) return null;

  const courseName = batch.course?.name ?? 'Course';
  const facultyName = batch.faculty?.name ?? '';
  const dateDisplay = formatDate(batch.start_date);
  const timeDisplay = formatTime(batch.start_time);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '6rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9997,
        width: 'min(400px, calc(100vw - 2rem))',
        animation: 'recentBatchSlideUp 0.3s ease',
      }}
    >
      <div
        className="glass"
        style={{
          padding: '1rem 1.25rem',
          borderRadius: '12px',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>Upcoming batch</span>
          <button
            type="button"
            onClick={() => {
              setDismissed(true);
              setShow(false);
            }}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: 'var(--muted)',
              padding: 0,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
          {courseName}
        </h3>
        {facultyName && (
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Faculty: {facultyName}</p>
        )}
        <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
          📅 {dateDisplay}
          {timeDisplay && ` · ${timeDisplay}`} · {batch.training_nature}
        </p>
        <Link
          href="/new-batches"
          className="btn-primary"
          style={{ display: 'inline-block', padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}
        >
          View all batches
        </Link>
      </div>
    </div>
  );
}
