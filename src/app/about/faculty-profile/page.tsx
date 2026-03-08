import Link from "next/link";

export default function FacultyProfilePage() {
  return (
    <main className="container" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
      <h1 className="gradient-text" style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
        Faculty Profile
      </h1>
      <p style={{ color: "var(--muted)", maxWidth: "640px", fontSize: "1.05rem", marginBottom: "1rem" }}>
        Meet the core teaching faculty of Pravinsoft Technologies LLP, with deep industry and
        academic experience in software development and AI.
      </p>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
        Detailed faculty cards are already available on the{" "}
        <Link href="/teachers" style={{ textDecoration: "underline" }}>
          Teachers
        </Link>{" "}
        page; you can keep this page as an overview and link into that listing.
      </p>
    </main>
  );
}

