import React from "react";
import "../styles/security.css";
import { FaShieldAlt, FaLock, FaUserShield, FaCogs, FaGlobe, FaChartLine, FaDatabase, FaNetworkWired, FaUsers, FaHandshake } from "react-icons/fa";

const Security = () => {
  return (
    <div className="security-container">
      {/* Header Section */}
      <header className="security-header">
        <h1 className="security-heading">Vindus Environment Security Policy</h1>
        <p className="security-date">Last Updated: March 2025</p>
      </header>

      {/* Introduction Section */}
      <section className="security-intro">
        <p>
          Vindus Environment is an IT services, consulting, and business solutions
          organization offering a consulting-led, cognitive-powered, AI-driven,
          integrated portfolio of business, technology, and engineering services
          and solutions delivered through its unique Location Independent Agile™
          delivery model. As part of its operations, Vindus Environment has access
          to business-sensitive information (including personal information), the
          protection of which is crucial to Vindus Environment and its clients’
          business interests.
        </p>
      </section>

      {/* Vision Section */}
      <section className="security-vision">
        <div className="icon-container">
          <FaShieldAlt className="icon" />
        </div>
        <h2 className="security-subheading">Our Security Vision</h2>
        <p>
          Our Security Vision is “To make Vindus Environment reliable, resilient,
          and immune to the existing and evolving volatile environment of constant
          changes, accidents, attacks, and failures.”
        </p>
      </section>

      {/* Commitments Section */}
      <section className="security-commitments">
        <div className="icon-container">
          <FaLock className="icon" />
        </div>
        <h2 className="security-subheading">Security Policy Commitments</h2>
        <p>
          This Security Policy reiterates our commitment to protect all the
          information and assets that we own or are responsible for; thus,
          ensuring an efficient, safe, and secure working environment for Vindus
          Environment and its customers.
        </p>

        <ul className="security-list">
          <li>
            <FaUserShield className="list-icon" />
            Protection of information and assets against unauthorized access by
            deploying adequate security controls covering physical, logical, and
            personnel security.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            Compliance with legal and statutory/regulatory requirements across its
            global operations.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            Continuity of operations in line with business requirements and
            obligations to its stakeholders.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            Inclusion of security responsibilities of various
            departments/individuals to adhere to this Policy.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            Adequate security awareness and competence among associates at all
            levels to fulfill these responsibilities.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            Avenues for associates and other stakeholders to report security
            weaknesses, violations, or disruption of services.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            A robust response framework to handle security weaknesses, violations,
            or disruption of services.
          </li>
          <li>
            <FaUserShield className="list-icon" />
            Governance of security performance against appropriate targets and
            objectives, enabling continuous improvements.
          </li>
        </ul>
      </section>

      {/* Policy Implementation Section */}
      <section className="policy-implementation">
        <div className="icon-container">
          <FaCogs className="icon" />
        </div>
        <h2 className="security-subheading">Policy Implementation</h2>
        <p>
          This Policy will be supported by Standards, Procedures, and Guidelines
          (Security Management System) and will be made available to all
          stakeholders who are expected to contribute towards the effective
          implementation and deployment of these security norms.
        </p>

        <p>
          The Security Management System will be periodically reviewed to ensure
          its continuing applicability and relevance to our operations and
          evolving stakeholder expectations.
        </p>
      </section>

      {/* Scope and Applicability Section */}
      <section className="scope-applicability">
        <div className="icon-container">
          <FaGlobe className="icon" />
        </div>
        <h2 className="security-subheading">Scope and Applicability</h2>
        <p>
          This Policy will extend to Vindus Environment globally and its
          wholly-owned subsidiaries in all geographies and will be applicable to
          all its associates, business associates, and external parties having
          access and usage rights to its infrastructure, IT systems and/or
          Information resources.
        </p>

        <p>
          Consequences arising out of violations or contravention to any of the
          objectives of this Policy will be equally applicable to all associates
          of Vindus Environment and its wholly-owned subsidiaries globally and
          external parties.
        </p>
      </section>

      {/* Additional Sections */}
      <section className="security-risk-management">
        <div className="icon-container">
          <FaChartLine className="icon" />
        </div>
        <h2 className="security-subheading">Risk Management</h2>
        <p>
          Vindus Environment employs a comprehensive risk management framework
          to identify, assess, and mitigate risks to its information assets. This
          includes regular risk assessments, threat modeling, and the
          implementation of controls to reduce vulnerabilities.
        </p>
      </section>

      <section className="security-data-protection">
        <div className="icon-container">
          <FaDatabase className="icon" />
        </div>
        <h2 className="security-subheading">Data Protection</h2>
        <p>
          We prioritize the protection of sensitive data through encryption,
          access controls, and secure data storage practices. Data is classified
          based on its sensitivity, and appropriate measures are taken to ensure
          its confidentiality, integrity, and availability.
        </p>
      </section>

      <section className="security-network-security">
        <div className="icon-container">
          <FaNetworkWired className="icon" />
        </div>
        <h2 className="security-subheading">Network Security</h2>
        <p>
          Our network security measures include firewalls, intrusion detection
          systems, and regular penetration testing. We ensure that our network
          infrastructure is resilient against cyber threats and unauthorized
          access.
        </p>
      </section>

      <section className="security-incident-response">
        <div className="icon-container">
          <FaUsers className="icon" />
        </div>
        <h2 className="security-subheading">Incident Response</h2>
        <p>
          In the event of a security incident, Vindus Environment has a
          well-defined incident response plan. This includes immediate
          containment, investigation, and remediation to minimize the impact on
          our operations and clients.
        </p>
      </section>

      <section className="security-vendor-management">
        <div className="icon-container">
          <FaHandshake className="icon" />
        </div>
        <h2 className="security-subheading">Vendor Management</h2>
        <p>
          We ensure that third-party vendors comply with our security standards
          through rigorous due diligence and ongoing monitoring. Vendors are
          required to adhere to our security policies and report any incidents
          promptly.
        </p>
      </section>

      {/* Footer */}
      <footer className="security-footer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
  Back to top
</footer>
    </div>
  );
};

export default Security;