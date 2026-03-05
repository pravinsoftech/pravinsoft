import React from 'react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'Technical Individual',
        price: '₹24,999',
        features: ['Self-paced Learning', 'Community Support', 'Lifetime Access', 'Standard Certification'],
        cta: 'Enrol Now'
    },
    {
        name: 'Professional Pro',
        price: '₹49,999',
        features: ['Instructor-led Sessions', 'Project Guidance', '1-on-1 Mentorship', 'Professional AI Certification', 'Hinjewadi Workshops'],
        cta: 'Get Started',
        featured: true
    },
    {
        name: 'Enterprise Custom',
        price: 'Contact Us',
        features: ['Custom Training Path', 'Team Onboarding', 'On-site Training', 'Priority Support', 'Corporate Certification'],
        cta: 'Enquire'
    }
];

export default function PricingPage() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Fee Structure</h1>
                <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                    Transparent and competitive pricing for world-class AI education in Pune. Invest in your technical future.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="glass" style={{
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        border: plan.featured ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                        boxShadow: plan.featured ? '0 0 30px var(--glow-primary)' : 'none',
                        background: 'var(--card-bg)'
                    }}>
                        <div>
                            <h3 style={{ color: 'var(--foreground)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '2.5rem', color: 'var(--foreground)', fontWeight: 800 }}>{plan.price}</div>
                        </div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} style={{ color: 'var(--muted)', fontSize: '0.95rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className={plan.featured ? 'btn-primary' : 'glass'} style={{
                            textAlign: 'center',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 600,
                            background: plan.featured ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255,255,255,0.02)'
                        }}>
                            {plan.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
