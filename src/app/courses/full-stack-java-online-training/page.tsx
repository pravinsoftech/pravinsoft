import React from 'react';
import { Metadata } from 'next';
import JavaFullStackClient from '@/components/JavaFullStackClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Full Stack Java Developer Training Pune | Pravinsoft Technologies",
    description: "Enroll in the most comprehensive Full Stack Java Developer program in Hinjewadi, Pune. Master Core Java, Spring Boot, Microservices, and ReactJS with 100% placement assistance.",
    keywords: ["Full Stack Java Training Pune", "Java Developer Course Hinjewadi", "Spring Boot Microservices Course", "Java Training with Placement"],
    openGraph: {
      title: "Full Stack Java Developer Training | Pravinsoft Technologies",
      description: "6 Months intensive program to become a production-ready Java Full Stack Developer.",
      images: ['/logo.jpg'],
    }
  };
}

export default function JavaFullStackPage() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      <JavaFullStackClient />
    </main>
  );
}
