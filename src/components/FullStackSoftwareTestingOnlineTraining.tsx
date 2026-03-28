'use client';

import React, { useState, useEffect, useRef } from 'react';
import CoursePageTabs from './CoursePageTabs';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import type { UpcomingBatchRow } from '@/app/training/new-batches/types';

export default function FullStackSoftwareTestingOnlineTraining() {
    const [activeTab, setActiveTab] = useState('overview');
    const [batches, setBatches] = useState<UpcomingBatchRow[]>([]);
    const [loading, setLoading] = useState(true);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        async function fetchBatches() {
            try {
                // Fetch all upcoming batches
                const { data, error } = await supabase
                    .from('upcoming_courses_batch')
                    .select(`
                        id,
                        training_nature,
                        start_date,
                        start_time,
                        demo_link,
                        course:course_id ( id, course_name ),
                        faculty:faculty_id ( id, name )
                    `)
                    .eq('status', 'live')
                    .order('start_date', { ascending: true });

                if (error) throw error;

                // Format arrays if needed (Supabase edge case) and filter for Software Testing
                const formatted = (data || []).map((b) => ({
                    ...b,
                    course: Array.isArray(b.course) ? b.course[0] : b.course,
                    faculty: Array.isArray(b.faculty) ? b.faculty[0] : b.faculty,
                })).filter(b =>
                    b.course?.course_name?.toLowerCase().includes('testing')
                ) as unknown as UpcomingBatchRow[];

                setBatches(formatted);
            } catch (err) {
                console.error('Error fetching batches:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchBatches();
    }, []);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        isScrollingRef.current = true;

        const element = document.getElementById(tabId);
        if (element) {
            const offset = 160; // Adjust for sticky header and tabs
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Clear existing timeout
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        // Reset scrolling flag after animation finishes
        scrollTimeoutRef.current = setTimeout(() => {
            isScrollingRef.current = false;
        }, 800);
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-160px 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            if (isScrollingRef.current) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sectionIds = ['overview', 'curriculum', 'certificate', 'upcoming-batches', 'training-features', 'reviews'];

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);


    return (
        <div style={{ flex: 1, overflow: 'visible' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>Full Stack Software Testing</h1>

            {/* New Course Page Tabs Component */}
            <CoursePageTabs activeTab={activeTab} onTabChange={handleTabChange} />

            {/* Content Sections - Now all rendered sequentially */}
            <div style={{ color: '#334155', lineHeight: 1.6, fontSize: '15.5px', overflow: 'visible' }}>
                <div id="overview" className="section-container" style={{ marginBottom: '4rem' }}>
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
                </div>

                <div id="curriculum" className="section-container" style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem' }}>Course Curriculum</h2>
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
                                            <li>&apos;this&apos; and &apos;super&apos; Keywords</li>
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
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Modern Java & Concurrency</h4>
                                        <ul className="module-list">
                                            <li>JDK 8 Features (Lambdas, Streams, Optional)</li>
                                            <li>Functional Interfaces & Method References</li>
                                            <li>Multi-Threading & Concurrency Basics</li>
                                            <li>Garbage Collection & Memory Model</li>
                                            <li>JDK 10/11+ Language Enhancements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Advanced Java Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0891b2', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#0891b2', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>03</span>
                                    Advanced Java (JDBC, Servlets & JSP)
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">JDBC – Database Connectivity</h4>
                                        <ul className="module-list">
                                            <li>JDBC Architecture & Driver Types</li>
                                            <li>Establishing Database Connections</li>
                                            <li>Statement & PreparedStatement</li>
                                            <li>CallableStatement & ResultSet Metadata</li>
                                            <li>Batch Processing & Transaction Management</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Servlets – Server-Side Programming</h4>
                                        <ul className="module-list">
                                            <li>Servlet Lifecycle & Deployment</li>
                                            <li>HttpServlet, Request & Response Handling</li>
                                            <li>Session Management (Cookies, HttpSession)</li>
                                            <li>Request Dispatching & Redirection</li>
                                            <li>Filters, Listeners & Servlet Security</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">JSP – Java Server Pages</h4>
                                        <ul className="module-list">
                                            <li>JSP Scripting Elements & Implicit Objects</li>
                                            <li>Directives & Standard Actions</li>
                                            <li>JavaBeans Integration in JSP</li>
                                            <li>Expression Language (EL) & JSTL</li>
                                            <li>Custom Tags & MVC Architecture with JSP</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Database / Oracle Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#b45309', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#b45309', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>04</span>
                                    Database Fundamentals (SQL & Oracle)
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">SQL Core Concepts</h4>
                                        <ul className="module-list">
                                            <li>RDBMS Concepts & Database Design</li>
                                            <li>DDL, DML & DRL Commands</li>
                                            <li>Built-in Functions & Integrity Constraints</li>
                                            <li>Joins & Sub-Queries</li>
                                            <li>Views, Indexes & Transactions</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">PL/SQL & Stored Programs</h4>
                                        <ul className="module-list">
                                            <li>PL/SQL Blocks & Control Structures</li>
                                            <li>Error Handling in PL/SQL</li>
                                            <li>Stored Procedures & Functions</li>
                                            <li>Database Triggers</li>
                                            <li>Cursors & Collections</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Front-End Technologies Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#059669', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#059669', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>05</span>
                                    Front-End Technologies (HTML, CSS & JavaScript)
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">HTML & HTML5</h4>
                                        <ul className="module-list">
                                            <li>Web Fundamentals & Internet Services</li>
                                            <li>Core Tags: Tables, Lists, Forms & Frames</li>
                                            <li>HTML5 Semantic Elements & Media</li>
                                            <li>Canvas, SVG & 2D/3D Graphics</li>
                                            <li>Geolocation & Browser Integration</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">CSS & CSS3</h4>
                                        <ul className="module-list">
                                            <li>Selectors, Properties & Box Model</li>
                                            <li>Layouts: Flexbox & Grid</li>
                                            <li>CSS3 Transitions & Animations</li>
                                            <li>2D/3D Transforms & Multiple Columns</li>
                                            <li>Responsive Design & Media Queries</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">JavaScript (Core & DOM)</h4>
                                        <ul className="module-list">
                                            <li>Variables, Operators & Control Flow</li>
                                            <li>Functions, Arrays & Objects</li>
                                            <li>DOM Manipulation & Browser Events</li>
                                            <li>OOP in JavaScript & Error Handling</li>
                                            <li>Regular Expressions & Web Hosting Basics</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Bootstrap</h4>
                                        <ul className="module-list">
                                            <li>Bootstrap Grid System & Breakpoints</li>
                                            <li>UI Components: Buttons, Cards & Modals</li>
                                            <li>Navigation, Forms & Tables</li>
                                            <li>Utility Classes & Customization</li>
                                            <li>Responsive Layouts with Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ReactJS Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0369a1', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#0369a1', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>06</span>
                                    ReactJS
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">React Core Concepts</h4>
                                        <ul className="module-list">
                                            <li>React Overview & JSX Syntax</li>
                                            <li>Components, Props & State Management</li>
                                            <li>Component Lifecycle Methods</li>
                                            <li>React Hooks (useState, useEffect, etc.)</li>
                                            <li>Styling Components & Debugging</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Advanced React</h4>
                                        <ul className="module-list">
                                            <li>React Router v5 & v6 (Client-Side Navigation)</li>
                                            <li>Forms, Validation & Controlled Components</li>
                                            <li>HTTP / AJAX Requests in React</li>
                                            <li>Redux for Global State Management</li>
                                            <li>Material UI & Component Libraries</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">React Ecosystem & Deployment</h4>
                                        <ul className="module-list">
                                            <li>React 18 New Features & Concurrent Mode</li>
                                            <li>Unit Testing in React (Jest & RTL)</li>
                                            <li>Webpack Primer & Build Optimization</li>
                                            <li>Server-Side Rendering (SSR) Concepts</li>
                                            <li>Deploying React Apps to the Cloud</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Spring Boot & Microservices Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#be185d', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#be185d', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>07</span>
                                    Spring Boot & Microservices
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Spring Boot Essentials</h4>
                                        <ul className="module-list">
                                            <li>Spring Boot Setup & Project Structure</li>
                                            <li>REST API Development & CRUD with JPA</li>
                                            <li>Spring Boot Profiles & Auto-Configuration</li>
                                            <li>Actuator, Custom Logging & Monitoring</li>
                                            <li>Thymeleaf Templating & Spring Web</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Security & Database</h4>
                                        <ul className="module-list">
                                            <li>Spring Security & OAuth2 Integration</li>
                                            <li>JWT-Based Authentication</li>
                                            <li>JPA Repository Patterns & Relationships</li>
                                            <li>Database Configuration & Connection Pooling</li>
                                            <li>Swagger API Documentation</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Microservices Architecture</h4>
                                        <ul className="module-list">
                                            <li>Microservices Design Principles & Patterns</li>
                                            <li>Spring Cloud Config & Service Discovery</li>
                                            <li>Netflix Eureka, Ribbon & Feign</li>
                                            <li>API Gateway & Fault Tolerance (Hystrix/Resilience4j)</li>
                                            <li>Message Queues & Cloud Bus Integration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* DevOps & Tools Section */}
                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#4f46e5', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ background: '#4f46e5', color: '#fff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>08</span>
                                    DevOps, Testing & Productivity Tools
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Version Control & CI/CD</h4>
                                        <ul className="module-list">
                                            <li>Git Fundamentals & Branching Strategies</li>
                                            <li>GitHub Collaboration & Pull Requests</li>
                                            <li>Jenkins Pipelines & Build Automation</li>
                                            <li>Maven – Dependency & Build Management</li>
                                            <li>SonarQube for Code Quality Analysis</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Containerization & Monitoring</h4>
                                        <ul className="module-list">
                                            <li>Docker – Images, Containers & Volumes</li>
                                            <li>Datadog for Application Performance Monitoring</li>
                                            <li>SLF4J Logging Framework</li>
                                            <li>ELK Stack (Elasticsearch, Logstash, Kibana)</li>
                                            <li>Cloud Deployment (Heroku & Beyond)</li>
                                        </ul>
                                    </div>
                                    <div className="curriculum-module">
                                        <h4 className="module-title">Testing & Project Management Tools</h4>
                                        <ul className="module-list">
                                            <li>JUnit – Unit Testing for Java</li>
                                            <li>Mockito – Mocking & Test Isolation</li>
                                            <li>JMeter – Performance & Load Testing</li>
                                            <li>JIRA – Sprint & Issue Tracking</li>
                                            <li>Chef – Infrastructure as Code Basics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Additional sections for the other tabs */}
                <div id="certificate" className="section-container" style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem' }}>Course Completion Certificate</h2>
                    <div className="animate-fade-in" style={{ background: '#f8fafc', borderRadius: '12px', padding: '2rem', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1', minWidth: '240px' }}>
                                <p style={{ marginBottom: '1rem', fontSize: '1rem', color: '#475569' }}>
                                    Upon successful completion of the Full Stack Software Testing course, you will receive a professional certificate from Pravinsoft Technologies LLP.
                                </p>
                                <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: '#64748b', fontSize: '0.9rem' }}>
                                    <li>Validates your expertise in Manual & Automation Testing</li>
                                    <li>Industry-recognized certification</li>
                                    <li>Shareable on LinkedIn and professional resumes</li>
                                    <li>Includes unique verification ID</li>
                                </ul>
                            </div>
                            <div style={{ flex: '1', minWidth: '240px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '280px', borderRadius: '12px', overflow: 'hidden' }}>
                                    <Image
                                        src="/images/Asset 5.svg"
                                        alt="Software Testing Certification"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="upcoming-batches" className="section-container" style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem' }}>Software Testing - Upcoming Batches</h2>
                    <div className="animate-fade-in" style={{ overflowX: 'auto' }}>
                        {loading ? (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading live batches...</div>
                        ) : batches.length > 0 ? (
                            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                                <thead style={{ background: '#f1f5f9' }}>
                                    <tr>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>SR NO</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>COURSE NAME</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>FACULTY</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>DATE</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>TIME</th>
                                        <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#475569', borderBottom: '2px solid #e2e8f0' }}>MEETING LINK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {batches.map((batch, idx) => (
                                        <tr key={batch.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>{String(idx + 1).padStart(2, '0')}</td>
                                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>{batch.course?.course_name}</td>
                                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>{batch.faculty?.name || 'Expert Faculty'}</td>
                                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#1e293b' }}>{new Date(batch.start_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#64748b' }}>{batch.start_time || 'Check Schedule'}</td>
                                            <td style={{ padding: '1rem', textAlign: 'center' }}>
                                                {batch.demo_link ? (
                                                    <Link href={batch.demo_link} target="_blank" style={{ display: 'inline-block', padding: '0.4rem 0.8rem', background: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Join Link</Link>
                                                ) : (
                                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8 italic' }}>Contact Support</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div style={{ padding: '3rem', textAlign: 'center', background: '#f8fafc', borderRadius: '12px', color: '#64748b', fontSize: '0.9rem' }}>
                                No upcoming batches for Software Testing at the moment. Please contact us for details.
                            </div>
                        )}
                        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center' }}>
                            * New batches starting regularly. For corporate enquiries, please reach out to our team.
                        </p>
                    </div>
                </div>

                <div id="training-features" className="section-container" style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '2.5rem' }}>Our Key Learning Advantages</h2>
                    <div className="animate-fade-in">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { id: "curriculum", title: "Comprehensive Curriculum", desc: "Master software testing with a curriculum covering manual, automation, API, and performance testing.", icon: "/images/Asset 1.svg" },
                                { id: "projects", title: "Hands-On Projects", desc: "Apply testing skills to real-world software applications for practical experience and mastery.", icon: "/images/Asset 2.svg" },
                                { id: "instructors", title: "Expert Instructors", desc: "Learn from testing industry veterans with years of automation and Selenium experience.", icon: "/images/Asset 3.svg" },
                                { id: "placement", title: "Job Placement Assistance", desc: "Access dedicated career support, resume building, and connections with top hiring partners.", icon: "/images/Asset 4.svg" },
                                { id: "certification", title: "Global Certification", desc: "Receive a recognized certification validating your professional software testing skills.", icon: "/images/Asset 5.svg" },
                                { id: "support", title: "24/7 Mentorship", desc: "Access round-the-clock lab support and mentorship for a seamless learning journey.", icon: "/images/Asset 6.svg" }
                            ].map((feature) => (
                                <div key={feature.id} style={{ padding: "3rem 1.75rem 1.75rem", background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative', marginTop: '2rem' }}>
                                    <div style={{ width: '100px', height: '100px', position: 'absolute', top: '-50px', left: '1.75rem' }}>
                                        <Image src={feature.icon} alt={feature.title} width={100} height={100} />
                                    </div>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: '#1e293b', marginBottom: "0.75rem" }}>{feature.title}</h3>
                                    <p style={{ color: "#64748b", fontSize: '0.9rem', lineHeight: "1.6" }}>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="reviews" className="section-container" style={{ marginBottom: '4rem', paddingTop: '1rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem' }}>Student Reviews</h2>
                    <div className="animate-fade-in">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { name: "Pranit Jadhav", text: "I am a working professional and this testing training helped me upgrade my skills. Pravin Sir explains every topic patiently and clears all doubts.", initial: "P", color: "#3b82f6" },
                                { name: "Nikhil Gadhak", text: "One of the best mentorships focusing on practical, in-depth learning rather than just theory. Highly recommended for career growth in IT.", initial: "N", color: "#4338ca" },
                                { name: "Mayur Kamthe", text: "The Selenium automation course was very deep. I learned how things are applied in real projects. Ideal for future-proof career.", initial: "M", color: "#a21caf" }
                            ].map((review, idx) => (
                                <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9', position: 'relative' }}>
                                    <div style={{ fontSize: '2rem', color: '#e2e8f0', position: 'absolute', top: '1rem', right: '1.5rem' }}>“</div>
                                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{review.text}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: review.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem' }}>
                                            {review.initial}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.9rem' }}>{review.name}</div>
                                            <div style={{ display: 'flex', gap: '2px' }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} style={{ color: '#fbbf24', fontSize: '0.75rem' }}>★</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Compact Career Statistics Banner (3:1 Ratio Style) */}
                <div className="responsive-stats-banner" style={{ marginTop: '4rem' }}>
                    <div style={{ flex: '2', zIndex: 1 }}>
                        <h2 style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', marginBottom: '1.25rem', letterSpacing: '0.05rem', textTransform: 'uppercase' }}>
                            Average package of course (Full Stack Software Testing)
                        </h2>

                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0891b2', lineHeight: 1 }}>30%</span>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', lineHeight: 1.2, textTransform: 'uppercase' }}>
                                    Avg<br />salary hike
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#e11d48', lineHeight: 1 }}>5L</span>
                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', lineHeight: 1.2, textTransform: 'uppercase' }}>
                                    Avg<br />Package
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', zIndex: 1 }}>
                        <div style={{ position: 'relative', width: '220px', height: '140px' }}>
                            <Image
                                src="/images/Asset 11.svg"
                                alt="Career Growth Success"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Background subtle design */}
                    <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                </div>
            </div>


            <style jsx>{`
                .section-container {
                    scroll-margin-top: 160px;
                }
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