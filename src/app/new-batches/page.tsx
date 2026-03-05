import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Batches | Pravinsoft AI",
    description: "Explore our upcoming batches for various tech and AI courses at Pravinsoft Technologies LLP.",
};

export default function NewBatchesPage() {
    const upcomingBatches = [
        {
            id: 1,
            course: "Full Stack Web Development",
            date: "April 15, 2026",
            time: "Morning Batch (8:00 AM - 10:00 AM)",
            mode: "Online & Offline",
            status: "Enrolling Fast",
        },
        {
            id: 2,
            course: "Applied Artificial Intelligence",
            date: "April 20, 2026",
            time: "Evening Batch (6:00 PM - 8:00 PM)",
            mode: "Online Only",
            status: "Seats Available",
        },
        {
            id: 3,
            course: "Data Science & Machine Learning",
            date: "May 05, 2026",
            time: "Weekend Batch (10:00 AM - 1:00 PM)",
            mode: "Online & Offline",
            status: "Early Bird Open",
        },
    ];

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

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
                {upcomingBatches.map((batch) => (
                    <div key={batch.id} className="glass" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>
                            {batch.course}
                        </h3>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", color: "var(--muted)", fontSize: "0.95rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>📅</span> <strong>Date:</strong> {batch.date}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>⏰</span> <strong>Time:</strong> {batch.time}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span>📍</span> <strong>Mode:</strong> {batch.mode}
                            </div>
                        </div>

                        <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--glass-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                padding: "0.4rem 0.8rem",
                                borderRadius: "2rem",
                                background: "var(--glow-secondary)",
                                color: "var(--foreground)"
                            }}>
                                {batch.status}
                            </span>
                            <button className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
