import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section py-5" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <div className="row">
          {/* Left-side photo */}
          <div className="col-md-6 text-center">
            <img
              src={'/Images/aboutme.jpg'}
              alt="Shreyansh Goyal"
              className="img-fluid rounded"
              style={{ maxWidth: '300px' }} // Adjust size as needed
            />
          </div>
          {/* Right-side text */}
          <div className="col-md-6 text-white d-flex align-items-center">
            <div>
              <h2>About Me</h2>
              <p>
                I am Shreyansh Goyal, a passionate technology enthusiast from Jaipur, Rajasthan. Currently
                pursuing a Bachelor of Technology at JK Lakshmipat University, I have a strong foundation in
                programming languages such as Java, Python, and C. My experience as a Teaching Assistant and my
                internship at CDOT, New Delhi, have honed my skills in web development and problem-solving.
              </p>
              <p>
                I thrive on creating innovative solutions, as demonstrated in my academic projects, which
                include a comprehensive Alumni Management System and an automation project utilizing
                microcontroller technology. I actively engage in competitive programming and coding challenges,
                having solved numerous problems on LeetCode and achieved a 2-star rating on CodeChef,
                showcasing my commitment to continuous learning and growth in the field of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
