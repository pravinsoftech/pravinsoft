export default function LoginPage() {
  return (
    <main className="container" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
      <h1 className="gradient-text" style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}>
        Login
      </h1>
      <p style={{ color: "var(--muted)", maxWidth: "640px", fontSize: "1.05rem", marginBottom: "1.5rem" }}>
        This page can be connected to your authentication or LMS system to allow learners to
        access course materials and batch information.
      </p>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
        For now it acts as a placeholder target for the Login button in the navbar.
      </p>
    </main>
  );
}

