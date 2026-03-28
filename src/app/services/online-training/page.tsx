export default function OnlineTrainingPage() {
  const features = [
    {
      icon: "🎥",
      title: "Live Instructor-Led Sessions",
      desc: "Every class is delivered live by an industry expert — not a pre-recorded video. Ask questions, get feedback, and learn in real time from practitioners who work with the tech every day.",
    },
    {
      icon: "🔁",
      title: "Session Recordings Included",
      desc: "Missed a class or need to revisit a concept? All live sessions are recorded and made available to enrolled students within 24 hours, so you never fall behind.",
    },
    {
      icon: "🧪",
      title: "Hands-On Labs & Projects",
      desc: "Every course includes guided lab exercises and a real-world capstone project. You practise in industry-realistic environments, not toy examples — so your skills transfer directly to the job.",
    },
    {
      icon: "💬",
      title: "Doubt-Clearing Support",
      desc: "Stuck between sessions? Our faculty and teaching assistants are available via chat and scheduled doubt-clearing calls to make sure no question stays unanswered.",
    },
    {
      icon: "📅",
      title: "Flexible Batch Timings",
      desc: "Morning, evening, and weekend batches are available to suit working professionals and fresh graduates alike. You choose the schedule that fits your life.",
    },
    {
      icon: "🏅",
      title: "Industry-Recognised Certificate",
      desc: "Earn a PravinSoft completion certificate upon finishing the course and passing the assessment. Share it directly on LinkedIn to signal your new skills to employers.",
    },
  ];

  const streams = [
    {
      label: "For Freshers",
      color: "#0891b2",
      bg: "#e0f2fe",
      icon: "🎓",
      points: [
        "Start from the fundamentals with no prior experience needed",
        "Progressive curriculum from basics to advanced topics",
        "Guidance on building a portfolio and cracking interviews",
        "Placement assistance and mock interview sessions",
      ],
    },
    {
      label: "For Working Professionals",
      color: "#581c87",
      bg: "#f3e8ff",
      icon: "💼",
      points: [
        "Fast-track modules to update existing technical knowledge",
        "Focus on the latest industry developments and tooling",
        "Evening and weekend batches to fit around your job",
        "Upskilling paths aligned to promotion and career switch goals",
      ],
    },
  ];

  const platforms = [
    { name: "Zoom / Google Meet", icon: "📹" },
    { name: "WhatsApp Group Support", icon: "📲" },
    { name: "Student Portal Access", icon: "🖥️" },
    { name: "LMS with Resources", icon: "📚" },
  ];

  const stats = [
    { value: "500+", label: "Courses Available" },
    { value: "15K+", label: "Students Trained Online" },
    { value: "4.9★", label: "Average Rating" },
    { value: "Global", label: "Reach — India, USA, UK & More" },
  ];

  const popularCourses = [
    "Java Full Stack", "Python & Data Science", "React JS",
    "DevOps & AWS", "Machine Learning", "Angular", "Node.js",
    "Power BI", "Salesforce", ".NET Core",
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
          PravinSoft Technologies — Online Training
        </span>
        <h1 style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          marginBottom: "1.25rem",
          lineHeight: 1.2,
        }}>
          World-Class Training,<br />Delivered to Your Screen
        </h1>
        <p style={{
          fontSize: "1.1rem",
          maxWidth: "660px",
          margin: "0 auto 2rem",
          opacity: 0.9,
          lineHeight: 1.75,
        }}>
          PravinSoft&apos;s online training programme brings expert-led, live instruction directly to you — wherever you are in India or across the globe. Study at your pace with real projects, recorded sessions, and dedicated support.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "white", color: "#581c87", border: "none",
            padding: "0.9rem 2.25rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
          }}>Browse Courses</button>
          <button style={{
            background: "transparent", color: "white",
            border: "2px solid rgba(255,255,255,0.6)",
            padding: "0.9rem 2.25rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
          }}>View New Batches</button>
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

      {/* About Online Training */}
      <div style={{ padding: "5rem 2rem", maxWidth: "880px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
          Learn from Anywhere, Without Compromising Quality
        </h2>
        <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          PravinSoft&apos;s online training is a live, instructor-led programme delivered over the internet — designed for students and professionals who cannot attend in-person sessions at our training centres but refuse to settle for a lesser learning experience.
        </p>
        <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem" }}>
          Our online sessions are not recorded lectures played on loop. Every class is a live interaction with a subject-matter expert, with real-time Q&amp;A, collaborative exercises, and hands-on lab work. You get the full depth of classroom training — from the comfort of your home or office.
        </p>
      </div>

      {/* Two Streams */}
      <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
            Two Learning Streams for Every Stage
          </h2>
          <p style={{ color: "#64748b", textAlign: "center", marginBottom: "2.5rem", fontSize: "1rem" }}>
            All courses at PravinSoft are structured into two parallel tracks so that the content meets you exactly where you are.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {streams.map(stream => (
              <div key={stream.label} style={{
                background: "white",
                borderRadius: "12px",
                border: `1px solid ${stream.color}33`,
                padding: "2rem",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: stream.bg,
                  color: stream.color,
                  borderRadius: "8px",
                  padding: "0.45rem 1rem",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "1.25rem",
                }}>
                  <span>{stream.icon}</span> {stream.label}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {stream.points.map(pt => (
                    <li key={pt} style={{
                      display: "flex",
                      gap: "0.6rem",
                      alignItems: "flex-start",
                      fontSize: "0.93rem",
                      color: "#475569",
                      lineHeight: 1.65,
                      padding: "0.45rem 0",
                      borderBottom: "1px solid #f1f5f9",
                    }}>
                      <span style={{ color: stream.color, fontWeight: 700, marginTop: "1px" }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
          What Makes PravinSoft Online Training Different
        </h2>
        <p style={{ color: "#64748b", textAlign: "center", maxWidth: "580px", margin: "0 auto 2.5rem", fontSize: "1rem" }}>
          We go beyond slide decks. Every element of our online programme is designed for real skill acquisition.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              padding: "1.75rem",
            }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: "0.93rem", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Platform & Tools */}
      <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            How Sessions Are Delivered
          </h2>
          <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "1rem" }}>
            All you need is an internet connection and a device. We handle the rest.
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2rem",
          }}>
            {platforms.map(p => (
              <div key={p.name} style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "0.75rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "#334155",
              }}>
                <span style={{ fontSize: "1.1rem" }}>{p.icon}</span> {p.name}
              </div>
            ))}
          </div>
          <p style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.75 }}>
            Upon enrolment you receive your batch schedule, meeting link, student portal credentials, and access to course materials — all in one welcome email. No complicated setup required.
          </p>
        </div>
      </div>

      {/* Popular Courses */}
      <div style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem" }}>
          Popular Online Courses
        </h2>
        <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "1rem" }}>
          From full-stack development to data science and cloud — our most-enrolled programmes online.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          {popularCourses.map(course => (
            <span key={course} style={{
              background: "#ede9fe",
              color: "#581c87",
              borderRadius: "100px",
              padding: "0.45rem 1.1rem",
              fontWeight: 600,
              fontSize: "0.88rem",
              cursor: "pointer",
            }}>{course}</span>
          ))}
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
          Start Learning Today
        </h2>
        <p style={{
          fontSize: "1.05rem",
          opacity: 0.9,
          maxWidth: "520px",
          margin: "0 auto 2rem",
          lineHeight: 1.75,
        }}>
          New batches are starting soon. Secure your seat, get your meeting link, and begin your journey with PravinSoft — from wherever you are.
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
          }}>Talk to an Advisor</button>
        </div>
      </div>

    </div>
  );
}