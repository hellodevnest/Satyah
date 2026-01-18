import { motion } from 'framer-motion'

const MotionBackground = ({ delay = 0 }) => {
    return (
        <div className="motion-background">
            {/* Orb 1 - Orbiting */}
            <motion.div
                className="orb orb-1"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 30, -30, 0],
                    y: [0, -30, 30, 0],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                }}
            />
            {/* Orb 2 - Floating */}
            <motion.div
                className="orb orb-2"
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -40, 40, 0],
                    y: [0, 40, -40, 0],
                    opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 2,
                }}
            />
            {/* Particles - CSS Animation handled in CSS file for performance */}
            <div className="particles-container">
                <div className="particle p1"></div>
                <div className="particle p2"></div>
                <div className="particle p3"></div>
            </div>
        </div>
    )
}

export default MotionBackground
