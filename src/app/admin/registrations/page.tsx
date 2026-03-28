'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { supabase } from '@/lib/supabase';

interface ContactSubmission {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

interface StudentRegistration {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  payment_status?: string;
}

export default function AdminRegistrations() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'students'>('contacts');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [students, setStudents] = useState<StudentRegistration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [
          { data: contactData },
          { data: studentData }
        ] = await Promise.all([
          supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
          supabase.from('student').select('*').order('created_at', { ascending: false }),
        ]);

        setContacts(contactData || []);
        setStudents(studentData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const TableHeader = ({ children }: { children: React.ReactNode }) => (
    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid var(--glass-border)', color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600 }}>
      {children}
    </th>
  );

  const TableCell = ({ children }: { children: React.ReactNode }) => (
    <td style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', fontSize: '0.9rem' }}>
      {children}
    </td>
  );

  return (
    <AdminLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Registrations
          </h1>
          <p style={{ color: 'var(--muted)' }}>View and manage contact queries and student registrations.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
          <button
            onClick={() => setActiveTab('contacts')}
            style={{
              padding: '1rem 2rem',
              background: 'none',
              border: 'none',
              color: activeTab === 'contacts' ? 'var(--foreground)' : 'var(--muted)',
              borderBottom: activeTab === 'contacts' ? '2px solid var(--foreground)' : 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            Contact Queries ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('students')}
            style={{
              padding: '1rem 2rem',
              background: 'none',
              border: 'none',
              color: activeTab === 'students' ? 'var(--foreground)' : 'var(--muted)',
              borderBottom: activeTab === 'students' ? '2px solid var(--foreground)' : 'none',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            Student Registrations ({students.length})
          </button>
        </div>

        {loading ? (
          <div style={{ color: 'var(--muted)' }}>Loading data...</div>
        ) : (
          <div className="glass" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {activeTab === 'contacts' ? (
                    <>
                      <TableHeader>Date</TableHeader>
                      <TableHeader>Name</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>Subject</TableHeader>
                      <TableHeader>Message</TableHeader>
                    </>
                  ) : (
                    <>
                      <TableHeader>Date</TableHeader>
                      <TableHeader>Name</TableHeader>
                      <TableHeader>Email</TableHeader>
                      <TableHeader>Phone</TableHeader>
                      <TableHeader>City</TableHeader>
                      <TableHeader>Status</TableHeader>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {activeTab === 'contacts' ? (
                  contacts.map((contact) => (
                    <tr key={contact.id}>
                      <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>{contact.full_name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.subject}</TableCell>
                      <TableCell>{contact.message}</TableCell>
                    </tr>
                  ))
                ) : (
                  students.map((student) => (
                    <tr key={student.id}>
                      <TableCell>{new Date(student.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>{student.city}</TableCell>
                      <TableCell>
                        <span style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          background: student.payment_status === 'paid' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                          color: student.payment_status === 'paid' ? '#10b981' : '#f59e0b',
                          border: `1px solid ${student.payment_status === 'paid' ? '#10b981' : '#f59e0b'}`
                        }}>
                          {student.payment_status || 'pending'}
                        </span>
                      </TableCell>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {(activeTab === 'contacts' ? contacts : students).length === 0 && (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--muted)' }}>
                No records found.
              </div>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
