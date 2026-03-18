import HeroCarousel from "@/components/HeroCarousel";
import CourseCarousel from "@/components/CourseCarousel";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";


export default function Home() {
    return (
        <main>
            <HeroCarousel />
            <CourseCarousel />

            {/* Key Learning Advantages Section */}
            <section id="skills" style={{ padding: "6rem 0", background: '#ffffffff' }}>
                <div className="container">
                    <h2
                        style={{
                            fontSize: "2.2rem",
                            fontWeight: 800,
                            marginBottom: "3.5rem",
                            textAlign: "center",
                            color: '#1e293b'
                        }}
                    >
                        Our <span className="gradient-text">Key Learning</span> Advantages
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {[
                            {
                                id: "curriculum",
                                title: "Comprehensive Curriculum",
                                desc: "Master web development with a full-stack curriculum covering front-end, back-end, and more.",
                                icon: "/images/Asset 1.svg"
                            },
                            {
                                id: "projects",
                                title: "Hands-On Projects",
                                desc: "Apply skills to real-world projects for practical experience and enhanced learning.",
                                icon: "/images/Asset 2.svg"
                            },
                            {
                                id: "instructors",
                                title: "Expert Instructors",
                                desc: "Learn from industry experts for insights and guidance in full-stack development.",
                                icon: "/images/Asset 3.svg"
                            },
                            {
                                id: "placement",
                                title: "Job Placement Assistance",
                                desc: "Access job placement assistance for career support and employer connections.",
                                icon: "/images/Asset 4.svg"
                            },
                            {
                                id: "certification",
                                title: "Certification upon Completion",
                                desc: "Receive a recognized certification validating your full-stack development skills.",
                                icon: "/images/Asset 5.svg"
                            },
                            {
                                id: "support",
                                title: "24/7 Support",
                                desc: "Access round-the-clock support for immediate assistance, ensuring a seamless journey.",
                                icon: "/images/Asset 6.svg"
                            },
                        ].map((feature) => (
                            <div
                                key={feature.id}
                                className="solid"
                                style={{
                                    padding: "3rem 1.75rem 1.75rem",
                                    background: 'white',
                                    borderRadius: '20px',
                                    border: '1px solid #e2e8f0',
                                    position: 'relative',
                                    marginTop: '2rem',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                            >
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    position: 'absolute',
                                    top: '-50px',
                                    left: '1.75rem',
                                    background: 'transparent',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 2
                                }}>
                                    <Image src={feature.icon} alt={feature.title} width={100} height={100} />
                                </div>
                                <h3
                                    style={{ fontSize: "1.2rem", fontWeight: 700, color: '#635f64ff', marginBottom: "1rem" }}
                                >
                                    {feature.title}
                                </h3>
                                <p style={{ color: "#2f84d9ff", fontSize: '0.95rem', lineHeight: "1.6" }}>
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Services Section */}
            <section style={{ padding: "6rem 0", background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b' }}>
                            Our <span style={{ color: '#06b6d4' }}>Training</span> Services
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>From Basic to Advanced...</p>
                        <p style={{ color: '#64748b', fontSize: '1rem', fontWeight: 500, maxWidth: '800px', margin: '0.5rem auto 0' }}>
                            We Offer Classroom, Online, Weekend, and Corporate Training on a Wide Range of Software Courses.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        overflow: 'hidden'
                    }}>
                        {/* Row 1 */}
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1, position: 'relative', minHeight: '300px' }}>
                                <Image src="/images/Asset 8.svg" alt="Real-Time Projects" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Real-Time Projects</h3>
                                <p style={{ color: '#1e293b', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>Learn by Doing: Real-World Projects for Practical Mastery</p>
                                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    At our cutting-edge software training institute, we believe in the power...
                                </p>
                                <Link href="/services/real-time-projects" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View more <span style={{ fontSize: '1.2rem' }}>→</span>
                                </Link>
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1, position: 'relative', minHeight: '300px' }}>
                                <Image src="/images/Asset 9.svg" alt="Internships" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Internships</h3>
                                <div style={{
                                    border: '1px solid #e2e8f0',
                                    padding: '1.5rem',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    <p style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Training & Project Based</p>
                                    <p style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '2px' }}>INTERNSHIP</p>
                                </div>
                                <Link href="/services/internships" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View more <span style={{ fontSize: '1.2rem' }}>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div style={{ display: 'flex', borderTop: '1px solid #e2e8f0' }}>
                            <div style={{ flex: 1, position: 'relative', minHeight: '300px' }}>
                                <Image src="/images/Asset 10.svg" alt="Workshops" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Workshops</h3>
                                <p style={{ color: '#1e293b', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>Unlocking IT Excellence: Join Our Transformative Workshops</p>
                                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Welcome to a world of endless possibilities. Our workshops are designed...
                                </p>
                                <Link href="/services/workshops" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View more <span style={{ fontSize: '1.2rem' }}>→</span>
                                </Link>
                            </div>
                        </div>

                        <div style={{ display: 'flex', borderTop: '1px solid #e2e8f0' }}>
                            <div style={{ flex: 1, position: 'relative', minHeight: '300px' }}>
                                <Image src="/images/Asset 11.svg" alt="Weekend Training" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem' }}>Weekend Training</h3>
                                <p style={{ color: '#1e293b', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem' }}>Supercharge Your Weekends with PravinSoft's IT Training Programs</p>
                                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Supercharge your career without quitting your job. Our weekend...
                                </p>
                                <Link href="/services/weekend-training" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    View more <span style={{ fontSize: '1.2rem' }}>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
                        <button style={{
                            background: 'linear-gradient(135deg, #581c87 0%, #0891b2 100%)',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 2.5rem',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }}>
                            EXPLORE SERVICES
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section style={{
                padding: "8rem 0",
                background: '#020617',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background glow effects */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '40%',
                    height: '60%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ marginBottom: '5rem' }}>
                        <span style={{
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: '#10b981',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'inline-block',
                            borderBottom: '2px solid #10b981',
                            paddingBottom: '4px',
                            marginBottom: '2rem'
                        }}>
                            Our <span style={{ color: '#06b6d4' }}>values</span>
                        </span>

                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            maxWidth: '1000px',
                            marginBottom: '2rem',
                            letterSpacing: '-0.5px'
                        }}>
                            Empowering <span style={{ color: '#94a3b8' }}>Futures</span>: PravinSoft's 5+ Year <span style={{ color: '#94a3b8' }}>Legacy</span> of Hands-On <span style={{ color: '#94a3b8' }}>Excellence</span>
                        </h2>

                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '800px', lineHeight: 1.7 }}>
                            PravinSoft, with over 5+ years of training experience, offers hands-on training, With expert trainers and a mission to empower, we ensure successful placements and career advancement for our students.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {/* Value 1 */}
                        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                            <div className="glass" style={{
                                width: '160px',
                                height: '160px',
                                background: 'white',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}>
                                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#06b6d4' }}>5+</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', textAlign: 'center', marginTop: '6px', lineHeight: 1.2 }}>Years<br />Experience</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
                                    We <span style={{ color: '#94a3b8' }}>Believe</span> in Empowering <span style={{ color: '#06b6d4' }}>Tech Talent</span>
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    Our core belief lies in empowering aspiring technologists with the skills and knowledge necessary to succeed in the ever-evolving software industry.
                                </p>
                            </div>
                        </div>

                        {/* Value 2 */}
                        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                            <div className="glass" style={{
                                width: '160px',
                                height: '160px',
                                background: 'white',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}>
                                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#1d4ed8' }}>500+</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', textAlign: 'center', marginTop: '6px', lineHeight: 1.2 }}>Students<br />Trained</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
                                    We <span style={{ color: '#94a3b8' }}>Believe</span> in <span style={{ color: '#3b82f6' }}>Practical Learning</span>
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    We believe in providing practical, real-world training that equips our students with the confidence and capability to tackle industry challenges head-on.
                                </p>
                            </div>
                        </div>

                        {/* Value 3 */}
                        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                            <div className="glass" style={{
                                width: '160px',
                                height: '160px',
                                background: 'white',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}>
                                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#db2777' }}>96%</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', textAlign: 'center', marginTop: '6px', lineHeight: 1.2 }}>Career<br />Launch Success</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
                                    We <span style={{ color: '#94a3b8' }}>Believe</span> in <span style={{ color: '#ec4899' }}>Building Careers</span>
                                </h3>
                                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    We believe in providing comprehensive support, from skill acquisition to placement assistance, to help our students build successful careers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Browse by Domains Section */}
            <section style={{ padding: "6rem 0", background: '#f8fafc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e293b' }}>
                            Browse by <span style={{ color: '#06b6d4' }}>Domains</span>
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>Explore new and trending free online courses.</p>
                    </div>

                    <div style={{ position: 'relative', width: '100%' }}>
                        <div style={{
                            overflowX: 'auto',
                            padding: '1rem 0.5rem 3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}>
                            {/* Horizontal scrolling row with grid inside */}
                            <div style={{
                                display: 'grid',
                                gridTemplateRows: 'repeat(2, 1fr)',
                                gridAutoFlow: 'column',
                                gap: '2rem',
                                width: 'max-content',
                                padding: '0 1rem'
                            }}>
                                {[
                                    { name: "DevOps...", icon: "∞", color: "#a855f7" },
                                    { name: "Programming...", icon: "</>", color: "#14b8a6" },
                                    { name: "Frameworks...", icon: "🔍", color: "#6366f1" },
                                    { name: "Internships...", icon: "🎓", color: "#065f46" },
                                    { name: "Full Stack...", icon: "🥞", color: "#8b5cf6" },
                                    { name: "Mobile Technologies...", icon: "📱", color: "#22c55e" },
                                    { name: "Web Development...", icon: "🌐", color: "#991b1b" },
                                    { name: "Placement Assistance...", icon: "🤝", color: "#9333ea" },
                                    { name: "DevSecOps...", icon: "🛡️", color: "#0891b2" },
                                    { name: "Cloud Computing...", icon: "☁️", color: "#2563eb" },
                                    { name: "AI & Data...", icon: "🤖", color: "#f59e0b" },
                                    { name: "Cyber Security...", icon: "🔐", color: "#dc2626" },
                                ].map((domain, i) => (
                                    <div key={i} className="glass" style={{
                                        width: '200px',
                                        height: '220px',
                                        background: 'white',
                                        borderRadius: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '1.5rem',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        border: '1px solid #f1f5f9',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: domain.color,
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '2rem',
                                            color: 'white',
                                            boxShadow: `0 8px 16px ${domain.color}44`
                                        }}>
                                            {domain.icon}
                                        </div>
                                        <span style={{
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            color: '#1e293b',
                                            textAlign: 'center',
                                            padding: '0 1rem'
                                        }}>
                                            {domain.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Arrows placeholders as per image */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '-1rem',
                            transform: 'translateY(-50%)',
                            width: '40px',
                            height: '40px',
                            background: '#94a3b8',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                            ←
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-1rem',
                            transform: 'translateY(-50%)',
                            width: '40px',
                            height: '40px',
                            background: '#3b82f6',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                            →
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <button style={{
                            background: '#5b21b6',
                            color: 'white',
                            padding: '1rem 2.5rem',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            border: 'none',
                            cursor: 'pointer',
                            letterSpacing: '0.5px'
                        }}>
                            EXPLORE CATEGORIES
                        </button>
                    </div>
                </div>
            </section>

            {/* Corporate Software Training Section */}
            <section style={{
                padding: "6rem 0",
                background: '#1e293b',
                color: 'white',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                <span style={{ color: '#06b6d4' }}>Corporate</span> Software Training
                            </h2>
                            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Elevate Your Team with PravinSoft's Corporate Training Programs PravinSoft offers tailored corporate training programs to enhance the skills and efficiency of your workforce. Our specialized courses are designed to meet the demands of the ever-evolving corporate landscape, ensuring your team stays ahead in the competitive market. PravinSoft offers tailored corporate training programs to enhance the skills and efficiency of your workforce. O...
                            </p>
                            <Link href="/services/corporate-trainings" style={{
                                color: '#3b82f6',
                                textDecoration: 'none',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                marginBottom: '2.5rem'
                            }}>
                                View more <span style={{ fontSize: '1.2rem' }}>→</span>
                            </Link>

                            <button style={{
                                background: 'linear-gradient(135deg, #581c87 0%, #0891b2 100%)',
                                color: 'white',
                                border: 'none',
                                padding: '1rem 2.5rem',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                            }}>
                                CONTACT US
                            </button>
                        </div>

                        <div style={{ flex: '1', minWidth: '300px', position: 'relative', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                            <Image
                                src="/images/corporate-training.png"
                                alt="Corporate Software Training"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ padding: "8rem 0", background: 'white', overflow: 'hidden', position: 'relative' }}>
                {/* Background Decoration */}
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '300px',
                    height: '300px',
                    background: '#f1f5f9',
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    zIndex: 0,
                    opacity: 0.6
                }}>
                    <div style={{ position: 'absolute', top: '20%', left: '25%', color: '#fbbf24', fontSize: '2rem' }}>✦</div>
                    <div style={{ position: 'absolute', bottom: '30%', right: '20%', display: 'grid', gridTemplateColumns: 'repeat(4, 8px)', gap: '15px' }}>
                        {[...Array(16)].map((_, i) => (
                            <div key={i} style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%' }}></div>
                        ))}
                    </div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'start' }}>

                        {/* Header Area */}
                        <div style={{ paddingTop: '2rem' }}>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#111827', lineHeight: 1.1, marginBottom: '2rem' }}>
                                <span style={{ color: '#06b6d4', textDecoration: 'underline', textDecorationThickness: '4px', textUnderlineOffset: '8px' }}>PravinSost's</span> Students Placed in the Best Companies
                            </h2>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    background: '#3b82f6',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '4px'
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <p style={{ fontSize: '1.1rem', color: '#111827', fontWeight: 600, maxWidth: '280px' }}>
                                    <span style={{ fontWeight: 800 }}>98% of students</span> would recommend "PravinSoft" to a friend
                                </p>
                            </div>
                        </div>

                        {/* Testimonials Masonry/Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '1rem' }}>
                            {/* Column 1 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
                                {/* Testimonial 1 */}
                                <div className="glass" style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    position: 'relative',
                                    border: '1px solid #f8fafc'
                                }}>
                                    <span style={{ position: 'absolute', top: '1rem', left: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>“</span>
                                    <p style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', paddingTop: '1.5rem' }}>
                                        I am a working professional and this training helped me upgrade my skills. The flexible online sessions, recorded classes, and real-time projects are very useful. Pravin Sir explains every topic patiently and clears all doubts. Great learning experience.
                                    </p>
                                    <span style={{ position: 'absolute', bottom: '7rem', right: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>”</span>

                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i === 5 ? "#e2e8f0" : "#fbbf24"}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 700, color: '#475569', overflow: 'hidden' }}>
                                            <Image src="/images/Asset 1.svg" alt="Avatar" width={40} height={40} style={{ opacity: 0.5 }} />
                                        </div>
                                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>Pranit Jadhav</div>
                                    </div>

                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                                        course : <br />
                                        <span style={{ fontWeight: 600, color: '#64748b' }}>By Real-Time Expert</span>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="glass" style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    position: 'relative',
                                    border: '1px solid #f8fafc'
                                }}>
                                    <span style={{ position: 'absolute', top: '1rem', left: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>“</span>
                                    <p style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', paddingTop: '1.5rem' }}>
                                        One of The Best Mentorships who focuses on practical, in-depth learning rather than just theory. The guidance helps build strong technical fundamentals and real-world understanding. Highly recommended for professionals aiming for long-term career growth in IT.
                                    </p>
                                    <span style={{ position: 'absolute', bottom: '7rem', right: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>”</span>

                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#a21caf', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: 'white' }}>
                                            S
                                        </div>
                                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>Mayur Kamthe</div>
                                    </div>

                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                                        course : <br />
                                        <span style={{ fontWeight: 600, color: '#64748b' }}>By Mr. Pravin Patil</span>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Testimonial 2 */}
                                <div className="glass" style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    position: 'relative',
                                    border: '1px solid #f8fafc'
                                }}>
                                    <span style={{ position: 'absolute', top: '1rem', left: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>“</span>
                                    <p style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', paddingTop: '1.5rem' }}>
                                        An industry-experienced mentor who helps learners dive deep into technical topics and unravel their knowledge base, going beyond high-level theoretical concepts.
                                        <br />I recommend this institution to professionals who are looking to take their career trajectory to the next level and ensure long-term sustainability in the highly competitive IT industry.
                                    </p>
                                    <span style={{ position: 'absolute', bottom: '7rem', right: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>”</span>

                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: 'white' }}>
                                            V
                                        </div>
                                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>Nikhil Gadhak</div>
                                    </div>

                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                                        course : <br />
                                        <span style={{ fontWeight: 600, color: '#64748b' }}>By Pravin Patil</span>
                                    </div>
                                </div>

                                {/* Testimonial 4 */}
                                <div className="glass" style={{
                                    background: 'white',
                                    padding: '2rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    position: 'relative',
                                    border: '1px solid #f8fafc'
                                }}>
                                    <span style={{ position: 'absolute', top: '1rem', left: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>“</span>
                                    <p style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', paddingTop: '1.5rem' }}>
                                        The mentor brings real industry experience into every session, helping learners explore concepts in depth and understand how they are applied in real projects. This institute is ideal for professionals who want to future-proof their IT careers and move to the next level.
                                    </p>
                                    <span style={{ position: 'absolute', bottom: '7rem', right: '1.5rem', fontSize: '2rem', color: '#64748b', fontWeight: 900 }}>”</span>

                                    <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                            <div style={{ width: '100%', height: '100%', background: '#475569', opacity: 0.8 }}></div>
                                        </div>
                                        <div style={{ fontWeight: 800, color: '#1e293b', fontSize: '0.95rem' }}>Sagar Gaikwad</div>
                                    </div>

                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                                        course : <br />
                                        <span style={{ fontWeight: 600, color: '#64748b' }}>By Pravin Patil</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Hiring Partners Section */}
            <section style={{ padding: "8rem 0", background: '#f8fafc', overflow: 'hidden', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'center' }}>

                        {/* Header Area */}
                        <div>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#111827', lineHeight: 1.1, marginBottom: '2rem' }}>
                                <span style={{ color: '#06b6d4', textDecoration: 'underline', textDecorationThickness: '4px', textUnderlineOffset: '8px' }}>Top MNC's</span> are our Hiring Partners
                            </h2>

                            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, maxWidth: '350px' }}>
                                Our students are placed in leading multinational companies across the globe. We provide 100% placement assistance to all our students.
                            </p>

                            <div style={{ marginTop: '2.5rem' }}>
                                <button style={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)'
                                }}>
                                    Hiring at PravinSoft
                                </button>
                            </div>
                        </div>

                        {/* Partner Logos Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '2rem',
                            background: 'white',
                            padding: '3rem',
                            borderRadius: '24px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
                        }}>
                            {[
                                { name: "Google", color: "#4285F4" },
                                { name: "Amazon", color: "#FF9900" },
                                { name: "Microsoft", color: "#00A4EF" },
                                { name: "TCS", color: "#1B2128" },
                                { name: "Accenture", color: "#7500C0" },
                                { name: "Wipro", color: "#000000" },
                                { name: "Infosys", color: "#007CC3" },
                                { name: "Capgemini", color: "#0070AD" },
                                { name: "Cognizant", color: "#0033A0" },
                                { name: "IBM", color: "#052FAD" },
                                { name: "HCL", color: "#005696" },
                                { name: "Oracle", color: "#F80000" }
                            ].map((company, i) => (
                                <div key={i} style={{
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #f1f5f9',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    padding: '1rem'
                                }}>
                                    <span style={{
                                        fontWeight: 800,
                                        fontSize: '0.9rem',
                                        color: company.color,
                                        letterSpacing: '1px',
                                        textAlign: 'center'
                                    }}>
                                        {company.name.toUpperCase()}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Background Decoration */}
                <div style={{
                    position: 'absolute',
                    top: '-5%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
                    zIndex: 0
                }} />
            </section>

            {/* Placed Students Section */}
            <section style={{
                padding: "6rem 0",
                background: '#ffffffff',
                backgroundImage: 'linear-gradient(135deg, rgba(255, 198, 55, 1) 5%, transparent 5%, transparent 5%, rgba(255, 198, 55, 1) 5%, rgba(255, 198, 55, 1) 5%, transparent 5%, transparent)',
                backgroundSize: '60px 60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Dots Decoration */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '8%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 6px)',
                    gap: '12px',
                    opacity: 15
                }}>
                    {[...Array(36)].map((_, i) => (
                        <div key={i} style={{ width: '4px', height: '4px', background: '#475569', borderRadius: '50%' }}></div>
                    ))}
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827' }}>
                            Placed <span style={{ color: '#06b6d4' }}>Students</span>
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                            Explore new and trending free online courses.
                        </p>
                    </div>

                    <div style={{ position: 'relative' }}>
                        {/* Scroll Arrows */}
                        <div style={{
                            position: 'absolute',
                            left: '-3rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '45px',
                            height: '45px',
                            background: '#94a3b8',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                            ←
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '-3rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '45px',
                            height: '45px',
                            background: '#94a3b8',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
                            →
                        </div>

                        {/* Cards Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            gap: '1.5rem',
                            rowGap: '3rem'
                        }}>
                            {[
                                { name: "Debashis", role: "Java Developer", company: "Emagia Corporation", color: "#4989ffff" },
                                { name: "Rupal", role: "Java Developer", company: "Mphasis Ltd", color: "#ea580c" },
                                { name: "Sai", role: "Web Developer", company: "Conseqta Technology", color: "#16f962ff" },
                                { name: "Indrani", role: "QA Engineer", company: "Celium Pvt Ltd", color: "#f50b97ff" },
                                { name: "Balaji", role: "Java Developer", company: "eGlobal Infotech", color: "#ea580c" },
                                { name: "Anshuman", role: "Web Developer", company: "Conseqta Technology", color: "#f97316" },
                                { name: "Shreya V Tawalare", role: "Java Developer", company: "Sisnx Techno", color: "#f59e0b" },
                                { name: "Sameer", role: "Web Developer", company: "Gisfy Pvt Ltd", color: "#ea580c" },
                                { name: "K Tejeswari", role: "Java Developer", company: "Virinchi", color: "#f97316" },
                                { name: "Ganga Muthyala", role: "QA Engineer", company: "SS Solutions Pvt Ltd", color: "#f59e0b" }
                            ].map((student, i) => (
                                <div key={i} className="glass" style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    {/* Card Header (Gradient + City) */}
                                    <div style={{
                                        height: '90px',
                                        background: `linear-gradient(135deg, ${student.color} 0%, #ffffffff 100%)`,
                                        position: 'relative'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            width: '100%',
                                            height: '40px',
                                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/city-skyline.png")',
                                            opacity: 0.15,
                                            backgroundSize: 'cover'
                                        }}></div>

                                        {/* Avatar centered and overlapping */}
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-35px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '75px',
                                            height: '75px',
                                            background: '#3097ffff',
                                            borderRadius: '50%',
                                            border: '2px solid white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                            zIndex: 2,
                                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                        }}>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#515457ff' }}>
                                                {student.name.charAt(0)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div style={{
                                        padding: '45px 1.25rem 1.5rem',
                                        textAlign: 'center',
                                        position: 'relative'
                                    }}>
                                        {/* LinkedIn Icon */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '12px',
                                            width: '20px',
                                            height: '20px',
                                            background: '#0077b5',
                                            borderRadius: '3px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '0.75rem',
                                            fontWeight: 900,
                                            cursor: 'pointer'
                                        }}>
                                            in
                                        </div>

                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111827', margin: '0 0 5px' }}>
                                            {student.name}
                                        </h4>
                                        <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 15px' }}>
                                            {student.role}
                                        </p>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px',
                                            padding: '10px 0',
                                            borderTop: '1px solid #f1f5f9'
                                        }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                            </svg>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#475569', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {student.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blogs Section */}
            <section style={{ padding: "0 0 8rem", background: '#f8fafc', position: 'relative' }}>

                {/* Advisor Bar */}
                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto 5rem',
                    background: 'linear-gradient(to right, #6d28d9, #3b82f6)',
                    borderRadius: '0 0 10px 10px',
                    padding: '12px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                        TALK TO ADVISOR <span style={{ marginLeft: '10px', fontSize: '1.1rem' }}>+91 9209072990</span>
                    </span>
                </div>

                <div className="container" style={{ position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827' }}>
                            Our <span style={{ color: '#06b6d4' }}>Blogs</span>
                        </h2>
                        <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.5rem' }}>
                            Explore new and trending free online courses.
                        </p>
                    </div>

                    <div style={{ position: 'relative' }}>
                        {/* Scroll Arrows */}
                        <div style={{
                            position: 'absolute',
                            left: '-3rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '45px',
                            height: '45px',
                            background: '#94a3b8',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            opacity: 0.8
                        }}>
                            ←
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '-3rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '45px',
                            height: '45px',
                            background: '#94a3b8',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            zIndex: 10,
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            opacity: 0.8
                        }}>
                            →
                        </div>

                        {/* Blog Cards Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            rowGap: '2rem'
                        }}>
                            {[
                                { title: "What Skills Do You Need To Be a Cloud Engineer?", color: "#d1117b" },
                                { title: "Is Cloud Engineer Entry Level?...", color: "#116d6c" },
                                { title: "How Long Did It Take to Become a Cloud Engineer?...", color: "#fca5a5" },
                                { title: "Can a Fresher Become a Cloud Engineer?...", color: "#581c87" },
                                { title: "What Is the Salary of a Beginner Cloud Engineer?...", color: "#3f6212" },
                                { title: "How to Become a Cloud Engineer Step by Step?...", color: "#9333ea" }
                            ].map((blog, i) => (
                                <BlogCard
                                    key={i}
                                    title={blog.title}
                                    imageColor={blog.color}
                                />
                            ))}
                        </div>
                    </div>

                    {/* View More Button */}
                    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                        <button style={{
                            background: 'linear-gradient(to right, #6d28d9, #3b82f6)',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 3rem',
                            borderRadius: '8px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.2)',
                            transition: 'all 0.3s ease'
                        }}>
                            VIEW MORE BLOGS
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}