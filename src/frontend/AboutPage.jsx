// src/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pagecss/AboutPage.css'; // Import CSS

const AboutPage = () => {
  return (
    <div className='aboutpage-container' >
      <h1>About Us</h1>
      <p>This is the About page of the website.</p>npm
      <nav>
        <Link to="/">Go to Home Page</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
