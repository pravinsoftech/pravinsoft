'use client';

import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  'https://res.cloudinary.com/dnv6cez4g/image/upload/v1772883587/it-specialist-types-code-dual-monitors-cozy-home-office_sywlbw.jpg',
  'https://res.cloudinary.com/dnv6cez4g/image/upload/v1772883577/teleworker-using-laptop-coding-software-developing_mvzcsv.jpg',
  'https://res.cloudinary.com/dnv6cez4g/image/upload/v1772883500/portrait-happy-photo-editor-browsing-through-images_hrph72.jpg',
  'https://res.cloudinary.com/dnv6cez4g/image/upload/v1772883490/male-developer-entering-binary-data-terminal-panel_af7e8f.jpg',
];

const INTERVAL_MS = 3000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Background images - non-stop loop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 0.9s ease-in-out',
          }}
        >
          {HERO_IMAGES.map((src) => (
            <div
              key={src}
              style={{
                minWidth: '100%',
                height: '100%',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                  zIndex: 1,
                }}
              />
              <img
                src={src}
                alt=""
                style={{
                  width: '100%',
                  height: '80%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                className="hero-slide-img"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Glow overlays */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)',
          top: '-200px',
          left: '-200px',
          filter: 'blur(100px)',
          opacity: 0.3,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--glow-secondary) 0%, transparent 70%)',
          bottom: '-200px',
          right: '-200px',
          filter: 'blur(100px)',
          opacity: 0.3,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h1
          className="gradient-text"
          style={{
            fontSize: 'clamp(1.8rem, 8vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            lineHeight: 1.2,
            padding: '0 1rem',
          }}
        >
          Master the Future of <br /> Technology with PravinSoft
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.9rem, 4vw, 1.25rem)',
            color: '#a1a1aa',
            maxWidth: '720px',
            margin: '0 auto 2rem',
            lineHeight: 1.6,
          }}
        >
          Specialized and industry-recognized software training programs in Hinjewadi, Pune. 
          Expert instruction, real-time projects, and 100% placement support to jumpstart your career.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
            Explore Courses
          </a>
          <a
            href="/about"
            style={{
              background: 'grey',
              color: 'yellow',
              border: '1px solid var(--glass-border)',
              padding: '0.8rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
