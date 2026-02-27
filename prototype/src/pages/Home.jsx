import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
    Shield, ScanSearch, Link2, Mail, Globe,
    ArrowRight, Upload, Cpu, Lock, Eye, Zap, ChevronRight
} from 'lucide-react';
import ComingSoonBadge from '../components/ComingSoonBadge';
import './Home.css';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
    return (
        <div className="home-page">
            {/* === HERO === */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-orb hero-orb-1" />
                    <div className="hero-orb hero-orb-2" />
                    <div className="hero-orb hero-orb-3" />
                    <div className="hero-grid" />
                </div>

                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.div className="hero-badge" variants={fadeUp}>
                        <Shield size={14} />
                        <span>AMD Slingshot 2026 — AI + Cybersecurity + Privacy</span>
                    </motion.div>

                    <motion.h1 className="hero-title" variants={fadeUp}>
                        Your AI Guardian
                        <br />
                        Against <span className="hero-highlight">Digital Fraud</span>
                    </motion.h1>

                    <motion.p className="hero-subtitle" variants={fadeUp}>
                        Upload a screenshot of any suspicious chat, job offer, or message.
                        SurakshaAI instantly detects scam patterns and tells you exactly why
                        it's dangerous — with zero data leaving your device.
                    </motion.p>

                    <motion.div className="hero-actions" variants={fadeUp}>
                        <Link to="/scanner" className="btn-neon btn-neon-green">
                            <ScanSearch size={18} />
                            Try the Scanner
                            <ArrowRight size={16} />
                        </Link>
                        <Link to="/about" className="btn-outline">
                            Learn More
                        </Link>
                    </motion.div>

                    <motion.div className="hero-stats-row" variants={fadeUp}>
                        <div className="hero-stat">
                            <span className="hero-stat-value">500Cr+</span>
                            <span className="hero-stat-label">Annual Fraud Losses (INR)</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="hero-stat-value">42%</span>
                            <span className="hero-stat-label">Users Targeted on WhatsApp</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="hero-stat-value">86%</span>
                            <span className="hero-stat-label">Fraud via Messaging Apps</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* === HOW IT WORKS === */}
            <section className="section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        How It Works
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={fadeUp}>
                        Three simple steps to verify any suspicious message
                    </motion.p>

                    <div className="steps-grid">
                        {[
                            { icon: <Upload size={32} />, step: '01', title: 'Upload Screenshot', desc: 'Take a screenshot of the suspicious WhatsApp or Telegram chat and upload it to SurakshaAI.' },
                            { icon: <Eye size={32} />, step: '02', title: 'AI Analyzes', desc: 'Our OCR engine extracts text, then pattern recognition scans for 50+ known Indian scam indicators.' },
                            { icon: <Shield size={32} />, step: '03', title: 'Get Your Verdict', desc: 'Receive an explainable Risk Scorecard showing exactly which words triggered the alert and why.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="step-card glass-card"
                                variants={fadeUp}
                            >
                                <div className="step-number">{item.step}</div>
                                <div className="step-icon">{item.icon}</div>
                                <h3 className="step-title">{item.title}</h3>
                                <p className="step-desc">{item.desc}</p>
                                {i < 2 && <ChevronRight size={20} className="step-arrow" />}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* === FEATURES === */}
            <section className="section features-section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        Comprehensive Protection
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={fadeUp}>
                        Multi-channel defense against digital fraud
                    </motion.p>

                    <div className="grid-4 features-grid">
                        {[
                            { icon: <ScanSearch size={28} />, title: 'Screenshot Scanner', desc: 'Upload chat screenshots for instant scam detection with OCR-powered text extraction.', active: true },
                            { icon: <Link2 size={28} />, title: 'URL Safety Checker', desc: 'Paste any job posting URL to check domain reputation and detect phishing sites.', soon: true },
                            { icon: <Mail size={28} />, title: 'Email Analyzer', desc: 'Forward recruitment emails to analyze headers, sender reputation, and content patterns.', soon: true },
                            { icon: <Globe size={28} />, title: 'Browser Extension', desc: 'Real-time scanning on job portals like Naukri, LinkedIn, and Indeed while you browse.', soon: true },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className={`feature-card glass-card ${feature.active ? 'feature-card-active' : ''}`}
                                variants={fadeUp}
                                whileHover={{ y: -5 }}
                            >
                                {feature.soon && <ComingSoonBadge />}
                                <div className={`feature-icon ${feature.active ? 'feature-icon-active' : ''}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-desc">{feature.desc}</p>
                                {feature.active && (
                                    <Link to="/scanner" className="feature-link">
                                        Try Now <ArrowRight size={14} />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* === IMPACT STATS === */}
            <section className="section stats-section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                >
                    <motion.h2 className="section-title" variants={fadeUp}>
                        The Scale of the Problem
                    </motion.h2>
                    <motion.p className="section-subtitle" variants={fadeUp}>
                        Why India needs SurakshaAI right now
                    </motion.p>

                    <div className="grid-3 stats-grid">
                        {[
                            { value: 500, suffix: 'Cr+', label: 'Annual Fraud Losses (INR)', color: 'var(--neon-red)' },
                            { value: 42, suffix: '%', label: 'WhatsApp Users Targeted', color: 'var(--neon-amber)' },
                            { value: 300, suffix: '+', label: 'Task Fraud Reports (Pune Q4 2025)', color: 'var(--neon-blue)' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="stat-card glass-card"
                                variants={fadeUp}
                            >
                                <div className="stat-value" style={{ color: stat.color }}>
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="stat-label">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* === AMD SYNERGY === */}
            <section className="section amd-section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={stagger}
                    className="amd-content"
                >
                    <motion.div className="amd-text" variants={fadeUp}>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            Powered by AMD Ryzen AI
                        </h2>
                        <p className="amd-desc">
                            SurakshaAI is designed for privacy-first, on-device AI processing.
                            Using AMD Ryzen AI NPU, all scam analysis happens locally on your
                            machine — your chat screenshots never leave your device.
                        </p>
                        <div className="amd-features">
                            {[
                                { icon: <Lock size={18} />, text: 'Zero data sent to cloud — complete privacy' },
                                { icon: <Zap size={18} />, text: 'Low-latency inference on NPU hardware' },
                                { icon: <Cpu size={18} />, text: 'Battery-efficient AI processing' },
                            ].map((item, i) => (
                                <div key={i} className="amd-feature">
                                    <span className="amd-feature-icon">{item.icon}</span>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="amd-visual" variants={fadeUp}>
                        <div className="amd-chip">
                            <Cpu size={64} />
                            <span className="amd-chip-label">Ryzen AI NPU</span>
                            <div className="amd-chip-glow" />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* === CTA === */}
            <section className="section cta-section">
                <motion.div
                    className="cta-card glass-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="cta-title">Ready to Protect Yourself?</h2>
                    <p className="cta-desc">
                        Upload any suspicious chat screenshot and get an instant verdict.
                    </p>
                    <Link to="/scanner" className="btn-neon btn-neon-green">
                        <ScanSearch size={18} />
                        Launch Scanner
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
