import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

function TopNav({ isDarkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current) return
      if (!navRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header className="topbar" ref={navRef}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="container topbar-inner">
        <div className="brand-wrap">
          <img src="/images/ortho-header-logo.svg" alt="Orthodontics clinic logo" className="brand-logo" />
          <div>
            <p className="brand">Dr. Shriya</p>
            <p className="brand-subtitle">Orthodontics • Dentist • Dental Surgeon</p>
          </div>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
        >
          ☰
        </button>

        <nav id="primary-menu" className={isMenuOpen ? 'menu menu-open' : 'menu'} aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="topbar-actions">
          <NavLink to="/contact" className="btn btn-solid">
            Book Consultation
          </NavLink>
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle dark mode">
            {isDarkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopNav
