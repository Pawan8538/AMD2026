import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image } from 'lucide-react';
import './FileDropZone.css';

export default function FileDropZone({ onFileSelect }) {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            onFileSelect(file);
        }
    };

    const handleClick = () => inputRef.current?.click();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) onFileSelect(file);
    };

    return (
        <motion.div
            className={`drop-zone ${isDragging ? 'drop-zone-active' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="drop-zone-input"
            />
            <div className="drop-zone-content">
                <motion.div
                    className="drop-zone-icon"
                    animate={isDragging ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                >
                    {isDragging ? <Image size={48} /> : <Upload size={48} />}
                </motion.div>
                <p className="drop-zone-title">
                    {isDragging ? 'Drop your screenshot here' : 'Upload Chat Screenshot'}
                </p>
                <p className="drop-zone-sub">
                    Drag & drop or click to upload a WhatsApp / Telegram screenshot
                </p>
                <p className="drop-zone-formats">
                    Supports: PNG, JPG, JPEG, WebP
                </p>
            </div>

            {/* Animated border */}
            <div className="drop-zone-border" />
        </motion.div>
    );
}
