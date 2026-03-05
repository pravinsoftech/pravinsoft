import Link from 'next/link';

interface CourseCardProps {
    id: string;
    course_name: string;
    faculty_name: string;
    start_date: string;
    time: string;
    material_url?: string;
    registration_url?: string;
}

export default function CourseCard({
    id,
    course_name,
    faculty_name,
    start_date,
    time,
    material_url,
    registration_url
}: CourseCardProps) {
    return (
        <div id={id} className="glass" style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'transform 0.3s ease',
            height: '100%'
        }}>
            <div>
                <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '2rem',
                    display: 'inline-block',
                    marginBottom: '1rem'
                }}>Course</span>
                <h3 className="gradient-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>{course_name}</h3>
                <p style={{ color: 'var(--foreground)', fontSize: '1rem', fontWeight: 600 }}>Faculty: {faculty_name}</p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>📅 Starts: {new Date(start_date).toLocaleDateString()}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>🕒 Time: {time}</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
                {registration_url && (
                    <a href={registration_url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center', width: '100%', padding: '0.75rem' }}>
                        Register Now
                    </a>
                )}
                {material_url && (
                    <a href={material_url} target="_blank" rel="noopener noreferrer" className="glass" style={{ textAlign: 'center', width: '100%', padding: '0.75rem', fontSize: '0.85rem' }}>
                        📄 Download Material
                    </a>
                )}
            </div>
        </div>
    );
}
