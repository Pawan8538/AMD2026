import { motion } from 'framer-motion';
import './ComingSoonBadge.css';

export default function ComingSoonBadge({ small = false }) {
    return (
        <motion.span
            className={`coming-soon-badge ${small ? 'coming-soon-sm' : ''}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
        >
            Coming Soon
        </motion.span>
    );
}
