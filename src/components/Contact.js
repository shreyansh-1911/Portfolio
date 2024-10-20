import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    fetch('https://backend-bhfv.onrender.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form after success
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred, please try again.');
      });
  };

  return (
    <section id="contact" className="contact-section py-5" style={{ backgroundColor: '#000000' }}>
      <div className="container mt-5">
        <h2 className="text-center text-white">Get In Touch</h2>
        <p className="text-center mb-5 text-white">Do you have a project in your mind? Contact me here.</p>
        <div className="row mt-5">
          {/* Left Side */}
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center border-end bg-warning rounded-4 mb-4 mb-md-0">
            <h3>Find Me</h3>
            <p className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Email: shreyansh19112004@gmail.com
            </p>
            <p className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              Phone: +91-9024122811
            </p>
          </div>

          {/* Right Side (Contact Form) */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="6" 
                  placeholder="Message" 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary d-flex align-items-center">
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> {/* Send Icon */}
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
