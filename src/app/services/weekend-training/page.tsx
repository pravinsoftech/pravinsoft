export default function WeekendTrainingPage() {
    const highlights = [
        {
            icon: "📅",
            title: "Saturday & Sunday Batches",
            desc: "All weekend sessions run on Saturdays and Sundays, keeping your weekdays completely free for your job, college, or other commitments.",
        },
        {
            icon: "🕘",
            title: "Morning & Evening Slots",
            desc: "Choose from morning (9 AM – 1 PM) or evening (2 PM – 6 PM) slots so you can build your training schedule around your weekend routine.",
        },
        {
            icon: "🎥",
            title: "Session Recordings",
            desc: "Every live weekend session is recorded and uploaded to the student portal within 24 hours — so missing a class never means missing the content.",
        },
        {
            icon: "🧪",
            title: "Hands-On Labs Every Session",
            desc: "Each class includes dedicated lab time. You don&apos;t just watch the instructor — you practise the concept in a real environment before the session ends.",
        },
        {
            icon: "👨‍🏫",
            title: "Same Expert Faculty",
            desc: "Weekend batches are taught by the same senior industry professionals who lead our weekday and corporate programmes — no compromise on quality.",
        },
        {
            icon: "💬",
            title: "Weekday Doubt Support",
            desc: "Questions don&apos;t wait for the weekend. Our teaching assistants are available on weekdays via chat and scheduled calls to keep you unblocked between sessions.",
        },
        {
            icon: "📁",
            title: "Real-Time Project Included",
            desc: "Every weekend course includes a real-world capstone project developed over the duration of the programme — giving your resume something concrete to show.",
        },
        {
            icon: "🏅",
            title: "Industry Certificate",
            desc: "Earn a PravinSoft completion certificate upon finishing the course and passing the assessment. Add it directly to LinkedIn and share it with recruiters.",
        },
    ];

    const whoIsItFor = [
        {
            icon: "💼",
            label: "Working Professionals",
            desc: "Upskill or switch domains without taking leave, affecting KPIs, or rearranging your work schedule.",
        },
        {
            icon: "🎓",
            label: "Final-Year Students",
            desc: "Complete a job-ready course and build a portfolio project in parallel with your final-year academics.",
        },
        {
            icon: "🔄",
            label: "Career Switchers",
            desc: "Transition into tech from a non-IT background by learning at a pace that fits around your current job.",
        },
        {
            icon: "👩‍👧",
            label: "Returning Professionals",
            desc: "Get back into the workforce after a career break by refreshing and updating your technical skills on weekends.",
        },
    ];

    const popularCourses = [
        { name: "Java Full Stack", duration: "16 Weeks" },
        { name: "Python & Data Science", duration: "12 Weeks" },
        { name: "React JS", duration: "10 Weeks" },
        { name: "DevOps & AWS", duration: "14 Weeks" },
        { name: "Machine Learning", duration: "12 Weeks" },
        { name: "Angular", duration: "10 Weeks" },
        { name: "Salesforce", duration: "12 Weeks" },
        { name: ".NET Core", duration: "10 Weeks" },
        { name: "Power BI", duration: "8 Weeks" },
        { name: "Node.js", duration: "10 Weeks" },
    ];

    const schedule = [
        { day: "Saturday", slot: "Morning", time: "9:00 AM – 1:00 PM", type: "Live Session + Lab" },
        { day: "Saturday", slot: "Evening", time: "2:00 PM – 6:00 PM", type: "Live Session + Lab" },
        { day: "Sunday", slot: "Morning", time: "9:00 AM – 1:00 PM", type: "Live Session + Lab" },
        { day: "Sunday", slot: "Evening", time: "2:00 PM – 6:00 PM", type: "Live Session + Lab" },
        { day: "Mon – Fri", slot: "Anytime", time: "Flexible", type: "Doubt Support & Self-Study" },
    ];

    const process = [
        { step: "01", title: "Choose Your Course", desc: "Browse our course catalogue and pick the programme that matches your career goal and current skill level." },
        { step: "02", title: "Select a Batch", desc: "Pick a morning or evening slot that works for your weekend. New batches start every month." },
        { step: "03", title: "Enrol & Get Access", desc: "Complete enrolment and instantly receive your student portal credentials, course materials, and batch meeting link." },
        { step: "04", title: "Attend Live Sessions", desc: "Join live instructor-led classes every Saturday and Sunday. Ask questions, work through labs, and stay on track." },
        { step: "05", title: "Build Your Project", desc: "Work on your real-time capstone project across the duration of the course with regular mentor check-ins." },
        { step: "06", title: "Certify & Place", desc: "Complete your assessment, earn your certificate, and tap into PravinSoft&apos;s placement assistance network." },
    ];

    const stats = [
        { value: "60+", label: "Weekend Courses" },
        { value: "4 Slots", label: "Per Weekend" },
        { value: "8–16 Wks", label: "Course Duration" },
        { value: "95%", label: "Completion Rate" },
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
                    PravinSoft Technologies — Weekend Training
                </span>
                <h1 style={{
                    fontSize: "2.8rem",
                    fontWeight: 800,
                    marginBottom: "1.25rem",
                    lineHeight: 1.2,
                }}>
                    Upskill on Weekends.<br />Stay Ahead All Week.
                </h1>
                <p style={{
                    fontSize: "1.1rem",
                    maxWidth: "660px",
                    margin: "0 auto 2rem",
                    opacity: 0.9,
                    lineHeight: 1.75,
                }}>
                    PravinSoft&apos;s weekend training programme is built for people who cannot stop their lives to learn — but refuse to stop learning. Expert-led live sessions every Saturday and Sunday, with full weekday doubt support, session recordings, and real-world project work.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{
                        background: "white", color: "#581c87", border: "none",
                        padding: "0.9rem 2.25rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                    }}>Browse Weekend Courses</button>
                    <button style={{
                        background: "transparent", color: "white",
                        border: "2px solid rgba(255,255,255,0.6)",
                        padding: "0.9rem 2.25rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                    }}>View Upcoming Batches</button>
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

            {/* About section */}
            <div style={{ padding: "5rem 2rem", maxWidth: "880px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
                    Full-Depth Training, Zero Weekday Disruption
                </h2>
                <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
                    The biggest barrier to learning for most working professionals and final-year students isn&apos;t motivation — it&apos;s time. Weekday evening courses eat into rest time. Full-time programmes mean quitting your job or pausing your studies. Neither is realistic.
                </p>
                <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem" }}>
                    PravinSoft&apos;s weekend programme is designed to remove that barrier entirely. You get the same depth of instruction, the same industry-experienced faculty, and the same real-world project work as our full-time batches — scheduled entirely on Saturdays and Sundays so your weekdays remain yours.
                </p>
            </div>

            {/* Who Is It For */}
            <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                        Who Is Weekend Training For?
                    </h2>
                    <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem" }}>
                        Our weekend batches are designed for anyone who needs structured learning without disrupting their existing commitments.
                    </p>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1.25rem",
                    }}>
                        {whoIsItFor.map(w => (
                            <div key={w.label} style={{
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "12px",
                                padding: "1.75rem 1.5rem",
                                textAlign: "center",
                            }}>
                                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{w.icon}</div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{w.label}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Programme Highlights */}
            <div style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                    Everything Included in Every Weekend Batch
                </h2>
                <p style={{ color: "#64748b", textAlign: "center", maxWidth: "580px", margin: "0 auto 2.5rem" }}>
                    Weekend doesn&apos;t mean watered-down. Every feature of our full-time programmes comes standard.
                </p>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.25rem",
                }}>
                    {highlights.map(h => (
                        <div key={h.title} style={{
                            background: "#f8fafc",
                            border: "1px solid #e2e8f0",
                            borderRadius: "12px",
                            padding: "1.6rem",
                            display: "flex",
                            gap: "1rem",
                            alignItems: "flex-start",
                        }}>
                            <div style={{
                                fontSize: "1.4rem",
                                background: "white",
                                border: "1px solid #e2e8f0",
                                borderRadius: "10px",
                                width: "44px",
                                height: "44px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}>{h.icon}</div>
                            <div>
                                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, marginBottom: "0.35rem" }}>{h.title}</h3>
                                <p style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{h.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Schedule Table */}
            <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
                <div style={{ maxWidth: "780px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                        Session Schedule at a Glance
                    </h2>
                    <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem" }}>
                        Pick the slot that fits your weekend — morning or evening, Saturday or Sunday.
                    </p>
                    <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                        {/* Table header */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1.5fr",
                            background: "linear-gradient(135deg, #581c87, #0891b2)",
                            color: "white",
                            padding: "0.85rem 1.25rem",
                            fontSize: "0.82rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                        }}>
                            <div>Day</div>
                            <div>Slot</div>
                            <div>Time</div>
                            <div>Session Type</div>
                        </div>
                        {schedule.map((row, i) => (
                            <div key={i} style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1.5fr",
                                padding: "0.9rem 1.25rem",
                                background: i % 2 === 0 ? "white" : "#f8fafc",
                                borderTop: "1px solid #e2e8f0",
                                fontSize: "0.9rem",
                                alignItems: "center",
                            }}>
                                <div style={{ fontWeight: 700, color: "#1e293b" }}>{row.day}</div>
                                <div>
                                    <span style={{
                                        background: row.slot === "Morning" ? "#fef9c3" : row.slot === "Evening" ? "#e0f2fe" : "#f1f5f9",
                                        color: row.slot === "Morning" ? "#854d0e" : row.slot === "Evening" ? "#075985" : "#475569",
                                        borderRadius: "100px",
                                        padding: "0.2rem 0.75rem",
                                        fontSize: "0.78rem",
                                        fontWeight: 600,
                                    }}>{row.slot}</span>
                                </div>
                                <div style={{ color: "#475569" }}>{row.time}</div>
                                <div style={{ color: "#475569" }}>{row.type}</div>
                            </div>
                        ))}
                    </div>
                    <p style={{ color: "#94a3b8", fontSize: "0.82rem", textAlign: "center", marginTop: "1rem" }}>
                        * Exact batch timings and meeting links are published on the New Batches page each month.
                    </p>
                </div>
            </div>

            {/* Popular Weekend Courses */}
            <div style={{ padding: "5rem 2rem", maxWidth: "960px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                    Popular Weekend Courses
                </h2>
                <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem" }}>
                    Our most-enrolled weekend programmes — from full-stack development to cloud and data science.
                </p>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "1rem",
                }}>
                    {popularCourses.map(course => (
                        <div key={course.name} style={{
                            background: "white",
                            border: "1px solid #e2e8f0",
                            borderRadius: "10px",
                            padding: "1.25rem 1rem",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "box-shadow 0.2s",
                        }}>
                            <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.35rem", color: "#1e293b" }}>
                                {course.name}
                            </div>
                            <div style={{
                                display: "inline-block",
                                background: "#ede9fe",
                                color: "#581c87",
                                borderRadius: "100px",
                                padding: "0.2rem 0.75rem",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                            }}>{course.duration}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How It Works */}
            <div style={{ background: "#f8fafc", padding: "5rem 2rem" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
                        How to Get Started
                    </h2>
                    <p style={{ color: "#64748b", textAlign: "center", marginBottom: "3rem" }}>
                        From choosing a course to earning your certificate — a straightforward six-step journey.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {process.map((item, i) => (
                            <div key={item.step} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{
                                        width: "48px", height: "48px", borderRadius: "50%",
                                        background: "linear-gradient(135deg, #581c87, #0891b2)",
                                        color: "white", display: "flex", alignItems: "center",
                                        justifyContent: "center", fontWeight: 800, fontSize: "0.85rem",
                                        flexShrink: 0,
                                    }}>{item.step}</div>
                                    {i < process.length - 1 && (
                                        <div style={{ width: "2px", height: "52px", background: "#e2e8f0", margin: "4px 0" }} />
                                    )}
                                </div>
                                <div style={{ paddingTop: "0.7rem" }}>
                                    <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.25rem" }}>{item.title}</div>
                                    <div style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.7 }}>{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div style={{ padding: "5rem 2rem", maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
                <div style={{
                    background: "linear-gradient(135deg, #581c8712, #0891b212)",
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
                        &quot;I was working full-time and couldn&apos;t commit to a weekday batch. The weekend programme at PravinSoft let me complete my Python and Data Science course over three months without taking a single day off work. The doubt support during the week kept me from ever falling behind.&quot;
                    </p>
                    <div style={{ fontWeight: 700, color: "#581c87", fontSize: "0.95rem" }}>
                        Sneha R. — Data Analyst, transitioned from a non-IT background
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{
                background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
                padding: "4.5rem 2rem",
                textAlign: "center",
                color: "white",
            }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Your Weekends Can Change Your Career
                </h2>
                <p style={{
                    fontSize: "1.05rem",
                    opacity: 0.9,
                    maxWidth: "520px",
                    margin: "0 auto 2rem",
                    lineHeight: 1.75,
                }}>
                    New weekend batches open every month with limited seats. Enrol today and start learning this Saturday.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <button style={{
                        background: "white", color: "#581c87", border: "none",
                        padding: "1rem 2.5rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem",
                        textTransform: "uppercase", cursor: "pointer",
                        letterSpacing: "0.05em",
                    }}>Enrol Now</button>
                    <button style={{
                        background: "transparent", color: "white",
                        border: "2px solid rgba(255,255,255,0.6)",
                        padding: "1rem 2.5rem", borderRadius: "8px",
                        fontWeight: 700, fontSize: "1rem", cursor: "pointer",
                    }}>View Upcoming Batches</button>
                </div>
            </div>

        </div>
    );
}