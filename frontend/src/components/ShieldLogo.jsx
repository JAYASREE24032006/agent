import React from 'react';
import { motion } from 'framer-motion';
import shieldImg from '../assets/shield-logo.jpg';

const ShieldLogo = () => {
    return (
        <motion.div
            className="shield-logo-container"
            style={{
                width: '160px',
                height: '160px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                margin: '0 auto'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0] // Enhanced Floating animation
            }}
            transition={{
                opacity: { duration: 1 },
                scale: { duration: 0.8, ease: "easeOut" },
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
        >
            <img
                src={shieldImg}
                alt="Agentic Shield"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '50%', // Force circular shape
                    filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.4))' // Cyan glow matching the theme
                }}
            />
        </motion.div>
    );
};

export default ShieldLogo;
