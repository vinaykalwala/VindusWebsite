import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import Contact from '../assets/contact.jpg';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send('service_xpfpjpk', 'template_li15ngs', templateParams, 'TA47lgF1A16xFsu2m')
      .then(async (response) => {
        console.log(formData);
        try {
          const res = await fetch('http://localhost:8000/contact/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          console.log(res, 'data is here');
          if (res.ok) {
            setMessage('Message sent successfully and data saved!');
            setIsError(false);
          } else {
            throw new Error('Failed to save the message');
          }
        } catch (error) {
          setMessage('Message sent but failed to save the data.');
          setIsError(true);
        } finally {
          setIsPopupVisible(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
      })
      .catch((err) => {
        setMessage('Failed to send the message, please try again later.');
        setIsError(true);
        setIsPopupVisible(true);
      });
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <section className="banner">
        <div className="banner-content">
          <h1 className='heading'>Contact Us</h1>
          <p>We're here to help! Get in touch with us for any queries or concerns.</p>
        </div>
      </section>

      <div className="card-section">
        <div className="card-custom">
          <FaEnvelope size={30} />
          <h4 className='heading'>Email Us</h4>
          <p>info.vindus@gmail.com</p>
        </div>
        <div className="card-custom">
          <FaMapMarkerAlt size={30} />
          <h4 className='heading'>Location</h4>
          <p>Shanthi Nagar, Behind Sanjay Steel Bazar, Lalitha Nagar, Dilsukhnagar, Hyderabad, Telangana 500060</p>
        </div>
        <div className="card-custom">
          <FaPhone size={30} />
          <h4 className='heading'>Call Us</h4>
          <p>+91 4049525396</p>
        </div>
      </div>

      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="left-column">
              <h2 className='heading'>Get in Touch with Us!</h2>
              <p>
                At Vindus, we are dedicated to providing top-notch services in SEO, web applications, and web development. Our team is here to assist you with any inquiries or support you may need. Please reach out using the contact form or through the provided details.
              </p>
              <img src={Contact} alt='banner' />
            </div>

            <div className="right-column">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                  </div>

                  <button type="submit" className="btn">Send Message</button>
                </form>
              </div>

              {isPopupVisible && (
                <div className={`popup-message ${isError ? 'error' : 'success'}`}>
                  {message}
                  <button className="close-popup" onClick={handleClosePopup}>×</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;