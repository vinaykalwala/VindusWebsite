import React from 'react';
import { FaLightbulb, FaUsers, FaShieldAlt, FaHandsHelping, FaDollarSign, FaMedal } from 'react-icons/fa'; 
import '../styles/whychoose.css';

const WhyChooseUs = () => {
  const points = [
    {
      title: "Innovative Solutions",
      description: "With two years of experience, we bring fresh ideas and the latest technologies to deliver customized software solutions tailored to your needs.",
      icon: <FaLightbulb style={{ color: '#FFD700', fontSize: '3rem' }} />, 
    },
    {
      title: "Customer Focus",
      description: "We prioritize our clients, building strong partnerships through open communication and a deep understanding of your unique challenges.",
      icon: <FaUsers style={{ color: '#007BFF', fontSize: '3rem' }} />,
    },
    {
      title: "Quality Assurance",
      description: "Our commitment to quality ensures that our solutions are reliable, secure, and built to perform flawlessly in real-world scenarios.",
      icon: <FaShieldAlt style={{ color: '#28a745', fontSize: '3rem' }} />,
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance to keep your systems running smoothly, ensuring you can focus on your business.",
      icon: <FaHandsHelping style={{ color: '#FF6347', fontSize: '3rem' }} />, 
    },
    {
      title: "Affordable Pricing",
      description: "Our competitive and transparent pricing models are designed to provide value without compromising quality.",
      icon: <FaDollarSign style={{ color: '#FF9900', fontSize: '3rem' }} />, 
    },
    {
      title: "Proficient Team",
      description: "Our skilled professionals leverage their expertise to craft solutions that drive success and innovation for your business.",
      icon: <FaMedal style={{ color: '#C0C0C0', fontSize: '3rem' }} />,
    },
  ];

  return (
    <div className="why-choose-us">
      <h2 className='heading'>Why Choose Us</h2>
      <p className="section-description">
        At Vindus Environment Pvt Ltd, we understand that selecting the right software partner is crucial. Here’s why we’re the best choice for your business:
      </p>
      <div className="points-container">
        {points.map((point, index) => (
          <div className="point-box" key={index}>
            <div className="icon-container">
              {point.icon}
            </div>
            <h3 className="point-title">{point.title}</h3>
            <p className="point-description">{point.description}</p>
          </div>
        ))}
      </div>
      <div className="ready-to-partner">
        <h3 className="ready-title">Ready to Partner?</h3>
        <p className="ready-description">
          Choose Vindus Environment Pvt Ltd as your software solutions partner. Contact us today to discuss how we can help you achieve your goals!
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
