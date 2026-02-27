import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/scanner', label: 'Scanner' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/about', label: 'About' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <Shield size={28} className="logo-icon" />
                    <span className="logo-text">SurakshaAI</span>
                </Link>

                <div className="navbar-links-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div className="nav-active-indicator" layoutId="navIndicator" />
                            )}
                        </Link>
                    ))}
                    <Link to="/scanner" className="btn-neon btn-neon-green nav-cta">
                        Scan Now
                    </Link>
                </div>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navbar-mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link-mobile ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/scanner" className="btn-neon btn-neon-green nav-cta-mobile">
                            Scan Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
