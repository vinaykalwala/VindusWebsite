import React from 'react';
import Business from '../assets/business.png';
import clientImage1 from '../assets/teja.png';
import clientImage2 from '../assets/mlc.png';
import clientImage3 from '../assets/fooden.webp';
import clientImage4 from '../assets/qtip.jpeg';
import clientImage5 from '../assets/seoclient.png';
import clientImage6 from '../assets/CKVK.jpg'; 
import clientImage7 from '../assets/SCM.jpg'; 
import Carousel from '../Components/Homebanner';
import Chatbox from '../Components/Chatbox';
import {
  FaSearchengin, FaUsers, FaChartLine, FaShieldAlt, FaCode, FaSeedling, FaRocket,
  FaReact, FaAngular, FaPhp, FaPython, FaAws, FaMobileAlt,
  FaGlobe, FaShoppingCart, FaCloud, FaServer, FaCogs, FaLaptopCode,
  FaIndustry, FaHospital, FaBook, FaMoneyBillWave, FaStore, FaTruck, FaGavel
} from 'react-icons/fa';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const technologies = [
    { name: 'Web Development', icon: <FaGlobe />, color: '#00A8B5' },
    { name: 'React', icon: <FaReact />, color: '#00A8B5' },
    { name: 'Angular', icon: <FaAngular />, color: '#00A8B5' },
    { name: 'PHP', icon: <FaPhp />, color: '#00A8B5' },
    { name: 'Python', icon: <FaPython />, color: '#00A8B5' },
    { name: 'AWS', icon: <FaAws />, color: '#00A8B5' },
    { name: 'Django', icon: <FaPython />, color: '#00A8B5' } 
  ];

  const services = [
    { name: 'Mobile Application Services', icon: <FaMobileAlt />, color: '#00A8B5' },
    { name: 'Web Development Services', icon: <FaGlobe />, color: '#00A8B5' },
    { name: 'E-commerce Solutions', icon: <FaShoppingCart />, color: '#00A8B5' },
    { name: 'SaaS Development', icon: <FaCloud />, color: '#00A8B5' },
    { name: 'Cloud Services', icon: <FaServer />, color: '#00A8B5' },
    { name: 'ERP', icon: <FaCogs />, color: '#00A8B5' },
    { name: 'CRM', icon: <FaLaptopCode />, color: '#00A8B5' },
  ];

  const industries = [
    { name: 'E-commerce', icon: <FaShoppingCart />, color: '#00A8B5' },
    { name: 'Healthcare', icon: <FaHospital />, color: '#00A8B5' },
    { name: 'Education', icon: <FaBook />, color: '#00A8B5' },
    { name: 'Finance', icon: <FaMoneyBillWave />, color: '#00A8B5' },
    { name: 'Retail', icon: <FaStore />, color: '#00A8B5' },
    { name: 'Logistics', icon: <FaTruck />, color: '#00A8B5' },
    { name: 'Law Firms', icon: <FaGavel />, color: '#00A8B5' },
    { name: 'Manufacturing', icon: <FaIndustry />, color: '#00A8B5' },
  ];

  return (
    <div className='home-container'>
      <Carousel />
      <h2 className='heading' id='space'>Achieve the Best</h2>
      <div className="center-container">
        <p className='para'>We audit and deliver SEO services all in one place.</p>
      </div>
      <div className='home-workflow'>
        <div className="card-container">
          <img src={Business} alt="Business Analytics" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Business Analytics</h2>
            <p className="card-description">
              Business analytics refers to the practice of analyzing data to gain insights into business operations and make informed decisions. 
              It involves statistical analysis, data mining, and predictive modeling to optimize processes, identify opportunities, and mitigate risks. 
              We help businesses understand patterns, forecast trends, and make data-driven decisions that lead to better outcomes.
            </p>
            <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className='home-services'>
        <h2 className='heading'>Explore Our Services</h2>
        <div className='service-grid'>
          {services.map((service, index) => (
            <div key={index} className='service-card-home'>
              <div className='icon-circle'>{service.icon}</div>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Our Expertise */}
      <div className='home-expertise'>
        <h2 className='heading'>Our Expertise</h2>
        <p className='para'>Helping Businesses Across Industries with Tailored Digital Solutions</p>
        <div className='service-grid'>
          {industries.map((industry, index) => (
            <div key={index} className='service-card-home'>
              <div className='icon-circle'>{industry.icon}</div>
              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>
        <p className='para quote'>“Our solutions are designed to integrate seamlessly into your industry, providing efficiency, security, and innovation.”</p>
        <button className="contact-btn" onClick={() => navigate('/services')}>Explore Industry Solutions</button>
      </div>

      {/* SEO Full-Width Section */}
      <div className='home-full-width'>
        <div className='seo-card-container'>
          <FaSearchengin className='seo-icon' />
          <h4>Search Engine Optimization</h4>
          <p>Vindus specializes in SEO to help you get recognized on major search engines.</p>
        </div>
        <div className='seo-card-container'>
          <FaUsers className='seo-icon' />
          <h4>Competitor Analysis</h4>
          <p>We'll analyze your competitors to strategize and enhance your market position.</p>
        </div>
        <div className='seo-card-container'>
          <FaChartLine className='seo-icon' />
          <h4>Data Analytics</h4>
          <p>Analyze data from various sources to strengthen strategies and identify opportunities.</p>
        </div>
        <div className='seo-card-container'>
          <FaShieldAlt className='seo-icon' />
          <h4>Online Reputation Management</h4>
          <p>Manage and enhance your online reputation to ensure positive reviews.</p>
        </div>
      </div>

      {/* Develop, Grow, Elevate */}
      <div className='home-services grid'>
        <div className='services-card'>
          <FaCode className='service-icon' />
          <h3>Develop</h3>
          <p>Design and develop unique software solutions with our comprehensive tools.</p>
        </div>
        <div className='services-card'>
          <FaSeedling className='service-icon' />
          <h3>Grow</h3>
          <p>Establish a strong user base as your software gains traction.</p>
        </div>
        <div className='services-card'>
          <FaRocket className='service-icon' />
          <h3>Elevate</h3>
          <p>Achieve recognition as a top software provider with our support.</p>
        </div>
      </div>

      {/* Customer-Centric Approach */}
      <div className='home-approach'>
        <h2 className='heading'>Customer-Centric Approach</h2>
        <p className='para'>A Proven Process for Delivering Exceptional Results</p>
        <div className='service-grid'>
          <div className='service-card-home'>
            <div className='icon-circle'><span>1</span></div>
            <h3>Understanding Your Needs</h3>
          </div>
          <div className='service-card-home'>
            <div className='icon-circle'><span>2</span></div>
            <h3>Strategy & Planning</h3>
          </div>
          <div className='service-card-home'>
            <div className='icon-circle'><span>3</span></div>
            <h3>Design & Development</h3>
          </div>
          <div className='service-card-home'>
            <div className='icon-circle'><span>4</span></div>
            <h3>Testing & QA</h3>
          </div>
          <div className='service-card-home'>
            <div className='icon-circle'><span>5</span></div>
            <h3>Deployment & Support</h3>
          </div>
        </div>
        <p className='para quote'>“We don’t just build solutions—we build long-term partnerships.”</p>
        <button className="contact-btn" onClick={() => navigate('/contact')}>Work With Us</button>
      </div>

      {/* Small Banner */}
      <div className='home-small-banner'>
        <h2 className='white-color'>For Small Scale Businesses & Development</h2>
        <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
      </div>

      {/* Technology Stack */}
      <div className='home-technology'>
        <h2 className='heading'>Our Technology Stack</h2>
        <p className='para'>Powering Digital Transformation with Cutting-Edge Technologies</p>
        <div className='technology-grid'>
          {technologies.map((tech, index) => (
            <div key={index} className='technology-card' style={{ backgroundColor: tech.color }}>
              {tech.icon}
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
        <p className='para quote'>“Scalable, secure, and efficient solutions built with the latest tech.”</p>
        <button className="contact-btn" onClick={() => navigate('/services')}>Learn More</button>
      </div>

      {/* Partner With Us */}
      <div className='home-partner'>
        <h2 className='heading'>Partner With Us</h2>
        <p className='para'>Looking for a Technology Partner? Let’s Collaborate!</p>
        <div className='grid'>
          <div className='services-card'>
            <FaRocket className='service-icon' />
            <h3>Launch</h3>
            <p>SEO, web, and mobile solutions for your digital presence.</p>
          </div>
          <div className='services-card'>
            <FaSeedling className='service-icon' />
            <h3>Scale</h3>
            <p>AI, automation, and cloud integration for growth.</p>
          </div>
          <div className='services-card'>
            <FaChartLine className='service-icon' />
            <h3>Compete</h3>
            <p>Data-driven insights for a competitive edge.</p>
          </div>
        </div>
        <p className='para quote'>“Let’s build the future together—one innovation at a time.”</p>
        <button className="contact-btn" onClick={() => navigate('/contact')}>Start Your Project</button>
      </div>

      {/* Clients */}
      <div className='home-clients'>
        <h2 className='heading'>Our Clients</h2>
        <div className='clients-grid'>
          <img src={clientImage1} alt="Client 1" className='client-image' />
          <img src={clientImage2} alt="Client 2" className='client-image' />
          <img src={clientImage3} alt="Client 3" className='client-image' />
          <img src={clientImage4} alt="Client 4" className='client-image' />
          <img src={clientImage5} alt="Client 5" className='client-image' />
          <img src={clientImage6} alt="C.K.V.K Law Associates" className='client-image' />
          <img src={clientImage7} alt="SCM Law Firm" className='client-image' />
        </div>
      </div>

      <Chatbox />
    </div>
  );
};

export default Home;