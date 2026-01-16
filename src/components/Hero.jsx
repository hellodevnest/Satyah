import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Hero.css'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const handleButtonMouseMove = (e) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.15
        const deltaY = (e.clientY - centerY) * 0.15
        setButtonPosition({ x: deltaX, y: deltaY })
      }
    }

    const handleButtonMouseLeave = () => {
      setButtonPosition({ x: 0, y: 0 })
    }

    const hero = heroRef.current
    const button = buttonRef.current

    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
    }

    if (button) {
      button.addEventListener('mousemove', handleButtonMouseMove)
      button.addEventListener('mouseleave', handleButtonMouseLeave)
    }

    return () => {
      if (hero) hero.removeEventListener('mousemove', handleMouseMove)
      if (button) {
        button.removeEventListener('mousemove', handleButtonMouseMove)
        button.removeEventListener('mouseleave', handleButtonMouseLeave)
      }
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Interactive Backgrounds */}
      <div className="hero-background">
        {/* Light Mode: Airy Mesh Gradient */}
        <div className="hero-mesh-gradient"></div>
        <div className="hero-grain-overlay"></div>

        {/* Dark Mode: Star Field Particle System */}
        <div className="hero-starfield">
          {[...Array(50)].map((_, i) => {
            const baseX = Math.random() * 100
            const baseY = Math.random() * 100
            const baseOpacity = Math.random() * 0.5 + 0.2
            return (
              <motion.div
                key={i}
                className="star"
                style={{
                  left: baseX + '%',
                  top: baseY + '%',
                }}
                animate={{
                  opacity: [
                    baseOpacity,
                    baseOpacity + 0.3,
                    baseOpacity,
                  ],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </div>

        {/* Dark Mode: Bento Grid */}
        <div className="hero-bento-grid">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bento-cell"></div>
          ))}
        </div>

        {/* Cursor Glow (Dark Mode) */}
        <div
          className="hero-cursor-glow"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        ></div>
      </div>

      {/* Glassmorphic Content Container */}
      <motion.div
        className="hero-glass-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="hero-logo-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Logo size={170} />
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="title-shimmer">SATYAH</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="subtitle-line-1">Driving Insight Through Research.</p>
          <p className="subtitle-line-2">
            Empowering Decisions with Data, Strategy, and Sustainability.
          </p>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/services"
            className="cta-button"
            ref={buttonRef}
            style={{
              transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
            }}
          >
            <span className="button-glint"></span>
            <span className="button-text">Explore Our Services</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
