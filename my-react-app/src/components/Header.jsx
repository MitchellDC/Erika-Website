import { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <header className="full-logo-header">
      <nav className="navbar">
        {/* NEW: Logo added as an image tag  */}
        {/* <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}>
          <img 
            src="/RidgeView_TopWebBanner.png" 
            alt="Ridge View Logo" 
            className="header-logo" 
          />
        </Link>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/site" onClick={() => setIsOpen(false)}>Site</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/homemodels" onClick={() => setIsOpen(false)}>Model</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;