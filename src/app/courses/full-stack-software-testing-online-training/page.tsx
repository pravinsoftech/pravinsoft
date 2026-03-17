import React from 'react';
import { Metadata } from 'next';
import CourseHero from '@/components/CourseHero';
import SoftwareTestingContent from '@/components/SoftwareTestingContent';
import CourseSidebar from '@/components/CourseSidebar';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Full Stack Software Testing Online Training | Pravinsoft Technologies",
    description: "Enroll in the most comprehensive Full Stack Software Testing program. Master manual testing, automation, selenium, and more with 100% placement assistance.",
    keywords: ["Software Testing Training", "Full Stack Testing Course", "Selenium Automation", "Manual Testing", "Test Automation"],
    openGraph: {
      title: "Full Stack Software Testing Training | Pravinsoft Technologies",
      description: "6 Months intensive program to become a production-ready Software Tester.",
      images: ['/logo.jpg'],
    }
  };
}

export default function SoftwareTestingPage() {
  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '0' }}>
      <CourseHero 
        title="Software Testing" 
        subtitle="Full Stack" 
        breadcrumbs={[
            { label: 'Full Stack Courses', href: '/courses/full-stack' },
            { label: 'Full Stack Software Testing' }
        ]}
        duration="6 Months"
        fee="Contact Us"
      />
      
      {/* Detailed Content Section with Tabs and Sidebar Form */}
      <section style={{ padding: '2rem 0 6rem', background: '#fff' }}>
        <div className="container course-layout-grid">
          <SoftwareTestingContent />
          <CourseSidebar />
        </div>
      </section>
    </main>
  );
}
