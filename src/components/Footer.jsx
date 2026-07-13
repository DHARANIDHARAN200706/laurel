import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="footer-main-container">
        
        {/* Editorial Split Layout */}
        <div className="footer-editorial-grid">
          
          {/* Left Column: Heading & Description */}
          <div className="footer-editorial-left">
            <span className="footer-mini-tag">THE LAUREL WAY</span>
            <h2 className="footer-editorial-heading">
              From learning<br />to leadership.
            </h2>
            <p className="footer-editorial-desc">
              Laurel Secondary School (CBSE) – Pattukkottai is a premier co-educational institution managed by Friends Trust, offering quality education from LKG to Class 12 in Thanjavur District, Tamil Nadu.
            </p>
            
            <div className="footer-socials" style={{ marginTop: '20px', display: 'flex', gap: '15px', fontSize: '0.85rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Facebook</a>
              <span style={{ opacity: 0.3 }}>|</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
              <span style={{ opacity: 0.3 }}>|</span>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Youtube</a>
            </div>
            
            <div className="footer-bottom-badge-list" style={{ marginTop: '25px' }}>
              <span className="badge-dot"></span>
              <span className="badge-text">Academic Excellence. Holistic Growth. Future Ready.</span>
            </div>
          </div>

          {/* Right Columns: Four Columns Staggered */}
          <div className="footer-columns-grid">
            
            {/* Column 01 */}
            <div className="footer-editorial-col">
              <span className="col-step-number">01</span>
              <div className="col-divider-line"></div>
              <h4 className="col-heading-title">About School</h4>
              <ul className="col-links-list">
                <li><Link to="/about">General Information</Link></li>
                <li><Link to="/about">Who We Are</Link></li>
                <li><Link to="/about">Our Teachers</Link></li>
                <li><Link to="/about">School History</Link></li>
              </ul>
            </div>

            {/* Column 02 */}
            <div className="footer-editorial-col">
              <span className="col-step-number">02</span>
              <div className="col-divider-line"></div>
              <h4 className="col-heading-title">Specialized Programme</h4>
              <ul className="col-links-list">
                <li><Link to="/oil-painting-training">Oil Painting Training</Link></li>
                <li><Link to="/academics">JEE Coaching</Link></li>
                <li><Link to="/academics">NEET Coaching</Link></li>
                <li><Link to="/academics">CUET Coaching</Link></li>
                <li><Link to="/faq">FAQ Support</Link></li>
              </ul>
            </div>

            {/* Column 03 */}
            <div className="footer-editorial-col">
              <span className="col-step-number">03</span>
              <div className="col-divider-line"></div>
              <h4 className="col-heading-title">Campus Life</h4>
              <ul className="col-links-list">
                <li><Link to="/facilities">ATAL Tinkering Lab</Link></li>
                <li><Link to="/facilities">Science Laboratories</Link></li>
                <li><Link to="/facilities">Digital Library</Link></li>
                <li><Link to="/facilities">Sports Grounds</Link></li>
              </ul>
            </div>

            {/* Column 04 */}
            <div className="footer-editorial-col">
              <span className="col-step-number">04</span>
              <div className="col-divider-line"></div>
              <h4 className="col-heading-title">Keep In Touch</h4>
              <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '12px', lineHeight: '1.4' }}>
                Our school is committed to providing quality CBSE education and integrated competitive exam coaching.
              </p>
              <ul className="col-links-list col-contact-list">
                <li>
                  <MapPin size={12} style={{ flexShrink: 0 }} />
                  <span>Adhirampattinam Main Road, Pallikondan, Pattukkottai – 614602, Thanjavur District, Tamil Nadu</span>
                </li>
                <li>
                  <Phone size={12} style={{ flexShrink: 0 }} />
                  <a href="tel:+919487918780">+91 9487918780</a>
                </li>
                <li>
                  <Mail size={12} style={{ flexShrink: 0 }} />
                  <a href="mailto:info@laurelcbse.in">info@laurelcbse.in</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 3D Glass Layer Illustration at the Bottom */}
        <div className="footer-3d-illustration">
          <div className="illustration-wrapper">
            
            {/* Left Marble Arch */}
            <div className="illust-shape marble-arch-left"></div>
            
            {/* Orange Sphere Glow */}
            <div className="illust-shape orange-glow-sphere"></div>
            
            {/* Overlapping Glass Pane 1 */}
            <div className="illust-shape glass-pane-one"></div>
            
            {/* Ribbed Glass Pane 2 */}
            <div className="illust-shape glass-pane-ribbed"></div>
            
            {/* Overlapping Glass Pane 3 */}
            <div className="illust-shape glass-pane-three"></div>
            
            {/* Right Textured Pillar */}
            <div className="illust-shape marble-pillar-right"></div>
            
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="footer-legal-bar">
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} Laurel CBSE School. All Rights Reserved.
          </p>
          
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="link-divider">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>

          <button className="footer-scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
