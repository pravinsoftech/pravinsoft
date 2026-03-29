'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkAdmin() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.user_metadata?.role !== 'admin') {
        window.location.href = '/login';
      } else {
        setIsAdmin(true);
      }
    }
    checkAdmin();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  if (isAdmin === null) return <div style={{ background: 'var(--background)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--foreground)' }}>Loading...</div>;

  const menuItems = [
    { name: 'Overview', href: '/admin', icon: '📊' },
    { name: 'Registrations', href: '/admin/registrations', icon: '📝' },
    { name: 'Courses', href: '/admin/courses', icon: '📚' },
    { name: 'Faculty', href: '/admin/faculty', icon: '👨‍🏫' },
    { name: 'Profile', href: '/admin/profile', icon: '👤' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Mobile Top Navigation */}
      <div style={{
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--glass-border)',
        zIndex: 1100,
        flexDirection: 'column',
      }} className="mobile-only-flex">
        {/* Header */}
        <div style={{ 
          height: '60px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 1.5rem',
          borderBottom: '1px solid var(--glass-border)'
        }}>
          <div style={{ fontWeight: 800, fontSize: '1rem' }}>ADMIN <span className="gradient-text">PANEL</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Admin</span>
            <button
              onClick={handleLogout}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
        
        {/* Scrollable Row */}
        <div style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          padding: '0.5rem 1rem', 
          gap: '0.5rem',
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }} className="no-scrollbar">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                background: pathname === item.href ? 'var(--primary)' : 'var(--glass-bg)',
                color: pathname === item.href ? 'white' : 'var(--muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: pathname === item.href ? 600 : 400,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                border: pathname === item.href ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar (Desktop) */}
      <aside 
        style={{
          width: '260px',
          borderRight: '1px solid var(--glass-border)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'fixed',
          height: '100vh',
          background: 'var(--card-bg)',
          backdropFilter: 'blur(10px)',
          zIndex: 1200,
        }}
        className="sidebar-desktop"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--foreground)' }}>
            ADMIN <span className="gradient-text">PANEL</span>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'glass' : ''}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                color: pathname === item.href ? 'var(--foreground)' : 'var(--muted)',
                textDecoration: 'none',
                transition: 'all 0.2s',
                fontWeight: pathname === item.href ? 600 : 400,
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          style={{
            padding: '0.85rem 1rem',
            borderRadius: '12px',
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            cursor: 'pointer',
            fontWeight: 700,
            transition: 'all 0.3s ease',
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>🚪</span>
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem 3rem' }} className="main-content-responsive">
        {children}
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .sidebar-desktop {
            display: none !important;
          }
          .main-content-responsive {
            margin-left: 0 !important;
            padding: 100px 1.5rem 2rem !important; /* Adjusted offset for fixed mobile header */
          }
          .mobile-only-flex {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .main-content-responsive {
            margin-left: 260px !important;
            padding: 2rem 3rem !important;
          }
          .sidebar-desktop {
            top: 0;
            left: 0;
          }
        }
      `}</style>
    </div>
  );
}
