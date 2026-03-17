export default function CorporateTrainingPage() {
    return (
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem' }}>
                Corporate Software Training
            </h1>
            <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                Elevate your team with PravinSoft's specialized corporate training programs. We offer tailored courses designed to meet the demands of the ever-evolving corporate landscape.
            </p>
            <div style={{ marginTop: '3rem' }}>
                <button style={{
                    background: 'linear-gradient(135deg, #581c87 0%, #0891b2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                }}>
                    Inquire Now
                </button>
            </div>
        </div>
    );
}
