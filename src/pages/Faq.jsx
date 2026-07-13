import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, ArrowRight, HelpCircle, BookOpen, Users, Compass, Shield, Award } from 'lucide-react';
import './Faq.css';

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What curriculum does LAUREL follow?",
      a: "LAUREL follows the Central Board of Secondary Education (CBSE) curriculum, focusing on academic excellence and holistic development."
    },
    {
      q: "What classes are offered?",
      a: "The school offers classes from Kindergarten to Senior Secondary level."
    },
    {
      q: "What facilities are available on campus?",
      a: "Modern classrooms, science and computer labs, library, sports facilities, and activity-based learning spaces."
    },
    {
      q: "Does the school provide transport?",
      a: "Yes, safe and reliable transport facilities are available across selected routes."
    },
    {
      q: "What extracurricular activities are offered?",
      a: "Students can participate in sports, arts, robotics, cultural events, and clubs for overall development."
    },
    {
      q: "Are there qualified teachers?",
      a: "Yes, LAUREL has trained and experienced faculty aligned with CBSE teaching standards."
    }
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="faq-page-editorial">
      {/* 1. Hero Canvas (Editorial Spacing Design) */}
      <section className="faq-editorial-hero">
        <div className="hero-grid-container">
          
          {/* Vertical sidebar watermark */}
          <div className="hero-sidebar-watermark">
            <span>laurel</span>
            <span className="dot">•</span>
            <span>Faq</span>
          </div>

          <div className="hero-main-content">
            <div className="hero-title-row">
              <span className="hero-number">FAQ</span>
              <div className="hero-title-group">
                <h1 className="hero-main-title">Frequently Asked Questions?</h1>
                <p className="hero-subtitle">
                  Find clear answers to common inquiries about curriculum, enrollment, facilities, and campus operations.
                </p>
              </div>
            </div>

            <div className="hero-breadcrumb">
              <span>Home</span>
              <span className="divider">/</span>
              <span className="active">Faq</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Accordion Layout */}
      <section className="faq-content-section">
        <div className="container faq-grid">
          
          {/* Left Column: Overview Quick Links list */}
          <div className="faq-quick-list">
            <div className="quick-list-header">
              <HelpCircle size={28} color="#ff4500" />
              <h3>Questions Index</h3>
              <p>Click any topic to view detailed response and administrative standards.</p>
            </div>
            
            <div className="quick-links-stack">
              {faqs.map((faq, idx) => (
                <button 
                  key={idx} 
                  className={`quick-link-item ${activeFaq === idx ? 'active' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="link-num">0{idx + 1}</span>
                  <span className="link-text">{faq.q}</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Neumorphic Accordion Cards */}
          <div className="faq-accordion-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-editorial-card ${activeFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-card-header">
                  <div className="card-header-left">
                    <span className="faq-card-num">0{idx + 1}</span>
                    <h4>{faq.q}</h4>
                  </div>
                  <div className="faq-toggle-icon">
                    {activeFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                
                {activeFaq === idx && (
                  <div className="faq-card-body">
                    <p className="faq-answer-text">{faq.a}</p>
                    <div className="faq-card-meta">
                      <span className="meta-tag">CBSE GUIDELINES</span>
                      <span className="meta-tag">LAUREL SYSTEM</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Video CTA Section */}
      <section className="faq-video-section">
        <div className="container">
          <div className="video-banner-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80)' }}>
            <div className="video-banner-overlay"></div>
            
            <div className="video-banner-content">
              <span className="video-subtitle">Watch Campus Introduction</span>
              <h2>Experience Laurel in Motion</h2>
              <p>Take a digital walkthrough of our high-quality blend of academics, sports, and co-curricular programs.</p>
              
              <button className="video-play-btn" onClick={() => window.open('https://youtube.com', '_blank')}>
                <Play size={24} fill="#ffffff" stroke="#ffffff" />
                <span>Play Video</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
