import { Shield } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <Shield size={20} className="footer-logo-icon" />
                    <span className="footer-logo-text">SurakshaAI</span>
                </div>
                <p className="footer-tagline">
                    Built for AMD Slingshot India 2026 — AI + Cybersecurity & Privacy
                </p>
                <div className="footer-divider" />
                <p className="footer-copy">
                    Powered by AMD Ryzen AI — Privacy-First Scam Detection
                </p>
            </div>
        </footer>
    );
}
