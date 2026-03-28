import React from 'react';
import { Metadata } from 'next';
import CourseHero from '@/components/CourseHero';
import JobAssistance from '@/components/JobAssistance';
import CourseSidebar from '@/components/CourseSidebar';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Job Assistance | Pravinsoft Technologies",
    description: "Our Job Assistance program provides comprehensive support to help you land your dream job in tech. Resume building, mock interviews, and placement support.",
    keywords: ["Job Assistance", "Career Support", "Placement Assistance", "Software Testing Jobs", "Resume Building"],
    openGraph: {
      title: "Job Assistance Program | Pravinsoft Technologies",
      description: "Get the career support you need to succeed in the tech industry.",
      images: ['/logo.jpg'],
    }
  };
}

export default function JobAssistancePage() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '0' }}>
      <CourseHero 
        title="Job Assistance" 
        subtitle="Career Support" 
        breadcrumbs={[
            { label: 'Full Stack Courses', href: '/courses/full-stack' },
            { label: 'Job Assistance' }
        ]}
        duration="Custom"
        fee="Free"
      />
      
      {/* Detailed Content Section with Tabs and Sidebar Form */}
      <section style={{ padding: '2rem 0 6rem', background: '#fff' }}>
        <div className="container course-layout-grid">
          <JobAssistance />
          <CourseSidebar />
        </div>
      </section>
    </main>
  );
}
