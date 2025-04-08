import React from 'react';
import '../styles/services.css';
import SEO from '../assets/Seo.png';
import Software from '../assets/software.png';
import AWS from '../assets/cloud.png';
import Testing from '../assets/Testing.png';
import Blockchain from '../assets/block.jpg';
import IoT from '../assets/iot.png';
import AI from '../assets/ai.jpg';
import servicesBanner from '../assets/OurServices.jpg'; 
import { FaSearch, FaCode, FaCloud, FaMicrochip, FaLink, FaRobot } from 'react-icons/fa';

const servicesData = [
  {
    title: "SEO Tool",
    description: "Our advanced SEO tools help you analyze and improve your website's ranking on search engines. From comprehensive keyword research to backlink analysis, we provide actionable insights to drive more traffic to your website and improve overall visibility.",
    imgSrc: SEO,
    icon: <FaSearch />,
    list: ["Keyword Analysis", "Backlink Checker", "SEO Audits", "Competitor Analysis", "On-Page Optimization Tools", "Rank Tracking"],
  },
  {
    title: "Software Development",
    description: "We build custom software solutions tailored to your specific business requirements, ensuring scalability, performance, and security. Whether you're looking for enterprise software, web applications, or cloud-based systems, we design and develop solutions that evolve with your business.",
    imgSrc: Software,
    icon: <FaCode />,
    list: ["Business Software Development", "Enterprise Solutions", "Cloud-Based Software", "Microservices Architecture", "Custom API Development", "SaaS Application Development"],
  },
  {
    title: "AWS Cloud",
    description: "Leverage the power of Amazon Web Services (AWS) for secure, scalable, and cost-effective cloud solutions. From cloud migration to infrastructure management, we ensure your applications are optimized for performance and security.",
    imgSrc: AWS,
    icon: <FaCloud />,
    list: ["Cloud Computing", "Storage Solutions", "Database Services", "Networking", "AWS Lambda and Serverless", "DevOps and Automation"],
  },
  {
    title: "Software Testing",
    description: "Ensure the quality and reliability of your software with our comprehensive testing services. Our testing solutions cover everything from functionality to performance, security, and usability.",
    imgSrc: Testing,
    icon: <FaMicrochip />,
    list: ["Functional Testing", "Performance Testing", "Security Testing", "Automation Testing", "Usability Testing", "Regression Testing"],
  },
  {
    title: "Blockchain Services",
    description: "Harness the transformative power of blockchain technology with our comprehensive blockchain services. We develop decentralized applications, smart contracts, and secure blockchain solutions tailored to your business needs.",
    imgSrc: Blockchain,
    icon: <FaLink />,
    list: ["Decentralized Application (DApp) Development", "Smart Contract Development", "Blockchain Consulting", "Cryptocurrency Integration", "Supply Chain Transparency", "Secure Data Sharing"],
  },
  {
    title: "IoT Solutions",
    description: "Transform your business with our cutting-edge Internet of Things (IoT) solutions. We design and implement IoT systems that connect devices, collect data, and provide actionable insights to enhance operational efficiency and innovation.",
    imgSrc: IoT,
    icon: <FaMicrochip />,
    list: ["Smart Device Integration", "Sensor Deployment", "IoT Platform Development", "Data Analytics", "Remote Monitoring", "IoT Security Solutions"],
  },
  {
    title: "AI and Machine Learning Solutions",
    description: "Transform your business processes with our AI and machine learning solutions. We develop intelligent systems that analyze data, automate tasks, and enhance decision-making capabilities.",
    imgSrc: AI,
    icon: <FaRobot />,
    list: ["Predictive Analytics", "Natural Language Processing (NLP)", "Machine Learning Model Development", "AI-Powered Automation", "Image and Video Recognition", "Custom AI Solutions"],
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header" style={{ backgroundImage: `url(${servicesBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <h1 className="heading">Our Services</h1> */}
        {/* <p className="header-text">
          We offer a wide range of services to help you achieve your business goals. Explore below to see what we can do for you!
        </p> */}
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-image">
              <img src={service.imgSrc} alt={service.title} />
            </div>
            
            <div className="service-text">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="learn-more-btn">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
