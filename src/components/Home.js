import React from 'react';
import { ReactTyped } from 'react-typed';
import '../styles/Home.css';
import me from '../Images/me.jpg'


const Home = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#000000' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left-side content */}
          <div className="col-md-6 text-left">
            <h1>Hey, I'm Shreyansh Goyal</h1>
            <h2 style={{ color: "yellow" }}>
              <ReactTyped
                strings={['a web developer', 'a competitive programmer']}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h2>
            
            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/shreyansh-goyal-1080b7264/" target="_blank" rel="noopener noreferrer" className="icon-linkedin"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/shreyansh-1911" target="_blank" rel="noopener noreferrer" className="icon-github"><i className="fab fa-github"></i></a>
              <a href="https://x.com/ShreyanshG38356" target="_blank" rel="noopener noreferrer" className="icon-twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/shreyansh_04_/" target="_blank" rel="noopener noreferrer" className="icon-instagram"><i className="fab fa-instagram"></i></a>
            </div>

            {/* Download CV Button */}
            <div className="download-cv">
              <a href="https://drive.google.com/file/d/1_xfjD_u8vQgv1KRBS1oRR4L0dzcboz2R/view?usp=sharing" target="_blank" className="cv-button">
                Download CV
              </a>
            </div>
          </div>

          {/* Right-side image */}
          <div className="col-md-6 text-center">
            <img
              src={me}
              alt="Shreyansh Goyal"
              className="img-fluid rounded-circle floating-image"
              style={{ maxWidth: '100%', height: 'auto' }} // Ensure responsiveness
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
