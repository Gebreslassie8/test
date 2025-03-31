import React, { useState } from "react";
import { Link } from "react-router-dom";
import { House, Person, Gear, InfoCircle } from 'react-bootstrap-icons';
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#222"; // Change body background
  };

  

  return (
    <nav style={{ ...styles.navbar, backgroundColor: darkMode ? "#333" : "#255" }}>
      {/* Logo */}
      <img src="/images/favicon.ico" alt="ICT Park Logo"
      style={{ 
        
        borderRadius: "50%", 
        objectFit: "cover" 
      }}  />

      {/* Navigation Links 
      
                  <Nav.Link href="#home">< House /> Home</Nav.Link>
                  <Nav.Link href="#about"><Person /> About</Nav.Link>
                  <Nav.Link href="#services"><Gear /> Services</Nav.Link>
                  <Nav.Link href="#contact"><InfoCircle /> Contact</Nav.Link>
      
      
      */}
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>< House />Home</Link></li>
        <li><Link to="/about" style={styles.link}><Person />About</Link></li>
        <li><Link to="/contact" style={styles.link}><Gear />Contact</Link></li>
        <li><Link to="/Login" style={styles.link}><InfoCircle /> Login</Link></li>

        {/* Dropdown Menu */}
        <li style={styles.dropdown}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={styles.dropdownButton}>
            More ▼
          </button>
          {isDropdownOpen && (
            <ul style={styles.dropdownMenu}>
              <li><Link to="/services" style={styles.link}>Services</Link></li>
              <li><Link to="/blog" style={styles.link}>Blog</Link></li>
            </ul>
          )}
        </li>
      </ul>

      {/* Search Bar */}
      <input type="text" placeholder="Search..." style={styles.search} />

      {/* Dark Mode Toggle */}
      <button onClick={toggleDarkMode} style={styles.button}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
  
    </nav>
  );
};

// Inline Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    color: "white",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
  dropdown: {
    position: "relative",
  },
  dropdownButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
  dropdownMenu: {
    position: "absolute",
    background: "#444",
    listStyle: "none",
    padding: "5px",
    borderRadius: "5px",
    display: "block",
    marginTop: "5px",
  },
  search: {
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    fontSize: "16px",
  },
  button: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
  },
};

export default Navbar;
