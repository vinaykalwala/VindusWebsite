import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/footer.css';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => setShowBanner(false);
  const handleDecline = () => {
    setShowBanner(false);
    setShowDeclineModal(true);
  };
  const closeDeclineModal = () => setShowDeclineModal(false);

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Office Address</h3>
        <p>Shanthi Nagar, Behind Sanjay Steel Bazar,</p>
        <p>Lalitha Nagar, Dilsukhnagar,</p>
        <p>Hyderabad, Telangana 500060</p>
        <p>📞 +91 4049525396</p>
        <p>✉️ <a href="mailto:info.vindus@gmail.com">info.vindus@gmail.com</a></p>
        <div className="social-icons">
          <span className="social-icon"><FaFacebook /></span>
          <span className="social-icon"><FaLinkedin /></span>
          <span className="social-icon"><FaTwitter /></span>
          <span className="social-icon"><FaInstagram /></span>
          <span className="social-icon"><FaYoutube /></span>
        </div>
      </div>

      <div className="footer-section">
        <h3>Main Info</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/howitworks">How it Works</Link></li>
          <li><Link to="/whychoose">Why Choose Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Additional Links</h3>
        <ul>
          <li><Link to="/contact">Contact Vindus</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-use">Terms of Use</Link></li>
          <li><Link to="/sitemap">Sitemap</Link></li>
          <li><Link to="/career">Careers</Link></li>
          <li><Link to="/cookies-settings">Cookies Settings</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li>SEO Tools for Website Ranking</li>
          <li>Web Design & Development</li>
          <li>Dot Net Application Development</li>
          <li>PHP Development</li>
          <li>Android Application Development</li>
          <li>AI & Cloud Solutions</li>
        </ul>
      </div>

      <div className="footer-copyrights">
        <p>&copy; 2025 Vindus Environment. All rights reserved.</p>
      </div>

      {showBanner && (
        <div className="cookie-banner">
          <div className="cookie-message">
            <p>
              We use cookies to enhance your experience.{" "}
              <button onClick={() => navigate("/cookies-settings")} className="link-button">Learn more</button>
            </p>
          </div>
          <div className="cookie-buttons">
            <button onClick={handleAccept} className="cookie-accept">Accept</button>
            <button onClick={handleDecline} className="cookie-decline">Decline</button>
          </div>
        </div>
      )}

      {showDeclineModal && (
        <div className="decline-modal-overlay">
          <div className="decline-modal">
            <h2>About Cookies</h2>
            <p>
              Cookies improve your browsing experience. Declining may limit some features.
            </p>
            <p>
              <a href="/cookies-settings" onClick={() => navigate("/cookies-settings")}>
                Learn more
              </a>
            </p>
            <button onClick={closeDeclineModal} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;