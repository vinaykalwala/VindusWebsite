import React, { useEffect, useRef } from 'react';
import '../styles/products.css';
import Why1 from '../assets/OurProducts.jpeg'; 

const Products = () => {
  const qtipStoreRef = useRef(null);
  const vauditRef = useRef(null);
  const vorbitRef = useRef(null);
  const caseManagementRef = useRef(null);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        qtipStoreRef.current,
        vauditRef.current,
        vorbitRef.current,
        caseManagementRef.current,
        whyChooseRef.current,
      ];

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
          if (isVisible) {
            section.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="products-page">
      {/* Header Section */}
      <section className="products-header">
        {/* <div className="header-content"> */}
          {/* <h1 className="header-title">Our Products</h1> */}
          {/* <p className="header-subtitle">
            🚀 Innovative Solutions for Businesses & Individuals
          </p>
          <p className="header-description">
            At Vindus Environment, we develop high-performance software solutions designed to streamline operations, enhance productivity, and drive business growth. Our cutting-edge tools cater to industries like e-commerce, SEO, business management, and legal case handling, ensuring that organizations stay ahead in the digital era.
          </p> */}
        {/* </div> */}
      </section>

      <section className="intro-body">
        <div className="intro-content">
          <h2>Our Products</h2>
          <p>
          🚀 Innovative Solutions for Businesses & Individuals
          </p>
          <p>
          At Vindus Environment, we develop high-performance software solutions designed to streamline operations, enhance productivity, and drive business growth. Our cutting-edge tools cater to industries like e-commerce, SEO, business management, and legal case handling, ensuring that organizations stay ahead in the digital era.          
          </p>
        </div>
      </section>

      {/* QTipStore Section */}
      <section className="product-section qtipstore-section" ref={qtipStoreRef}>
        <div className="product-content">
          <h2>1. QTipStore – Smart & Scalable E-Commerce Platform</h2>
          <p className="product-tagline">🛍 Your One-Stop Online Shopping Solution</p>
          <p className="product-for"><strong>📌 For:</strong> Retailers, B2B & B2C Businesses, Entrepreneurs</p>
          <h3>📌 Key Features:</h3>
          <ul>
            <li>Customizable Online Store – Fully responsive and tailored to your brand.</li>
            <li>Secure Payment Gateway – Supports multiple payment methods for hassle-free transactions.</li>
            <li>AI-Based Product Recommendations – Enhances customer shopping experience with smart suggestions.</li>
            <li>Inventory & Order Management – Real-time stock tracking and automated order processing.</li>
            <li>Multi-Vendor Support – Seamlessly manage multiple sellers on one platform.</li>
          </ul>
          <p className="product-cta">📢 Grow your business online with QTipStore!</p>
          <a href="/contact" className="product-link">👉 Visit QTipStore →</a>
        </div>
      </section>

      {/* VAudit Section */}
      <section className="product-section vaudit-section" ref={vauditRef}>
        <div className="product-content">
          <h2>2. VAudit – Powerful SEO & Website Analysis Tool</h2>
          <p className="product-tagline">📊 Optimize Your Website for Maximum Visibility</p>
          <p className="product-for"><strong>📌 For:</strong> Digital Marketers, SEO Experts, Website Owners</p>
          <h3>📌 Key Features:</h3>
          <ul>
            <li>Comprehensive SEO Audit – Identify technical issues and improve site performance.</li>
            <li>Keyword & Competitor Research – Gain insights to rank higher in search results.</li>
            <li>On-Page & Off-Page Optimization – Actionable recommendations for better visibility.</li>
            <li>Real-Time Monitoring – Track traffic, backlinks, and domain authority effortlessly.</li>
            <li>Automated Reports & Suggestions – AI-powered analysis for quick decision-making.</li>
          </ul>
          <p className="product-cta">📢 Boost your website’s performance with VAudit!</p>
          <a href="/contact" className="product-link">👉 Try VAudit Now →</a>
        </div>
      </section>

      {/* VOrbit Section */}
      <section className="product-section vorbit-section" ref={vorbitRef}>
        <div className="product-content">
          <h2>3. VOrbit – Advanced Business & Employee Management Tool</h2>
          <p className="product-tagline">📊 Comprehensive Solution for Efficient Workforce & Business Operations</p>
          <p className="product-for"><strong>📌 For:</strong> Startups, Enterprises, HR Teams, Project Managers</p>
          <h3>📌 Key Features:</h3>
          <ul>
            <li>Attendance & Break Management – Track employee work hours and breaks efficiently.</li>
            <li>Client Management – Maintain and organize client interactions and projects.</li>
            <li>User Management – Manage roles, permissions, and team structures.</li>
            <li>Portfolio Generation of Employees – Create detailed professional portfolios for employees.</li>
            <li>Asset Management – Keep track of company assets and equipment usage.</li>
            <li>Leave Tracking – Automate leave requests, approvals, and balance calculations.</li>
            <li>Email Login Integration – Secure authentication system with built-in email login.</li>
            <li>Employee Detailed Storage – Centralized database for employee information and records.</li>
          </ul>
          <p className="product-cta">📢 Streamline your business operations with VOrbit!</p>
          <a href="/contact" className="product-link">👉 Explore VOrbit →</a>
        </div>
      </section>

      {/* Case Management Solutions Section */}
      <section className="product-section case-management-section" ref={caseManagementRef}>
        <div className="product-content">
          <h2>4. Case Management Solutions – Streamlining Legal Workflows</h2>
          <p className="product-tagline">⚖ Technology-Driven Solutions for Law Firms & Legal Professionals</p>
          <p className="product-for"><strong>📌 For:</strong> Law Firms, Legal Advisors, Corporate Legal Teams</p>
          <h3>📌 Key Features:</h3>
          <ul>
            <li>Case & Client Management – Organize legal records and track case progress seamlessly.</li>
            <li>Automated Legal Research – AI-powered insights for faster case resolutions.</li>
            <li>Document Storage & Security – Secure, cloud-based access to legal files.</li>
            <li>Billing & Invoicing for Legal Services – Simplifies legal fee management and payments.</li>
            <li>Appointment & Scheduling – Manage meetings and case hearings efficiently.</li>
          </ul>
          <p className="product-cta">📢 Enhance legal operations with our case management solutions!</p>
          <a href="/contact" className="product-link">👉 Request a Demo →</a>
        </div>
      </section>

      {/* Why Choose Our Products Section */}
      <section className="why-choose-section" ref={whyChooseRef}>
        <div className="why-choose-container">
          <div className="why-choose-content">
            <div className="why-choose-header">
              <h2>Why Choose Our Products?</h2>
            </div>
            <ul>
              <li>User-Friendly & Scalable – Designed for businesses of all sizes.</li>
              <li>AI & Automation-Driven – Optimized for efficiency and smart decision-making.</li>
              <li>Secure & Reliable – Built with the highest security standards.</li>
              <li>24/7 Support & Maintenance – Ensuring seamless business operations.</li>
            </ul>
          </div>
          <div className="why-choose-image-wrapper">
            <img
              src={Why1}
              alt="Why Choose Illustration"
              className="why-image"
              onError={(e) => {
                console.error('Failed to load Why1 image');
                e.target.src = 'https://via.placeholder.com/200x150?text=Why+Choose+Illustration';
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <p><strong>📞 Get in Touch:</strong> +91 4049525396</p>
          <p style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 500, marginBottom: '20px', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>
            <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>📩 Email:</strong>{' '}
            <a href="mailto:info.vindus@gmail.com" style={{ color: '#D4AF37', textDecoration: 'none', transition: 'color 0.3s ease' }}>
              info.vindus@gmail.com
            </a>
          </p>
          <a href="/contact" className="contact-link">👉 Request a Consultation →</a>
        </div>
      </section>
    </div>
  );
};

export default Products;