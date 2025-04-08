import React, { useState, useEffect, useRef } from "react";
import "../styles/cookie.css";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import PageTransition from "./PageTransition";

const CookiesSettings = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: true,
  });

  const [showBanner, setShowBanner] = useState(true);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isBannerClosing, setIsBannerClosing] = useState(false);
  const [isPolicyClosing, setIsPolicyClosing] = useState(false);
  const [isDeclineClosing, setIsDeclineClosing] = useState(false);

  const policyModalRef = useRef(null);
  const declineModalRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("cookiePopupShown")) {
      setShowBanner(true);
      localStorage.setItem("cookiePopupShown", "true");
    } else {
      setShowBanner(false);
    }

    const savedPrefs = localStorage.getItem("cookiePreferences");
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }

    if (showPolicy && policyModalRef.current) {
      policyModalRef.current.focus();
    }
    if (showDeclineModal && declineModalRef.current) {
      declineModalRef.current.focus();
    }
  }, [showPolicy, showDeclineModal]);

  const savePreferences = (prefs) => {
    setPreferences(prefs);
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
  };

  const handleAccept = () => {
    const newPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(newPrefs);
    setIsBannerClosing(true);
    setTimeout(() => setShowBanner(false), 500);
  };

  const handleDecline = () => {
    const newPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(newPrefs);
    setIsBannerClosing(true);
    setTimeout(() => {
      setShowBanner(false);
      setShowDeclineModal(true);
    }, 500);
  };

  const togglePreference = (key) => {
    const newPrefs = {
      ...preferences,
      [key]: !preferences[key],
    };
    savePreferences(newPrefs);
  };

  const togglePolicy = () => {
    if (showPolicy) {
      setIsPolicyClosing(true);
      setTimeout(() => {
        setShowPolicy(false);
        setIsPolicyClosing(false);
      }, 500);
    } else {
      setShowPolicy(true);
    }
  };

  const closeDeclineModal = () => {
    setIsDeclineClosing(true);
    setTimeout(() => {
      setShowDeclineModal(false);
      setIsDeclineClosing(false);
    }, 500);
  };

  const handleBackToTop = () => {
    setIsAnimating(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <PageTransition onBackToTop={handleBackToTop}>
      <div className="cookie-page">
        {showBanner && (
          <div
            className={`cookie-banner ${isBannerClosing ? "closing" : "animate-fade-in"}`}
          >
            <div className="cookie-message">
              <p>
                We use cookies to enhance your experience. By continuing, you agree to our use of cookies.{" "}
                <button onClick={togglePolicy} className="policy-link">
                  Learn More
                </button>
              </p>
            </div>
            <div className="cookie-buttons">
              <button onClick={handleAccept} className="cookie-accept">
                Accept All
              </button>
              <button onClick={handleDecline} className="cookie-decline">
                Decline
              </button>
            </div>
          </div>
        )}

        {showPolicy && (
          <div
            className={`modal-overlay ${isPolicyClosing ? "closing" : "animate-fade-in"}`}
          >
            <div className="policy-modal" ref={policyModalRef} tabIndex="-1">
              <h2>Cookies Policy</h2>
              <p className="policy-date">Last updated: March 03, 2025</p>
              <p>
                This Cookies Policy explains how We use cookies to enhance your experience on our Website.
              </p>
              <h3>Types of Cookies</h3>
              <ul>
                <li>
                  <strong>Necessary Cookies</strong>: Essential for basic functionality (Session Cookies).
                  These cannot be disabled as they are required for the website to function.
                </li>
                <li>
                  <strong>Analytics Cookies</strong>: Help us understand how visitors interact with our website.
                </li>
                <li>
                  <strong>Marketing Cookies</strong>: Used to track visitors across websites for advertising purposes.
                </li>
                <li>
                  <strong>Functionality Cookies</strong>: Remember your preferences (Persistent Cookies).
                </li>
              </ul>
              <h3>Your Choices</h3>
              <p>
                You can manage your cookie preferences below or disable cookies in your browser settings.
              </p>
              <button onClick={togglePolicy} className="modal-btn">
                Close
              </button>
            </div>
          </div>
        )}

        {showDeclineModal && (
          <div
            className={`modal-overlay ${isDeclineClosing ? "closing" : "animate-fade-in"}`}
          >
            <div className="decline-modal" ref={declineModalRef} tabIndex="-1">
              <h2>About Cookies</h2>
              <p>
                Cookies are small files that improve your browsing experience. Declining may limit some features.
              </p>
              <p>
                <Link to="/cookies-settings" onClick={closeDeclineModal} className="modal-link">
                  Manage Preferences
                </Link>
              </p>
              <button onClick={closeDeclineModal} className="modal-btn">
                Close
              </button>
            </div>
          </div>
        )}

        <div className="cookie-container animate-fade-in">
          <h1 className="cookie-heading">Cookie Settings</h1>
          <p className="cookie-date">Last updated: March 03, 2025</p>
          <p>Manage your cookie preferences below or learn more about how we use cookies.</p>

          <div className="cookie-preferences">
            <h2>Cookie Preferences</h2>
            <div className="preference-item">
              <div className="preference-info">
                <h3>Necessary Cookies</h3>
                <p>Essential for the website to function properly. These cannot be disabled.</p>
              </div>
              <label className="toggle-switch">
                <input type="checkbox" checked={preferences.necessary} disabled onChange={() => {}} />
                <span className="slider"></span>
              </label>
            </div>

            <div className="preference-item">
              <div className="preference-info">
                <h3>Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference("analytics")}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="preference-item">
              <div className="preference-info">
                <h3>Marketing Cookies</h3>
                <p>Used to track visitors across websites for advertising purposes.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference("marketing")}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="preference-item">
              <div className="preference-info">
                <h3>Functionality Cookies</h3>
                <p>Remember your preferences to enhance your experience.</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => togglePreference("functional")}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            Words with capitalized initial letters have meanings defined below, applicable in singular or plural.
          </p>
          <h3>Definitions</h3>
          <ul>
            <li><strong>Company</strong>: Vindus Environment ("We", "Us", "Our").</li>
            <li><strong>Cookies</strong>: Small files storing browsing data.</li>
            <li>
              <strong>Website</strong>:{" "}
              <a href="https://www.vindusenvironment.com/" className="contact-link">
                https://www.vindusenvironment.com/
              </a>
            </li>
            <li><strong>You</strong>: The user or entity accessing the Website.</li>
          </ul>

          <h2>The Use of Cookies</h2>
          <h3>Types of Cookies We Use</h3>
          <p>We use Session (temporary) and Persistent (stored) Cookies:</p>
          <ul>
            <li><strong>Necessary Cookies</strong>: Enable core features (Session).</li>
            <li><strong>Functionality Cookies</strong>: Save preferences (Persistent).</li>
            <li><strong>Analytics Cookies</strong>: Help us improve our website.</li>
            <li><strong>Marketing Cookies</strong>: Used for advertising purposes.</li>
          </ul>

          <h2>Your Choices</h2>
          <p>Disable cookies in your browser settings to opt out, though this may affect functionality.</p>
          <ul>
            <li>
              <a href="https://support.google.com/accounts/answer/32050" className="contact-link">
                Chrome
              </a>
            </li>
            <li>
              <a href="http://support.microsoft.com/kb/278835" className="contact-link">
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                className="contact-link"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                className="contact-link"
              >
                Safari
              </a>
            </li>
          </ul>

          <h2>More Information</h2>
          <p>
            Learn more:{" "}
            <a href="https://www.freeprivacypolicy.com/blog/cookies/" className="contact-link">
              What Do Cookies Do?
            </a>
          </p>

          <h2>Contact Us</h2>
          <p>For questions about this Cookies Policy:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:info@vindusenvironment.in?subject=Cookies%20Policy%20Inquiry&body=Hello,%0D%0A%0D%0AI%20have%20a%20question%20about%20your%20Cookies%20Policy.%0D%0A%0D%0ARegards,"
                className="contact-link"
              >
                info@vindusenvironment.in
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://www.vindusenvironment.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Vindus Environment
              </a>
            </li>
            <li>
              Phone: <a href="tel:+914049525396" className="contact-link">+91 4049525396</a>
            </li>
          </ul>
        </div>

        <div className="cookie-footer">
          <button
            onClick={handleBackToTop}
            className={`back-to-top ${isAnimating ? "back-to-top-animate" : ""}`}
            title="Back to Top"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </PageTransition>
  );
};

export default CookiesSettings;