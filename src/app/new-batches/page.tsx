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
      course:course_id ( id, name, slug, description, price_display, status ),
      faculty:faculty_id ( id, name, mobile, email )
    `,
    )
    .in("status", ["live", "Live", "LIVE"])
    .order("start_date", { ascending: true })
    .order("start_time", { ascending: true });

  const rawBatches = (batches || []) as UpcomingBatchRaw[];
  const upcomingBatches: UpcomingBatchRow[] = rawBatches.map((b) => ({
    ...b,
    course: Array.isArray(b.course) ? b.course[0] ?? null : b.course,
    faculty: Array.isArray(b.faculty) ? b.faculty[0] ?? null : b.faculty,
  }));
  const fetchError = error?.message;

  return (
    <main className="container" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
            margin: "0 auto",
            fontSize: "1.05rem",
          }}
        >
          Live technical sessions across Online, Weekend and Classroom modes. Seats are
          limited for each cohort.
        </p>
      </div>

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
          Could not load batches: {fetchError}. Check your Supabase connection and env
          variables.
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
    </main>
  );
}

