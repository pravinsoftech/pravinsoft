export default function CorporateTrainingPage() {
  const features = [
    {
      icon: "🎯",
      title: "Customized Training Solutions",
      description:
        "We provide customized corporate training solutions addressing the specific needs and objectives of your organization. Course content is tailored depending on project requirements and the experience level of participants.",
    },
    {
      icon: "💻",
      title: "Hands-On, Practical Learning",
      description:
        "Our programs emphasize hands-on, practical learning experiences, allowing your team to apply newfound knowledge to real-world corporate challenges through lab assignments and case studies.",
    },
    {
      icon: "📈",
      title: "Stay Industry-Current",
      description:
        "Stay at the forefront of industry trends with our corporate training programmes, which cover the latest technologies and advancements — from software development and IT infrastructure to leadership and project management.",
    },
    {
      icon: "🏢",
      title: "Flexible Delivery Modes",
      description:
        "We provide training either at your client location or on our campus, depending on your needs. Choose from onsite, online, or a hybrid approach for maximum flexibility.",
    },
    {
      icon: "📊",
      title: "Guaranteed ROI",
      description:
        "We guarantee a return on your training investment. Our consultative approach transforms learning and training challenges into dynamic business positives with real, measurable outcomes.",
    },
    {
      icon: "🚀",
      title: "Enhanced Business Performance",
      description:
        "Using our proven training delivery methodology and industry expertise, we help clients enhance business performance, accelerate time-to-market, increase productivity, and improve customer service.",
    },
  ];

  const trainingModes = [
    { label: "Classroom Training", icon: "🏫" },
    { label: "Online Training", icon: "🌐" },
    { label: "Weekend Batches", icon: "📅" },
    { label: "On-Site Corporate", icon: "🏢" },
  ];

  return (
    <div style={{ fontFamily: "sans-serif", color: "#1e293b" }}>
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
          padding: "5rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.85,
            marginBottom: "1rem",
          }}
        >
          PravinSoft Technologies Training Centre
        </p>
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            marginBottom: "1.25rem",
            lineHeight: 1.2,
          }}
        >
          Elevate Your Team with Corporate Training
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            opacity: 0.9,
            lineHeight: 1.7,
          }}
        >
          PravinSoft offers tailored corporate training programs to enhance the
          skills and efficiency of your workforce. Our specialized courses are
          designed to meet the demands of the ever-evolving corporate landscape,
          ensuring your team stays ahead in the competitive market.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            style={{
              background: "white",
              color: "#581c87",
              border: "none",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Inquire Now
          </button>
          <button
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            View Courses
          </button>
        </div>
      </div>

      {/* Training Modes */}
      <div
        style={{
          background: "#f8fafc",
          padding: "2.5rem 2rem",
          textAlign: "center",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "#64748b",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1.25rem",
          }}
        >
          We Offer Training In Multiple Formats
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {trainingModes.map((mode) => (
            <div
              key={mode.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "0.6rem 1.2rem",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#334155",
              }}
            >
              <span>{mode.icon}</span>
              {mode.label}
            </div>
          ))}
        </div>
      </div>

      {/* Why PravinSoft */}
      <div style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
            Why Choose PravinSoft for Corporate Training?
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.05rem", maxWidth: "650px", margin: "0 auto" }}>
            Training and development of technical expertise has become the most
            important sub-system of any IT organization. We share our expertise
            to reduce your training overheads while maximizing results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1.75rem",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{feature.icon}</div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "#1e293b",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Differentiator Strip */}
      <div
        style={{
          background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
          padding: "3.5rem 2rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1rem" }}>
          More Than Just Training
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            maxWidth: "700px",
            margin: "0 auto 0.5rem",
            opacity: 0.9,
            lineHeight: 1.7,
          }}
        >
          PravinSoft tailors its training solutions to address real business
          challenges — delivering more than just knowledge. We guarantee an ROI
          on your training investment to ensure our programs deliver real
          business outcomes for the <strong>&quot;Perfect Business Balance&quot;</strong>.
        </p>
      </div>

      {/* CTA Section */}
      <div style={{ padding: "5rem 2rem", textAlign: "center", background: "#f8fafc" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
          Ready to Upskill Your Team?
        </h2>
        <p
          style={{
            color: "#64748b",
            fontSize: "1.05rem",
            maxWidth: "550px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          Get in touch with our corporate training team today. We&apos;ll work with
          you to design a programme that fits your organization&apos;s exact needs
          and schedule.
        </p>
        <button
          style={{
            background: "linear-gradient(135deg, #581c87 0%, #0891b2 100%)",
            color: "white",
            border: "none",
            padding: "1rem 2.5rem",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Inquire Now
        </button>
      </div>
    </div>
  );
}