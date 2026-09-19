import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">

      <div className="logo">
        JCB RENTAL
      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/machine">Machine</Link>

        <Link to="/services">Services</Link>

        <Link to="/contact">Contact</Link>

      </div>

      <div className="button-container">
        <Link to="/login">Login</Link>
      </div>

    </nav>
  )
}

export default NavBar