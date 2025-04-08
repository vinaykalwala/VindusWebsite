import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/casestudies.css';
import clientImage1 from '../assets/teja.png';
import clientImage2 from '../assets/mlc.png';
import clientImage3 from '../assets/fooden.webp';
import clientImage4 from '../assets/qtip.jpeg';
import clientImage5 from '../assets/seoclient.png';
import successStoriesBanner from '../assets/CaseStudies.jpg'; 

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'MLC QEHS',
      client: {
        name: 'Ganta Bharath',
        industry: 'Quality, Environment, Health & Safety',
        description: 'A comprehensive platform for managing QEHS systems with cloud support.',
      },
      timeline: 'March 2023 - Present',
      scope: 'Developed a platform using HTML, CSS, JavaScript, Bootstrap, and AWS.',
      challenges: [
        'Managing large datasets and ensuring real-time data processing.',
        'Implementing complex health and safety standards.',
      ],
      solutions: [
        'Built a cloud-based QEHS platform to handle large data efficiently.',
        'Implemented automated reports and dashboards for data visualization.',
      ],
      results: {
        percentageImprovement: '35%',
        description: 'Improved process efficiency and compliance by automating QEHS management.',
      },
      sustainabilityImpact: 'Enhanced long-term compliance with safety regulations and standards.',
      visuals: [clientImage2, 'mlc-qehs-after.jpg'],
      testimonial: '"MLC QEHS is now more streamlined thanks to the team at Vindus Environment." - Ganta Bharath',
      category: 'Environmental Health & Safety',
      link: '/case-studies/1',
    },
    {
      id: 2,
      title: 'Teja Traders - Fertilizers',
      client: {
        name: 'Teja Traders',
        industry: 'Agriculture',
        description: 'An ecommerce platform for fertilizer trading.',
      },
      timeline: 'June 2022 - December 2022',
      scope: 'Developed a fertilizer ecommerce platform using Python, Django, HTML, CSS, JavaScript, and Bootstrap.',
      challenges: [
        'Integrating multiple payment gateways.',
        'Ensuring smooth inventory and order management.',
      ],
      solutions: [
        'Developed a robust ecommerce platform with integrated payment and inventory systems.',
        'Implemented an intuitive admin dashboard for easy management.',
      ],
      results: {
        percentageImprovement: '50%',
        description: 'Increased sales and improved inventory management for Teja Traders.',
      },
      sustainabilityImpact: 'Improved agricultural sustainability by optimizing fertilizer supply chains.',
      visuals: [clientImage1, 'teja-traders-after.jpg'],
      testimonial: '"Teja Traders experienced immense growth with the new ecommerce platform." - Teja Traders',
      category: 'Agriculture',
      link: '/case-studies/2',
    },
    {
      id: 3,
      title: "Food's Den",
      client: {
        name: 'Raghunandhan',
        industry: 'Restaurant Management',
        description: 'A restaurant management system with online ordering and reservations.',
      },
      timeline: 'July 2022 - February 2023',
      scope: 'Developed using Python, Django, HTML, CSS, JavaScript, and Bootstrap.',
      challenges: [
        'Managing real-time inventory and reservations.',
        'Integrating online ordering with the backend system.',
      ],
      solutions: [
        'Created a full-fledged restaurant system with real-time order and table management.',
        'Integrated a seamless online ordering process.',
      ],
      results: {
        percentageImprovement: '45%',
        description: 'Increased customer satisfaction and efficiency through online services.',
      },
      sustainabilityImpact: 'Reduced food waste by implementing an efficient inventory system.',
      visuals: [clientImage3, 'foods-den-after.jpg'],
      testimonial: '"Our operations are now more efficient and user-friendly." - Raghunandhan',
      category: 'Restaurant Management',
      link: '/case-studies/3',
    },
    {
      id: 4,
      title: 'Vaudit - SEO Tool',
      client: {
        name: 'Vaudit',
        industry: 'SEO & Marketing',
        description: 'A comprehensive SEO tool for analyzing and improving website performance.',
      },
      timeline: 'January 2023 - Present',
      scope: 'Developed using React, CSS, Bootstrap, Django, Python.',
      challenges: [
        'Handling large-scale data for SEO metrics.',
        'Providing real-time insights for users.',
      ],
      solutions: [
        'Created a sleek SEO analysis tool with data visualization and report generation.',
        'Integrated real-time updates for SEO rankings and metrics.',
      ],
      results: {
        percentageImprovement: '60%',
        description: 'Improved SEO performance for over 200 clients.',
      },
      sustainabilityImpact: 'Promoted eco-friendly online marketing strategies by reducing server load.',
      visuals: [clientImage5, 'vaudit-after.jpg'],
      testimonial: '"Vaudit transformed our SEO strategy." - Vaudit Client',
      category: 'SEO & Marketing',
      link: '/case-studies/4',
    },
    {
      id: 5,
      title: 'Qtipstore',
      client: {
        name: 'Qtipstore',
        industry: 'Ecommerce',
        description: 'An ecommerce platform similar to Teja Traders, focusing on SEO and online visibility.',
      },
      timeline: 'February 2023 - Present',
      scope: 'Developed using Python, Django, HTML, CSS, JavaScript, and Bootstrap.',
      challenges: [
        'Increasing online visibility and SEO rankings.',
        'Handling a large number of products and categories.',
      ],
      solutions: [
        'Built a fully optimized SEO ecommerce platform with advanced filtering and product management.',
        'Integrated robust analytics for tracking online traffic and conversions.',
      ],
      results: {
        percentageImprovement: '70%',
        description: 'Boosted traffic and sales through enhanced SEO strategies.',
      },
      sustainabilityImpact: 'Supported sustainable ecommerce by promoting environmentally conscious products.',
      visuals: [clientImage4, 'qtipstore-after.jpg'],
      testimonial: '"Qtipstore became a top-tier ecommerce platform in a short period." - Qtipstore Client',
      category: 'Ecommerce',
      link: '/case-studies/5',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const categories = ['All', ...new Set(caseStudies.map((cs) => cs.category))];
  const filteredCaseStudies =
    filter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.category === filter);
  const featuredCaseStudies = caseStudies.filter(
    (cs) => cs.title === 'Vaudit - SEO Tool' || cs.title === 'Qtipstore'
  );

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedCaseStudy(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="case-studies-page">
      <section className="introduction" style={{ backgroundImage: `url(${successStoriesBanner})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
        {/* <h1 className="heading">Our Success Stories</h1> */}
      </section>

      {/* Updated Intro Body Section with Heading */}
      <section className="intro-body">
        <div className="intro-content">
          <h2>Our Journey</h2>
          <p>
            Since May 2023, Vindus Environment Pvt Ltd has been on a remarkable journey, helping clients achieve their goals through innovative solutions. Under the visionary leadership of CEO Vinay Kalwala, our dedicated team has delivered outstanding results, transforming challenges into success stories across various industries.
          </p>
          <p>
            Our case studies showcase the impactful projects we’ve undertaken, highlighting the unique challenges faced by our clients and the tailored solutions we provided. Explore how we have made a difference and continue to drive progress for businesses in an ever-evolving landscape.
          </p>
          <p>
            Join us as we celebrate the successes we’ve achieved together and look forward to many more innovative solutions in the future.
          </p>
        </div>
      </section>

      <section className="featured-case-studies">
        <h2 className="heading">Featured Projects</h2>
        <div className="case-study-cards">
          {featuredCaseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card">
              <img src={caseStudy.visuals[0]} alt={caseStudy.title} className="client-image" />
              <div className="card-content">
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.scope}</p>
                <button
                  className="read-more"
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                >
                  Click for Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="all-case-studies">
        <h2 className="heading">All Case Studies</h2>
        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="case-studies-grid">
          {filteredCaseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card">
              <img src={caseStudy.visuals[0]} alt={caseStudy.title} className="client-image" />
              <div className="card-content">
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.client.name}</p>
                <p>{caseStudy.scope}</p>
                <button
                  className="read-more"
                  onClick={() => setSelectedCaseStudy(caseStudy)}
                >
                  Click for Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCaseStudy && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setSelectedCaseStudy(null)}
        >
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close modal"
            >
              ×
            </span>
            <h2>{selectedCaseStudy.title}</h2>
            <h3>{selectedCaseStudy.client.name}</h3>
            <p>{selectedCaseStudy.client.description}</p>
            <p><strong>Timeline:</strong> {selectedCaseStudy.timeline}</p>
            <p><strong>Scope:</strong> {selectedCaseStudy.scope}</p>
            <h4>Challenges:</h4>
            <ul>
              {selectedCaseStudy.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <h4>Solutions:</h4>
            <ul>
              {selectedCaseStudy.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
            <h4>Results:</h4>
            <p>{selectedCaseStudy.results.description}</p>
            <p>
              <strong>Percentage Improvement:</strong> {selectedCaseStudy.results.percentageImprovement}
            </p>
            <h4>Sustainability Impact:</h4>
            <p>{selectedCaseStudy.sustainabilityImpact}</p>
            <h4>Testimonial:</h4>
            <blockquote>{selectedCaseStudy.testimonial}</blockquote>
          </div>
        </div>
      )}

      <section className="conclusion-section">
        <div className="conclusion-content">
          <h3 className="conclusion-title">Conclusion</h3>
          <p className="conclusion-summary">
            In summary, our case studies showcase a diverse range of projects that demonstrate our expertise and commitment to delivering exceptional results for our clients. Each project reflects our dedication to understanding our clients’ unique needs and challenges, allowing us to tailor our solutions for maximum impact.
          </p>
          <p className="conclusion-outcomes-intro">
            Through our innovative approaches, we have consistently achieved significant outcomes, including:
          </p>
          <ul className="conclusion-outcomes">
            <li>Increased operational efficiency, resulting in cost savings and improved productivity.</li>
            <li>Enhanced customer satisfaction scores, highlighting our focus on delivering value.</li>
            <li>Successful project delivery within timelines and budgets, reinforcing our reliability as a partner.</li>
          </ul>
          <p className="conclusion-testament">
            These case studies not only illustrate our capabilities but also serve as a testament to our collaborative approach with clients. We believe in fostering long-term partnerships that drive continuous improvement and success.
          </p>
          <p className="conclusion-cta">
            If you are looking to achieve similar results for your business or have any questions about our services, we invite you to{' '}
            <Link to="/contact" className="conclusion-link">get in touch with us</Link>. Together, we can explore how we can help you overcome challenges and realize your business goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;