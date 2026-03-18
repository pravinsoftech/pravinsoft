'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

export default function AdminProfile() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setFullName(user?.user_metadata?.full_name || '');
      setLoading(false);
    }
    fetchUser();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    setMessage({ text: '', type: '' });

    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: fullName }
      });

      if (error) throw error;
      setMessage({ text: 'Profile updated successfully!', type: 'success' });
    } catch (err: any) {
      setMessage({ text: err.message || 'Update failed', type: 'error' });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <AdminLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Admin Profile
          </h1>
          <p style={{ color: 'var(--muted)' }}>Manage your administrative account details.</p>
        </div>

        {loading ? (
          <p style={{ color: 'var(--muted)' }}>Loading profile...</p>
        ) : (
          <div className="glass" style={{ padding: '2.5rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--muted)' }}>Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="glass"
                  style={{ padding: '0.75rem', color: 'var(--foreground)' }}
                  required
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--muted)' }}>Email Address (Cannot be changed)</label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="glass"
                  style={{ padding: '0.75rem', color: 'var(--muted)', opacity: 0.7 }}
                />
              </div>

              {message.text && (
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '8px', 
                  background: message.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: message.type === 'success' ? '#22c55e' : '#ef4444',
                  border: `1px solid ${message.type === 'success' ? '#22c55e' : '#ef4444'}`,
                  fontSize: '0.85rem'
                }}>
                  {message.text}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ padding: '0.75rem', width: 'fit-content' }}
                disabled={updating}
              >
                {updating ? 'Updating...' : 'Update Profile'}
              </button>
            </form>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
