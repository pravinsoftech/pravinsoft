import Link from 'next/link';

export default function BlogSidebar() {
    const categories = ['AI Trends', 'Prompt Engineering', 'AGI Development', 'Institute News', 'Career Advice'];

    return (
        <aside className="glass" style={{ padding: '2rem', height: 'fit-content', position: 'sticky', top: '6rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--foreground)' }}>Categories</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link href={`/blog?category=${category.toLowerCase().replace(' ', '-')}`} style={{
                            color: 'var(--muted)',
                            fontSize: '0.95rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            transition: 'background 0.2s'
                        }}
                            className="hover:bg-white/5"
                        >
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--foreground)' }}>Subscribe</h4>
                <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>Get the latest updates directly to your inbox.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="glass"
                        style={{ padding: '0.6rem 1rem', border: '1px solid var(--glass-border)', color: 'var(--foreground)', fontSize: '0.85rem' }}
                    />
                    <button className="btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}>Subscribe</button>
                </div>
            </div>
        </aside>
    );
}
