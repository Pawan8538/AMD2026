import { motion } from 'framer-motion';
import { Shield, Cpu, Globe, Smartphone, Code2, Users, ChevronRight, Mail, Github } from 'lucide-react';
import ComingSoonBadge from '../components/ComingSoonBadge';
import './About.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

const roadmap = [
    { phase: 'Phase 1', title: 'Prototype', desc: 'Frontend with OCR & pattern matching', status: 'current', quarter: 'Q1 2026' },
    { phase: 'Phase 2', title: 'Backend API', desc: 'FastAPI server, PostgreSQL pattern database, user accounts', status: 'upcoming', quarter: 'Q2 2026' },
    { phase: 'Phase 3', title: 'Browser Extension', desc: 'Chrome/Edge extension for real-time job portal scanning', status: 'upcoming', quarter: 'Q3 2026' },
    { phase: 'Phase 4', title: 'WhatsApp Bot', desc: 'WhatsApp API integration for message-forwarding scans', status: 'upcoming', quarter: 'Q4 2026' },
    { phase: 'Phase 5', title: 'AMD NPU Integration', desc: 'On-device LLM via Ryzen AI NPU for private analysis', status: 'upcoming', quarter: 'Q1 2027' },
    { phase: 'Phase 6', title: 'Mobile App', desc: 'React Native mobile app with offline scanning', status: 'upcoming', quarter: 'Q2 2027' },
];

const techStack = [
    { name: 'React + Vite', category: 'Frontend', color: 'var(--neon-blue)' },
    { name: 'Tesseract.js', category: 'OCR Engine', color: 'var(--neon-green)' },
    { name: 'Framer Motion', category: 'Animations', color: 'var(--neon-purple)' },
    { name: 'AMD Ryzen AI NPU', category: 'Future: On-Device AI', color: 'var(--neon-amber)' },
    { name: 'FastAPI', category: 'Future: Backend', color: 'var(--neon-red)' },
    { name: 'PostgreSQL', category: 'Future: Database', color: 'var(--neon-blue)' },
];

export default function About() {
    return (
        <div className="about-page">
            {/* Mission */}
            <section className="about-hero">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="about-hero-content"
                >
                    <motion.div className="about-badge" variants={fadeUp}>
                        <Shield size={14} />
                        <span>AMD Slingshot 2026 — AI + Cybersecurity</span>
                    </motion.div>

                    <motion.h1 className="about-title" variants={fadeUp}>
                        About SurakshaAI
                    </motion.h1>

                    <motion.p className="about-desc" variants={fadeUp}>
                        SurakshaAI is a privacy-first AI agent designed to protect Indian users
                        from the epidemic of job scams, task frauds, and phishing attacks on
                        messaging platforms. We believe everyone deserves a "second opinion"
                        before falling victim to sophisticated digital fraud.
                    </motion.p>
                </motion.div>
            </section>

            {/* Architecture */}
            <section className="section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        How SurakshaAI Works
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={fadeUp}>
                        A privacy-first architecture where all processing happens on your device
                    </motion.p>

                    <motion.div className="arch-diagram glass-card" variants={fadeUp}>
                        <div className="arch-flow">
                            <div className="arch-node arch-node-input">
                                <Smartphone size={24} />
                                <span>Chat Screenshot</span>
                            </div>
                            <ChevronRight size={20} className="arch-arrow" />
                            <div className="arch-node arch-node-process">
                                <Code2 size={24} />
                                <span>Tesseract.js OCR</span>
                            </div>
                            <ChevronRight size={20} className="arch-arrow" />
                            <div className="arch-node arch-node-process">
                                <Shield size={24} />
                                <span>Pattern Matcher</span>
                            </div>
                            <ChevronRight size={20} className="arch-arrow" />
                            <div className="arch-node arch-node-output">
                                <span className="arch-verdict">Risk Verdict</span>
                            </div>
                        </div>
                        <div className="arch-label">
                            All processing happens in your browser — zero data sent to cloud
                        </div>
                        <div className="arch-future">
                            <div className="arch-node arch-node-future">
                                <Cpu size={24} />
                                <span>AMD Ryzen AI NPU</span>
                                <ComingSoonBadge small />
                            </div>
                            <p className="arch-future-text">
                                Future: On-device LLM for advanced contextual analysis via AMD Ryzen AI NPU
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Tech Stack */}
            <section className="section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        Technology Stack
                    </motion.h2>
                    <div className="grid-3 tech-grid">
                        {techStack.map((tech, i) => (
                            <motion.div key={i} className="tech-item glass-card" variants={fadeUp}>
                                <span className="tech-name" style={{ color: tech.color }}>{tech.name}</span>
                                <span className="tech-category">{tech.category}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Roadmap */}
            <section className="section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        Product Roadmap
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={fadeUp}>
                        From prototype to platform — our journey to protect millions
                    </motion.p>

                    <div className="roadmap">
                        {roadmap.map((item, i) => (
                            <motion.div
                                key={i}
                                className={`roadmap-item glass-card ${item.status === 'current' ? 'roadmap-current' : ''}`}
                                variants={fadeUp}
                            >
                                <div className="roadmap-marker">
                                    <div className={`roadmap-dot ${item.status === 'current' ? 'roadmap-dot-active' : ''}`} />
                                    {i < roadmap.length - 1 && <div className="roadmap-line" />}
                                </div>
                                <div className="roadmap-content">
                                    <div className="roadmap-meta">
                                        <span className="roadmap-phase">{item.phase}</span>
                                        <span className="roadmap-quarter">{item.quarter}</span>
                                        {item.status === 'current' && (
                                            <span className="roadmap-current-tag">Current</span>
                                        )}
                                        {item.status === 'upcoming' && <ComingSoonBadge small />}
                                    </div>
                                    <h3 className="roadmap-title">{item.title}</h3>
                                    <p className="roadmap-desc">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Team Placeholder */}
            <section className="section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        The Team
                    </motion.h2>
                    <motion.div className="team-placeholder glass-card" variants={fadeUp}>
                        <Users size={40} />
                        <p>Team details</p>
                        <h3>Pawan Patidar <a href="mailto:pawanpatidar8538@gmail.com"><Mail size={20} /></a></h3>
                        <h3>Sandeep Patidar <a href="mailto:spatidar6322@gmail.com"><Mail size={20} /></a></h3>
                        <h3>Mayur Rudrawal <a href="mailto:mayurrudrawal@gmail.com"><Mail size={20} /></a></h3> 
                        <a href="https://github.com/pawan8538/AMD2026"><Github size={24} /></a>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
