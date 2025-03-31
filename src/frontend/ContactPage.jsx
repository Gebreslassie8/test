// src/ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './pagecss/ContactPage.css'; // Import CSS

const ContactPage = () => {
  return (
    <div className='contactpage-container'>
      <h1>Contact Us</h1>
      <p>This is the contact page of the website.</p>
      <nav>
        <Link to="/">Go to Home Page</Link>
      </nav>
    </div>
  );
};

export default ContactPage;
