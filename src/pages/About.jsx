import React, { useState } from 'react';
import { 
  Target, Eye, Users, Award, Clock, ArrowRight, 
  Compass, Heart, Globe, Mail, BookOpen, Shield, X
} from 'lucide-react';
import './About.css';

export default function About() {
  const [activeModalMember, setActiveModalMember] = useState(null);
  const [activePillarIdx, setActivePillarIdx] = useState(0);

  const pillars = [
    {
      title: 'JEE',
      subtitle: 'ENGINEERING PREPARATION',
      quote: 'A national-level entrance exam for admission to top engineering institutes like IITs and NITs, testing Physics, Chemistry, and Mathematics.',
      desc: 'Our rigorous engineering coaching program preparing students for IITs, NITs, and other premium institutes worldwide.',
      coverColor: '#1d4ed8',
      labelNumber: 'JEE',
      author: 'LAUREL CORE',
      details: {
        focus: 'Physics, Chemistry, Math',
        scope: 'IITs / NITs Admission',
        pillars: 'Problem Solving, Concepts',
        standard: 'National Level Exam',
        method: 'Mock Tests & DPPs',
        charter: 'Engineering Stream'
      },
      leader: {
        name: 'Mr. Vivek Kaushik',
        role: 'Head of Physics & JEE Coach',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
        quote: '"Our integrated engineering preparatory modules are designed to bridge high school principles with competitive complexity."'
      }
    },
    {
      title: 'NEET',
      subtitle: 'MEDICAL PREPARATION',
      quote: 'A nationwide medical entrance exam for MBBS and related courses, assessing Physics, Chemistry, and Biology knowledge.',
      desc: 'Dedicated training with experienced mentors covering Physics, Chemistry, and Biology core disciplines to secure high rankings.',
      coverColor: '#ff4500',
      labelNumber: 'NEET',
      author: 'LAUREL CORE',
      details: {
        focus: 'Physics, Chemistry, Biology',
        scope: 'MBBS / BDS Admissions',
        pillars: 'NCERT Focus, Speed',
        standard: 'National Level Medical',
        method: 'Doubt Solver Batches',
        charter: 'Medical Stream'
      },
      leader: {
        name: 'Dr. Sneha Pillai',
        role: 'Head of Biology & NEET Coach',
        avatar: 'https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&w=200&h=200&q=80',
        quote: '"Medicine is a calling. We teach our students to master biology core concepts to succeed in both boards and NEET entrance exams."'
      }
    },
    {
      title: 'CUED',
      subtitle: 'CENTRAL UNIVERSITIES ENTRANCE',
      quote: 'A common entrance test for admission to undergraduate programs in central and participating universities across India.',
      desc: 'Domain-specific training aligned with CBSE curriculum to ease central college entrance tests for all graduates.',
      coverColor: '#059669',
      labelNumber: 'CUED',
      author: 'LAUREL CORE',
      details: {
        focus: 'Aptitude & Domains',
        scope: 'Central Universities',
        pillars: 'General Test, Languages',
        standard: 'Undergraduate Entrance',
        method: 'Computer Based Prep',
        charter: 'Arts, Science & Commerce'
      },
      leader: {
        name: 'Mrs. Sila Sen',
        role: 'Head of Chemistry',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
        quote: '"CUED prepares students for a vast range of top-tier universities, unlocking multidisciplinary educational tracks."'
      }
    }
  ];

  const management = [
    { 
      name: 'Shri. K. Chandran', 
      role: 'Chairman, Friends Trust', 
      qualifications: 'M.B.A, Philanthropist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Dr. (Mrs.) Anjali Bose', 
      role: 'Sec. & Managing Director', 
      qualifications: 'Ph.D. in Education Administration',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Prof. R. Srinivasan', 
      role: 'Academic Director', 
      qualifications: 'Former Dean of Science Studies',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80'
    }
  ];

  const faculty = [
    { 
      name: 'Mr. Vivek Kaushik', 
      role: 'Head of Physics & JEE Coach', 
      qualifications: 'M.Sc., B.Ed. (Ex-Allen Senior Faculty, 12 Yrs)',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Dr. Sneha Pillai', 
      role: 'Head of Biology & NEET Coach', 
      qualifications: 'Ph.D. in Botany, B.Ed. (10 Yrs)',
      avatar: 'https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Mrs. Sila Sen', 
      role: 'Head of Chemistry', 
      qualifications: 'M.Sc. (Organic Chemistry), B.Ed. (14 Yrs)',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Mr. John D\'Souza', 
      role: 'Head of Mathematics', 
      qualifications: 'M.Sc. (Applied Math), B.Ed. (15 Yrs)',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Mrs. Priya Nair', 
      role: 'English Language Expert', 
      qualifications: 'M.A. (English Lit), M.Ed. (8 Yrs)',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80'
    },
    { 
      name: 'Mr. Amit Sharma', 
      role: 'In-charge, ATAL Lab', 
      qualifications: 'B.Tech (Electronics), Robotics Consultant',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80'
    }
  ];

  return (
    <div className="about-page-editorial">
      
      {/* 1. Hero Canvas (Editorial Spacing Design) */}
      <section className="about-editorial-hero">
        <div className="hero-grid-container">
          
          {/* Vertical sidebar watermark */}
          <div className="hero-sidebar-watermark">
            <span>laurel</span>
            <span className="dot">•</span>
            <span>about</span>
          </div>

          <div className="hero-main-content">
            <div className="hero-title-row">
              <span className="hero-number">01</span>
              <div className="hero-title-group">
                <h1 className="hero-main-title">We are Laurel</h1>
                <p className="hero-subtitle">
                  Founded on values, driven by academic coaching integration, and dedicated to building character.
                </p>
              </div>
            </div>

            <div className="hero-actions-row">
              <a href="#overview-highlights" className="hero-pill-btn">
                Our legacy <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Decorative ambient color blur blobs */}
          <div className="ambient-blur-blob blob-orange"></div>
          <div className="ambient-blur-blob blob-purple"></div>
        </div>
      </section>



      {/* 3. Asymmetric Image & About Us (Organic Blob Layout) */}
      <section className="section-principal-message">
        <div className="container principal-message-grid">
          
          {/* Asymmetric Organic Blob Image */}
          <div className="principal-blob-visual-wrap">
            <div className="principal-organic-blob">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="About Laurel CBSE School" 
                className="principal-blob-img"
              />
            </div>
            {/* Soft decorative ring behind the blob */}
            <div className="blob-bg-ring"></div>
          </div>

          {/* Text content details */}
          <div className="principal-message-text">
            <h2 className="editorial-section-title">About Us</h2>
            
            <p className="principal-text-paragraph">
              Laurel CBSE School is committed to providing quality education that nurtures academic excellence, strong values, and holistic development. With a student-centered approach, experienced faculty, and a well-structured curriculum, we aim to empower young minds to become confident, responsible, and future-ready individuals.
            </p>
          </div>

        </div>
      </section>

      {/* Video CTA Section */}
      <section className="about-video-cta-section" style={{ padding: '80px 0', backgroundColor: '#fafafa', borderBottom: '1px solid rgba(0, 0, 0, 0.04)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <span className="badge" style={{ display: 'inline-block', marginBottom: '15px' }}>CAMPUS LIFE</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '800', marginBottom: '20px', color: '#000000', lineHeight: '1.3', textTransform: 'uppercase' }}>
            We offer a High Quality Blend of Co-Curricular Activities, Sports and Academics.
          </h2>
          <p style={{ fontSize: '1rem', color: '#555555', marginBottom: '35px', lineHeight: '1.6', maxWidth: '750px', margin: '0 auto 35px' }}>
            We offer a high-quality blend of academics, sports, and co-curricular activities. Our approach ensures holistic development and prepares students for future success.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="hero-pill-btn" onClick={() => window.open('https://youtube.com', '_blank')} style={{ cursor: 'pointer' }}>
              Play Video
            </button>
            <a href="/contact" className="hero-pill-btn" style={{ backgroundColor: '#ff4500', boxShadow: '0 10px 25px rgba(255, 69, 0, 0.15)', cursor: 'pointer', textDecoration: 'none' }}>
              Join Today
            </a>
          </div>
        </div>
      </section>

      {/* 4. Stats Counter Row (from image 1) */}
      <section className="section-stats-bar">
        <div className="container stats-bar-container">
          
          {/* Stat 1 */}
          <div className="stat-counter-item">
            <div className="stat-icon-circle">
              <Target size={18} />
            </div>
            <span className="stat-label">Student Passed</span>
            <span className="stat-number">2453</span>
          </div>

          {/* Stat 2 */}
          <div className="stat-counter-item">
            <div className="stat-icon-circle">
              <Users size={18} />
            </div>
            <span className="stat-label">Qualified Staffs</span>
            <span className="stat-number">678</span>
          </div>

          {/* Stat 3 */}
          <div className="stat-counter-item">
            <div className="stat-icon-circle">
              <Award size={18} />
            </div>
            <span className="stat-label">Equipments</span>
            <span className="stat-number">936</span>
          </div>

        </div>
      </section>

      {/* 5. Our Team / Management Section (Red Accent Expandable Accordion Slider) */}
      <section className="section-board-team">
        <div className="container">
          
          <div className="section-intro-header">
            <h2 className="editorial-team-title">Our Team</h2>
            <p className="editorial-team-subtitle">
              The steering force ensuring high standards of administration and adherence to educational ethics.
            </p>
          </div>

          {/* Management Board Expandable Flex Accordion Slider */}
          <div className="ref-accordion-container">
            {management.map((member, i) => (
              <div 
                key={i} 
                className="ref-style-card"
                onClick={() => setActiveModalMember({ ...member, type: 'BOARD MEMBER' })}
              >
                
                {/* Grayscale hoverable portrait background */}
                <div 
                  className="ref-card-bg-portrait" 
                  style={{ backgroundImage: `url(${member.avatar})` }}
                ></div>
                <div className="ref-card-overlay"></div>

                {/* Top Row: Index and Subtitle metadata */}
                <div className="ref-card-top">
                  <div className="ref-card-number">
                    <span className="ref-num-val">0{i + 1}</span>
                    <span className="ref-num-lbl">MGT</span>
                  </div>
                  <div className="ref-card-meta">
                    <span>LAUREL //</span>
                    <span>BOARD</span>
                  </div>
                </div>

                {/* Middle Row: Hidden by default, reveals on hover when card expands */}
                <div className="ref-card-middle">
                  <p className="ref-card-qual-text">{member.qualifications}</p>
                  <p className="ref-card-desc-text">
                    Committed to rendering high quality education, high-tech infrastructure expansions, and student-centric administration.
                  </p>
                </div>

                {/* Bottom Row: Name, Details and Action Circle */}
                <div className="ref-card-bottom">
                  <div className="ref-card-details">
                    <h3 className="ref-card-name">{member.name}</h3>
                    <p className="ref-card-role">{member.role}</p>
                  </div>
                  <div className="ref-card-action-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Faculty Section (Red Accent Expandable Accordion Slider) */}
      <section className="section-faculty-team">
        <div className="container">
          
          <div className="section-intro-header">
            <h2 className="editorial-team-title">Expert Faculty</h2>
            <p className="editorial-team-subtitle">
              Meet our highly qualified subject-matter experts and competitive mentors who guide students to success.
            </p>
          </div>

          {/* Faculty Expandable Flex Accordion Slider */}
          <div className="ref-accordion-container faculty-accordion">
            {faculty.map((teacher, i) => (
              <div 
                key={i} 
                className="ref-style-card"
                onClick={() => setActiveModalMember({ ...teacher, type: 'EDUCATOR' })}
              >
                
                {/* Grayscale hoverable portrait background */}
                <div 
                  className="ref-card-bg-portrait" 
                  style={{ backgroundImage: `url(${teacher.avatar})` }}
                ></div>
                <div className="ref-card-overlay"></div>

                {/* Top Row: Index and Subtitle metadata */}
                <div className="ref-card-top">
                  <div className="ref-card-number">
                    <span className="ref-num-val">0{i + 1}</span>
                    <span className="ref-num-lbl">EDU</span>
                  </div>
                  <div className="ref-card-meta">
                    <span>LAUREL //</span>
                    <span>COACH</span>
                  </div>
                </div>

                {/* Middle Row: Hidden by default, reveals on hover when card expands */}
                <div className="ref-card-middle">
                  <p className="ref-card-qual-text">{teacher.qualifications}</p>
                  <p className="ref-card-desc-text">
                    Bringing specialized CBSE instruction integrated with premier competitive coaching to deliver outstanding student success.
                  </p>
                </div>

                {/* Bottom Row: Name, Details and Action Circle */}
                <div className="ref-card-bottom">
                  <div className="ref-card-details">
                    <h3 className="ref-card-name">{teacher.name}</h3>
                    <p className="ref-card-role">{teacher.role}</p>
                  </div>
                  <div className="ref-card-action-circle">
                    <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Premium Full-Screen Detail Modal */}
      {activeModalMember && (
        <div className="member-modal-backdrop" onClick={() => setActiveModalMember(null)}>
          <div className="member-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="member-modal-close-btn" onClick={() => setActiveModalMember(null)}>
              <X size={20} />
            </button>
            
            <div className="member-modal-content-grid">
              {/* Left Side: Large Portrait with smooth reveal */}
              <div className="member-modal-left">
                <div 
                  className="member-modal-portrait" 
                  style={{ backgroundImage: `url(${activeModalMember.avatar})` }}
                ></div>
                <div className="member-modal-portrait-overlay"></div>
              </div>

              {/* Right Side: Editorial bio & details */}
              <div className="member-modal-right">
                <div className="member-modal-meta-top">
                  <span className="member-modal-type">{activeModalMember.type}</span>
                  <span className="member-modal-est">LAUREL CBSE // ACADEMICS</span>
                </div>

                <h2 className="member-modal-name">{activeModalMember.name}</h2>
                <h4 className="member-modal-role">{activeModalMember.role}</h4>
                
                <div className="member-modal-divider"></div>

                <div className="member-modal-section">
                  <span className="section-meta-label">QUALIFICATIONS</span>
                  <p className="member-modal-qual">{activeModalMember.qualifications}</p>
                </div>

                <div className="member-modal-section">
                  <span className="section-meta-label">BIOGRAPHY & OUTLOOK</span>
                  <p className="member-modal-bio">
                    {activeModalMember.type === 'BOARD MEMBER' 
                      ? 'Serving as a prominent director steering academic ethics, administrative policies, and financial allocations to provide students with state-of-the-art educational frameworks. Highly committed to student welfare, career orientation, and parent community support.'
                      : 'Guiding advanced subject modules and training curriculums for secondary and senior-secondary programs. Spearheading specialized coaching for JEE, NEET, and Olympiads to ensure high-performance ranks and core engineering/medical concepts.'
                    }
                  </p>
                </div>

                <div className="member-modal-section">
                  <span className="section-meta-label">CONNECT WITH MEMBER</span>
                  <div className="member-modal-socials">
                    <a href="mailto:info@laurel.edu.in" className="modal-social-btn"><Mail size={16} /> Email Member</a>
                    <a href="https://laurel.edu.in" className="modal-social-btn"><Globe size={16} /> Official Portal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
