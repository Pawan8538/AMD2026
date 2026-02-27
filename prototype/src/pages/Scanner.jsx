import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, AlertCircle, RotateCcw, FileText, Loader } from 'lucide-react';
import FileDropZone from '../components/FileDropZone';
import { analyzeText, highlightKeywords, SCAM_CATEGORIES } from '../utils/scannerLogic';
import { extractText } from '../utils/ocrEngine';
import './Scanner.css';

export default function Scanner() {
    const [state, setState] = useState('idle'); // idle, uploading, scanning, results
    const [imageUrl, setImageUrl] = useState(null);
    const [ocrProgress, setOcrProgress] = useState(0);
    const [extractedText, setExtractedText] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFileSelect = useCallback(async (file) => {
        try {
            setError(null);
            setState('uploading');
            const url = URL.createObjectURL(file);
            setImageUrl(url);

            // Short delay for visual feedback
            await new Promise((r) => setTimeout(r, 500));
            setState('scanning');
            setOcrProgress(0);

            // Run OCR
            const ocrResult = await extractText(file, (progress) => {
                setOcrProgress(progress);
            });

            setExtractedText(ocrResult.text);

            // Analyze
            const analysis = analyzeText(ocrResult.text);
            setResult({ ...analysis, confidence: ocrResult.confidence });
            setState('results');
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
            setState('idle');
        }
    }, []);

    const handleReset = () => {
        setState('idle');
        setImageUrl(null);
        setOcrProgress(0);
        setExtractedText('');
        setResult(null);
        setError(null);
    };

    const riskConfig = {
        HIGH: { color: 'var(--neon-red)', icon: <AlertTriangle size={24} />, label: 'HIGH RISK' },
        MEDIUM: { color: 'var(--neon-amber)', icon: <AlertCircle size={24} />, label: 'MEDIUM RISK' },
        LOW: { color: 'var(--neon-blue)', icon: <Shield size={24} />, label: 'LOW RISK' },
        SAFE: { color: 'var(--neon-green)', icon: <CheckCircle size={24} />, label: 'SAFE' },
    };

    return (
        <div className="scanner-page">
            <div className="scanner-header">
                <h1 className="scanner-title">Scam Scanner</h1>
                <p className="scanner-subtitle">
                    Upload a screenshot of any suspicious chat or job offer for instant analysis
                </p>
            </div>

            <div className="scanner-container">
                <AnimatePresence mode="wait">
                    {/* === IDLE STATE === */}
                    {state === 'idle' && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <FileDropZone onFileSelect={handleFileSelect} />
                            {error && (
                                <div className="scanner-error">
                                    <AlertTriangle size={16} />
                                    {error}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* === SCANNING STATE === */}
                    {(state === 'uploading' || state === 'scanning') && (
                        <motion.div
                            key="scanning"
                            className="scanning-state"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <div className="scanning-visual">
                                {imageUrl && (
                                    <div className="scanning-image-wrapper">
                                        <img src={imageUrl} alt="Uploaded screenshot" className="scanning-image" />
                                        <div className="scan-line" />
                                        <div className="scan-overlay" />
                                    </div>
                                )}
                            </div>

                            <div className="scanning-info">
                                <div className="scanning-spinner">
                                    <Loader size={24} className="spinner-icon" />
                                </div>
                                <h3 className="scanning-status">
                                    {state === 'uploading' ? 'Processing image...' : 'Extracting & analyzing text...'}
                                </h3>
                                <div className="progress-bar">
                                    <motion.div
                                        className="progress-fill"
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${state === 'uploading' ? 20 : ocrProgress}%` }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <p className="scanning-progress-text">
                                    {state === 'uploading' ? 'Preparing...' : `OCR Processing: ${ocrProgress}%`}
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* === RESULTS STATE === */}
                    {state === 'results' && result && (
                        <motion.div
                            key="results"
                            className="results-state"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Result Header */}
                            <div
                                className="result-header glass-card"
                                style={{ borderColor: `${riskConfig[result.riskLevel]?.color}33` }}
                            >
                                <div className="result-badge" style={{ color: riskConfig[result.riskLevel]?.color }}>
                                    {riskConfig[result.riskLevel]?.icon}
                                    <span className="result-badge-text">{riskConfig[result.riskLevel]?.label}</span>
                                </div>

                                {/* Risk Gauge */}
                                <div className="risk-gauge">
                                    <svg viewBox="0 0 120 120" className="gauge-svg">
                                        <circle
                                            cx="60" cy="60" r="50"
                                            fill="none"
                                            stroke="rgba(255,255,255,0.05)"
                                            strokeWidth="8"
                                        />
                                        <motion.circle
                                            cx="60" cy="60" r="50"
                                            fill="none"
                                            stroke={riskConfig[result.riskLevel]?.color}
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray={`${2 * Math.PI * 50}`}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                                            animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - result.score / 100) }}
                                            transition={{ duration: 1.5, ease: 'easeOut' }}
                                            transform="rotate(-90 60 60)"
                                            style={{ filter: `drop-shadow(0 0 8px ${riskConfig[result.riskLevel]?.color})` }}
                                        />
                                    </svg>
                                    <div className="gauge-value">
                                        <span className="gauge-number" style={{ color: riskConfig[result.riskLevel]?.color }}>
                                            {result.score}
                                        </span>
                                        <span className="gauge-label">Risk Score</span>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="result-stats">
                                    <div className="result-stat">
                                        <span className="result-stat-value">{result.totalPatterns}</span>
                                        <span className="result-stat-label">Patterns Found</span>
                                    </div>
                                    <div className="result-stat">
                                        <span className="result-stat-value">{Object.keys(result.categories).length}</span>
                                        <span className="result-stat-label">Categories</span>
                                    </div>
                                    <div className="result-stat">
                                        <span className="result-stat-value">{Math.round(result.confidence)}%</span>
                                        <span className="result-stat-label">OCR Confidence</span>
                                    </div>
                                </div>
                            </div>

                            {/* Two Column Layout */}
                            <div className="result-columns">
                                {/* Left: Image + Extracted Text */}
                                <div className="result-left">
                                    {imageUrl && (
                                        <div className="result-image-box glass-card">
                                            <h4 className="result-section-title">
                                                <FileText size={16} /> Uploaded Screenshot
                                            </h4>
                                            <img src={imageUrl} alt="Scanned" className="result-image" />
                                        </div>
                                    )}
                                    <div className="result-text-box glass-card">
                                        <h4 className="result-section-title">
                                            <FileText size={16} /> Extracted Text
                                        </h4>
                                        <div
                                            className="extracted-text"
                                            dangerouslySetInnerHTML={{
                                                __html: highlightKeywords(extractedText, result.matches),
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Right: Analysis */}
                                <div className="result-right">
                                    {/* Top Category */}
                                    {result.topCategory && (
                                        <div className="result-category-box glass-card">
                                            <h4 className="result-section-title">Primary Threat Type</h4>
                                            <div className="threat-badge" style={{ color: result.topCategory.color }}>
                                                {result.topCategory.label}
                                            </div>
                                            <p className="threat-desc">{result.topCategory.description}</p>
                                        </div>
                                    )}

                                    {/* Matched Patterns */}
                                    {result.matches.length > 0 && (
                                        <div className="result-matches-box glass-card">
                                            <h4 className="result-section-title">Why It's Flagged</h4>
                                            <div className="matches-list">
                                                {result.matches.map((match, i) => (
                                                    <div key={i} className="match-item">
                                                        <div className="match-keyword" style={{ color: match.categoryColor }}>
                                                            "{match.keyword}"
                                                        </div>
                                                        <div className="match-info">
                                                            <span className="match-category">{match.categoryLabel}</span>
                                                            <span className="match-weight">Weight: {match.weight}/10</span>
                                                        </div>
                                                        <p className="match-explanation">{match.explanation}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Recommendation */}
                                    <div
                                        className="result-recommendation glass-card"
                                        style={{ borderColor: `${riskConfig[result.riskLevel]?.color}22` }}
                                    >
                                        <h4 className="result-section-title">Recommendation</h4>
                                        <p className="recommendation-text">{result.recommendation}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Reset Button */}
                            <motion.button
                                className="btn-outline reset-btn"
                                onClick={handleReset}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <RotateCcw size={16} />
                                Scan Another Screenshot
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
