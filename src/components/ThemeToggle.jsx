import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    // Default to dark mode on fresh load
    return true
  })

  useEffect(() => {
    const root = document.documentElement
    // Apply theme immediately to prevent flash
    if (isDark) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = (e) => {
    e.stopPropagation()
    setIsDark(!isDark)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleTheme(e)
    }
  }

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.div
        className="theme-toggle-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="theme-toggle-button"
        animate={{
          backgroundColor: isDark 
            ? 'var(--color-navy-light)' 
            : 'var(--color-off-white)',
          borderColor: isDark 
            ? 'var(--color-cyan-blue)' 
            : 'var(--color-steel-blue)',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              className="theme-icon-container"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              className="theme-icon-container"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
