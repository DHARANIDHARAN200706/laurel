import React, { useState, useEffect } from 'react';
import { 
  Book, Award, GraduationCap, Clock, BookOpen, 
  Hash, Globe, Atom, Grid, Code, Percent, FlaskConical, Cpu, Terminal, Compass, BarChart
} from 'lucide-react';
import './Academics.css';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const segments = [
    {
      number: '01',
      title: 'Primary School',
      grades: 'Grades 1 - 5',
      desc: 'Focuses on building language capability, numerical skills, and environmental awareness. Learning is highly experiential, utilizing toys, storytelling, and art integration.',
      color: '#8b5cf6',
      subjectsList: [
        { name: 'Language & Literacy', desc: 'Emphasis on phonetic reading, creative writing, and active speaking exercises in English & Hindi.', icon: 'BookOpen' },
        { name: 'Numerical Foundations', desc: 'Introduction to elementary arithmetic, mental math drills, and physical block math models.', icon: 'Hash' },
        { name: 'Environmental Studies (EVS)', desc: 'Exploration of nature, local ecosystems, and community relationships through outdoor field trips.', icon: 'Globe' }
      ]
    },
    {
      number: '02',
      title: 'Middle School',
      grades: 'Grades 6 - 8',
      desc: 'Focuses on the transition from general observation to scientific study. Abstract concepts in algebra, physics, and social sciences are introduced, along with coding foundations.',
      color: '#ec4899',
      subjectsList: [
        { name: 'General Science Module', desc: 'Initial branching into Physics, Chemistry, and Biology, highlighting lab safety and experimental basics.', icon: 'Atom' },
        { name: 'Algebra & Geometry Foundations', desc: 'Transition from basic arithmetic to algebraic functions, formulas, and spatial geometry.', icon: 'Grid' },
        { name: 'Computer Coding Core', desc: 'Block coding fundamentals, syntax logic, and computational problem-solving platforms.', icon: 'Code' }
      ]
    },
    {
      number: '03',
      title: 'Secondary School',
      grades: 'Grades 9 - 10',
      desc: 'Prepares students for secondary board assessments. Conceptual clarity, regular laboratory experimentation, and logical problem-solving are prioritized to build future coaching bases.',
      color: '#3b82f6',
      subjectsList: [
        { name: 'Standard/Basic Mathematics', desc: 'Thorough preparation for CBSE board assessments, concentrating on trigonometry, algebra, and statistics.', icon: 'Percent' },
        { name: 'Branch Science Laboratories', desc: 'Hands-on practical experiments in separate Physics, Chemistry, and Biology labs to build empirical skills.', icon: 'FlaskConical' },
        { name: 'Information Technology Core', desc: 'Applied computing, digital communication, database management, and productivity applications.', icon: 'Cpu' }
      ]
    },
    {
      number: '04',
      title: 'Senior Secondary',
      grades: 'Grades 11 - 12',
      desc: 'CBSE Science Stream offering advanced physics, chemistry, mathematics, and biology with integrated competitive examination syllabus patterns.',
      color: '#10b981',
      subjectsList: [
        { name: 'Advanced Physical Sciences', desc: 'Deep dive into kinematics, mechanics, organic chemistry reaction mechanisms, and kinetics.', icon: 'Compass' },
        { name: 'Higher Calculus & Analysis', desc: 'Focuses on integration, differentiation, vectors, probability matrices, and linear programming.', icon: 'BarChart' },
        { name: 'Computer Science & Python', desc: 'Data structures, algorithm complexity, file handling, and database integration using Python.', icon: 'Terminal' }
      ]
    }
  ];

  const coaching = [
    {
      name: 'JEE Main & Advanced Coaching',
      duration: 'Grades 11-12',
      details: 'Integrated engineering preparatory classes aligned with the school curriculum.',
      hours: 'Entrance Drills & Mock Tests'
    },
    {
      name: 'NEET Medical Coaching',
      duration: 'Grades 11-12 & Repeaters',
      details: 'Comprehensive medical entrance coaching focusing on fundamental sciences.',
      hours: 'Entrance Drills & Practical Prep'
    },
    {
      name: 'CUET General & Domain Coaching',
      duration: 'Grade 12',
      details: 'Coaching modules for Central University entrances, targeting both general aptitude and domain subjects.',
      hours: 'Aptitude Practice & Entrance Drills'
    }
  ];

  const renderSubjectIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={20} style={{ color: '#ffffff' }} />;
      case 'Hash': return <Hash size={20} style={{ color: '#ffffff' }} />;
      case 'Globe': return <Globe size={20} style={{ color: '#ffffff' }} />;
      case 'Atom': return <Atom size={20} style={{ color: '#ffffff' }} />;
      case 'Grid': return <Grid size={20} style={{ color: '#ffffff' }} />;
      case 'Code': return <Code size={20} style={{ color: '#ffffff' }} />;
      case 'Percent': return <Percent size={20} style={{ color: '#ffffff' }} />;
      case 'FlaskConical': return <FlaskConical size={20} style={{ color: '#ffffff' }} />;
      case 'Cpu': return <Cpu size={20} style={{ color: '#ffffff' }} />;
      case 'Compass': return <Compass size={20} style={{ color: '#ffffff' }} />;
      case 'BarChart': return <BarChart size={20} style={{ color: '#ffffff' }} />;
      case 'Terminal': return <Terminal size={20} style={{ color: '#ffffff' }} />;
      default: return <BookOpen size={20} style={{ color: '#ffffff' }} />;
    }
  };

  return (
    <div className="academics-page animate-fade-in">
      {/* Page Hero */}
      <section className="academics-hero">
        <div className="container">
          <span className="badge">Knowledge & Beyond</span>
          <h1>Academic Programs & Curriculum</h1>
          <p>Explore our standard CBSE streams and specialized coaching platforms.</p>
        </div>
      </section>

      <section className="tabs-selection-section">
        <div className="container tabs-bar">
          <button 
            className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
            onClick={() => setActiveTab('curriculum')}
          >
            <Book size={18} /> CBSE Curriculum
          </button>
          <button 
            className={`tab-btn ${activeTab === 'coaching' ? 'active' : ''}`}
            onClick={() => setActiveTab('coaching')}
          >
            <GraduationCap size={18} /> Coaching Excellence
          </button>
        </div>
      </section>

      {/* Tab Panel: Curriculum */}
      {activeTab === 'curriculum' && (
        <section className="section-light tab-panel editorial-stages-section">
          
          {/* Decorative ambient color blur blobs */}
          <div className="editorial-ambient-blob blob-purple"></div>
          <div className="editorial-ambient-blob blob-pink"></div>
          <div className="editorial-ambient-blob blob-cyan"></div>

          <div className="editorial-container">
            
            {/* Left Vertical Watermark Sidebar */}
            <div className="editorial-left-watermark">
              <span className="watermark-close">×</span>
              <div className="watermark-text">
                <span>home</span>
                <span className="watermark-slash">/</span>
                <span>academics</span>
              </div>
              <div className="watermark-footer-icon">
                <div className="watermark-circle-dot">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            {/* Main Editorial Content Grid */}
            <div className="editorial-stages-grid" key={activeStageIdx}>
              
              {/* Column 1: Title, Subtitle, and Prev/Next Cycle Controls */}
              <div className="editorial-col-intro">
                <div className="editorial-stage-number">{segments[activeStageIdx].number}</div>
                <h1 className="editorial-stage-title">{segments[activeStageIdx].title}</h1>
                <p className="editorial-stage-subtitle">{segments[activeStageIdx].desc}</p>
                
                {/* Navigation links matching the reference exactly */}
                <div className="editorial-prev-next-links">
                  <button 
                    className="editorial-link-btn"
                    onClick={() => setActiveStageIdx((prev) => (prev === 0 ? segments.length - 1 : prev - 1))}
                  >
                    Prev
                  </button>
                  <button className="editorial-link-btn video-link">
                    Play video
                  </button>
                  <button 
                    className="editorial-link-btn"
                    onClick={() => setActiveStageIdx((prev) => (prev === segments.length - 1 ? 0 : prev + 1))}
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Column 2: The Three Key Subject Rows with Colored Icon Circles */}
              <div className="editorial-col-subjects">
                {segments[activeStageIdx].subjectsList.map((subj, idx) => (
                  <div key={idx} className="subject-row-item">
                    <div 
                      className="subject-icon-circle" 
                      style={{ backgroundColor: segments[activeStageIdx].color }}
                    >
                      {renderSubjectIcon(subj.icon)}
                    </div>
                    <div className="subject-row-content">
                      <h3 className="subject-row-title">{subj.name}</h3>
                      <p className="subject-row-desc">{subj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 3: The Vertical Tracker / Stage Overview */}
              <div className="editorial-col-tracker">
                <div className="tracker-headline-wrap">
                  <span className="tracker-headline">Academic Stages</span>
                  <span className="tracker-headline-dot" style={{ backgroundColor: segments[activeStageIdx].color }}></span>
                </div>
                
                <div className="tracker-stages-list">
                  {segments.map((seg, idx) => (
                    <div 
                      key={idx} 
                      className={`tracker-stage-item ${activeStageIdx === idx ? 'active' : ''}`}
                      onClick={() => setActiveStageIdx(idx)}
                    >
                      <span className="tracker-stage-label">{seg.title}</span>
                      {activeStageIdx === idx && (
                        <span className="tracker-stage-indicator" style={{ backgroundColor: seg.color }}></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* Tab Panel: Coaching */}
      {activeTab === 'coaching' && (
        <section className="section section-light tab-panel">
          <div className="container">
            <div className="section-header">
              <h2>Specialized Competitive Coaching</h2>
              <p>We are the region\'s pioneer in offering fully integrated board-coaching classes. We ensure students get the highest-rated mentoring, standard material, and simulated mock test platforms without needing tuition travel.</p>
            </div>

            <div className="grid grid-3 coaching-grid">
              {coaching.map((coach, idx) => (
                <div key={idx} className="card coaching-card">
                  <div className="coaching-header">
                    <h3>{coach.name}</h3>
                    <div className="coaching-duration">
                      <Clock size={16} /> <span>{coach.duration}</span>
                    </div>
                  </div>
                  <p className="coaching-details">{coach.details}</p>
                  <div className="coaching-highlight-box">
                    <Award size={18} className="highlight-icon" />
                    <span>{coach.hours}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Coaching Methodology Card */}
            <div className="card methodology-card" style={{ marginTop: '40px' }}>
              <h3>Our Entrance Exam Prep Methodology</h3>
              <div className="grid grid-3 method-steps">
                <div className="method-step">
                  <span className="step-number-big">A</span>
                  <h4>Conceptual Lectures</h4>
                  <p>In-depth conceptual lectures building fundamental principles before starting shortcuts.</p>
                </div>
                <div className="method-step">
                  <span className="step-number-big">B</span>
                  <h4>Rigorous Drill Exercises</h4>
                  <p>Daily Practice Papers (DPP) with varied difficulty categories (Easy, Mod, Advanced).</p>
                </div>
                <div className="method-step">
                  <span className="step-number-big">C</span>
                  <h4>CBT & OMR Simulator</h4>
                  <p>Weekly mock test formats matching NTA criteria with complete analytical rank reports.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
