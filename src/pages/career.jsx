import React, { useState } from 'react';
import axios from 'axios';
import '../styles/career.css';
import Join from '../assets/join.webp';
import careerBanner from '../assets/Career.jpg'; 

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null,
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('mobile', formData.mobile);
    submitData.append('resume', formData.resume);

    try {
      const response = await axios.post('http://localhost:8000/submit/', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status >= 200 && response.status < 300) {
        setPopupMessage(response.data.message || 'Form submitted successfully!');
        setPopupType('success');
        setFormData({ name: '', email: '', mobile: '', resume: null });
      } else {
        throw new Error('Unexpected response status: ' + response.status);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Form submission failed. Please try again.';
      setPopupMessage(errorMessage);
      setPopupType('error');
    } finally {
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
    }
  };

  const closePopup = () => setPopupVisible(false);

  return (
    <div className="career-page">
      <section className="banner-section" style={{ backgroundImage: `url(${careerBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <h1>Careers at Vindus Environment</h1> */}
      </section>

      {/* Openings Section */}
      <section className="openings-section">
        <h2 className="section-title">Careers at Vindus Environment</h2>
        <p className="section-subtitle">🚀 Join Our Team & Shape the Future of Technology!</p>
        <p className="intro-text">
          At Vindus Environment, we believe in innovation, collaboration, and growth. We’re looking for passionate individuals who want to make an impact in the IT, AI, and digital solutions industry. Whether you are a developer, designer, marketer, or strategist, we have exciting opportunities for you!
        </p>
        <div className="openings-list">
          {[
            { title: 'React Native Developer', level: '0-2 Years', className: 'bg-light-pink' },
            { title: 'Graphic Designer', level: '0-2 Years', className: 'bg-light-blue' },
            { title: 'AWS Cloud Engineer', level: '0-2 Years', className: 'bg-light-violet' },
            { title: 'React + Python Developer', level: '0-2 Years', className: 'bg-light-green' },
          ].map((opening, index) => (
            <div key={index} className={`opening-card ${opening.className}`}>
              <h3>{opening.title}</h3>
              <bold><p className="experience-level">Experience Level: {opening.level}</p></bold>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-section">
        <h2 className="section-title">Why Work With Us?</h2>
        <div className="why-list">
          <div className="why-item">
            <span className="icon">🌍</span>
            <p><strong>Innovative Work Environment</strong> – Work on cutting-edge technologies in AI, cloud, and digital solutions.</p>
          </div>
          <div className="why-item">
            <span className="icon">📈</span>
            <p><strong>Career Growth</strong> – Learn, grow, and advance with mentorship and training programs.</p>
          </div>
          <div className="why-item">
            <span className="icon">🤝</span>
            <p><strong>Collaborative Culture</strong> – Join a team that values creativity, teamwork, and problem-solving.</p>
          </div>
          <div className="why-item">
            <span className="icon">💡</span>
            <p><strong>Work-Life Balance</strong> – Flexible working hours and a positive work culture.</p>
          </div>
          <div className="why-item">
            <span className="icon">🏆</span>
            <p><strong>Competitive Benefits</strong> – Industry-leading perks, incentives, and recognition.</p>
          </div>
          <div className="why-item">
            <span className="icon">🚀 </span>
            <p><strong>Impactful Work </strong> – Be part of projects that make a difference, driving innovation and transforming industries.</p>
          </div>
        </div>
      </section>

      {/* Life at Vindus */}
      <section className="life-section">
        <h2 className="section-title">Life at Vindus Environment</h2>
        <p className="section-subtitle">✨ A Workplace That Inspires Growth & Innovation</p>
        <div className="life-content">
          <div className="life-text">
            <p>At Vindus Environment, we believe that a great company culture leads to great work. Here’s what you can expect:</p>
            <ul>
              <li><strong>Learning & Development:</strong> Access to workshops, training, and certifications.</li>
              <li><strong>Fun & Engagement:</strong> Team outings, hackathons, and brainstorming sessions.</li>
              <li><strong>Diversity & Inclusion:</strong> A workplace valuing different perspectives.</li>
              <li><strong>Remote Work Flexibility:</strong> Hybrid and work-from-home options.</li>
            </ul>
            <blockquote>
              "We are not just building software; we are building the future. Join us and be part of something great!"
            </blockquote>
          </div>
          <div className="life-image">
            <img src={Join} alt="Life at Vindus" />
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="form-section">
        <h2 className="section-title">How to Apply?</h2>
        <p className="form-intro">
          📩 Email your resume to <a href="mailto:hr.vindus@gmail.com">hr.vindus@gmail.com</a> with the subject "Job Application – [Job Title]"<br />
          📌 Attach your portfolio (if applicable)<br />
          📞 For queries, contact us at +91 4049525396
        </p>
        <div className="form-container">
          <h3>Submit Your Resume</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Upload Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>

          {popupVisible && (
            <div className={`popup-message ${popupType}`}>
              <button className="close-popup" onClick={closePopup}>×</button>
              {popupMessage}
            </div>
          )}
        </div>
      </section>

       {/* Internship Opportunities */}
<section className="internship-section">
  <h2 className="section-title">Internship Opportunities</h2>
  <p className="section-subtitle">🎓 Kickstart Your Career with Vindus!</p>
  <p className="intro-text">
    If you're a student or recent graduate looking to gain real-world experience, explore our internship programs in:
  </p>
  <div className="internship-list">
    <div className="internship-card">
      <h3>Software Development</h3>
      <p>
        Dive into coding, software architecture, and problem-solving. Work on real projects using React, Python, and AWS to build scalable solutions.
      </p>
      <div className="internship-details">
        <p><strong>Duration:</strong> 3-6 months</p>
        <p><strong>Location:</strong> Remote / Hyderabad</p>
        <p><strong>Apply:</strong> Use the form above!</p>
      </div>
    </div>
    <div className="internship-card">
      <h3>UI/UX Design</h3>
      <p>
        Craft user-friendly interfaces and stunning visuals. Learn design tools like Figma and Adobe XD while collaborating on impactful digital experiences.
      </p>
      <div className="internship-details">
        <p><strong>Duration:</strong> 3-6 months</p>
        <p><strong>Location:</strong> Remote / Hyderabad</p>
        <p><strong>Apply:</strong> Use the form above!</p>
      </div>
    </div>
    <div className="internship-card">
      <h3>Business Development</h3>
      <p>
        Explore market strategies, client relations, and growth tactics. Gain hands-on experience in driving business success in the tech industry.
      </p>
      <div className="internship-details">
        <p><strong>Duration:</strong> 3-6 months</p>
        <p><strong>Location:</strong> Remote / Hyderabad</p>
        <p><strong>Apply:</strong> Use the form above!</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Career;