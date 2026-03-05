import Link from 'next/link';

interface BlogCardProps {
    id: string;
    title: string;
    excerpt: string;
    date: string;
}

export default function BlogCard({ id, title, excerpt, date }: BlogCardProps) {
    return (
        <div id={id} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{date}</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)' }}>{title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{excerpt}</p>
            <Link href={`/blog/${id}`} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read More <span>&rarr;</span>
            </Link>
        </div>
    );
}
