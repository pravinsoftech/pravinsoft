import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            marginTop: 'auto'
        }}>
            {/* CTA Section */}
            <div className="section-padding" style={{
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))',
                borderTop: '1px solid var(--glass-border)',
                borderBottom: '1px solid var(--glass-border)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)', fontWeight: 800, marginBottom: '1rem' }} className="gradient-text">Ready to Upgrade Your Skills?</h2>
                    <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: 'clamp(0.9rem, 4vw, 1.1rem)' }}>Join our upcoming batches or explore our comprehensive courses.</p>
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

            <div className="section-padding-large" style={{
                background: 'var(--background)'
            }}>
                <div className="container footer-grid" style={{ marginBottom: '1rem' }}>
                    <div>
                        <p style={{ color: '#71717a', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                            Pravinsoft Technologies LLP is a premier institute for AI and advanced technology training. Located in the heart of Hinjewadi IT Park, Pune.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', transition: 'transform 0.2s' }} aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', transition: 'transform 0.2s' }} aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', transition: 'transform 0.2s' }} aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', transition: 'transform 0.2s' }} aria-label="X (Twitter)">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1rem' }}>Academic</h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/courses" style={{ color: '#71717a', fontSize: '0.9rem' }}>All Courses</Link></li>
                            <li><Link href="/teachers" style={{ color: '#71717a', fontSize: '0.9rem' }}>Our Faculty</Link></li>
                            <li><Link href="/about" style={{ color: '#71717a', fontSize: '0.9rem' }}>About Us</Link></li>
                            <li><Link href="/blog" style={{ color: '#71717a', fontSize: '0.9rem' }}>Technical Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1rem' }}>Governance</h5>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link href="/privacy" style={{ color: '#71717a', fontSize: '0.9rem' }}>Privacy Policy</Link></li>
                            <li><Link href="/terms" style={{ color: '#71717a', fontSize: '0.9rem' }}>Terms &amp; Conditions</Link></li>
                            <li><Link href="/refund" style={{ color: '#71717a', fontSize: '0.9rem' }}>Refund Policy</Link></li>
                            <li><Link href="/disclaimer" style={{ color: '#71717a', fontSize: '0.9rem' }}>Legal Disclaimer</Link></li>
                            <li><Link href="/cookies" style={{ color: '#71717a', fontSize: '0.9rem' }}>Cookies Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--foreground)', marginBottom: '1.5rem', fontSize: '1rem' }}>Connect</h5>
                        <p style={{ color: '#71717a', fontSize: '0.85rem', marginBottom: '1rem' }}>Shop No. 01, Floor No 1, Near Laxmi Chowk, Laxmi Complex, Hinjawadi, Pune - 411 057</p>
                        <Link href="" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', display: 'inline-block' }}>Get in Touch</Link>
                    </div>
                </div>
                <div className="container" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
                    <p style={{ color: '#71717a', fontSize: '0.8rem' }}>
                        &copy; {new Date().getFullYear()} Pravinsoft Technologies LLP. All Rights Reserved. <br />
                        An ISO Certified Technical Training Institute. Hinjewadi, Pune. <br />
                        Website designed and maintain by <a href="http://www.saltymediaproduction.com" target="_blank" rel="noopener">Salty Media Production</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
