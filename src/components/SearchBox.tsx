'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface Course {
  id: string;
  course_name: string;
}

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Course[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }
      const { data } = await supabase
        .from('courses')
        .select('id, course_name')
        .ilike('course_name', `%${query}%`)
        .limit(5);

      if (data) {
        setResults(data);
        setIsOpen(true);
      }
    };

    const timer = setTimeout(fetchResults, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div ref={searchRef} style={{ position: 'relative', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Search courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => { if (results.length > 0) setIsOpen(true); }}
        style={{
          padding: '0.4rem 0.8rem',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          background: '#f8fafc',
          color: '#1e293b',
          fontSize: '0.85rem',
          width: '220px'
        }}
      />
      {/* Search Icon */}
      <svg
        style={{ position: 'absolute', right: '10px', color: 'var(--muted)' }}
        width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      {isOpen && results.length > 0 && (
        <div className="glass" style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '0.5rem',
          width: '250px',
          borderRadius: '8px',
          overflow: 'hidden',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}>
          {results.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              onClick={() => { setIsOpen(false); setQuery(''); }}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: 'var(--foreground)',
                fontSize: '0.85rem',
                borderBottom: '1px solid var(--glass-border)',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {course.course_name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
