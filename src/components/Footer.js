import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css'; // Create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        <div className="social-links mb-3">
          <a href="https://www.linkedin.com/in/shreyansh-goyal-1080b7264/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shreyansh-1911" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://x.com/ShreyanshG38356" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/shreyansh_04_/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Shreyansh Goyal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
