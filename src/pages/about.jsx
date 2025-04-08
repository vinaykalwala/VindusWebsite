import React, { useEffect, useRef } from 'react';
import '../styles/about.css';
import missionImage from '../assets/mission.png';
import visionImage from '../assets/vision.webp';
import valuesImage from '../assets/values.png';
import aboutBanner from '../assets/AboutUs1.jpg'; 

const About = () => {
  const whoWeAreRef = useRef(null);
  const journeyRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const whoWeAreSection = whoWeAreRef.current;
      const journeySection = journeyRef.current;
      const visionSection = visionRef.current;
      const missionSection = missionRef.current;
      const valuesSection = valuesRef.current;
      const whyChooseSection = whyChooseRef.current;

      const checkVisibility = (section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
          if (isVisible) {
            section.classList.add('visible');
          }
        }
      };

      checkVisibility(whoWeAreSection);
      checkVisibility(journeySection);
      checkVisibility(visionSection);
      checkVisibility(missionSection);
      checkVisibility(valuesSection);
      checkVisibility(whyChooseSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-us">
      {/* Hero Section with Banner */}
      <section className="hero-section" style={{ backgroundImage: `url(${aboutBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          {/* <h1 className="hero-title">About Us – Vindus Environment Private Limited</h1> */}
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section" ref={whoWeAreRef}>
        <div className="section-content">
          <div className="text-content">
            <h2>Who We Are</h2>
            <p>
              Vindus Environment Private Limited is a forward-thinking IT solutions company dedicated to empowering businesses with digital transformation. Founded in March 2023 and headquartered in Hyderabad, Telangana, we specialize in delivering cutting-edge technology solutions that enhance business efficiency, scalability, and innovation.
            </p>
            <p>
              Our expertise spans across multiple industries, providing businesses with the tools, strategies, and digital infrastructure they need to stay ahead in a competitive marketplace. Whether it's software development, cloud solutions, or digital marketing, we are committed to driving success through technology.
            </p>
          </div>
          <div className="image-content">
            <img src={missionImage} alt="Who We Are" className="section-image" />
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="journey-section" ref={journeyRef}>
        <div className="section-content reverse">
          <div className="text-content">
            <h2>Our Journey</h2>
            <p>
              Since our inception, we have been focused on solving real-world challenges by leveraging technology. Our team of skilled professionals continuously adapts to the latest trends, ensuring that our solutions remain relevant, robust, and effective. We have collaborated with various businesses, helping them scale through customized digital solutions, automation, and data-driven decision-making.
            </p>
          </div>
          <div className="image-content">
            <img src={visionImage} alt="Our Journey" className="section-image" />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section" ref={visionRef}>
        <div className="section-content">
          <div className="text-content">
            <h2>Our Vision</h2>
            <p>
              To be a global leader in IT solutions by empowering businesses with innovative, scalable, and secure digital services. We aim to bridge the gap between technology and business growth, ensuring that companies of all sizes benefit from modern digital advancements.
            </p>
          </div>
          <div className="image-content">
            <img src={visionImage} alt="Our Vision" className="section-image" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section" ref={missionRef}>
        <div className="section-content reverse">
          <div className="text-content">
            <h2>Our Mission</h2>
            <ul>
              <li>To develop high-performance, scalable, and secure IT solutions that cater to diverse business needs.</li>
              <li>To help businesses enhance their digital presence through innovative software, automation, and data-driven strategies.</li>
              <li>To build long-term, value-driven partnerships with our clients by providing cost-effective and tailored solutions.</li>
              <li>To stay at the forefront of technology, offering businesses the latest advancements in cloud computing, AI, and digital transformation.</li>
            </ul>
          </div>
          <div className="image-content">
            <img src={missionImage} alt="Our Mission" className="section-image" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section" ref={valuesRef}>
        <div className="section-content">
          <div className="text-content">
            <h2>Core Values</h2>
            <p>At Vindus Environment, we believe in:</p>
            <ul>
              <li><span>Innovation</span> – Constantly evolving to integrate the latest technological advancements.</li>
              <li><span>Integrity</span> – Maintaining transparency and trust in all our collaborations.</li>
              <li><span>Client Success</span> – Prioritizing customer satisfaction and ensuring solutions align with business goals.</li>
              <li><span>Excellence</span> – Delivering quality solutions with attention to detail and long-term value.</li>
              <li><span>Adaptability</span> – Keeping up with industry trends to ensure businesses remain competitive.</li>
            </ul>
          </div>
          <div className="image-content">
            <img src={valuesImage} alt="Core Values" className="section-image" />
          </div>
        </div>
      </section>

      {/* Why Choose Vindus Environment Section */}
      <section className="why-choose-section" ref={whyChooseRef}>
        <div className="section-content reverse">
          <div className="text-content">
            <h2>Why Choose Vindus Environment?</h2>
            <ul>
              <li><span>Expertise Across Industries</span> – We cater to a wide range of business sectors, from startups to enterprises.</li>
              <li><span>Custom Solutions</span> – Our tailored services ensure that your business gets exactly what it needs.</li>
              <li><span>Scalability & Security</span> – We design solutions that grow with your business while maintaining top-tier security.</li>
              <li><span>Future-Ready Technology</span> – We implement AI, cloud computing, automation, and data analytics to give businesses a competitive edge.</li>
              <li><span>Dedicated Support</span> – Our team is always available to assist and optimize solutions for maximum efficiency.</li>
            </ul>
            <p>
              At Vindus Environment Private Limited, we don’t just provide services; we create transformational digital experiences that enable businesses to innovate, compete, and succeed in today’s digital era.
            </p>
            <p>
              Join us on this journey toward a smarter and more efficient future!
            </p>
          </div>
          <div className="image-content">
            <img src={valuesImage} alt="Why Choose Us" className="section-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;