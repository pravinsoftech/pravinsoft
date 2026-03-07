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
                id: "courses",
                title: "Industry-Relevant Courses",
                desc: "Comprehensive training programmes covering modern technologies including Artificial Intelligence, Software Development, Data Technologies, and emerging digital platforms designed to meet current industry demands.",
              },
              {
                id: "faculty",
                title: "Expert Faculty",
                desc: "Our instructors are experienced professionals and domain specialists who bring real-world industry knowledge into the classroom, ensuring practical learning beyond theoretical concepts.",
              },
              {
                id: "online-learning",
                title: "Flexible Online Classes",
                desc: "All courses are delivered through structured online sessions, enabling students and working professionals from across India to learn conveniently without interrupting their academic or professional commitments.",
              },
              {
                id: "affordable",
                title: "Pocket-Friendly Fees",
                desc: "Pravinsoft Technologies LLP believes quality technical education should be accessible to everyone. Our course fees are reasonably structured so learners can enhance their careers without financial burden.",
              },
              {
                id: "career-growth",
                title: "Career-Oriented Learning",
                desc: "Our programmes focus on building practical skills, conceptual clarity, and project-based learning so that students can confidently apply their knowledge in professional environments.",
              },
              {
                id: "location",
                title: "Located in Pune's IT Hub",
                desc: "Based in Hinjewadi, Pune – one of India's leading technology corridors – we stay closely aligned with industry developments and modern technological advancements.",
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