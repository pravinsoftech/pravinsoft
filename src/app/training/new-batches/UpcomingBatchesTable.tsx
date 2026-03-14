'use client';

import { useMemo, useState } from 'react';
import type { UpcomingBatchRow } from './types';

type Props = {
  batches: UpcomingBatchRow[];
};

const TABS = [
  { id: 'online-training', label: 'Online Training' },
  { id: 'classroom-training', label: 'Classroom Training' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'internships', label: 'Internships' },
  { id: 'weekend-training', label: 'Weekend Training' },
];

const ENTRIES_OPTIONS = [10, 30, 50];

function normalize(str: string | null | undefined) {
  return (str || '').toLowerCase();
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + 'Z');
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return '';
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

function filterByTab(batches: UpcomingBatchRow[], activeTab: string) {
  const tab = activeTab;

  return batches.filter((batch) => {
    const nature = normalize(batch.training_nature);
    const courseName = normalize(batch.course?.course_name || '');

    switch (tab) {
      case 'online-training':
        return nature.includes('online');
      case 'classroom-training':
        return nature.includes('classroom') || nature.includes('offline');
      case 'workshops':
        return nature.includes('workshop');
      case 'internships':
        return nature.includes('intern');
      case 'weekend-training':
        return nature.includes('weekend') || courseName.includes('weekend');
      default:
        return true;
    }
  });
}

export function UpcomingBatchesTable({ batches }: Props) {
  const [activeTab, setActiveTab] = useState<string>('online-training');
  const [entries, setEntries] = useState<number>(30);
  const [search, setSearch] = useState<string>('');

  const filtered = useMemo(() => {
    const tabFiltered = filterByTab(batches, activeTab);
    const q = normalize(search);

    if (!q) return tabFiltered;

    return tabFiltered.filter((batch) => {
      const courseName = normalize(batch.course?.course_name || '');
      const facultyName = normalize(batch.faculty?.name || '');
      return courseName.includes(q) || facultyName.includes(q);
    });
  }, [batches, activeTab, search]);

  const visible = filtered.slice(0, entries);

  return (
    <section
      style={{
        background: 'rgba(15,23,42,0.02)',
        borderRadius: '1rem',
        padding: '1.5rem',
        border: '1px solid var(--glass-border)',
      }}
    >
      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                border: isActive ? 'none' : '1px solid var(--glass-border)',
                background: isActive
                  ? 'linear-gradient(135deg, var(--primary), var(--secondary))'
                  : 'transparent',
                color: isActive ? '#ffffff' : 'var(--muted)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: isActive ? '0 6px 18px var(--glow-primary)' : 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
          <span>Show entries:</span>
          <select
            value={entries}
            onChange={(e) => setEntries(parseInt(e.target.value, 10))}
            style={{
              padding: '0.25rem 0.5rem',
              borderRadius: '0.5rem',
              border: '1px solid var(--glass-border)',
              background: 'var(--background)',
              fontSize: '0.8rem',
              color: 'var(--foreground)',
            }}
          >
            {ENTRIES_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginLeft: 'auto',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Search:</span>
          <input
            type="text"
            placeholder="Course or faculty"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '0.35rem 0.6rem',
              borderRadius: '0.5rem',
              border: '1px solid var(--glass-border)',
              background: 'var(--background)',
              fontSize: '0.8rem',
              minWidth: '180px',
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.85rem',
          }}
        >
          <thead>
            <tr
              style={{
                background: '#f4f4f5',
                color: '#27272a',
              }}
            >
              <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left' }}>s no</th>
              <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left' }}>Course Name</th>
              <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left' }}>Faculty</th>
              <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left' }}>Date</th>
              <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left' }}>Time</th>
              <th style={{ padding: '0.6rem 0.75rem', textAlign: 'left' }}>Meeting Link</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((batch, index) => {
              const courseName = batch.course?.course_name ?? 'Course';
              const facultyName = batch.faculty?.name ?? '';
              const dateDisplay = formatDate(batch.start_date);
              const timeDisplay = formatTime(batch.start_time);
              const meetingLink = batch.demo_link || batch.registration_link || batch.payment_link || null;
              const isStriped = index % 2 === 1;

              return (
                <tr
                  key={batch.id}
                  style={{
                    background: isStriped ? '#f9fafb' : '#ffffff',
                  }}
                >
                  <td style={{ padding: '0.55rem 0.75rem' }}>{index + 1}</td>
                  <td style={{ padding: '0.55rem 0.75rem', fontWeight: 500 }}>{courseName}</td>
                  <td style={{ padding: '0.55rem 0.75rem' }}>{facultyName}</td>
                  <td style={{ padding: '0.55rem 0.75rem' }}>{dateDisplay}</td>
                  <td style={{ padding: '0.55rem 0.75rem' }}>{timeDisplay}</td>
                  <td style={{ padding: '0.55rem 0.75rem' }}>
                    {meetingLink ? (
                      <a
                        href={meetingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-block',
                          padding: '0.35rem 0.9rem',
                          borderRadius: '999px',
                          border: '1px solid #d4d4d8',
                          background: '#ffffff',
                          fontSize: '0.8rem',
                          color: '#1d4ed8',
                          fontWeight: 600,
                        }}
                      >
                        Click here
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>TBA</span>
                    )}
                  </td>
                </tr>
              );
            })}

            {visible.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    color: 'var(--muted)',
                  }}
                >
                  No batches found for this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

