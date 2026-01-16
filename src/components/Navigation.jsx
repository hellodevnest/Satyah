import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import './Navigation.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/partners', label: 'Partners & Clients' },
    { path: '/team', label: 'Meet the Team' },
    { path: '/contact', label: 'Contact Us' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleNavClick = (path) => {
    closeMenu()
    window.scrollTo(0, 0)
    navigate(path)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          <Logo size={60} />
          <span className="logo-text">SATYAH</span>
        </Link>

        <div className="nav-right">
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMenu}
              />
              <motion.nav
                className="menu"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="menu-header">
                  <Logo size={75} />
                  <span className="logo-text">SATYAH</span>
                </div>
                <ul className="menu-list">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <button
                        className={`menu-link ${
                          location.pathname === item.path ? 'active' : ''
                        }`}
                        onClick={() => handleNavClick(item.path)}
                      >
                        <span className="menu-link-text">{item.label}</span>
                        <motion.div
                          className="menu-link-indicator"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </button>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  className="menu-theme-toggle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <ThemeToggle />
                </motion.div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
