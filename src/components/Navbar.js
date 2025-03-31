import React, { useEffect } from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust detection
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.navbar-nav a').forEach((link) => {
          link.classList.remove('active'); // Remove active class from all links
        });
  
        const currentLink = document.querySelector(`.navbar-nav a[href="#${section.id}"]`);
        if (currentLink) currentLink.classList.add('active'); // Add active class to current link
      }
    });
  };
  

  const scrollToSection = (e) => {
    e.preventDefault(); // Prevent default anchor click behavior  
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand mx-2">SG</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto">
            <ul className="navbar-nav">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <li className="nav-item" key={item}>
                  <a
                    className="nav-link"
                    href={`#${item}`} // Regular hash link
                    onClick={scrollToSection} // Smooth scroll function
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize the first letter */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
