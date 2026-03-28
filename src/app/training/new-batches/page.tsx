import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import type { UpcomingBatchRaw, UpcomingBatchRow } from "./types";
import { UpcomingBatchesTable } from "./UpcomingBatchesTable";

export const metadata: Metadata = {
  title: "New Batches | Pravinsoft AI",
  description:
    "Explore our upcoming batches for various tech and AI courses at Pravinsoft Technologies LLP.",
};

export default async function NewBatchesPage() {
  const { data: batches, error } = await supabase
    .from("upcoming_courses_batch")
    .select(
      `
      id,
      training_nature,
      start_date,
      start_time,
      enrolled_students,
      demo_link,
      registration_link,
      payment_link,
      status,
      course:course_id ( id, course_name ),
      faculty:faculty_id ( id, name, mobile, email )
    `,
    )
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  const rawBatches = (batches || []) as UpcomingBatchRaw[];
  const upcomingBatches: UpcomingBatchRow[] = rawBatches.map((b) => ({
    ...b,
    course: Array.isArray(b.course) ? b.course[0] ?? null : b.course,
    faculty: Array.isArray(b.faculty) ? b.faculty[0] ?? null : b.faculty,
  }));

  const fetchError = error?.message;

  const highlights = [
    { icon: "🎥", label: "Live Sessions", desc: "Every batch is taught live — not pre-recorded." },
    { icon: "👨‍💻", label: "Expert Faculty", desc: "Instructors are active industry practitioners." },
    { icon: "🔁", label: "Recordings Included", desc: "All sessions recorded and available within 24 hrs." },
    { icon: "🧪", label: "Hands-On Labs", desc: "Practical lab work in every single session." },
    { icon: "💬", label: "Doubt Support", desc: "Weekday TA support between sessions via chat." },
    { icon: "🏅", label: "Certificate", desc: "Completion certificate for every course you finish." },
  ];

  const modes = [
    { icon: "🌐", label: "Online", sub: "Live via Zoom / Google Meet" },
    { icon: "🏫", label: "Classroom", sub: "At our campus, Hyderabad" },
    { icon: "📅", label: "Weekend", sub: "Sat & Sun — morning & evening" },
    { icon: "🏢", label: "Corporate", sub: "On-site at your office" },
  ];

  const faqs = [
    {
      q: "How do I get the meeting link after registering?",
      a: "Once you complete registration and payment, you receive a confirmation email with the batch meeting link, schedule, and student portal credentials within a few hours.",
    },
    {
      q: "What if I miss a session?",
      a: "All live sessions are recorded and uploaded to the student portal within 24 hours of the class. You will never miss content due to a schedule conflict.",
    },
    {
      q: "Can I switch batches after enrolling?",
      a: "Yes. Contact our support team at least 48 hours before your batch starts and we will move you to another available cohort at no extra charge.",
    },
    {
      q: "Are seats really limited?",
      a: "Yes — each cohort is capped to maintain a healthy faculty-to-student ratio and ensure every student gets adequate attention during labs and Q&A.",
    },
    {
      q: "Is there a free demo class before I enrol?",
      a: "Most batches include a free demo session. Look for the Demo link in the batch table above — click it to join without any registration or payment.",
    },
  ];

  return (
    <main
      className="container"
      style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
    >

      {/* ── Page header ── */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
          PravinSoft Technologies — Training Schedule
        </span>
        <h1
          className="gradient-text"
          style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}
        >
          Upcoming New Batches
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
          Live instructor-led sessions across Online, Weekend, and Classroom
          modes. Every batch is capped at a limited cohort size — register early
          to secure your seat and meeting link.
        </p>

        {/* Mode pills */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "0.5rem",
          }}
        >
          {modes.map((m) => (
            <div
              key={m.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "var(--glass, #f8fafc)",
                border: "1px solid #e2e8f0",
                borderRadius: "100px",
                padding: "0.35rem 0.9rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--muted)",
              }}
            >
              <span style={{ fontSize: "0.95rem" }}>{m.icon}</span>
              {m.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Batch table (primary content — kept at the top) ── */}
      {fetchError && (
        <div
          className="glass"
          style={{
            padding: "1.5rem",
            marginBottom: "2rem",
            color: "var(--muted)",
            borderLeft: "4px solid var(--primary)",
          }}
        >
          Could not load batches: {fetchError}. Check your Supabase connection
          and env variables.
        </div>
      )}

      {!fetchError && upcomingBatches.length === 0 && (
        <div
          className="glass"
          style={{
            padding: "3rem",
            textAlign: "center",
            color: "var(--muted)",
            fontSize: "1.1rem",
          }}
        >
          No live batches at the moment. Check back soon for new schedules.
        </div>
      )}

      {!fetchError && upcomingBatches.length > 0 && (
        <UpcomingBatchesTable batches={upcomingBatches} />
      )}

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          margin: "5rem 0",
        }}
      />

      {/* ── How it works ── */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.9rem",
            fontWeight: 800,
            marginBottom: "0.75rem",
            color: "var(--foreground, #1e293b)",
          }}
        >
          What Every PravinSoft Batch Includes
        </h2>
        <p
          style={{
            color: "var(--muted)",
            maxWidth: "560px",
            margin: "0 auto",
            fontSize: "1rem",
            lineHeight: 1.7,
          }}
        >
          Regardless of the mode or course you choose, these six things come
          standard with every batch at PravinSoft.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
          marginBottom: "5rem",
        }}
      >
        {highlights.map((h) => (
          <div
            key={h.label}
            className="glass"
            style={{
              borderRadius: "12px",
              padding: "1.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                fontSize: "1.4rem",
                background: "linear-gradient(135deg,#581c8712,#0891b212)",
                border: "1px solid #0891b225",
                borderRadius: "10px",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {h.icon}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.97rem",
                  marginBottom: "0.3rem",
                  color: "var(--foreground, #1e293b)",
                }}
              >
                {h.label}
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.87rem",
                  lineHeight: 1.65,
                }}
              >
                {h.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg,transparent,#e2e8f0,transparent)",
          marginBottom: "5rem",
        }}
      />

      {/* ── How to register ── */}
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          marginBottom: "5rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
              color: "var(--foreground, #1e293b)",
            }}
          >
            How to Join a Batch
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Three steps from the table above to your first live session.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            {
              step: "01",
              title: "Find Your Batch",
              desc: "Browse the table above. Filter by course name, training mode, or start date. Click the Demo link to attend a free trial session before committing.",
            },
            {
              step: "02",
              title: "Register & Pay",
              desc: "Click the Register button on your chosen batch. Complete the short enrolment form and secure your seat via the payment link. Seats are filled on a first-come basis.",
            },
            {
              step: "03",
              title: "Get Your Link & Start",
              desc: "Within a few hours of payment you receive a confirmation email with your batch meeting link, schedule, student portal login, and all course materials. Show up on day one ready to learn.",
            },
          ].map((item, i, arr) => (
            <div
              key={item.step}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #581c87, #0891b2)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
                {i < arr.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      height: "52px",
                      background: "#e2e8f0",
                      margin: "4px 0",
                    }}
                  />
                )}
              </div>
              <div style={{ paddingTop: "0.7rem" }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: "0.3rem",
                    color: "var(--foreground, #1e293b)",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.93rem",
                    lineHeight: 1.75,
                    paddingBottom: i < arr.length - 1 ? "1.5rem" : 0,
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

      {/* ── FAQ ── */}
      <div style={{ maxWidth: "780px", margin: "0 auto", marginBottom: "5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.9rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
              color: "var(--foreground, #1e293b)",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Quick answers before you register.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass"
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "1.4rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.97rem",
                  marginBottom: "0.6rem",
                  color: "var(--foreground, #1e293b)",
                }}
              >
                {faq.q}
              </div>
              <div
                style={{
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                }}
              >
                {faq.a}
              </div>
            </div>
          ))}
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
          Can't Find the Right Batch?
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
          New batches are added every week. Talk to an advisor and we will
          match you to an upcoming cohort that fits your schedule and goal —
          or notify you the moment a new batch opens for your course.
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
            Talk to an Advisor
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
            Browse All Courses
          </button>
        </div>
      </div>
    </main>
  );
}