'use client';

import React, { useState } from 'react';
import CourseSidebar from './CourseSidebar';
import CoursePageTabs from './CoursePageTabs';

export default function SoftwareTestingContent() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div style={{ flex: 1, overflow: 'visible' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>Full Stack Software Testing</h1>

            {/* New Course Page Tabs Component */}
            <CoursePageTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Content Sections based on Active Tab */}
            <div style={{ color: '#334155', lineHeight: 1.6, fontSize: '15.5px', overflow: 'visible' }}>
                {activeTab === 'overview' && (
                    <div className="animate-fade-in">
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1rem' }}>Course Overview</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            The <strong>Full Stack Software Testing</strong> course is designed to provide participants with a comprehensive understanding of software testing across the entire stack, including both front-end and back-end testing. This course covers key concepts, techniques, and best practices for ensuring software quality through automated and manual testing methods.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Learn software skills with real experts, either in live classes with videos or without videos, whichever suits you best.
                        </p>

                        <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#000', textTransform: 'uppercase', marginBottom: '1rem', marginTop: '2rem' }}>HIGHLIGTHS</h4>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', listStyleType: 'disc', color: '#1a202c' }}>
                            {['LAB Support (Online & Offline)', 'Communication Skills', 'Mock - Interviews', 'Regular Assignments', 'Resume Preparation', 'Naukri Assistance'].map((h, i) => (
                                <li key={i} style={{ marginBottom: '6px' }}>{h}</li>
                            ))}
                        </ul>

                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1rem' }}>Description</h2>
                        <p style={{ marginBottom: '2.5rem' }}>
                            This course begins with an introduction to <strong>software testing</strong> and the importance of a full-stack approach in the software development lifecycle. Participants will learn about various testing tools and frameworks for both front-end and back-end testing. The course covers topics such as <strong>locating web elements, performing actions, handling dynamic content,</strong> and <strong>creating robust test scripts.</strong> Practical examples, hands-on projects, and real-world scenarios will be used to reinforce theoretical concepts.
                        </p>

                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1rem', marginTop: '3rem' }}>Course Objectives</h2>
                        <p style={{ marginBottom: '1rem' }}>The primary objectives of the Full Stack Software Testing course are as follows:</p>
                        <ol style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', color: '#1a202c' }}>
                            <li style={{ marginBottom: '10px' }}><strong>Introduction to Software Testing:</strong> Provide an overview of software testing and its significance in ensuring software quality.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Full Stack Testing:</strong> Understand the role of testing across the full software stack, including front-end and back-end components.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Testing Tools and Frameworks:</strong> Explore various testing tools and frameworks used for automating and managing tests.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Locating Web Elements:</strong> Learn techniques for identifying and locating HTML elements on web pages for interaction.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Performing Actions:</strong> Understand how to perform various actions on web elements, such as clicks, inputs, and selections.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Handling Dynamic Content:</strong> Explore strategies for handling dynamic content and asynchronous operations in testing.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Testing Framework Integration:</strong> Learn how to integrate various testing frameworks like <strong>TestNG, JUnit,</strong> and <strong>Selenium.</strong></li>
                            <li style={{ marginBottom: '10px' }}><strong>Page Object Model (POM):</strong> Understand the concept of the Page Object Model for creating maintainable and scalable test scripts.</li>
                            <li style={{ marginBottom: '10px' }}><strong>API Testing:</strong> Learn techniques for testing APIs to ensure back-end functionality.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Cross-Browser Testing:</strong> Explore techniques for conducting cross-browser testing to ensure compatibility across different browsers.</li>
                            <li style={{ marginBottom: '10px' }}><strong>Performance Testing:</strong> Understand the importance of performance testing and tools like <strong>JMeter.</strong></li>
                            <li style={{ marginBottom: '10px' }}><strong>Security Testing:</strong> Learn basic concepts and tools for testing the security of applications.</li>
                        </ol>

                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1.25rem' }}>Prerequisites</h2>
                        <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc', color: '#1a202c' }}>
                            <li style={{ marginBottom: '8px' }}>Basic understanding of <strong>software testing concepts.</strong></li>
                            <li style={{ marginBottom: '8px' }}>Familiarity with at least one <strong>programming language</strong> (e.g., Java, Python).</li>
                            <li style={{ marginBottom: '8px' }}>Knowledge of <strong>HTML</strong> and <strong>CSS.</strong></li>
                            <li style={{ marginBottom: '8px' }}>Understanding of <strong>web browsers</strong> and their developer tools.</li>
                            <li style={{ marginBottom: '8px' }}>Awareness of <strong>test automation principles</strong> and frameworks.</li>
                            <li style={{ marginBottom: '8px' }}>Experience with using and navigating <strong>integrated development environments (IDEs).</strong></li>
                        </ul>
                    </div>
                )}
                {activeTab === 'curriculum' && (
                    <div className="animate-fade-in content-curriculum">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            {/* Manual Testing Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2563eb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#2563eb', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>01</span>
                                    Manual Testing
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Foundations & Methods</h4>
                                        <ul className="module-list">
                                            <li>Introduction of Manual Testing</li>
                                            <li>Testing Methods / Techniques</li>
                                            <li>Level of Testing</li>
                                            <li>SDLC (Waterfall, Prototype, Evolutionary, Spiral, V-Model)</li>
                                            <li>Agile Methodology</li>
                                            <li>Difference between QA & QC</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">STLC & Documentation</h4>
                                        <ul className="module-list">
                                            <li>STLC Phases (Planning, Development, Execution)</li>
                                            <li>Result Analysis & Bug Tracking</li>
                                            <li>Test Scenarios Design Guidelines</li>
                                            <li>Test Case Design Guidelines</li>
                                            <li>Entry and Exit Criteria</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Bug Management & Tools</h4>
                                        <ul className="module-list">
                                            <li>Bug Life Cycle & Logging Defects</li>
                                            <li>Severity and Priority (Types & Categorization)</li>
                                            <li>JIRA (Installation, Sprints, Agile Release)</li>
                                            <li>Zephyr Scale for Test Management</li>
                                            <li>Bug Leakage vs Bug Release</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Specialized Testing Types</h4>
                                        <ul className="module-list" style={{ fontSize: '13px' }}>
                                            <li>Smoke, Sanity, Static & Dynamic Testing</li>
                                            <li>Compatibility, Usability & Integration Testing</li>
                                            <li>Alpha & Beta Testing</li>
                                            <li>Security, Installation & Load Testing</li>
                                            <li>Exploratory, Ad hoc & End-to-End Testing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Core Java Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#7c3aed', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#7c3aed', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>02</span>
                                    Core Java Essentials
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Java Fundamentals</h4>
                                        <ul className="module-list">
                                            <li>History & Platform Independency</li>
                                            <li>Installation & Environment Setup</li>
                                            <li>Programming Elements (Variables, Methods, Classes)</li>
                                            <li>Data Types & Type Casting</li>
                                            <li>Operators & Control Statements</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Object Oriented Programming</h4>
                                        <ul className="module-list">
                                            <li>Encapsulation & Inheritance</li>
                                            <li>Abstraction & Abstract Classes</li>
                                            <li>Interfaces & Polymorphism</li>
                                            <li>Method Overloading & Overriding</li>
                                            <li>'this' and 'super' Keywords</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Advanced Java Concepts</h4>
                                        <ul className="module-list">
                                            <li>Exception Handling (try-catch-throws)</li>
                                            <li>String Handling (Buffer, Builder, Tokenizer)</li>
                                            <li>Reflection API & Dynamic Loading</li>
                                            <li>Wrapper Classes (Autoboxing/Unboxing)</li>
                                            <li>Packages & Access Modifiers</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Data Structures & Collections</h4>
                                        <ul className="module-list">
                                            <li>Arrays (1D, 2D, Multi-dimensional)</li>
                                            <li>Generics & Collection Framework Hierarchy</li>
                                            <li>List, Queue & Set Interfaces</li>
                                            <li>ArrayList, LinkedList, HashSet, TreeSet</li>
                                            <li>Map Interface (HashMap, TreeMap)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Static placeholders for other tabs */}
                {!['overview', 'curriculum'].includes(activeTab) && (
                    <div className="animate-fade-in" style={{ padding: '3rem 0', textAlign: 'center', background: '#f8fafc', borderRadius: '8px' }}>
                        <p style={{ color: '#64748b' }}>Details for {activeTab} will be updated soon.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }
                .module-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #475569;
                    margin-bottom: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .module-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .module-list li {
                    font-size: 13.5px;
                    color: #1e293b;
                    padding-left: 20px;
                    position: relative;
                    margin-bottom: 8px;
                    line-height: 1.4;
                }
                .module-list li::before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #3b82f6;
                    font-weight: 700;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
