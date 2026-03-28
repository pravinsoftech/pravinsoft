export default function InterviewQuestionsPage() {
  const categories = [
    {
      icon: "☕",
      title: "Java",
      count: "120+ Questions",
      levels: ["Core Java", "OOP Concepts", "Collections", "Multithreading", "Spring Boot"],
      color: "#854d0e",
      bg: "#fef9c3",
    },
    {
      icon: "🐍",
      title: "Python",
      count: "100+ Questions",
      levels: ["Basics & Syntax", "OOP in Python", "File Handling", "Django / Flask", "Data Structures"],
      color: "#166534",
      bg: "#dcfce7",
    },
    {
      icon: "⚛️",
      title: "React JS",
      count: "80+ Questions",
      levels: ["JSX & Components", "Hooks", "State Management", "React Router", "Performance"],
      color: "#0891b2",
      bg: "#e0f2fe",
    },
    {
      icon: "☁️",
      title: "AWS & Cloud",
      count: "90+ Questions",
      levels: ["EC2 & S3", "IAM & Security", "Lambda", "RDS & DynamoDB", "Architecture"],
      color: "#581c87",
      bg: "#f3e8ff",
    },
    {
      icon: "🗄️",
      title: "SQL & Databases",
      count: "70+ Questions",
      levels: ["DDL / DML", "Joins & Subqueries", "Indexes", "Stored Procedures", "NoSQL Basics"],
      color: "#0891b2",
      bg: "#e0f2fe",
    },
    {
      icon: "🐳",
      title: "DevOps & Docker",
      count: "75+ Questions",
      levels: ["Docker Basics", "Kubernetes", "CI/CD Pipelines", "Jenkins", "Linux Commands"],
      color: "#166534",
      bg: "#dcfce7",
    },
    {
      icon: "📊",
      title: "Data Science & ML",
      count: "85+ Questions",
      levels: ["Statistics", "Pandas & NumPy", "ML Algorithms", "Model Evaluation", "Deep Learning"],
      color: "#854d0e",
      bg: "#fef9c3",
    },
    {
      icon: "🤝",
      title: "HR & Behavioural",
      count: "60+ Questions",
      levels: ["Tell me about yourself", "Strengths & Weaknesses", "Situational Questions", "Salary Negotiation", "Career Goals"],
      color: "#581c87",
      bg: "#f3e8ff",
    },
  ];

  const sampleQuestions = [
    {
      tech: "Java",
      difficulty: "Medium",
      diffColor: "#854d0e",
      diffBg: "#fef9c3",
      q: "What is the difference between an abstract class and an interface in Java? When would you use one over the other?",
      hint: "Think about multiple inheritance, default methods (Java 8+), and whether the class shares a common behaviour or a common contract.",
    },
    {
      tech: "React",
      difficulty: "Easy",
      diffColor: "#166534",
      diffBg: "#dcfce7",
      q: "What is the difference between state and props in React? Can a child component modify its own props?",
      hint: "Props flow down from parent to child and are read-only. State is local to a component and managed with useState or a class component's this.state.",
    },
    {
      tech: "SQL",
      difficulty: "Medium",
      diffColor: "#854d0e",
      diffBg: "#fef9c3",
      q: "What is the difference between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN? Write an example query for each.",
      hint: "Focus on which rows are returned when there is no match in one of the tables — that is the key distinction.",
    },
    {
      tech: "AWS",
      difficulty: "Hard",
      diffColor: "#991b1b",
      diffBg: "#fee2e2",
      q: "A Lambda function is timing out when reading from an RDS instance inside a VPC. Walk through the steps you would take to diagnose and fix the issue.",
      hint: "Check security group rules, Lambda VPC configuration, subnet routing, and whether the function has the right IAM permissions for VPC networking.",
    },
    {
      tech: "Python",
      difficulty: "Easy",
      diffColor: "#166534",
      diffBg: "#dcfce7",
      q: "What are Python decorators? Write a simple decorator that logs the name and execution time of any function it wraps.",
      hint: "A decorator is a function that takes another function and extends its behaviour without modifying it directly. Use functools.wraps to preserve metadata.",
    },
    {
      tech: "HR",
      difficulty: "Behavioural",
      diffColor: "#581c87",
      diffBg: "#f3e8ff",
      q: "Describe a situation where you had to learn a new technology under a tight deadline. How did you approach it and what was the outcome?",
      hint: "Use the STAR method — Situation, Task, Action, Result. Emphasise your learning strategy and what you delivered.",
    },
  ];

  const tips = [
    {
      icon: "📖",
      title: "Understand, Don&apos;t Memorise",
      desc: "Interviewers ask follow-up questions to test depth. If you can explain the concept in your own words with a real example, you are better prepared than someone who has memorised a definition.",
    },
    {
      icon: "💻",
      title: "Write Code on Paper First",
      desc: "Many technical rounds are whiteboard or Google Doc based. Practise writing clean, readable code without an IDE — no autocomplete, no linting, just logic.",
    },
    {
      icon: "⭐",
      title: "Use the STAR Method for HR Rounds",
      desc: "For every behavioural question, structure your answer as Situation → Task → Action → Result. It keeps your answer focused and demonstrates impact, not just activity.",
    },
    {
      icon: "🏗️",
      title: "Anchor Answers in Your Projects",
      desc: "Whenever possible, connect your technical answer to something you built at PravinSoft. Real-world context signals experience, not just knowledge.",
    },
    {
      icon: "🔄",
      title: "Prepare Questions for the Interviewer",
      desc: "An interview is a two-way evaluation. Prepare three thoughtful questions about the team, tech stack, or growth opportunities — it signals genuine interest.",
    },
    {
      icon: "🎯",
      title: "Know the JD Inside Out",
      desc: "Map every skill mentioned in the job description to a specific thing you have done. Interviewers at most companies structure questions around the JD requirements.",
    },
  ];

  const difficultyLevels = [
    { label: "Easy", color: "#166534", bg: "#dcfce7", desc: "Conceptual & definitional — asked in almost every round." },
    { label: "Medium", color: "#854d0e", bg: "#fef9c3", desc: "Applied knowledge — expect code or architecture discussion." },
    { label: "Hard", color: "#991b1b", bg: "#fee2e2", desc: "Design & problem-solving — senior & specialist roles." },
    { label: "Behavioural", color: "#581c87", bg: "#f3e8ff", desc: "HR & managerial — assessed in every company." },
  ];

  const companiesHiring = [
    "TCS", "Infosys", "Wipro", "HCL", "Cognizant",
    "Accenture", "Capgemini", "IBM", "Tech Mahindra", "Mphasis",
    "Amazon", "Microsoft", "Google", "Deloitte", "PwC",
  ];

  const stats = [
    { value: "680+", label: "Interview Questions" },
    { value: "15+", label: "Technologies Covered" },
    { value: "3 Levels", label: "Easy / Medium / Hard" },
    { value: "Updated", label: "Every Quarter" },
  ];

  return (
    <main
      className="container"
      style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
    >

      {/* ── Page header ── */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <span
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#581c8720,#0891b220)",
            border: "1px solid #0891b240",
            borderRadius: "100px",
            padding: "0.3rem 1rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#0891b2",
            marginBottom: "1rem",
          }}
        >
          PravinSoft Technologies — Interview Prep
        </span>
        <h1
          className="gradient-text"
          style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}
        >
          Interview Questions
        </h1>
        <p
          style={{
            color: "var(--muted)",
            maxWidth: "640px",
            margin: "0 auto 1.5rem",
            fontSize: "1.05rem",
            lineHeight: 1.75,
          }}
        >
          Curated technical and HR interview questions aligned with PravinSoft
          course content — organised by technology, difficulty level, and
          company type. Use this section to revise concepts, stress-test your
          understanding, and walk into every interview prepared.
        </p>

        {/* Stats pills */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "linear-gradient(135deg,#581c8712,#0891b212)",
                border: "1px solid #0891b225",
                borderRadius: "100px",
                padding: "0.35rem 1rem",
                fontSize: "0.83rem",
                fontWeight: 600,
                color: "var(--foreground, #1e293b)",
              }}
            >
              <span style={{ color: "#0891b2" }}>{s.value}</span>
              <span style={{ color: "var(--muted)", fontWeight: 400 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Difficulty legend ── */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}
      >
        {difficultyLevels.map((d) => (
          <div
            key={d.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "var(--glass, #f8fafc)",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              padding: "0.65rem 1.1rem",
            }}
          >
            <span
              style={{
                background: d.bg,
                color: d.color,
                borderRadius: "100px",
                padding: "0.18rem 0.7rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {d.label}
            </span>
            <span
              style={{
                color: "var(--muted)",
                fontSize: "0.82rem",
                lineHeight: 1.4,
              }}
            >
              {d.desc}
            </span>
          </div>
        ))}
      </div>

      {/* ── Category cards ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Browse by Technology
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Each category is aligned with a PravinSoft course. Questions are
          grouped by sub-topic so you can target exactly what you need to revise.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg,#581c87,#0891b2)",
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
                  >
                    <span style={{ fontSize: "1.6rem" }}>{cat.icon}</span>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        color: "var(--foreground, #1e293b)",
                      }}
                    >
                      {cat.title}
                    </span>
                  </div>
                  <span
                    style={{
                      background: cat.bg,
                      color: cat.color,
                      borderRadius: "100px",
                      padding: "0.2rem 0.75rem",
                      fontSize: "0.73rem",
                      fontWeight: 700,
                    }}
                  >
                    {cat.count}
                  </span>
                </div>

                {/* Sub-topics */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                  }}
                >
                  {cat.levels.map((lvl) => (
                    <span
                      key={lvl}
                      style={{
                        background: "var(--glass, #f1f5f9)",
                        border: "1px solid #e2e8f0",
                        borderRadius: "6px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--muted)",
                      }}
                    >
                      {lvl}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  style={{
                    marginTop: "1.1rem",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--muted)",
                    }}
                  >
                    Easy · Medium · Hard included
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#0891b2",
                    }}
                  >
                    View all →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Sample questions ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Sample Questions
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          A cross-section of questions from across all difficulty levels and
          technologies. Each question includes a short hint to point you in the
          right direction without giving the answer away.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
          }}
        >
          {sampleQuestions.map((item, i) => (
            <div
              key={i}
              className="glass"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              {/* Tags row */}
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  marginBottom: "0.85rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#581c8718,#0891b218)",
                    border: "1px solid #0891b230",
                    color: "#0891b2",
                    borderRadius: "100px",
                    padding: "0.18rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {item.tech}
                </span>
                <span
                  style={{
                    background: item.diffBg,
                    color: item.diffColor,
                    borderRadius: "100px",
                    padding: "0.18rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {item.difficulty}
                </span>
              </div>

              {/* Question */}
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "0.97rem",
                  color: "var(--foreground, #1e293b)",
                  lineHeight: 1.65,
                  margin: "0 0 0.85rem",
                }}
              >
                Q{i + 1}. {item.q}
              </p>

              {/* Hint */}
              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "flex-start",
                  background:
                    "linear-gradient(135deg,#581c8708,#0891b208)",
                  border: "1px solid #0891b220",
                  borderRadius: "8px",
                  padding: "0.75rem 1rem",
                }}
              >
                <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>💡</span>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "var(--foreground, #1e293b)" }}>
                    Hint:
                  </strong>{" "}
                  {item.hint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Interview tips ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Tips to Crack Your Interview
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Questions are only half the preparation. These six habits separate
          candidates who get offers from those who don&apos;t.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="glass"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1.5rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontSize: "1.3rem",
                  background:
                    "linear-gradient(135deg,#581c8712,#0891b212)",
                  border: "1px solid #0891b225",
                  borderRadius: "10px",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {tip.icon}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.97rem",
                    marginBottom: "0.35rem",
                    color: "var(--foreground, #1e293b)",
                  }}
                >
                  {tip.title}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.87rem",
                    lineHeight: 1.7,
                  }}
                >
                  {tip.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Companies hiring ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Questions Aligned to Top Hiring Companies
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          Our question bank is built around the interview patterns of companies
          that regularly hire PravinSoft graduates — from service-based IT firms
          to product companies and global consultancies.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.65rem",
          }}
        >
          {companiesHiring.map((c) => (
            <span
              key={c}
              style={{
                background: "var(--glass, #f8fafc)",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "0.45rem 1rem",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--foreground, #1e293b)",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Coming soon note ── */}
      <div
        className="glass"
        style={{
          border: "1px solid #0891b230",
          borderLeft: "4px solid #0891b2",
          borderRadius: "12px",
          padding: "1.75rem 2rem",
          marginBottom: "5rem",
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>🚀</span>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: "0.4rem",
              color: "var(--foreground, #1e293b)",
            }}
          >
            More Features Coming Soon
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            This section will soon support filtering by technology, difficulty
            level, and company — along with bookmarking questions, tracking what
            you have revised, timed mock interview mode, and community-submitted
            answers reviewed by PravinSoft faculty.
          </p>
        </div>
      </div>

      {/* ── CTA banner ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
          borderRadius: "16px",
          padding: "3.5rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
          }}
        >
          Prepare Smarter. Place Faster.
        </h2>
        <p
          style={{
            fontSize: "1rem",
            opacity: 0.9,
            maxWidth: "520px",
            margin: "0 auto 2rem",
            lineHeight: 1.75,
          }}
        >
          PravinSoft students don&apos;t just study interview questions — they build
          real projects, get mentor feedback, and practise mock interviews before
          they ever walk into a room. Enrol in a course and get full access to
          our placement preparation programme.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "white",
              color: "#581c87",
              border: "none",
              padding: "0.9rem 2.25rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Browse Courses
          </button>
          <button
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid rgba(255,255,255,0.6)",
              padding: "0.9rem 2.25rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Talk to an Advisor
          </button>
        </div>
      </div>
    </main>
  );
}