import React, { useState } from 'react';
import '../styles/howitworks.css';
import { 
  FaSearchengin, 
  FaChartLine, 
  FaCode, 
  FaReact, 
  FaShieldAlt, 
  FaRocket, 
  FaAws, 
  FaSeedling 
} from "react-icons/fa";

const faqData = [
  {
    question: "How do I get started with your services?",
    answer: "Simply contact us through the 'Contact Us' button, and our team will guide you through the onboarding process."
  },
  {
    question: "What is the pricing structure?",
    answer: "We offer customized pricing based on the specific needs of your business. Contact us for a detailed quote."
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes, we offer ongoing support and maintenance services to ensure your digital solutions remain effective."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. During the consultation phase, we'll provide a detailed timeline."
  },
  {
    question: "Can you handle projects of any size?",
    answer: "Absolutely! We cater to businesses of all sizes, from startups to large enterprises."
  },
];

const Accordion = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="how-it-works__accordion-item">
      <div 
        className={`how-it-works__accordion-question ${isOpen ? 'how-it-works__accordion-question--open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="how-it-works__accordion-question-text">{faq.question}</h4>
        <span className="how-it-works__accordion-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="how-it-works__accordion-answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const Howitworks = () => {
  return (
    <div className="how-it-works">
      <section className="how-it-works__intro">
        <h1 className="heading" id="heading">How It Works</h1>
        <p className="how-it-works__intro-text">
          At Vindus Environment Pvt. Ltd., we provide a comprehensive range of digital solutions tailored to your business needs. Discover how our services can elevate your digital presence and operational efficiency.
        </p>
      </section>
      
      <section className="how-it-works__services">
        <div className="how-it-works__service-card-how">
          <div className="how-it-works__icon-container how-it-works__icon-container--bg1">
            <FaSearchengin className="how-it-works__service-icon" />
          </div>
          <h2 className="how-it-works__service-title">Digital Marketing</h2>
          <p className="how-it-works__service-description">
            <strong>Step 1:</strong> We begin by understanding your business goals and crafting a tailored digital marketing strategy.<br/>
            <strong>Step 2:</strong> Our experts create engaging campaigns on Google, Facebook, LinkedIn, and other platforms.<br/>
            <strong>Step 3:</strong> We monitor campaign performance and optimize them in real-time to maximize ROI.
          </p>
        </div>

        <div className="how-it-works__service-card-how">
          <div className="how-it-works__icon-container how-it-works__icon-container--bg2">
            <FaCode className="how-it-works__service-icon" />
          </div>
          <h2 className="how-it-works__service-title">Web Development</h2>
          <p className="how-it-works__service-description">
            <strong>Step 1:</strong> Understand your needs and plan your website's functionality and design.<br/>
            <strong>Step 2:</strong> We design responsive, SEO-friendly websites tailored to your brand.<br/>
            <strong>Step 3:</strong> After development, we test and launch your website to ensure it performs optimally.
          </p>
        </div>

        <div className="how-it-works__service-card-how">
          <div className="how-it-works__icon-container how-it-works__icon-container--bg3">
            <FaReact className="how-it-works__service-icon" />
          </div>
          <h2 className="how-it-works__service-title">Web Application Development</h2>
          <p className="how-it-works__service-description">
            <strong>Step 1:</strong> We collaborate with you to define key features and functionalities.<br/>
            <strong>Step 2:</strong> We develop secure, scalable web applications using technologies like React and Angular.<br/>
            <strong>Step 3:</strong> We test thoroughly and provide maintenance for a seamless experience.
          </p>
        </div>

        <div className="how-it-works__service-card-how">
          <div className="how-it-works__icon-container how-it-works__icon-container--bg4">
            <FaChartLine className="how-it-works__service-icon" />
          </div>
          <h2 className="how-it-works__service-title">SEO (Search Engine Optimization)</h2>
          <p className="how-it-works__service-description">
            <strong>Step 1:</strong> Perform an SEO audit and research relevant keywords.<br/>
            <strong>Step 2:</strong> Implement on-page and off-page optimization techniques.<br/>
            <strong>Step 3:</strong> Monitor SEO performance with regular reports and improve continuously.
          </p>
        </div>

        <div className="how-it-works__service-card-how">
          <div className="how-it-works__icon-container how-it-works__icon-container--bg5">
            <FaAws className="how-it-works__service-icon" />
          </div>
          <h2 className="how-it-works__service-title">AWS Cloud Services</h2>
          <p className="how-it-works__service-description">
            <strong>Step 1:</strong> We design your cloud architecture according to your business needs.<br/>
            <strong>Step 2:</strong> Migrate your data to AWS Cloud securely and efficiently.<br/>
            <strong>Step 3:</strong> Provide ongoing monitoring and support for your cloud infrastructure.
          </p>
        </div>

        <div className="how-it-works__service-card-how">
          <div className="how-it-works__icon-container how-it-works__icon-container--bg6">
            <FaShieldAlt className="how-it-works__service-icon" />
          </div>
          <h2 className="how-it-works__service-title">Software Testing</h2>
          <p className="how-it-works__service-description">
            <strong>Step 1:</strong> We gather your software requirements and test for functionality, performance, and security.<br/>
            <strong>Step 2:</strong> Our QA team runs thorough tests and reports issues.<br/>
            <strong>Step 3:</strong> We retest after issues are fixed, ensuring smooth performance.
          </p>
        </div>
      </section>
      
      <section className="how-it-works__faq">
        <h2 className="how-it-works__faq-heading">Frequently Asked Questions</h2>
        <div className="how-it-works__accordion">
          {faqData.map((faq, index) => (
            <Accordion key={index} faq={faq} />
          ))}
        </div>
      </section>
      
      <section className="how-it-works__cta">
        <h2 className="how-it-works__cta-heading">Ready to Take Your Business to the Next Level?</h2>
        <p className="how-it-works__cta-text">
          Get in touch with us today to discover how Vindus Environment Pvt. Ltd. can help your business grow digitally.
        </p>
        <button 
          className="how-it-works__cta-button" 
          onClick={() => window.location.href='/contact'}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Howitworks;