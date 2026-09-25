import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.jpg'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/machine" onClick={closeMenu}>Machine</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        {/* Login for mobile */}
        <Link to="/login" className="mobile-login" onClick={closeMenu}>
          Login
        </Link>
      </div>

      {/* Desktop Login */}
      <div className="button-container">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  )
}

export default NavBar
