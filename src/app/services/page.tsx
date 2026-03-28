export default function ServicesPage() {
  const services = [
    {
      icon: "🏢",
      title: "Corporate Training",
      href: "/services/corporate-training",
      tag: "For Teams",
      tagColor: "#581c87",
      tagBg: "#f3e8ff",
      desc: "Customised, ROI-guaranteed training programmes delivered at your office or our campus. We tailor content to your team&apos;s stack, experience level, and project requirements — from onboarding freshers to upskilling senior developers.",
      highlights: ["On-site & online delivery", "Content tailored per project", "Guaranteed ROI", "20 to 200+ participants"],
    },
    {
      icon: "🌐",
      title: "Online Training",
      href: "/services/online-training",
      tag: "Live & Interactive",
      tagColor: "#0891b2",
      tagBg: "#e0f2fe",
      desc: "Expert-led, live instructor sessions delivered directly to your screen — from anywhere in India or across the globe. Not pre-recorded videos. Real instructors, real Q&A, real labs, and session recordings available within 24 hours.",
      highlights: ["Live instructor-led sessions", "Session recordings included", "Morning & evening batches", "Doubt support on weekdays"],
    },
    {
      icon: "📅",
      title: "Weekend Training",
      href: "/services/weekend-training",
      tag: "Sat & Sun",
      tagColor: "#166534",
      tagBg: "#dcfce7",
      desc: "Full-depth courses scheduled entirely on Saturdays and Sundays — so your weekdays stay free. Identical faculty, identical content, identical outcomes as our weekday programmes. Built for working professionals and final-year students.",
      highlights: ["Morning & evening slots", "Same expert faculty", "Weekday doubt support", "Real-time project included"],
    },
    {
      icon: "⚡",
      title: "Workshops",
      href: "/services/workshops",
      tag: "Short & Intensive",
      tagColor: "#854d0e",
      tagBg: "#fef9c3",
      desc: "Focused, time-boxed learning events ranging from two-hour free introductory sessions to five-day bootcamps. Walk away with hands-on experience and a clear outcome on the same day — no long-term commitment required.",
      highlights: ["Free intro workshops", "1–5 day bootcamps", "Corporate & college formats", "Certificate included"],
    },
    {
      icon: "📁",
      title: "Real-Time Projects",
      href: "/services/real-time-projects",
      tag: "Portfolio-Ready",
      tagColor: "#0891b2",
      tagBg: "#e0f2fe",
      desc: "Every PravinSoft course includes real-world project work across domains like banking, healthcare, e-commerce, and cloud. Work in agile sprints, push code to a shared repository, get mentor code reviews, and deploy to a live environment.",
      highlights: ["80+ live projects", "20+ industry domains", "Agile sprint methodology", "Mentor-reviewed code"],
    },
    {
      icon: "🎓",
      title: "Internship Programme",
      href: "/services/internships",
      tag: "Career Launch",
      tagColor: "#581c87",
      tagBg: "#f3e8ff",
      desc: "A structured 3–6 month programme for students and fresh graduates that bridges the gap between academic learning and professional employment. Choose a track, work on live projects, get 1-on-1 mentorship, and exit job-ready.",
      highlights: ["3 & 6 month durations", "Four specialisation tracks", "1-on-1 mentorship", "Placement assistance"],
    },
  ];

  const whyPravinSoft = [
    { icon: "👨‍💻", label: "Industry-Expert Faculty", desc: "Every instructor is an active practitioner — not just a trainer." },
    { icon: "🧪", label: "Hands-On First", desc: "Labs and projects from session one. We never lead with slides." },
    { icon: "📈", label: "Placement Support", desc: "Resume prep, mock interviews, and a network of 40+ hiring partners." },
    { icon: "🌍", label: "Online & Offline", desc: "All programmes available on-campus in Hyderabad and fully online." },
    { icon: "🔄", label: "Updated Curriculum", desc: "Content reviewed each quarter to stay ahead of industry trends." },
    { icon: "🏅", label: "Verified Certificates", desc: "Every course and workshop includes a shareable completion certificate." },
  ];

  const stats = [
    { value: "500+", label: "Courses & Workshops" },
    { value: "15K+", label: "Students Trained" },
    { value: "40+", label: "Hiring Partners" },
    { value: "4.9★", label: "Overall Rating" },
  ];

  const deliveryModes = [
    { icon: "🏫", label: "Classroom", sub: "At our campus, Hyderabad" },
    { icon: "💻", label: "Online", sub: "Live via Zoom / Meet" },
    { icon: "🏢", label: "On-Site Corporate", sub: "At your office location" },
    { icon: "📅", label: "Weekend Batches", sub: "Sat & Sun, flexible slots" },
    { icon: "🔀", label: "Hybrid", sub: "Mix of online & offline" },
  ];

  const testimonials = [
    {
      quote: "The corporate training PravinSoft delivered to our team was the best we&apos;ve had. Content was tailored to our exact stack and the ROI was visible within weeks.",
      name: "Vikram S.",
      role: "Engineering Manager, IT Services Company",
    },
    {
      quote: "I completed the weekend programme while working full-time. The project I built became the centrepiece of every interview I attended. Placed within three weeks of completing the course.",
      name: "Sneha R.",
      role: "Data Analyst — transitioned from non-IT",
    },
    {
      quote: "The internship gave me everything a college degree didn&apos;t — real code, real deadlines, a real mentor, and a certificate that actually meant something to recruiters.",
      name: "Arjun P.",
      role: "Junior Software Engineer, Infosys",
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
          PravinSoft Technologies Training Centre
        </span>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.2 }}>
          Every Way You Want to Learn,<br />We Have a Programme for It.
        </h1>
        <p style={{
          fontSize: "1.1rem",
          maxWidth: "680px",
          margin: "0 auto 2rem",
          opacity: 0.9,
          lineHeight: 1.75,
        }}>
          PravinSoft Technologies LLP offers six distinct training services — from live online sessions and weekend batches to corporate programmes, intensive workshops, real-time project work, and a structured internship programme. One institution, every format, zero compromise on quality.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "white", color: "#581c87", border: "none",
            padding: "0.9rem 2.25rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
          }}>Explore All Services</button>
          <button style={{
            background: "transparent", color: "white",
            border: "2px solid rgba(255,255,255,0.6)",
            padding: "0.9rem 2.25rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
          }}>Talk to an Advisor</button>
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

      {/* Intro prose */}
      <div style={{ padding: "5rem 2rem", maxWidth: "880px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
          One Training Centre. Six Ways to Grow.
        </h2>
        <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          At PravinSoft Technologies, we understand that no two learners have the same schedule, budget, goal, or starting point. A fresh graduate preparing for their first job needs something completely different from a working professional looking to switch domains — and both need something different from a corporate team adopting a new technology stack.
        </p>
        <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem" }}>
          That is why we have built six distinct training services, each engineered for a different situation — but all sharing the same foundation: industry-expert faculty, hands-on project work, current curriculum, and a genuine commitment to outcomes rather than just hours delivered.
        </p>
      </div>

      {/* Delivery Modes strip */}
      <div style={{ background: "#f8fafc", padding: "2.5rem 2rem", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <p style={{
          textAlign: "center",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "#94a3b8",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "1.25rem",
        }}>All programmes available across five delivery modes</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {deliveryModes.map(m => (
            <div key={m.label} style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              padding: "0.75rem 1.25rem",
              textAlign: "center",
              minWidth: "130px",
            }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>{m.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#1e293b" }}>{m.label}</div>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.15rem" }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services grid */}
      <div style={{ padding: "5rem 2rem", maxWidth: "1150px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
          Our Training Services
        </h2>
        <p style={{ color: "#64748b", textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
          Explore each service in depth using the links below, or scroll through for a quick overview.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {services.map(s => (
            <div key={s.title} style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "14px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              {/* Top accent bar */}
              <div style={{
                height: "4px",
                background: "linear-gradient(90deg, #581c87, #0891b2)",
              }} />

              {/* Card content */}
              <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "2rem" }}>{s.icon}</span>
                  <span style={{
                    background: s.tagBg, color: s.tagColor,
                    borderRadius: "100px", padding: "0.22rem 0.85rem",
                    fontSize: "0.75rem", fontWeight: 700,
                  }}>{s.tag}</span>
                </div>

                {/* Title & desc */}
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {s.highlights.map(h => (
                    <li key={h} style={{
                      display: "flex", gap: "0.55rem", alignItems: "center",
                      fontSize: "0.85rem", color: "#475569",
                      padding: "0.3rem 0", borderBottom: "1px solid #f1f5f9",
                    }}>
                      <span style={{ color: "#0891b2", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={s.href} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "auto",
                  paddingTop: "0.5rem",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#581c87",
                  textDecoration: "none",
                }}>
                  Learn more about {s.title} <span style={{ fontSize: "1rem" }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why PravinSoft */}
      <div style={{ background: "#f8fafc", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
            Why Students & Companies Choose PravinSoft
          </h2>
          <p style={{ color: "#64748b", textAlign: "center", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            These are the six commitments that run through every service we offer — regardless of the format you choose.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.25rem",
          }}>
            {whyPravinSoft.map(w => (
              <div key={w.label} style={{
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
                }}>{w.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.97rem", marginBottom: "0.3rem" }}>{w.label}</div>
                  <div style={{ color: "#64748b", fontSize: "0.87rem", lineHeight: 1.65 }}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
          What Our Students & Clients Say
        </h2>
        <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem" }}>
          Outcomes from across our six training services.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "1.25rem",
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, #581c8710, #0891b210)",
              border: "1px solid #0891b225",
              borderRadius: "14px",
              padding: "2rem 1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}>
              <div style={{ fontSize: "1.5rem" }}>💬</div>
              <p style={{
                fontSize: "0.93rem",
                fontStyle: "italic",
                color: "#334155",
                lineHeight: 1.8,
                margin: 0,
                flex: 1,
              }}>&quot;{t.quote}&quot;</p>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#581c87" }}>{t.name}</div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.15rem" }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick-nav service links */}
      <div style={{ background: "#f8fafc", padding: "4rem 2rem", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Jump Straight to a Service
          </h2>
          <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "0.95rem" }}>
            Each service page goes deep — curriculum, batch timings, fees, faculty, and FAQs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {services.map(s => (
              <a key={s.title} href={s.href} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "100px",
                padding: "0.55rem 1.25rem",
                fontWeight: 700,
                fontSize: "0.88rem",
                color: "#1e293b",
                textDecoration: "none",
                cursor: "pointer",
              }}>
                <span>{s.icon}</span> {s.title}
              </a>
            ))}
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
          Not Sure Which Service Is Right for You?
        </h2>
        <p style={{
          fontSize: "1.05rem",
          opacity: 0.9,
          maxWidth: "520px",
          margin: "0 auto 2rem",
          lineHeight: 1.75,
        }}>
          Our advisors will understand your background, goal, and schedule — and recommend the exact programme that fits. No sales pressure, just honest guidance.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "white", color: "#581c87", border: "none",
            padding: "1rem 2.5rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem",
            textTransform: "uppercase", cursor: "pointer",
            letterSpacing: "0.05em",
          }}>Talk to an Advisor</button>
          <button style={{
            background: "transparent", color: "white",
            border: "2px solid rgba(255,255,255,0.6)",
            padding: "1rem 2.5rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
          }}>Browse All Courses</button>
        </div>
      </div>

    </div>
  );
}