export default function WorkshopsPage() {
    const workshopTypes = [
        {
            icon: "⚡",
            title: "Free Introductory Workshops",
            duration: "2–3 Hours",
            tag: "Free",
            tagColor: "#166534",
            tagBg: "#dcfce7",
            desc: "Get a taste of a new technology with zero commitment. Our free introductory workshops are ideal for students and professionals exploring a domain before enrolling in a full course.",
            features: ["No registration fee", "Live demo & Q&A", "Course roadmap walkthrough", "Certificate of participation"],
        },
        {
            icon: "🛠️",
            title: "Skill-Booster Workshops",
            duration: "1–2 Days",
            tag: "Paid",
            tagColor: "#0891b2",
            tagBg: "#e0f2fe",
            desc: "Focused, intensive workshops on a specific tool, framework, or concept. Walk away with hands-on experience and a mini project you can add to your portfolio.",
            features: ["Deep-dive into one technology", "Hands-on lab exercises", "Mini project & code review", "Completion certificate"],
        },
        {
            icon: "🚀",
            title: "Bootcamp Workshops",
            duration: "3–5 Days",
            tag: "Intensive",
            tagColor: "#581c87",
            tagBg: "#f3e8ff",
            desc: "A fast-track immersion into a complete technology stack or domain. Our bootcamps are structured like mini-courses, with daily sessions, project work, and mentor access throughout.",
            features: ["Full-stack or domain immersion", "Daily live sessions", "Real-time project work", "Placement assistance included"],
        },
        {
            icon: "🏢",
            title: "Corporate & College Workshops",
            duration: "Custom",
            tag: "On-Site / Online",
            tagColor: "#854d0e",
            tagBg: "#fef9c3",
            desc: "Workshops designed and delivered for organisations and academic institutions. Content is tailored to the audience — whether it's freshers at an engineering college or a development team at an IT company.",
            features: ["Customised curriculum", "On-site or online delivery", "Batch size from 20 to 200+", "Post-workshop support"],
        },
    ];

    const upcomingWorkshops = [
        {
            title: "Generative AI & Prompt Engineering",
            date: "Every Saturday",
            time: "10:00 AM – 1:00 PM",
            mode: "Online",
            tag: "Free",
            tagColor: "#166534",
            tagBg: "#dcfce7",
            seats: "Limited seats",
        },
        {
            title: "React JS from Zero to Deploy",
            date: "1-Day Bootcamp",
            time: "9:00 AM – 5:00 PM",
            mode: "Online & Offline",
            tag: "Paid",
            tagColor: "#0891b2",
            tagBg: "#e0f2fe",
            seats: "20 seats left",
        },
        {
            title: "AWS Cloud Practitioner Crash Course",
            date: "2-Day Workshop",
            time: "9:00 AM – 4:00 PM",
            mode: "Online",
            tag: "Paid",
            tagColor: "#0891b2",
            tagBg: "#e0f2fe",
            seats: "12 seats left",
        },
        {
            title: "Python for Data Science — Hands-On",
            date: "Every Sunday",
            time: "11:00 AM – 2:00 PM",
            mode: "Online",
            tag: "Free",
            tagColor: "#166534",
            tagBg: "#dcfce7",
            seats: "Open enrolment",
        },
        {
            title: "Docker & Kubernetes Bootcamp",
            date: "3-Day Intensive",
            time: "9:00 AM – 5:00 PM",
            mode: "Offline — PravinSoft Campus",
            tag: "Intensive",
            tagColor: "#581c87",
            tagBg: "#f3e8ff",
            seats: "8 seats left",
        },
        {
            title: "Machine Learning Fundamentals",
            date: "2-Day Workshop",
            time: "10:00 AM – 4:00 PM",
            mode: "Online",
            tag: "Paid",
            tagColor: "#0891b2",
            tagBg: "#e0f2fe",
            seats: "15 seats left",
        },
    ];

    const benefits = [
        {
            icon: "🧠",
            title: "Learn from Industry Practitioners",
            desc: "Every workshop at PravinSoft is led by professionals who use these technologies in production — not just academics who teach them.",
        },
        {
            icon: "💻",
            title: "Hands-On from the First Minute",
            desc: "We don't spend the first hour on theory. Every workshop begins with a working environment and code running on your machine within the first 15 minutes.",
        },
        {
            icon: "🌐",
            title: "Networking with Peers and Mentors",
            desc: "Workshops bring together like-minded learners, industry professionals, and potential mentors — building connections that extend well beyond the session itself.",
        },
        {
            icon: "📋",
            title: "Curated, Current Curriculum",
            desc: "Workshop content is reviewed and updated every quarter to reflect the latest tools, frameworks, and industry practices — nothing stale or outdated.",
        },
        {
            icon: "🎯",
            title: "Focused, Distraction-Free Learning",
            desc: "Unlike a long course that stretches over months, a workshop delivers a single, well-defined outcome in a compressed, focused window of time.",
        },
        {
            icon: "📜",
            title: "Certificate for Every Workshop",
            desc: "All paid and bootcamp workshops include a PravinSoft certificate of completion — verifiable and shareable on LinkedIn and your resume.",
        },
    ];

    const topics = [
        "Generative AI", "Prompt Engineering", "React JS", "Node.js",
        "Python", "Data Science", "Machine Learning", "AWS", "Azure",
        "Docker", "Kubernetes", "DevOps", "Java Spring Boot", "Angular",
        "Power BI", "Tableau", "Salesforce", "Cybersecurity", "Blockchain", "Flutter",
    ];

    const stats = [
        { value: "200+", label: "Workshops Conducted" },
        { value: "18K+", label: "Participants Trained" },
        { value: "50+", label: "Topics Covered" },
        { value: "4.9★", label: "Participant Rating" },
    ];

    const faqs = [
        {
            q: "Do I need prior experience to attend a workshop?",
            a: "It depends on the workshop. Introductory and free workshops are designed for complete beginners. Skill-booster and bootcamp workshops specify a prerequisite level on the registration page — check before registering.",
        },
        {
            q: "Will I receive a certificate?",
            a: "Yes. All paid, skill-booster, and bootcamp workshops include a PravinSoft completion certificate. Free introductory workshops provide a certificate of participation.",
        },
        {
            q: "Are workshop recordings available?",
            a: "Paid and bootcamp workshop participants receive access to session recordings via the student portal for 30 days after the event.",
        },
        {
            q: "Can my college or company request a custom workshop?",
            a: "Absolutely. PravinSoft regularly delivers customised workshops for engineering colleges and corporate teams. Contact us with your requirements and we will put together a proposal.",
        },
        {
            q: "Are online and offline modes available?",
            a: "Yes. Most workshops are available in both online (live, interactive) and offline (at our campus) modes. The mode is listed on each workshop's registration page.",
        },
    ];

    return (
        <div style={{ fontFamily: "sans-serif", color: "#1e293b" }}>

            {/* Hero */}
            <div style={{
                background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
                padding: "6rem 2rem 4rem",
                textAlign: "center",
                color: "white",
            }}>
                <span style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "100px",
                    padding: "0.35rem 1.1rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                }}>
                    PravinSoft Technologies — Workshops
                </span>
                <h1 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.2 }}>
                    Focused. Hands-On.<br />Done in a Day or Two.
                </h1>
                <p style={{
                    fontSize: "1.1rem",
                    maxWidth: "660px",
                    margin: "0 auto 2rem",
                    opacity: 0.9,
                    lineHeight: 1.75,
                }}>
                    PravinSoft workshops are intensive, expert-led learning events that take you from zero to hands-on in a single session, a day, or a weekend. Whether you want to explore a new technology, sharpen a specific skill, or immerse your team — there is a workshop for you.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{
                        background: "white", color: "#581c87", border: "none",
                        padding: "0.9rem 2.25rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                    }}>Browse Workshops</button>
                    <button style={{
                        background: "transparent", color: "white",
                        border: "2px solid rgba(255,255,255,0.6)",
                        padding: "0.9rem 2.25rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                    }}>Request a Custom Workshop</button>
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
                        <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#38bdf8" }}>{s.value}</div>
                        <div style={{ fontSize: "0.82rem", color: "#94a3b8", marginTop: "0.25rem" }}>{s.label}</div>
                    </div>
                ))}
            </div>

            {/* About */}
            <div style={{ padding: "5rem 2rem", maxWidth: "880px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
                    Where Innovation Meets Hands-On Learning
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
                    Not every learning goal requires a three-month course. Sometimes you need to get up to speed with a new framework this weekend, validate a technology before committing to it, or give your team a focused day of practical training on a tool they'll be using next month.
                </p>
                <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem" }}>
                    PravinSoft workshops are designed exactly for that. Each workshop is a carefully crafted, time-boxed learning experience — run by the same senior professionals who lead our full programmes — with a clear outcome you can walk away with the same day. From free two-hour introductory sessions to five-day bootcamps, every format puts hands-on practice at the centre.
                </p>
            </div>

            {/* Workshop Types */}
            <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                        Four Workshop Formats to Fit Every Goal
                    </h2>
                    <p style={{ color: "#64748b", textAlign: "center", maxWidth: "580px", margin: "0 auto 2.5rem" }}>
                        Whether you have two hours or five days, there is a PravinSoft workshop format built for your situation.
                    </p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.5rem",
                    }}>
                        {workshopTypes.map(w => (
                            <div key={w.title} style={{
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            }}>
                                {/* Card top */}
                                <div style={{
                                    padding: "1.5rem",
                                    borderBottom: "1px solid #f1f5f9",
                                    background: "linear-gradient(135deg,#581c8708,#0891b208)",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                                        <span style={{ fontSize: "1.75rem" }}>{w.icon}</span>
                                        <div style={{ display: "flex", gap: "0.4rem" }}>
                                            <span style={{
                                                background: w.tagBg, color: w.tagColor,
                                                borderRadius: "100px", padding: "0.2rem 0.75rem",
                                                fontSize: "0.75rem", fontWeight: 700,
                                            }}>{w.tag}</span>
                                            <span style={{
                                                background: "#f1f5f9", color: "#475569",
                                                borderRadius: "100px", padding: "0.2rem 0.75rem",
                                                fontSize: "0.75rem", fontWeight: 600,
                                            }}>{w.duration}</span>
                                        </div>
                                    </div>
                                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{w.title}</h3>
                                    <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                                </div>
                                {/* Card features */}
                                <div style={{ padding: "1.25rem 1.5rem", flex: 1 }}>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        {w.features.map(f => (
                                            <li key={f} style={{
                                                display: "flex", gap: "0.6rem", alignItems: "flex-start",
                                                fontSize: "0.87rem", color: "#475569", lineHeight: 1.65,
                                                padding: "0.35rem 0", borderBottom: "1px solid #f1f5f9",
                                            }}>
                                                <span style={{ color: "#0891b2", fontWeight: 700, marginTop: "1px", flexShrink: 0 }}>✓</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Upcoming Workshops */}
            <div style={{ padding: "5rem 2rem", maxWidth: "1050px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                    Upcoming Workshops
                </h2>
                <p style={{ color: "#64748b", textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
                    New workshops are added every month. Register early — most sessions fill up quickly.
                </p>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.25rem",
                }}>
                    {upcomingWorkshops.map(w => (
                        <div key={w.title} style={{
                            background: "white",
                            border: "1px solid #e2e8f0",
                            borderRadius: "12px",
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.85rem",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
                                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#1e293b", margin: 0, lineHeight: 1.4 }}>{w.title}</h3>
                                <span style={{
                                    background: w.tagBg, color: w.tagColor,
                                    borderRadius: "100px", padding: "0.2rem 0.75rem",
                                    fontSize: "0.73rem", fontWeight: 700, flexShrink: 0,
                                }}>{w.tag}</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", color: "#475569" }}>
                                    <span>📅</span> {w.date}
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", color: "#475569" }}>
                                    <span>🕘</span> {w.time}
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", color: "#475569" }}>
                                    <span>🌐</span> {w.mode}
                                </div>
                            </div>
                            <div style={{
                                display: "flex", justifyContent: "space-between",
                                alignItems: "center", paddingTop: "0.5rem",
                                borderTop: "1px solid #f1f5f9",
                            }}>
                                <span style={{ fontSize: "0.78rem", color: "#ef4444", fontWeight: 600 }}>⏳ {w.seats}</span>
                                <button style={{
                                    background: "linear-gradient(135deg,#581c87,#0891b2)",
                                    color: "white", border: "none",
                                    padding: "0.45rem 1.1rem", borderRadius: "6px",
                                    fontWeight: 700, fontSize: "0.82rem", cursor: "pointer",
                                }}>Register</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Attend */}
            <div style={{ background: "#f8fafc", padding: "5rem 2rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                        Why Attend a PravinSoft Workshop?
                    </h2>
                    <p style={{ color: "#64748b", textAlign: "center", maxWidth: "580px", margin: "0 auto 2.5rem" }}>
                        We build every workshop around one principle — you should leave knowing something you can immediately use.
                    </p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                        gap: "1.25rem",
                    }}>
                        {benefits.map(b => (
                            <div key={b.title} style={{
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                padding: "1.6rem",
                                display: "flex",
                                gap: "1rem",
                                alignItems: "flex-start",
                            }}>
                                <div style={{
                                    fontSize: "1.4rem",
                                    background: "#f8fafc",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: "10px",
                                    width: "44px", height: "44px",
                                    display: "flex", alignItems: "center",
                                    justifyContent: "center", flexShrink: 0,
                                }}>{b.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: "0.97rem", fontWeight: 700, marginBottom: "0.35rem" }}>{b.title}</h3>
                                    <p style={{ color: "#64748b", fontSize: "0.87rem", lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Workshop Topics */}
            <div style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Topics We Cover
                </h2>
                <p style={{ color: "#64748b", marginBottom: "2rem" }}>
                    From foundational technologies to cutting-edge specialisations — our workshop catalogue spans the full breadth of modern IT.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", justifyContent: "center" }}>
                    {topics.map(topic => (
                        <span key={topic} style={{
                            background: "#ede9fe",
                            color: "#581c87",
                            borderRadius: "100px",
                            padding: "0.45rem 1.1rem",
                            fontWeight: 600,
                            fontSize: "0.87rem",
                            cursor: "pointer",
                        }}>{topic}</span>
                    ))}
                </div>
            </div>

            {/* Corporate & College CTA band */}
            <div style={{
                background: "#0f172a",
                padding: "4rem 2rem",
                textAlign: "center",
                color: "white",
            }}>
                <div style={{ maxWidth: "720px", margin: "0 auto" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🏢</div>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                        Need a Workshop for Your Team or College?
                    </h2>
                    <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                        PravinSoft designs and delivers custom workshops for engineering colleges, universities, and corporate teams of all sizes — on-site or online. We tailor the content, pace, and hands-on exercises to exactly the audience you have, from first-year students to senior developers.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <button style={{
                            background: "linear-gradient(135deg,#581c87,#0891b2)",
                            color: "white", border: "none",
                            padding: "0.9rem 2.25rem", borderRadius: "8px",
                            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                        }}>Request a Custom Workshop</button>
                        <button style={{
                            background: "transparent", color: "white",
                            border: "2px solid rgba(255,255,255,0.3)",
                            padding: "0.9rem 2.25rem", borderRadius: "8px",
                            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                        }}>Download Brochure</button>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div style={{ padding: "5rem 2rem", maxWidth: "780px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                    Frequently Asked Questions
                </h2>
                <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem" }}>
                    Everything you need to know before registering for a workshop.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "10px",
                            padding: "1.4rem 1.5rem",
                        }}>
                            <div style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: "0.6rem", color: "#1e293b" }}>
                                {faq.q}
                            </div>
                            <div style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.75 }}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonial */}
            <div style={{ padding: "0 2rem 5rem", maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
                <div style={{
                    background: "linear-gradient(135deg,#581c8712,#0891b212)",
                    border: "1px solid #0891b230",
                    borderRadius: "16px",
                    padding: "3rem 2.5rem",
                }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💬</div>
                    <p style={{
                        fontSize: "1.15rem",
                        fontStyle: "italic",
                        color: "#334155",
                        lineHeight: 1.8,
                        marginBottom: "1.25rem",
                    }}>
                        "I attended the free Generative AI workshop at PravinSoft on a Saturday morning just out of curiosity. By 1 PM I had built my first working AI-powered app and enrolled in the full course. The workshop alone changed what I thought was possible to learn in a few hours."
                    </p>
                    <div style={{ fontWeight: 700, color: "#581c87", fontSize: "0.95rem" }}>
                        Arjun P. — Software Engineer, enrolled in AI/ML programme after the free workshop
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div style={{
                background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
                padding: "4.5rem 2rem",
                textAlign: "center",
                color: "white",
            }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Pick a Workshop. Show Up. Leave Better.
                </h2>
                <p style={{
                    fontSize: "1.05rem",
                    opacity: 0.9,
                    maxWidth: "500px",
                    margin: "0 auto 2rem",
                    lineHeight: 1.75,
                }}>
                    New workshops are announced every week. Register now and reserve your spot before it fills up.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{
                        background: "white", color: "#581c87", border: "none",
                        padding: "1rem 2.5rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem",
                        textTransform: "uppercase", cursor: "pointer",
                        letterSpacing: "0.05em",
                    }}>Register for a Workshop</button>
                    <button style={{
                        background: "transparent", color: "white",
                        border: "2px solid rgba(255,255,255,0.6)",
                        padding: "1rem 2.5rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                    }}>Talk to an Advisor</button>
                </div>
            </div>

        </div>
    );
}