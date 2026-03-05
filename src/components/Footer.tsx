import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            marginTop: 'auto'
        }}>
            {/* CTA Section */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))',
                padding: '4rem 0',
                borderTop: '1px solid var(--glass-border)',
                borderBottom: '1px solid var(--glass-border)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }} className="gradient-text">Ready to Upgrade Your Skills?</h2>
                    <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>Join our upcoming batches or explore our comprehensive courses.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn-primary">Join Now</Link>
                        <Link href="/courses" style={{
                            background: 'transparent',
                            color: 'var(--foreground)',
                            border: '1px solid var(--glass-border)',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '0.5rem',
                            fontWeight: 600,
                            display: 'inline-block'
                        }}>Visit Courses</Link>
                    </div>
                </div>
            </div>

            <div style={{
                padding: '4rem 0 2rem',
                background: 'var(--background)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <h4 className="gradient-text" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 700 }}>Pravinsoft AI</h4>
                        <p style={{ color: '#71717a', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            Pravinsoft Technologies LLP is a premier institute for AI and advanced technology training. Located in the heart of Hinjewadi IT Park, Pune.
                        </p>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1rem' }}>Academic</h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/courses" style={{ color: '#71717a', fontSize: '0.9rem' }}>All Courses</Link></li>
                            <li><Link href="/teachers" style={{ color: '#71717a', fontSize: '0.9rem' }}>Our Faculty</Link></li>
                            <li><Link href="/pricing" style={{ color: '#71717a', fontSize: '0.9rem' }}>Fee Structure</Link></li>
                            <li><Link href="/blog" style={{ color: '#71717a', fontSize: '0.9rem' }}>Technical Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1rem' }}>Governance</h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/privacy" style={{ color: '#71717a', fontSize: '0.9rem' }}>Privacy Policy</Link></li>
                            <li><Link href="/terms" style={{ color: '#71717a', fontSize: '0.9rem' }}>Terms & Conditions</Link></li>
                            <li><Link href="/refund" style={{ color: '#71717a', fontSize: '0.9rem' }}>Refund Policy</Link></li>
                            <li><Link href="/disclaimer" style={{ color: '#71717a', fontSize: '0.9rem' }}>Legal Disclaimer</Link></li>
                            <li><Link href="/cookies" style={{ color: '#71717a', fontSize: '0.9rem' }}>Cookies Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1rem' }}>Connect</h5>
                        <p style={{ color: '#71717a', fontSize: '0.85rem', marginBottom: '1rem' }}>S50, Phase 1, Hinjewadi, Pune, Maharashtra 411057</p>
                        <Link href="/contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-block' }}>Get in Touch</Link>
                    </div>
                </div>
                <div className="container" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                    <p style={{ color: '#71717a', fontSize: '0.8rem' }}>
                        &copy; {new Date().getFullYear()} Pravinsoft Technologies LLP. All Rights Reserved. <br />
                        An ISO Certified Technical Training Institute. Hinjewadi, Pune.
                    </p>
                </div>
            </div>
        </footer>
    );
}
