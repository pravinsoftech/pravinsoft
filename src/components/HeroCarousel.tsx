'use client';

import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  'https://res.cloudinary.com/dt3rse8bg/image/upload/v1769875789/01FEB26-01_nardkg.jpg',
  'https://res.cloudinary.com/dt3rse8bg/image/upload/v1769873603/15FEB26-01_rs7qwv.jpg',
  'https://res.cloudinary.com/dt3rse8bg/image/upload/v1769873603/22FEB26-01_hpnjxm.jpg',
  'https://res.cloudinary.com/dt3rse8bg/image/upload/v1769873601/8feb26_i8exxc.jpg',
];

const INTERVAL_MS = 5000;

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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4rem',
      }}
    >
      {/* Background images - non-stop loop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: i === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
                zIndex: 1,
              }}
            />
            <img
              src={src}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="hero-slide-img"
            />
          </div>
        ))}
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
            fontSize: '4.2rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}
        >
          Pravinsoft Technology <br /> Learn With Modern Tech Skills
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            color: '#a1a1aa',
            maxWidth: '720px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          <strong>Pravinsoft Technologies LLP</strong>, located in the prestigious IT corridor of{' '}
          <strong>Hinjewadi, Pune</strong>, is a professional technical education institute dedicated to empowering
          students and working professionals with practical, industry-ready skills. Our structured online training
          programmes are designed to help learners master modern technologies and stay competitive in today&apos;s
          rapidly evolving digital landscape.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/courses" className="btn-primary" style={{ textDecoration: 'none' }}>
            Explore Courses
          </a>
          <a
            href="/about"
            style={{
              background: 'transparent',
              color: 'white',
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
