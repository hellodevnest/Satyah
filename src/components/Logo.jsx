import { motion } from 'framer-motion'
import { useState } from 'react'
import './Logo.css'

const Logo = ({ size = 60, className = '' }) => {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      className={`logo-wrapper ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      {!imageError ? (
        <img
          src="/logo.png"
          alt="SATYAH Research & Consultancy - Pune"
          className="logo-image"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={(e) => {
            setImageError(true)
            console.warn('Logo image not found at /logo.png. Please add logo.png to the public folder.')
          }}
        />
      ) : (
        <div className="logo-placeholder">
          <span className="logo-text-fallback">SATYAH</span>
        </div>
      )}
    </motion.div>
  )
}

export default Logo
