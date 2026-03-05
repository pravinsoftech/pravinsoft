import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="glass" style={{ padding: '2rem', height: 'fit-content', position: 'sticky', top: '6rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li>
                    <Link href="/courses" style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'block' }}>
                        All Courses
                    </Link>
                </li>
                <li>
                    <Link href="/teachers" style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'block' }}>
                        Our Faculty
                    </Link>
                </li>
                <li>
                    <Link href="/pricing" style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'block' }}>
                        Fee Structure
                    </Link>
                </li>
                <li>
                    <Link href="/contact" style={{ color: 'var(--muted)', transition: 'color 0.2s', display: 'block' }}>
                        Contact Admissions
                    </Link>
                </li>
            </ul>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>Need Help?</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '1rem' }}> Speak to our technical counselors.</p>
                <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '0.6rem 1rem', fontSize: '0.9rem' }}>
                    Get in Touch
                </Link>
            </div>
        </aside>
    );
}
