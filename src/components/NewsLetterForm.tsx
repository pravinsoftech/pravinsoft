import Link from 'next/link';

export default function NewsLetterForm() {
    return (
        <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
            <input
                type="email"
                placeholder="Enter your email"
                className="glass"
                style={{
                    padding: '0.8rem 1.2rem',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--foreground)',
                    fontSize: '0.9rem',
                    flex: 1
                }}
            />
            <button className="btn-primary" style={{ padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>Subscribe</button>
        </div>
    );
}
