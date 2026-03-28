export default function InternshipsPage() {
    const tracks = [
        {
            icon: "💻",
            title: "Software Development",
            duration: "3 / 6 Months",
            skills: ["Java & Spring Boot", "React & Node.js", "REST APIs", "Git & Agile"],
        },
        {
            icon: "🗄️",
            title: "Data Science & ML",
            duration: "3 / 6 Months",
            skills: ["Python & Pandas", "Machine Learning", "Data Visualisation", "SQL & NoSQL"],
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            duration: "3 / 6 Months",
            skills: ["AWS / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Linux & Shell"],
        },
        {
            icon: "🎨",
            title: "UI/UX & Frontend",
            duration: "3 / 6 Months",
            skills: ["Figma & Wireframing", "React & Tailwind", "Accessibility", "User Testing"],
        },
    ];

    const timeline = [
        { step: "01", label: "Apply Online", desc: "Submit your application and resume through our portal." },
        { step: "02", label: "Screening Call", desc: "A 20-minute call with our team to understand your goals." },
        { step: "03", label: "Technical Round", desc: "A short assignment or interview relevant to your track." },
        { step: "04", label: "Offer & Onboarding", desc: "Receive your offer letter and get matched with a mentor." },
        { step: "05", label: "Start Learning", desc: "Begin your internship with real projects from day one." },
    ];

    const perks = [
        { icon: "🏆", label: "Industry Certificate" },
        { icon: "👨‍💼", label: "1-on-1 Mentorship" },
        { icon: "📁", label: "Real Project Work" },
        { icon: "📝", label: "Letter of Recommendation" },
        { icon: "💼", label: "Placement Assistance" },
        { icon: "🌐", label: "Online & Offline Modes" },
    ];

    const stats = [
        { value: "1200+", label: "Interns Trained" },
        { value: "93%", label: "Placement Rate" },
        { value: "40+", label: "Hiring Partners" },
        { value: "4.8★", label: "Intern Rating" },
    ];

    return (
        <div style={{ fontFamily: "sans-serif", color: "#1e293b" }}>

            {/* Hero */}
            <div style={{
                background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
                padding: "5rem 2rem",
                textAlign: "center",
                color: "white",
            }}>
                <span style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "100px",
                    padding: "0.35rem 1rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                }}>
                    PravinSoft Technologies — Internship Programme
                </span>
                <h1 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.2 }}>
                    Launch Your Tech Career<br />the Right Way
                </h1>
                <p style={{
                    fontSize: "1.1rem",
                    maxWidth: "650px",
                    margin: "0 auto 2rem",
                    opacity: 0.9,
                    lineHeight: 1.75,
                }}>
                    PravinSoft&apos;s internship programme bridges the gap between classroom learning and real-world industry practice. Work on live projects, get mentored by experts, and walk away job-ready.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{
                        background: "white",
                        color: "#581c87",
                        border: "none",
                        padding: "0.9rem 2.25rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "1rem",
                        cursor: "pointer",
                    }}>Apply Now</button>
                    <button style={{
                        background: "transparent",
                        color: "white",
                        border: "2px solid rgba(255,255,255,0.6)",
                        padding: "0.9rem 2.25rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "1rem",
                        cursor: "pointer",
                    }}>Download Brochure</button>
                </div>
            </div>

            {/* Stats bar */}
            <div style={{
                background: "#0f172a",
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                flexWrap: "wrap",
            }}>
                {stats.map(s => (
                    <div key={s.label} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "2rem", fontWeight: 800, color: "#38bdf8" }}>{s.value}</div>
                        <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "0.25rem" }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Internship Tracks */}
            <div style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                        Choose Your Track
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "580px", margin: "0 auto" }}>
                        Pick the specialisation that aligns with your interests and career goals. All tracks are available in 3-month and 6-month durations.
                    </p>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1.5rem",
                }}>
                    {tracks.map(track => (
                        <div key={track.title} style={{
                            border: "1px solid #e2e8f0",
                            borderRadius: "12px",
                            padding: "1.75rem",
                            background: "#fff",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                        }}>
                            <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{track.icon}</div>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{track.title}</h3>
                            <span style={{
                                display: "inline-block",
                                background: "#ede9fe",
                                color: "#581c87",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                padding: "0.2rem 0.65rem",
                                borderRadius: "100px",
                                marginBottom: "1rem",
                            }}>{track.duration}</span>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {track.skills.map(skill => (
                                    <li key={skill} style={{
                                        fontSize: "0.9rem",
                                        color: "#475569",
                                        padding: "0.3rem 0",
                                        borderBottom: "1px solid #f1f5f9",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}>
                                        <span style={{ color: "#0891b2", fontWeight: 700 }}>✓</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Perks */}
            <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                        What You Get
                    </h2>
                    <p style={{ color: "#64748b", marginBottom: "2.5rem" }}>
                        Every intern at PravinSoft receives the full support needed to thrive.
                    </p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "1rem",
                    }}>
                        {perks.map(perk => (
                            <div key={perk.label} style={{
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "10px",
                                padding: "1.5rem 1rem",
                                textAlign: "center",
                            }}>
                                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{perk.icon}</div>
                                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "#334155" }}>{perk.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How to Apply Timeline */}
            <div style={{ padding: "5rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem" }}>How to Apply</h2>
                    <p style={{ color: "#64748b" }}>A simple five-step process from application to your first day.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {timeline.map((item, i) => (
                        <div key={item.step} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{
                                    width: "44px", height: "44px", borderRadius: "50%",
                                    background: "linear-gradient(135deg, #581c87, #0891b2)",
                                    color: "white", display: "flex", alignItems: "center",
                                    justifyContent: "center", fontWeight: 800, fontSize: "0.85rem",
                                    flexShrink: 0,
                                }}>{item.step}</div>
                                {i < timeline.length - 1 && (
                                    <div style={{ width: "2px", height: "48px", background: "#e2e8f0", margin: "4px 0" }} />
                                )}
                            </div>
                            <div style={{ paddingTop: "0.6rem", paddingBottom: i < timeline.length - 1 ? "0" : "0" }}>
                                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{item.label}</div>
                                <div style={{ color: "#64748b", fontSize: "0.92rem", lineHeight: 1.6 }}>{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <div style={{
                background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
                padding: "4rem 2rem",
                textAlign: "center",
                color: "white",
            }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Ready to Start Your Journey?
                </h2>
                <p style={{
                    fontSize: "1.05rem",
                    opacity: 0.9,
                    maxWidth: "500px",
                    margin: "0 auto 2rem",
                    lineHeight: 1.7,
                }}>
                    Applications are open. Limited seats available per batch — secure your spot today.
                </p>
                <button style={{
                    background: "white",
                    color: "#581c87",
                    border: "none",
                    padding: "1rem 2.5rem",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                }}>
                    Apply for Internship
                </button>
            </div>

        </div>
    );
}