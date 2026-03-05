import React from 'react';
import BlogCard from '@/components/BlogCard';
import BlogSidebar from '@/components/BlogSidebar';

const blogPosts = [
    {
        id: 'future-of-agi-2026',
        title: 'The Road to AGI: What to Expect in 2026',
        excerpt: 'An authoritative analysis of the current trajectory towards Artificial General Intelligence and its impact on Indian IT sectors.',
        date: 'March 01, 2026'
    },
    {
        id: 'agentic-workflows-enterprise',
        title: 'Implementing Agentic Workflows in Enterprise Systems',
        excerpt: 'How Pravinsoft AI is helping local industries in Pune adopt autonomous agent frameworks for operational efficiency.',
        date: 'February 24, 2026'
    },
    {
        id: 'prompt-engineering-best-practices',
        title: 'Advanced Prompt Engineering: Moving Beyond Basics',
        excerpt: 'A technical deep-dive into chain-of-thought prompting and few-shot learning for complex problem solving.',
        date: 'February 18, 2026'
    }
];

export default function BlogListing() {
    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 className="gradient-text" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>Technical Insights</h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '700px' }}>
                Stay ahead of the curve with expert commentary from the technical faculty at Pravinsoft Technologies LLP.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {blogPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                        />
                    ))}
                </div>
                <BlogSidebar />
            </div>
        </main>
    );
}
