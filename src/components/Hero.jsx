import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const buttonRef = useRef(null)

  return (
    <section className="hero" ref={heroRef}>
      {/* Interactive Backgrounds */}
      <div className="hero-background">
        {/* Zoom Container */}
        <motion.div 
          className="zoom-container"
          initial={{ scale: 1 }}
          animate={{ 
            scale: 1.5,
            transition: {
              duration: 120,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        >
        {/* Light Mode: Airy Mesh Gradient */}
        <div className="hero-mesh-gradient"></div>
        <div className="hero-grain-overlay"></div>

        {/* Galaxy Star Field - Realistic Galaxy Background */}
        <div className="hero-starfield galaxy-stars">
          {/* Galaxy Core - Dense star cluster */}
          {[...Array(150)].map((_, i) => {
            const angle = (i / 150) * Math.PI * 2
            const distance = Math.random() * 8 + 2
            const baseX = 50 + Math.cos(angle) * distance
            const baseY = 50 + Math.sin(angle) * distance
            const baseOpacity = Math.random() * 0.3 + 0.7
            const starSize = Math.random() * 1.2 + 0.6
            return (
              <motion.div
                key={`core-${i}`}
                className="star star-bright"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${starSize}px`,
                  height: `${starSize}px`,
                }}
                animate={{
                  opacity: [
                    baseOpacity,
                    baseOpacity + 0.3,
                    baseOpacity,
                  ],
                  scale: [1, 1.4, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  opacity: {
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: Math.random() * 200 + 150,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />
            )
          })}
          
          {/* Spiral Arm Stars - First Arm */}
          {[...Array(200)].map((_, i) => {
            const angle = (i / 200) * Math.PI * 2
            const distance = Math.random() * 25 + 10
            const spiralOffset = angle * 0.5
            const baseX = 50 + Math.cos(angle + spiralOffset) * distance
            const baseY = 50 + Math.sin(angle + spiralOffset) * distance
            const baseOpacity = Math.random() * 0.4 + 0.4
            const starSize = Math.random() * 1 + 0.4
            return (
              <motion.div
                key={`spiral1-${i}`}
                className="star star-medium"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${starSize}px`,
                  height: `${starSize}px`,
                }}
                animate={{
                  opacity: [
                    baseOpacity,
                    baseOpacity + 0.25,
                    baseOpacity,
                  ],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  opacity: {
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: Math.random() * 5 + 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: Math.random() * 300 + 200,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />
            )
          })}
          
          {/* Spiral Arm Stars - Second Arm */}
          {[...Array(200)].map((_, i) => {
            const angle = (i / 200) * Math.PI * 2 + Math.PI
            const distance = Math.random() * 25 + 10
            const spiralOffset = angle * 0.5
            const baseX = 50 + Math.cos(angle + spiralOffset) * distance
            const baseY = 50 + Math.sin(angle + spiralOffset) * distance
            const baseOpacity = Math.random() * 0.4 + 0.4
            const starSize = Math.random() * 1 + 0.4
            return (
              <motion.div
                key={`spiral2-${i}`}
                className="star star-medium"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${starSize}px`,
                  height: `${starSize}px`,
                }}
                animate={{
                  opacity: [
                    baseOpacity,
                    baseOpacity + 0.25,
                    baseOpacity,
                  ],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  opacity: {
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: Math.random() * 5 + 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: Math.random() * 300 + 200,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />
            )
          })}
          
          {/* Background stars - Distant galaxy stars */}
          {[...Array(500)].map((_, i) => {
            // Distribute more stars towards the edges
            const isEdge = Math.random() > 0.3;
            let baseX, baseY;
            
            if (isEdge) {
              // Place more stars at the edges
              const side = Math.floor(Math.random() * 4);
              const pos = Math.random();
              
              switch (side) {
                case 0: // Top edge
                  baseX = pos * 100;
                  baseY = Math.random() * 20; // Top 20%
                  break;
                case 1: // Right edge
                  baseX = 80 + Math.random() * 20; // Right 20%
                  baseY = pos * 100;
                  break;
                case 2: // Bottom edge
                  baseX = pos * 100;
                  baseY = 80 + Math.random() * 20; // Bottom 20%
                  break;
                case 3: // Left edge
                  baseX = Math.random() * 20; // Left 20%
                  baseY = pos * 100;
                  break;
              }
            } else {
              // Some stars in the middle but less dense
              baseX = 20 + Math.random() * 60; // 20-80% of width
              baseY = 20 + Math.random() * 60; // 20-80% of height
            }
            
            const baseOpacity = Math.random() * 0.2 + 0.05;
            const starSize = Math.random() * 0.6 + 0.1;
            
            return (
              <motion.div
                key={`distant-${i}`}
                className="star star-faint"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${starSize}px`,
                  height: `${starSize}px`,
                }}
                animate={{
                  opacity: [
                    baseOpacity * 0.7,
                    baseOpacity,
                    baseOpacity * 0.7,
                  ],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
          
          {/* Extra faint stars for depth */}
          {[...Array(200)].map((_, i) => {
            // Create a more scattered distribution for these extra stars
            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 60; // More towards the edges
            const baseX = 50 + Math.cos(angle) * distance;
            const baseY = 50 + Math.sin(angle) * distance;
            const baseOpacity = Math.random() * 0.1 + 0.02;
            const starSize = Math.random() * 0.4 + 0.1;
            
            return (
              <motion.div
                key={`extra-distant-${i}`}
                className="star star-faint"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${starSize}px`,
                  height: `${starSize}px`,
                  opacity: 0.8,
                }}
                animate={{
                  opacity: [
                    baseOpacity * 0.8,
                    baseOpacity * 1.1,
                    baseOpacity * 0.8,
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </div>

        {/* Galaxy Nebula Clouds */}
        <div className="galaxy-nebula">
          <div className="nebula-cloud nebula-1"></div>
          <div className="nebula-cloud nebula-2"></div>
          <div className="nebula-cloud nebula-3"></div>
        </div>
        
        {/* Galaxy Spiral Arms */}
        <div className="galaxy-spiral">
          <div className="spiral-arm spiral-arm-1"></div>
          <div className="spiral-arm spiral-arm-2"></div>
        </div>

        </motion.div>
      </div>

      {/* Content Container - No Background */}
      <motion.div
        className="hero-content-container"
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
          <Logo size={190} />
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
            className="explore-button"
          >
            <span className="explore-text">Explore Our Services</span>
            <span className="explore-arrow">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
