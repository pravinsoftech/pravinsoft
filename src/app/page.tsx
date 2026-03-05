export default function Home() {
  return (
    <main>


      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://res.cloudinary.com/myaitask/image/upload/v1760277887/digital-art-ai-technology-background_zag9y3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "4rem",
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)",
            top: "-200px",
            left: "-200px",
            filter: "blur(100px)",
            opacity: 0.3,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, var(--glow-secondary) 0%, transparent 70%)",
            bottom: "-200px",
            right: "-200px",
            filter: "blur(100px)",
            opacity: 0.3,
          }}
        ></div>

        <div
          className="container"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <h1
            className="gradient-text"
            style={{
              fontSize: "4.2rem",
              fontWeight: 800,
              marginBottom: "1.5rem",
              lineHeight: 1.1,
            }}
          >
            Pravinsoft Technology <br /> Learn With Modern Tech Skills
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#a1a1aa",
              maxWidth: "720px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            <strong>Pravinsoft Technologies LLP</strong>, located in the
            prestigious IT corridor of <strong>Hinjewadi, Pune</strong>, is a
            professional technical education institute dedicated to empowering
            students and working professionals with practical, industry-ready
            skills. Our structured online training programmes are designed to
            help learners master modern technologies and stay competitive in
            today’s rapidly evolving digital landscape.
          </p>

          <div
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}
          >
            <button className="btn-primary">Explore Courses</button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid var(--glass-border)",
                padding: "0.8rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

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