import { motion } from 'framer-motion';
import { BarChart3, Shield, AlertTriangle, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';
import ComingSoonBadge from '../components/ComingSoonBadge';
import './Dashboard.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

// Hardcoded mock data
const stats = [
    { icon: <BarChart3 size={20} />, value: '2,847', label: 'Total Scans', color: 'var(--neon-blue)' },
    { icon: <AlertTriangle size={20} />, value: '1,203', label: 'Threats Detected', color: 'var(--neon-red)' },
    { icon: <CheckCircle size={20} />, value: '1,644', label: 'Verified Safe', color: 'var(--neon-green)' },
    { icon: <TrendingUp size={20} />, value: '42.3%', label: 'Threat Rate', color: 'var(--neon-amber)' },
];

const recentScans = [
    { type: 'HIGH', category: 'Task Fraud', source: 'WhatsApp Screenshot', time: '2 min ago', keywords: ['telegram group', 'earn daily', 'security deposit'] },
    { type: 'MEDIUM', category: 'Fake HR', source: 'Telegram Screenshot', time: '15 min ago', keywords: ['urgent hiring', 'no interview'] },
    { type: 'SAFE', category: '-', source: 'Job Portal Screenshot', time: '1 hour ago', keywords: [] },
    { type: 'HIGH', category: 'Deposit Scam', source: 'WhatsApp Screenshot', time: '2 hours ago', keywords: ['refundable deposit', 'gpay', 'pay first'] },
    { type: 'LOW', category: 'Urgency Tactic', source: 'Email Screenshot', time: '4 hours ago', keywords: ['limited seats'] },
];

const threatPie = [
    { label: 'Task Fraud', pct: 38, color: 'var(--neon-red)' },
    { label: 'Deposit Scam', pct: 28, color: 'var(--neon-amber)' },
    { label: 'Fake HR', pct: 18, color: 'var(--neon-purple)' },
    { label: 'Phishing', pct: 10, color: 'var(--neon-blue)' },
    { label: 'Other', pct: 6, color: 'var(--text-muted)' },
];

export default function Dashboard() {
    const riskColors = {
        HIGH: 'var(--neon-red)',
        MEDIUM: 'var(--neon-amber)',
        LOW: 'var(--neon-blue)',
        SAFE: 'var(--neon-green)',
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h1 className="dashboard-title">Threat Dashboard</h1>
                <p className="dashboard-subtitle">Overview of scanning activity and detected threats</p>
                <span className="dashboard-demo-tag">Demo Data</span>
            </div>

            <motion.div
                className="dashboard-content"
                initial="hidden"
                animate="visible"
                variants={stagger}
            >
                {/* Stats Cards */}
                <div className="grid-4 dashboard-stats">
                    {stats.map((stat, i) => (
                        <motion.div key={i} className="stat-box glass-card" variants={fadeUp}>
                            <div className="stat-box-icon" style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-box-value" style={{ color: stat.color }}>{stat.value}</div>
                            <p className="stat-box-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="dashboard-grid">
                    {/* Threat Distribution */}
                    <motion.div className="threat-dist glass-card" variants={fadeUp}>
                        <h3 className="dash-section-title">Threat Distribution</h3>
                        <div className="pie-bars">
                            {threatPie.map((item, i) => (
                                <div key={i} className="pie-bar-row">
                                    <span className="pie-bar-label">{item.label}</span>
                                    <div className="pie-bar-track">
                                        <motion.div
                                            className="pie-bar-fill"
                                            style={{ background: item.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.pct}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                        />
                                    </div>
                                    <span className="pie-bar-pct" style={{ color: item.color }}>{item.pct}%</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Community Reports */}
                    <motion.div className="community-box glass-card" variants={fadeUp}>
                        <div className="community-header">
                            <h3 className="dash-section-title">Community Reports</h3>
                            <ComingSoonBadge />
                        </div>
                        <div className="community-placeholder">
                            <Users size={40} className="community-icon" />
                            <p>Crowdsourced scam reports from the community will appear here</p>
                            <span className="community-sub">Help build India's largest scam pattern database</span>
                        </div>
                    </motion.div>
                </div>

                {/* Recent Scans */}
                <motion.div className="recent-scans glass-card" variants={fadeUp}>
                    <h3 className="dash-section-title">Recent Scans</h3>
                    <div className="scans-table">
                        <div className="scans-header">
                            <span>Risk</span>
                            <span>Category</span>
                            <span>Source</span>
                            <span>Keywords</span>
                            <span>Time</span>
                        </div>
                        {recentScans.map((scan, i) => (
                            <motion.div
                                key={i}
                                className="scan-row"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                            >
                                <span className="scan-risk" style={{ color: riskColors[scan.type] }}>
                                    {scan.type}
                                </span>
                                <span className="scan-category">{scan.category}</span>
                                <span className="scan-source">{scan.source}</span>
                                <span className="scan-keywords">
                                    {scan.keywords.map((kw, j) => (
                                        <code key={j} className="scan-kw">{kw}</code>
                                    ))}
                                </span>
                                <span className="scan-time">{scan.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
