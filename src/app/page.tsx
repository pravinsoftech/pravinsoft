import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      {/* Features / Courses Section */}
      <section id="skills" style={{ padding: "8rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              marginBottom: "4rem",
              textAlign: "center",
            }}
          >
            Our Key Learning Advantages
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                id: "curriculum",
                title: "Comprehensive Curriculum",
                desc: "Master web development with a full-stack curriculum covering front-end, back-end, databases, and more.",
              },
              {
                id: "projects",
                title: "Hands-On Projects",
                desc: "Apply skills to real-world projects for practical experience and enhanced learning.",
              },
              {
                id: "instructors",
                title: "Expert Instructors",
                desc: "Learn from industry experts for insights and guidance in full-stack development.",
              },
              {
                id: "placement",
                title: "Job Placement Assistance",
                desc: "Access job placement assistance for career support and employer connections.",
              },
              {
                id: "certification",
                title: "Certification upon Completion",
                desc: "Receive a recognized certification validating your full-stack development skills.",
              },
              {
                id: "support",
                title: "24/7 Support",
                desc: "Access round-the-clock support for immediate assistance, ensuring a seamless learning journey.",
              },
            ].map((feature) => (
              <div
                key={feature.id}
                className="glass"
                style={{
                  padding: "2.5rem",
                  transition: "transform 0.3s ease",
                }}
              >
                <h3
                  className="gradient-text"
                  style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
                >
                  {feature.title}
                </h3>

                <p style={{ color: "#a1a1aa", lineHeight: "1.7" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}