import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section py-5" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <div className="row justify-content-center">
          {/* Centered text */}
          <div className="col-md-8 text-white text-center">
            <h2 className="mb-4">About Me</h2>
            <p className="mb-3">
              I am Shreyansh Goyal, a Computer Science student at JK Lakshmipat University with a specialization in Artificial Intelligence. Passionate about technology, I have hands-on experience in full-stack web development, IoT, and machine learning.
            </p>
            <p className="mb-3">
              During my internship at C-DOT, I developed a real-time telecom dashboard, enhancing my expertise in secure authentication, API integration, and data synchronization. My projects include a Smart Shelves system leveraging IoT sensors for stock monitoring and a MERN-based Food Ordering App with secure payments.
            </p>
            <p className='mb-0'>
              As a Teaching Assistant, I helped students master C programming, reinforcing my ability to explain complex concepts. Always eager to solve problems, I actively participate in coding challenges and continuously expand my technical skill set.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
