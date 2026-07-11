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
      title: 'Our Vision',
      subtitle: 'THE FOUNDATIONAL COMPASS',
      quote: 'To become a globally recognized center of learning that produces intellectually sound, ethically strong, and socially responsible future citizens.',
      desc: 'Our vision drives every decision at Laurel. We seek to foster a learning environment that does not merely emphasize academic marks, but focuses on nurturing critical thinkers, global leaders, and responsible community members who can navigate the complexities of the future with character and empathy.',
      coverColor: '#ff4500',
      labelNumber: 'VISION',
      author: 'LAUREL CBSE',
      details: {
        focus: 'Value Education',
        scope: 'Global Citizenship',
        pillars: 'Intellectual, Ethical, Social',
        standard: 'CBSE Curriculum',
        method: 'Integrated Coaching',
        charter: 'Empowerment'
      },
      leader: {
        name: 'Dr. Malini Iyer',
        role: 'Principal, Laurel CBSE',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
        quote: '"Education is not merely the learning of facts, but the training of the mind to think and build strong character."'
      }
    },
    {
      title: 'Our Legacy',
      subtitle: 'A JOURNEY OF EXCELLENCE',
      quote: 'Established in 2012, expanding from 150 primary students to a premium K-12 campus featuring state-of-the-art ATAL engineering laboratories.',
      desc: 'Over the last decade, Laurel has evolved into a premier educational hub. Starting humble with 150 primary students, we have expanded our capacity to cater to over 1200+ active scholars, integrating advanced facilities such as NITI Aayog approved ATAL Tinkering Labs and national entrance coaching directly within the core schedule.',
      coverColor: '#1d4ed8',
      labelNumber: 'LEGACY',
      author: 'ESTD 2012',
      details: {
        focus: '2012 Academic Year',
        scope: '1200+ Active Scholars',
        pillars: 'Premium K-12 Infrastructure',
        standard: 'ATAL Tinkering / Science Labs',
        method: '8x Scaling in 10 Years',
        charter: 'Pioneering Integrated Prep'
      },
      leader: {
        name: 'Shri. K. Chandran',
        role: 'Chairman, Friends Trust',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
        quote: '"Building a state-of-the-art campus is just the container; the real work lies in shaping the future of our youth."'
      }
    },
    {
      title: 'Friends Trust',
      subtitle: 'PHILANTHROPY & GOVERNANCE',
      quote: 'A registered charitable trust providing merit scholarships, high-tech campus infrastructure expansion, and student-centric administration.',
      desc: 'Friends Trust guides Laurel with a student-first philosophy. The trust ensures that quality education is accessible by funding annual merit scholarships, subsidizing educational tours, upgrading technological tools, and keeping administrative practices responsive and transparent.',
      coverColor: '#059669',
      labelNumber: 'TRUST',
      author: 'CHARITABLE',
      details: {
        focus: 'Registered Charitable Trust',
        scope: 'Merit Scholarships & Aid',
        pillars: 'Student-Centric Admin',
        standard: 'High-Tech Labs Expansion',
        method: 'Community Driven',
        charter: 'Eminent Academicians'
      },
      leader: {
        name: 'Mrs. Sila Sen',
        role: 'Trustee & Board Director',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
        quote: '"True philanthropy is about building bridges to opportunity. Every scholarship we grant changes a life."'
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

      {/* 2. Overview Highlights (Gestalten Book Listing Layout) */}
      <section id="overview-highlights" className="section-overview-highlights">
        <div className="container">
          
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">FOUNDATIONS</span>
            <h2 className="editorial-section-title" style={{ justifyContent: 'center', display: 'flex' }}>The Core Pillars of Laurel</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              Explore the educational philosophies, growth historical milestones, and governance systems driving our institution.
            </p>
          </div>

          <div className="gestalten-book-listing">
            
            {/* Main Panel Content */}
            <div className="gestalten-book-main" key={activePillarIdx}>
              
              {/* Left Side: Large Book Cover on Circular Backdrop */}
              <div className="gestalten-cover-container">
                <div className="gestalten-backdrop-circle"></div>
                
                {/* Dynamic CSS Styled Book Cover */}
                <div className="gestalten-book-cover" style={{ backgroundColor: pillars[activePillarIdx].coverColor }}>
                  <div className="book-spine"></div>
                  <div className="book-label">
                    <h4 className="book-label-title">{pillars[activePillarIdx].title}</h4>
                    <div className="book-label-divider"></div>
                    <p className="book-label-number">{pillars[activePillarIdx].labelNumber}</p>
                    <p className="book-label-author">{pillars[activePillarIdx].author}</p>
                  </div>
                </div>
                
                <span className="cover-preview-lbl">CLICK SIDEBAR TO EXPLORE</span>
              </div>

              {/* Center Side: Editorial details */}
              <div className="gestalten-details-container">
                <h1 className="gestalten-book-title">{pillars[activePillarIdx].title}</h1>
                <h3 className="gestalten-book-author">by {pillars[activePillarIdx].author}</h3>

                <p className="gestalten-book-quote">"{pillars[activePillarIdx].quote}"</p>
                <p className="gestalten-book-desc">{pillars[activePillarIdx].desc}</p>

                {/* Metadata Table Grid */}
                <div className="gestalten-metadata-grid">
                  <div className="metadata-item">
                    <span className="metadata-label">Focus Area</span>
                    <span className="metadata-value">{pillars[activePillarIdx].details.focus}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Academic System</span>
                    <span className="metadata-value">{pillars[activePillarIdx].details.standard}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Scope</span>
                    <span className="metadata-value">{pillars[activePillarIdx].details.scope}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Methodology</span>
                    <span className="metadata-value">{pillars[activePillarIdx].details.method}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Foundations</span>
                    <span className="metadata-value">{pillars[activePillarIdx].details.pillars}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Charter</span>
                    <span className="metadata-value">{pillars[activePillarIdx].details.charter}</span>
                  </div>
                </div>

                {/* Review Block (Leadership Endorsement) */}
                <div className="gestalten-review-block">
                  <div className="reviewer-header">
                    <img 
                      src={pillars[activePillarIdx].leader.avatar} 
                      alt={pillars[activePillarIdx].leader.name} 
                      className="reviewer-avatar" 
                    />
                    <div className="reviewer-info">
                      <span className="reviewed-by-lbl">Endorsed By</span>
                      <span className="reviewer-name">{pillars[activePillarIdx].leader.name}</span>
                      <span className="reviewer-role">{pillars[activePillarIdx].leader.role}</span>
                    </div>
                  </div>
                  <p className="reviewer-text">
                    {pillars[activePillarIdx].leader.quote}
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side: Scrollable Sidebar list of book covers */}
            <div className="gestalten-sidebar">
              <span className="sidebar-vertical-title">CORE PILLARS</span>
              <div className="sidebar-books-list">
                {pillars.map((p, i) => (
                  <div 
                    key={i} 
                    className={`sidebar-book-item ${activePillarIdx === i ? 'active' : ''}`}
                    onClick={() => setActivePillarIdx(i)}
                  >
                    {/* Thumbnail Book Cover */}
                    <div className="sidebar-cover-thumb" style={{ backgroundColor: p.coverColor }}>
                      <div className="thumb-spine"></div>
                      <div className="thumb-label">
                        <span className="thumb-label-title">{p.title}</span>
                      </div>
                    </div>
                    <span className="sidebar-book-title-text">{p.title}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Asymmetric Image & Principal's Message (Organic Blob Layout from image 1) */}
      <section className="section-principal-message">
        <div className="container principal-message-grid">
          
          {/* Asymmetric Organic Blob Image */}
          <div className="principal-blob-visual-wrap">
            <div className="principal-organic-blob">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Principal of Laurel School" 
                className="principal-blob-img"
              />
            </div>
            {/* Soft decorative ring behind the blob */}
            <div className="blob-bg-ring"></div>
          </div>

          {/* Text content details */}
          <div className="principal-message-text">
            <h2 className="editorial-section-title">Design with us, Develop Anything.</h2>
            
            <p className="principal-text-paragraph">
              Laurel CBSE School was established with a singular vision: to create an institution that offers world-class CBSE education alongside rigorous, integrated national coaching. We understand the dilemma parents face in managing school hours and external tuitions; we solve it by bringing top coaching minds for JEE, NEET, and CUET directly under our roof.
            </p>
            
            <p className="principal-text-paragraph">
              "Education is not merely the learning of facts, but the training of the mind to think."
            </p>

            <div className="principal-author-block">
              <div className="principal-signature-text">Dr. Malini Iyer</div>
              <span className="principal-author-role">Principal, Laurel CBSE School</span>
            </div>
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
            <span className="stat-label">Active Scholars</span>
            <span className="stat-number">1200+</span>
          </div>

          {/* Stat 2 */}
          <div className="stat-counter-item">
            <div className="stat-icon-circle">
              <Eye size={18} />
            </div>
            <span className="stat-label">Expert Educators</span>
            <span className="stat-number">25+</span>
          </div>

          {/* Stat 3 */}
          <div className="stat-counter-item">
            <div className="stat-icon-circle">
              <Award size={18} />
            </div>
            <span className="stat-label">Board Success</span>
            <span className="stat-number">100%</span>
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
