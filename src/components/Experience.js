import React from 'react';
import cdot from '../Images/cdot.jpg'

const Experience = () => {
  return (
    <section id="experience" className="experience-section py-5" style={{ backgroundColor: '#000000' }}>
      <div className="container">
        <h2 className="text-center mb-4 " style={{ color: 'white' }}>
          Experience
        </h2>
        <div className="row">
          {/* Left-side content */}
          <div className="col-md-6" style={{ color: 'white' }}>
            <h2>Centre for Development of Telematics (CDOT), New Delhi</h2>
            <h4>Web Development Intern (May 2024 - July 2024)</h4>
            <ul>
              <li>Developed a dynamic 4G PR GR Dashboard with real-time data updates to manage telecom nodes and services.</li>
              <li>Implemented secure user authentication, session management, and API integrations using AJAX for efficient data communication.</li>
              <li>Created key features like switchover functionality, data synchronization, and log management for PR and GR nodes.</li>
            </ul>
            <h5><strong>Key Projects:</strong></h5>
            <ul>
              <li>
                <strong>4G PR GR Dashboard:</strong> Developed a real-time dashboard displaying node status and offering actions such as start/stop services, traffic switchover, and configuration editing.
              </li>
              <li>
                <strong>Cluster Management:</strong> Created cluster monitoring and control features, enabling real-time traffic switching between nodes at PR and GR sites.
              </li>
            </ul>
            <h5><strong>Technologies Used:</strong></h5>
            <p className="mb-0">
              <span className="badge bg-secondary me-1">JavaScript</span>
              <span className="badge bg-secondary me-1">jQuery</span>
              <span className="badge bg-secondary me-1">AJAX</span>
              <span className="badge bg-secondary me-1">Bootstrap</span>
              <span className="badge bg-secondary me-1">SweetAlert</span>
              <span className="badge bg-secondary">REST APIs</span>
            </p>
            <h5><strong>Learning Outcomes:</strong></h5>
            <ul>
              <li>Hands-on experience in full-stack web development.</li>
              <li>Experience in API integration, real-time data management, and telecommunication systems.</li>
            </ul>
          </div>
          {/* Right-side content */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            {/* CDOT Image */}
            <div className="text-center mb-4">
              <img
                src={cdot}
                alt="CDOT Logo"
                className="img-fluid rounded"
                style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
              />
            </div>
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4593312731527!2d77.16638517528382!3d28.495824975739612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e38eaf1c5cb%3A0x3bb97dc581c783c7!2sCenter%20for%20Development%20of%20Telematics!5e0!3m2!1sen!2sin!4v1729145741151!5m2!1sen!2sin"
              width="300"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
