import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cpu, Code, GraduationCap, Rocket } from 'lucide-react';
import './Admission.css';

export default function Admission() {
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
    <div className="admission-page animate-fade-in">
      {/* Page Hero */}
      <section className="admission-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          {/* Breadcrumb */}
          <div className="hero-breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '800', marginBottom: '15px' }}>
            <span style={{ color: '#888888' }}>Admission</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ color: 'var(--secondary)' }}>HomeAdmission</span>
          </div>

          <span className="badge">Enroll with Us</span>
          <h1 style={{ marginTop: '10px' }}>Admission Guidelines & Enrollment</h1>
          <p>Admissions are open for the academic year 2026-27. Please contact our admissions desk for guidelines.</p>
        </div>
      </section>

      {/* Enroll with Us - Benefits Cards Section */}
      <section className="section section-light" style={{ padding: '50px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid grid-4" style={{ gap: '24px' }}>
            
            {/* Benefit 1 */}
            <div className="card" style={{ padding: '24px', textAlign: 'center', border: '1px solid var(--border-color)', background: 'var(--bg-card)', borderRadius: '12px' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(255, 69, 0, 0.1)', color: 'var(--secondary)', marginBottom: '16px' }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', fontWeight: '700' }}>Hands-on Learning</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>Build real projects with robotics, electronics, and innovation.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="card" style={{ padding: '24px', textAlign: 'center', border: '1px solid var(--border-color)', background: 'var(--bg-card)', borderRadius: '12px' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', marginBottom: '16px' }}>
                <Code size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', fontWeight: '700' }}>Skill Development</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>Enhance problem-solving, coding, and technical skills.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="card" style={{ padding: '24px', textAlign: 'center', border: '1px solid var(--border-color)', background: 'var(--bg-card)', borderRadius: '12px' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', marginBottom: '16px' }}>
                <GraduationCap size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', fontWeight: '700' }}>Expert Guidance</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>Learn from experienced mentors and trainers.</p>
            </div>
            
            {/* Benefit 4 */}
            <div className="card" style={{ padding: '24px', textAlign: 'center', border: '1px solid var(--border-color)', background: 'var(--bg-card)', borderRadius: '12px' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', marginBottom: '16px' }}>
                <Rocket size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', fontWeight: '700' }}>Future Ready</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: '0' }}>Prepare for careers in technology and engineering.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Content Layout (Grid of Contact Card + FAQs) */}
      <section className="section">
        <div className="container grid grid-2" style={{ gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Contact Card */}
          <div className="card" style={{ padding: '40px', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
            <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>Admissions Open</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: '1.6' }}>
              We welcome applications for the upcoming academic year. For all admission-related queries, campus tours, and registration guidelines, please visit our school campus or contact our admissions office directly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <p style={{ fontWeight: '600', margin: '0' }}>Phone: <span style={{ color: 'var(--primary)', marginLeft: '8px' }}>094879 18780</span></p>
              <p style={{ fontWeight: '600', margin: '0' }}>Email: <span style={{ color: 'var(--primary)', marginLeft: '8px' }}>info@laurelcbse.in</span></p>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="faq-container">
            <h2 style={{ marginBottom: '10px' }}>Frequently Asked Questions</h2>
            <p className="sub-para" style={{ marginBottom: '25px' }}>Find clear answers to common inquiries about curriculum, enrollment, facilities, and campus operations.</p>

            <div className="faq-accordion">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`faq-item card ${activeFaq === idx ? 'open' : ''}`} 
                  onClick={() => toggleFaq(idx)}
                  style={{ borderRadius: '12px' }}
                >
                  <div className="faq-question-bar">
                    <h4>{faq.q}</h4>
                    {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {activeFaq === idx && (
                    <div className="faq-answer-panel">
                      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
