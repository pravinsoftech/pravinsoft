'use client';

export default function PlacementRegistrationPage() {
  const steps = [
    {
      step: "01",
      title: "Complete Your Course",
      desc: "Finish your PravinSoft course and complete the final assessment. Students currently enrolled in their final month are also eligible to register early.",
    },
    {
      step: "02",
      title: "Submit This Registration",
      desc: "Fill in the form below with your personal details, course completed, skills, and job preferences. It takes under five minutes.",
    },
    {
      step: "03",
      title: "Profile Review",
      desc: "Our placement team reviews your profile, verifies your course completion, and creates your candidate record in our hiring partner database.",
    },
    {
      step: "04",
      title: "Resume & Mock Interview",
      desc: "You are scheduled for a resume-building session and at least one mock interview with a PravinSoft mentor before any company interaction.",
    },
    {
      step: "05",
      title: "Company Referrals & Drives",
      desc: "Your profile is shared with relevant hiring partners. You receive interview call notifications, drive schedules, and direct referrals from our team.",
    },
    {
      step: "06",
      title: "Offer & Beyond",
      desc: "Once you receive and accept an offer, our team supports your onboarding transition and keeps your profile active for future opportunities if needed.",
    },
  ];

  const support = [
    {
      icon: "📄",
      title: "Resume Building",
      desc: "A dedicated session with a placement mentor to structure, rewrite, and strengthen your resume — aligned to the job roles you are targeting.",
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      desc: "Technical and HR mock interviews conducted by industry professionals. You receive detailed feedback on every round before facing real companies.",
    },
    {
      icon: "🏢",
      title: "Company Referrals",
      desc: "Your profile is directly referred to our network of 40+ hiring partners — skipping the application queue and getting you straight to the interview stage.",
    },
    {
      icon: "📅",
      title: "On-Campus Drives",
      desc: "Recruitment drives held at our campus and online, where multiple companies interview PravinSoft candidates in a single scheduled event.",
    },
    {
      icon: "💼",
      title: "Job Portal Access",
      desc: "Exclusive access to PravinSoft&apos;s internal job board, updated weekly with openings from companies that actively seek our graduates.",
    },
    {
      icon: "🔔",
      title: "Interview Alerts",
      desc: "Real-time WhatsApp and email notifications for new job openings, drive dates, and direct interview invitations from our hiring partners.",
    },
  ];

  const hiringPartners = [
    "TCS", "Infosys", "Wipro", "HCL Technologies", "Cognizant",
    "Accenture", "Capgemini", "IBM", "Tech Mahindra", "Mphasis",
    "Amazon", "Microsoft", "Deloitte", "PwC", "LTIMindtree",
  ];

  const eligibility = [
    { icon: "✓", text: "Completed any PravinSoft course (online, classroom, or weekend batch)" },
    { icon: "✓", text: "Currently enrolled and in your final month of training" },
    { icon: "✓", text: "Completed the real-time project and course assessment" },
    { icon: "✓", text: "Attended a minimum of 80% of scheduled sessions" },
    { icon: "✓", text: "Holding a valid PravinSoft course completion or enrolment certificate" },
  ];

  const stats = [
    { value: "93%", label: "Placement Rate" },
    { value: "40+", label: "Hiring Partners" },
    { value: "18 Days", label: "Avg. Time to Offer" },
    { value: "Free", label: "For All PravinSoft Students" },
  ];

  const testimonials = [
    {
      quote: "I registered for placement support within a week of finishing my Java Full Stack course. PravinSoft referred me directly to three companies. I had an offer in hand within two weeks.",
      name: "Rohit K.",
      role: "Junior Developer — placed at Infosys",
    },
    {
      quote: "The mock interview session was the most valuable part. The mentor pointed out exactly what I was getting wrong in technical rounds. I cleared my next interview first attempt.",
      name: "Priya M.",
      role: "Data Analyst — placed at Mphasis",
    },
    {
      quote: "Coming from a non-IT background I was nervous about placements. The resume session and the referral to the campus drive made the difference. Placed within a month.",
      name: "Sneha R.",
      role: "Business Analyst — placed at Capgemini",
    },
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
          PravinSoft Technologies — Placement Cell
        </span>
        <h1
          className="gradient-text"
          style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}
        >
          Placement Registration
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
          Students who have completed or are currently enrolled in courses at
          PravinSoft Technologies LLP can register here for free placement
          support — including resume building, mock interviews, direct company
          referrals, and recruitment drive access.
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

      {/* ── Registration form ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          maxWidth: "860px",
          margin: "0 auto 5rem",
        }}
      >
        <div
          className="glass"
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Form header */}
          <div
            style={{
              background: "linear-gradient(135deg,#581c87,#0891b2)",
              padding: "1.75rem 2rem",
              color: "white",
            }}
          >
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.35rem" }}>
              Student Placement Registration Form
            </h2>
            <p style={{ fontSize: "0.88rem", opacity: 0.85, lineHeight: 1.6, margin: 0 }}>
              Fill in all fields accurately. Our placement team will contact you
              within 48 hours of submission.
            </p>
          </div>

          {/* Form body */}
          <div style={{ padding: "2rem" }}>

            {/* Section: Personal Details */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0891b2",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Personal Details
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  { label: "Full Name", placeholder: "e.g. Rahul Sharma", type: "text", required: true },
                  { label: "Mobile Number", placeholder: "e.g. 9876543210", type: "tel", required: true },
                  { label: "Email Address", placeholder: "e.g. rahul@gmail.com", type: "email", required: true },
                  { label: "City / Location", placeholder: "e.g. Hyderabad", type: "text", required: true },
                ].map((field) => (
                  <div key={field.label}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.83rem",
                        fontWeight: 600,
                        color: "var(--foreground, #1e293b)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span style={{ color: "#ef4444" }}>*</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "0.65rem 0.9rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        background: "var(--glass,#f8fafc)",
                        color: "var(--foreground,#1e293b)",
                        fontSize: "0.9rem",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Education */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0891b2",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Education & Experience
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                {[
                  { label: "Highest Qualification", placeholder: "e.g. B.Tech, BCA, MCA", type: "text", required: true },
                  { label: "Year of Passing", placeholder: "e.g. 2024", type: "text", required: true },
                  { label: "College / University", placeholder: "e.g. JNTU Hyderabad", type: "text", required: false },
                  { label: "Total Experience (if any)", placeholder: "e.g. Fresher / 1 year", type: "text", required: false },
                ].map((field) => (
                  <div key={field.label}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.83rem",
                        fontWeight: 600,
                        color: "var(--foreground, #1e293b)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {field.label}{" "}
                      {field.required && (
                        <span style={{ color: "#ef4444" }}>*</span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "0.65rem 0.9rem",
                        borderRadius: "8px",
                        border: "1px solid #e2e8f0",
                        background: "var(--glass,#f8fafc)",
                        color: "var(--foreground,#1e293b)",
                        fontSize: "0.9rem",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Course & Skills */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0891b2",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Course & Skills
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Course Completed at PravinSoft{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Select your course</option>
                    {[
                      "Java Full Stack",
                      "Python & Data Science",
                      "React JS",
                      "DevOps & AWS",
                      "Machine Learning",
                      "Angular",
                      "Node.js",
                      ".NET Core",
                      "Power BI",
                      "Salesforce",
                      "Other",
                    ].map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Enrolment Status{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Select status</option>
                    <option>Course Completed</option>
                    <option>Currently Enrolled — Final Month</option>
                    <option>Currently Enrolled — Midway</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.83rem",
                    fontWeight: 600,
                    color: "var(--foreground, #1e293b)",
                    marginBottom: "0.4rem",
                  }}
                >
                  Key Skills <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Java, Spring Boot, React, MySQL, Git"
                  style={{
                    width: "100%",
                    padding: "0.65rem 0.9rem",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    background: "var(--glass,#f8fafc)",
                    color: "var(--foreground,#1e293b)",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            {/* Section: Job Preferences */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0891b2",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Job Preferences
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Preferred Job Role{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Java Developer, Data Analyst"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Bangalore, Remote"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Expected Salary (LPA)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3.5 LPA or Open to discussion"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Notice Period / Availability
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Select availability</option>
                    <option>Immediately Available</option>
                    <option>Within 2 Weeks</option>
                    <option>Within 1 Month</option>
                    <option>More than 1 Month</option>
                  </select>
                </div>
              </div>

              {/* LinkedIn / Resume URL */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      color: "var(--foreground, #1e293b)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Resume / Portfolio URL
                  </label>
                  <input
                    type="url"
                    placeholder="Google Drive, GitHub, or portfolio link"
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      background: "var(--glass,#f8fafc)",
                      color: "var(--foreground,#1e293b)",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Section: Additional Info */}
            <div style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#0891b2",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.5rem",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                Additional Information
              </h3>
              <label
                style={{
                  display: "block",
                  fontSize: "0.83rem",
                  fontWeight: 600,
                  color: "var(--foreground, #1e293b)",
                  marginBottom: "0.4rem",
                }}
              >
                Anything else you&apos;d like our placement team to know?
              </label>
              <textarea
                placeholder="e.g. I have a gap year to explain, I prefer remote-only roles, I am open to internship-to-hire positions..."
                rows={4}
                style={{
                  width: "100%",
                  padding: "0.65rem 0.9rem",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  background: "var(--glass,#f8fafc)",
                  color: "var(--foreground,#1e293b)",
                  fontSize: "0.9rem",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* Consent */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                marginBottom: "1.75rem",
                padding: "1rem",
                background: "linear-gradient(135deg,#581c8708,#0891b208)",
                border: "1px solid #0891b220",
                borderRadius: "8px",
              }}
            >
              <input
                type="checkbox"
                id="consent"
                style={{
                  marginTop: "2px",
                  accentColor: "#0891b2",
                  flexShrink: 0,
                  cursor: "pointer",
                }}
              />
              <label
                htmlFor="consent"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  cursor: "pointer",
                }}
              >
                I confirm that I am a current or former student of PravinSoft
                Technologies LLP. I consent to sharing my profile details with
                PravinSoft&apos;s hiring partners for placement purposes.{" "}
                <span style={{ color: "#ef4444" }}>*</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="button"
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#581c87,#0891b2)",
                color: "white",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              Submit Placement Registration →
            </button>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                textAlign: "center",
                marginTop: "0.85rem",
                lineHeight: 1.6,
              }}
            >
              Our placement team will review your profile and contact you within
              48 hours via email and WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Eligibility ── */}
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto 5rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Who Is Eligible to Register?
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          Placement support is free for all PravinSoft students who meet the
          following criteria.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {eligibility.map((e, i) => (
            <div
              key={i}
              className="glass"
              style={{
                display: "flex",
                gap: "0.85rem",
                alignItems: "center",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg,#581c87,#0891b2)",
                  color: "white",
                  borderRadius: "50%",
                  width: "26px",
                  height: "26px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {e.icon}
              </span>
              <span
                style={{
                  color: "var(--foreground, #1e293b)",
                  fontSize: "0.93rem",
                  lineHeight: 1.6,
                }}
              >
                {e.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── How placement works ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          How Our Placement Process Works
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          From registration to offer letter — a clear, mentor-guided six-step
          journey.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {steps.map((item) => (
            <div
              key={item.step}
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#581c87,#0891b2)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.8rem",
                  flexShrink: 0,
                }}
              >
                {item.step}
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
                  {item.title}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.87rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
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
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Placement support ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          What Placement Support Includes
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
          Registering here unlocks six layers of support — all free for
          PravinSoft students.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {support.map((s) => (
            <div
              key={s.title}
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
                  background: "linear-gradient(135deg,#581c8712,#0891b212)",
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
                {s.icon}
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
                  {s.title}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.87rem",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
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
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Hiring partners ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Our Hiring Partners
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "580px",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
          }}
        >
          PravinSoft maintains active hiring relationships with 40+ companies
          across service-based IT, product companies, and global consultancies.
          Your registered profile is shared directly with relevant partners.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
          {hiringPartners.map((c) => (
            <span
              key={c}
              style={{
                background: "var(--glass,#f8fafc)",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "0.5rem 1.1rem",
                fontSize: "0.87rem",
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
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── Testimonials ── */}
      <div style={{ marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          Placed by PravinSoft
        </h2>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "2rem",
          }}
        >
          A few words from students who went through the same process you are
          about to start.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass"
              style={{
                background: "linear-gradient(135deg,#581c8710,#0891b210)",
                border: "1px solid #0891b225",
                borderRadius: "14px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>💬</span>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "var(--foreground, #334155)",
                  lineHeight: 1.8,
                  margin: 0,
                  flex: 1,
                }}
              >
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: "#0891b2",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--muted)",
                    marginTop: "0.15rem",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA banner ── */}
      <div
        style={{
          background: "linear-gradient(135deg,#581c87 0%,#0891b2 100%)",
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
          Your Next Job Starts with This Form
        </h2>
        <p
          style={{
            fontSize: "1rem",
            opacity: 0.9,
            maxWidth: "500px",
            margin: "0 auto 2rem",
            lineHeight: 1.75,
          }}
        >
          Scroll back up and complete your registration. Our placement team
          reviews every profile personally and will be in touch within 48 hours.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "white",
            color: "#581c87",
            border: "none",
            padding: "0.9rem 2.5rem",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            letterSpacing: "0.03em",
          }}
        >
          Register Now ↑
        </button>
      </div>
    </main>
  );
}