import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import type { UpcomingBatchRow } from "./types";

export const metadata: Metadata = {
    title: "New Batches | Pravinsoft AI",
    description: "Explore our upcoming batches for various tech and AI courses at Pravinsoft Technologies LLP.",
};

function formatDate(dateStr: string) {
    try {
        const d = new Date(dateStr + "Z");
        return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    } catch {
        return dateStr;
    }
}

function formatTime(timeStr: string | null) {
    if (!timeStr) return null;
    try {
        const [h, m] = timeStr.split(":");
        const hour = parseInt(h, 10);
        const ampm = hour >= 12 ? "PM" : "AM";
        const h12 = hour % 12 || 12;
        return `${h12}:${m || "00"} ${ampm}`;
    } catch {
        return timeStr;
    }
}

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
        `
        )
        .eq("status", "live")
        .order("start_date", { ascending: true })
        .order("start_time", { ascending: true });

    const upcomingBatches = (batches || []) as UpcomingBatchRow[];
    const fetchError = error?.message;

    return (
        <main className="container" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                <h1 className="gradient-text" style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
                    Upcoming New Batches
                </h1>
                <p style={{ color: "var(--muted)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
                    Join our upcoming batches and accelerate your tech career. Registrations are currently open for limited seats.
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
                    Could not load batches: {fetchError}. Check your Supabase connection and env variables.
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
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {upcomingBatches.map((batch) => {
                    const courseName = batch.course?.name ?? "Course";
                    const facultyName = batch.faculty?.name ?? "";
                    const timeDisplay = formatTime(batch.start_time);
                    const dateDisplay = formatDate(batch.start_date);
                    const registrationUrl = batch.registration_link || "#";
                    const paymentUrl = batch.payment_link || batch.registration_link || "#";
                    const demoUrl = batch.demo_link;

                    return (
                        <div
                            key={batch.id}
                            className="glass"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                padding: "1.25rem 1.5rem",
                            }}
                        >
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", flex: "1 1 280px" }}>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--foreground)", margin: 0 }}>
                                    {courseName}
                                </h3>
                                {facultyName && (
                                    <span style={{ fontSize: "0.9rem", color: "var(--primary)", fontWeight: 600 }}>
                                        {facultyName}
                                    </span>
                                )}
                                <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>📅 {dateDisplay}</span>
                                {timeDisplay && (
                                    <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>⏰ {timeDisplay}</span>
                                )}
                                <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>📍 {batch.training_nature}</span>
                                {batch.enrolled_students > 0 && (
                                    <span style={{ fontSize: "0.9rem", color: "var(--muted)" }}>👥 {batch.enrolled_students}</span>
                                )}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        padding: "0.35rem 0.65rem",
                                        borderRadius: "2rem",
                                        background: "var(--glow-secondary)",
                                        color: "var(--foreground)",
                                    }}
                                >
                                    Live
                                </span>
                                {demoUrl && (
                                    <a
                                        href={demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem", textDecoration: "none" }}
                                    >
                                        Demo
                                    </a>
                                )}
                                <a
                                    href={registrationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ padding: "0.45rem 0.9rem", fontSize: "0.85rem", textDecoration: "none" }}
                                >
                                    Enroll Now
                                </a>
                                {paymentUrl && paymentUrl !== registrationUrl && (
                                    <a
                                        href={paymentUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: "0.45rem 0.9rem",
                                            fontSize: "0.85rem",
                                            textDecoration: "none",
                                            border: "1px solid var(--glass-border)",
                                            borderRadius: "var(--radius)",
                                            color: "var(--foreground)",
                                        }}
                                    >
                                        Pay
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
                </div>
            )}
        </main>
    );
}
