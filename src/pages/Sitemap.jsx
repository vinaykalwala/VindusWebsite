import React from "react";
import "../styles/sitemap.css";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <h1 className="sitemap-heading">Project Sitemap</h1>
      <div className="sitemap-grid">
        {/* Column 1 */}
        <div className="sitemap-column">
          <div className="sitemap-item">
            <Link to="/" className="sitemap-link">Home Page</Link>
            <ul className="sitemap-sublist">
              <li>Carousel Banner</li>
              <li>Business Analytics Section</li>
              <li>Services Grid</li>
              <li>SEO Section</li>
              <li>Development Process Cards</li>
              <li>Technology Stack</li>
              <li>Client Showcase</li>
              <li>Social Media Links</li>
              <li>Chatbox</li>
            </ul>
          </div>

          <div className="sitemap-item">
            <Link to="/services" className="sitemap-link">Services</Link>
            <ul className="sitemap-sublist">
              <li>SEO Tools</li>
              <li>Software Development</li>
              <li>Digital Marketing</li>
              <li>AWS Cloud</li>
              <li>Software Testing</li>
              <li>Video Marketing</li>
              <li>Blockchain</li>
              <li>IoT Solutions</li>
              <li>AI/ML Solutions</li>
            </ul>
          </div>

          <div className="sitemap-item">
            <Link to="/case-studies" className="sitemap-link">Case Studies</Link>
            <ul className="sitemap-sublist">
              <li>Featured Projects</li>
              <li>Filterable Case Studies Grid</li>
              <li>MLC QEHS</li>
              <li>Teja Traders</li>
              <li>Food's Den</li>
              <li>Vaudit SEO</li>
              <li>Qtipstore</li>
              <li>Case Study Details Modal</li>
              <li>Conclusion Section</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="sitemap-column">
          <div className="sitemap-item">
            <Link to="/about" className="sitemap-link">About Us</Link>
            <ul className="sitemap-sublist">
              <li>Company Overview</li>
              <li>Mission Statement</li>
              <li>Vision Statement</li>
              <li>Core Values</li>
              <li>Team/Leadership Section</li>
            </ul>
          </div>

          <div className="sitemap-item">
            <Link to="/how-it-works" className="sitemap-link">How It Works</Link>
            <ul className="sitemap-sublist">
              <li>Service Process Breakdown</li>
              <li>Digital Marketing Process</li>
              <li>Web Development Workflow</li>
              <li>Cloud Implementation</li>
              <li>FAQ Section</li>
              <li>CTA Section</li>
            </ul>
          </div>

          <div className="sitemap-item">
            <Link to="/careers" className="sitemap-link">Careers</Link>
            <ul className="sitemap-sublist">
              <li>Current Openings List</li>
              <li>Job Cards (React Native, AWS, etc.)</li>
              <li>Join Our Team Section</li>
              <li>Resume Submission Form</li>
              <li>Application Status Popups</li>
            </ul>
          </div>

          <div className="sitemap-item">
            <Link to="/contact" className="sitemap-link">Contact Us</Link>
            <ul className="sitemap-sublist">
              <li>Contact Cards (Email/Phone/Address)</li>
              <li>Contact Form</li>
              <li>Location Map</li>
              <li>Message Submission Popups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;