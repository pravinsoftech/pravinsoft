export default function RealTimeProjectsPage() {
  const projects = [
    {
      domain: "E-Commerce",
      icon: "🛒",
      title: "Full-Stack Shopping Platform",
      stack: ["React", "Node.js", "MongoDB", "Stripe API"],
      desc: "Build a production-grade e-commerce application with product listings, cart management, payment gateway integration, and an admin dashboard.",
      level: "Intermediate",
      levelColor: "#0891b2",
      levelBg: "#e0f2fe",
    },
    {
      domain: "Banking & Finance",
      icon: "🏦",
      title: "Online Banking System",
      stack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      desc: "Develop a secure banking portal with account management, fund transfers, transaction history, and role-based access control.",
      level: "Advanced",
      levelColor: "#581c87",
      levelBg: "#f3e8ff",
    },
    {
      domain: "Healthcare",
      icon: "🏥",
      title: "Hospital Management System",
      stack: ["Python", "Django", "PostgreSQL", "Chart.js"],
      desc: "Create a complete hospital management solution covering patient registration, appointment scheduling, billing, and analytics dashboards.",
      level: "Advanced",
      levelColor: "#581c87",
      levelBg: "#f3e8ff",
    },
    {
      domain: "Data Science",
      icon: "📊",
      title: "Sales Forecasting Dashboard",
      stack: ["Python", "Pandas", "Scikit-learn", "Power BI"],
      desc: "Analyse historical sales data, build a machine learning forecasting model, and present insights through an interactive Power BI dashboard.",
      level: "Intermediate",
      levelColor: "#0891b2",
      levelBg: "#e0f2fe",
    },
    {
      domain: "Cloud & DevOps",
      icon: "☁️",
      title: "CI/CD Pipeline on AWS",
      stack: ["AWS", "Docker", "Jenkins", "Kubernetes"],
      desc: "Set up an end-to-end deployment pipeline — from code commit to containerised production deployment — with monitoring and auto-scaling.",
      level: "Advanced",
      levelColor: "#581c87",
      levelBg: "#f3e8ff",
    },
    {
      domain: "HR & Payroll",
      icon: "👥",
      title: "Employee Management Portal",
      stack: ["Angular", ".NET Core", "SQL Server", "Azure"],
      desc: "Build an enterprise-grade HR portal with employee onboarding, leave management, payroll processing, and reporting features.",
      level: "Intermediate",
      levelColor: "#0891b2",
      levelBg: "#e0f2fe",
    },
    {
      domain: "Social Media",
      icon: "📱",
      title: "Social Networking App",
      stack: ["React Native", "Firebase", "Node.js", "Socket.io"],
      desc: "Develop a mobile social platform with real-time messaging, post feeds, notifications, and media uploads using modern mobile technologies.",
      level: "Beginner",
      levelColor: "#166534",
      levelBg: "#dcfce7",
    },
    {
      domain: "Logistics",
      icon: "🚚",
      title: "Delivery Tracking System",
      stack: ["React", "Google Maps API", "Node.js", "MongoDB"],
      desc: "Create a live package-tracking application with GPS integration, driver assignment, status updates, and a customer-facing tracking portal.",
      level: "Beginner",
      levelColor: "#166534",
      levelBg: "#dcfce7",
    },
  ];

  const benefits = [
    {
      icon: "🧠",
      title: "Bridge Theory and Practice",
      desc: "Concepts taught in class are immediately applied in a real codebase — so skills stick and don&apos;t fade after the course ends.",
    },
    {
      icon: "💼",
      title: "Job-Ready Portfolio",
      desc: "Walk out of the programme with 2–3 completed projects to show recruiters — the single biggest differentiator in campus and off-campus placements.",
    },
    {
      icon: "🏗️",
      title: "Industry Architecture Exposure",
      desc: "Projects follow real enterprise architecture patterns — MVC, microservices, REST, CI/CD — not simplified toy examples.",
    },
    {
      icon: "🤝",
      title: "Team-Based Development",
      desc: "Work in small groups with version control, code reviews, and sprint-based delivery — just like a real software team.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentor Guidance",
      desc: "A dedicated project mentor reviews your code, unblocks issues, and gives you the kind of feedback that only comes from industry experience.",
    },
    {
      icon: "📜",
      title: "Project Completion Certificate",
      desc: "Receive a verified certificate for each project completed, detailing the technologies used — shareable directly on LinkedIn and your resume.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Project Allocation",
      desc: "Based on your course and experience level, you are assigned a project that stretches your skills without overwhelming you.",
    },
    {
      step: "02",
      title: "Requirements & Planning",
      desc: "Your mentor walks you through the problem statement, functional requirements, and technical architecture before you write a single line of code.",
    },
    {
      step: "03",
      title: "Agile Development Sprints",
      desc: "The project is broken into weekly sprints. You build incrementally, push code to a shared repository, and demo progress at each milestone.",
    },
    {
      step: "04",
      title: "Code Review & Feedback",
      desc: "Regular mentor code reviews surface issues early, teach best practices, and ensure the final codebase is something you are proud to show.",
    },
    {
      step: "05",
      title: "Testing & Deployment",
      desc: "You write unit tests, fix bugs, and deploy the application to a cloud environment — completing the full software development lifecycle.",
    },
    {
      step: "06",
      title: "Presentation & Certificate",
      desc: "Demo your project to a panel, receive your completion certificate, and add a polished case study to your portfolio.",
    },
  ];

  const domains = ["All", "E-Commerce", "Banking & Finance", "Healthcare", "Data Science", "Cloud & DevOps", "HR & Payroll", "Social Media", "Logistics"];

  const stats = [
    { value: "80+", label: "Live Projects" },
    { value: "20+", label: "Industry Domains" },
    { value: "100%", label: "Hands-On Work" },
    { value: "Resume-Ready", label: "Portfolio Output" },
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
          PravinSoft Technologies — Real-Time Projects
        </span>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.2 }}>
          Build Real Projects.<br />Land Real Jobs.
        </h1>
        <p style={{
          fontSize: "1.1rem",
          maxWidth: "660px",
          margin: "0 auto 2rem",
          opacity: 0.9,
          lineHeight: 1.75,
        }}>
          At PravinSoft, every course includes hands-on work on industry-grade projects across domains like banking, healthcare, e-commerce, and cloud infrastructure. You don&apos;t just learn the theory — you ship working software.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "white", color: "#581c87", border: "none",
            padding: "0.9rem 2.25rem", borderRadius: "8px",
            fontWeight: 700, fontSize: "1rem", cursor: "pointer",
          }}>Explore Projects</button>
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

      {/* Why Real-Time Projects */}
      <div style={{ padding: "5rem 2rem", maxWidth: "880px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
          Why Real-Time Projects Are Non-Negotiable
        </h2>
        <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          The gap between knowing a technology and being able to use it professionally is wide — and classroom instruction alone cannot close it. Employers don&apos;t hire people who have watched tutorials; they hire people who have shipped code, debugged production issues, worked with databases, and delivered features under a deadline.
        </p>
        <p style={{ color: "#475569", lineHeight: 1.85, fontSize: "1.05rem" }}>
          PravinSoft&apos;s real-time project programme is built around exactly that. Every project is sourced from actual enterprise use cases across major industry verticals. You work through the full development lifecycle — from requirements gathering and system design to coding, testing, and cloud deployment — under the guidance of an industry mentor.
        </p>
      </div>

      {/* Benefits Grid */}
      <div style={{ background: "#f8fafc", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
            What You Gain from Every Project
          </h2>
          <p style={{ color: "#64748b", textAlign: "center", maxWidth: "580px", margin: "0 auto 2.5rem" }}>
            Each project is a structured learning experience, not just a coding exercise.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {benefits.map(b => (
              <div key={b.title} style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1.75rem",
              }}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{b.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{b.title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.75, fontSize: "0.93rem", margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards */}
      <div style={{ padding: "5rem 2rem", maxWidth: "1150px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
          Sample Projects by Domain
        </h2>
        <p style={{ color: "#64748b", textAlign: "center", maxWidth: "580px", margin: "0 auto 1.5rem" }}>
          A glimpse of the real-world projects students work on at PravinSoft. Projects are updated every quarter to stay aligned with industry demand.
        </p>

        {/* Domain filter pills — decorative */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "0.6rem",
          justifyContent: "center", marginBottom: "2.5rem",
        }}>
          {domains.map((d, i) => (
            <span key={d} style={{
              borderRadius: "100px",
              padding: "0.4rem 1rem",
              fontSize: "0.83rem",
              fontWeight: 600,
              cursor: "pointer",
              background: i === 0 ? "linear-gradient(135deg,#581c87,#0891b2)" : "#f1f5f9",
              color: i === 0 ? "white" : "#475569",
              border: i === 0 ? "none" : "1px solid #e2e8f0",
            }}>{d}</span>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map(p => (
            <div key={p.title} style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Card header */}
              <div style={{
                background: "linear-gradient(135deg, #581c8710, #0891b210)",
                borderBottom: "1px solid #e2e8f0",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}>
                <span style={{ fontSize: "1.75rem" }}>{p.icon}</span>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.domain}</div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", color: "#1e293b" }}>{p.title}</div>
                </div>
              </div>
              {/* Card body */}
              <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
                {/* Tech stack pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.stack.map(tech => (
                    <span key={tech} style={{
                      background: "#f1f5f9",
                      color: "#334155",
                      borderRadius: "4px",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      border: "1px solid #e2e8f0",
                    }}>{tech}</span>
                  ))}
                </div>
                {/* Level badge */}
                <div>
                  <span style={{
                    background: p.levelBg,
                    color: p.levelColor,
                    borderRadius: "100px",
                    padding: "0.25rem 0.85rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}>{p.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Process */}
      <div style={{ background: "#f8fafc", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, textAlign: "center", marginBottom: "0.75rem" }}>
            How the Project Programme Works
          </h2>
          <p style={{ color: "#64748b", textAlign: "center", marginBottom: "3rem" }}>
            A structured, mentor-guided journey from problem statement to deployed product.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
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
                <div style={{ paddingTop: "0.7rem", paddingBottom: i < process.length - 1 ? "0" : "0" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.25rem" }}>{item.title}</div>
                  <div style={{ color: "#64748b", fontSize: "0.93rem", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial-style callout */}
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
            &quot;The real-time project I built at PravinSoft was the first thing every interviewer asked about. I walked three rounds of a product company interview almost entirely on the back of that single project.&quot;
          </p>
          <div style={{ fontWeight: 700, color: "#581c87", fontSize: "0.95rem" }}>Rohan M. — Java Full Stack Graduate, now at Infosys</div>
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
          Stop Learning. Start Building.
        </h2>
        <p style={{
          fontSize: "1.05rem",
          opacity: 0.9,
          maxWidth: "520px",
          margin: "0 auto 2rem",
          lineHeight: 1.75,
        }}>
          Enrol in any PravinSoft course and get immediate access to real-time project work, a dedicated mentor, and a portfolio you can be proud of.
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
          }}>Browse All Courses</button>
        </div>
      </div>

    </div>
  );
}