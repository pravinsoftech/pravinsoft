'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

export default function AdminFaculty() {
  const [faculty, setFaculty] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingFaculty, setEditingFaculty] = useState<any | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchFaculty();
  }, []);

  async function fetchFaculty() {
    setLoading(true);
    const { data } = await supabase.from('faculty').select('*').order('created_at', { ascending: false });
    setFaculty(data || []);
    setLoading(false);
  }

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facultyData = Object.fromEntries(formData.entries());

    if (editingFaculty) {
      const { error } = await supabase.from('faculty').update(facultyData).eq('id', editingFaculty.id);
      if (error) alert(error.message);
    } else {
      const { error } = await supabase.from('faculty').insert([facultyData]);
      if (error) alert(error.message);
    }

    setEditingFaculty(null);
    setIsAdding(false);
    fetchFaculty();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this faculty member?')) {
      const { error } = await supabase.from('faculty').delete().eq('id', id);
      if (error) alert(error.message);
      fetchFaculty();
    }
  };

  const FacultyForm = ({ member, onCancel }: { member?: any, onCancel: () => void }) => (
    <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
        {member ? 'Edit Faculty' : 'Add New Faculty'}
      </h2>
      <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Name</label>
          <input name="name" defaultValue={member?.name} className="glass" style={{ padding: '0.75rem' }} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Email</label>
          <input name="email" type="email" defaultValue={member?.email} className="glass" style={{ padding: '0.75rem' }} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Mobile</label>
          <input name="mobile" defaultValue={member?.mobile} className="glass" style={{ padding: '0.75rem' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Education</label>
          <input name="educational_qualification" defaultValue={member?.educational_qualification} className="glass" style={{ padding: '0.75rem' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Certification</label>
          <input name="certification" defaultValue={member?.certification} className="glass" style={{ padding: '0.75rem' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>Experience</label>
          <textarea name="experience" defaultValue={member?.experience} className="glass" style={{ padding: '0.75rem', resize: 'none' }} rows={3}></textarea>
        </div>
        <div style={{ display: 'flex', gap: '1rem', gridColumn: 'span 2' }}>
          <button type="submit" className="btn-primary">Save Changes</button>
          <button type="button" className="glass" style={{ padding: '0.75rem 1.5rem' }} onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );

  return (
    <AdminLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Manage Faculty
            </h1>
            <p style={{ color: 'var(--muted)' }}>View and edit profiles for faculty members.</p>
          </div>
          {!isAdding && !editingFaculty && (
            <button className="btn-primary" onClick={() => setIsAdding(true)}>+ Add Faculty</button>
          )}
        </div>

        {(isAdding || editingFaculty) && (
          <FacultyForm member={editingFaculty} onCancel={() => { setIsAdding(false); setEditingFaculty(null); }} />
        )}

        {loading ? (
          <div style={{ color: 'var(--muted)' }}>Loading faculty members...</div>
        ) : (
          <div className="glass" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Name</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Email</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Education</th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--muted)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((member) => (
                  <tr key={member.id}>
                    <td style={{ padding: '1rem' }}>{member.name}</td>
                    <td style={{ padding: '1rem' }}>{member.email}</td>
                    <td style={{ padding: '1rem' }}>{member.educational_qualification}</td>
                    <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <button className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setEditingFaculty(member)}>Edit</button>
                      <button className="glass" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: '#ef4444' }} onClick={() => handleDelete(member.id)}>Delete</button>
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
