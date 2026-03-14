'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function ShareModal({ isOpen, onClose, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(url)}`,
    instagram: `#` // Instagram doesn't have a direct share link, usually folks just copy the link
  };

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 9998,
          backdropFilter: 'blur(2px)'
        }} 
        onClick={onClose}
      />
      <div 
        className="glass"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '450px',
          padding: '2rem',
          borderRadius: '16px',
          zIndex: 9999,
          backgroundColor: '#ffffff', // From the screenshot, it's a white card
          color: '#333'
        }}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' }}
        >
          ✕
        </button>
        
        <h3 style={{ color: '#ff6b6b', margin: '0 0 0.5rem 0', fontSize: '1.3rem', fontWeight: 700 }}>Share this course</h3>
        <p style={{ color: '#555', margin: '0 0 1.5rem 0', fontSize: '0.95rem' }}>Share this course's details with your family & friends</p>
        
        <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <input 
            type="text" 
            readOnly 
            value={url} 
            style={{ flex: 1, padding: '0.75rem', border: 'none', outline: 'none', color: '#555', backgroundColor: '#fafafa' }} 
          />
          <button 
            onClick={handleCopy}
            style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '0 1rem', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#1877f2', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
            f
          </a>
          <button onClick={() => navigator.clipboard.writeText(url)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem' }}>
            ig
          </button>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
            w
          </a>
          <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#0a66c2', color: 'white', borderRadius: '50%', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>
            in
          </a>
        </div>
      </div>
    </>
  );
}
