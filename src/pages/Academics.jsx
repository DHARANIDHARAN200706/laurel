import React, { useState, useEffect } from 'react';
import { 
  Book, Award, Calendar, GraduationCap, Clock, HelpCircle, CheckSquare, BookOpen, 
  ChevronLeft, ChevronRight, Hash, Globe, Atom, Grid, Code, Percent, FlaskConical, Cpu, Terminal, Compass, BarChart
} from 'lucide-react';
import './Academics.css';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [activeBookIdx, setActiveBookIdx] = useState(0);
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [currentMonthIdx, setCurrentMonthIdx] = useState(0);
  const [viewMode, setViewMode] = useState('week');
  const [selectedDay, setSelectedDay] = useState(10);

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
      duration: '2 Years (Grades 11-12)',
      details: 'Integrated evening class modules. Special focus on algebraic trigonometry, coordinate geometry, inorganic mechanisms, electrodynamics, and modern physics.',
      hours: '6 Hours / Week of Entrance Drill'
    },
    {
      name: 'NEET Medical Coaching',
      duration: '2 Years (Grades 11-12) & Repeaters',
      details: 'Structured workshops targeting cell structure, genetics, human physiology, organic reaction mechanics, and organic conversions. Extensive plant-life studies.',
      hours: '6 Hours / Week of Entrance Drill + Lab Practice'
    },
    {
      name: 'CUET General & Domain Coaching',
      duration: '1 Year (Grade 12)',
      details: 'Designed to target Central University entrances. Guides students on quantitative aptitude, logical reasoning, verbal ability, and specific domain subjects.',
      hours: '4 Hours / Week of Aptitude Training'
    }
  ];

  const calendarMonths = [
    {
      name: 'June 2026',
      highlightDay: 10,
      days: Array.from({ length: 14 }, (_, i) => i + 1),
      events: [
        { day: 1, hour: '8 AM', title: 'Session Commences', type: 'academic', icon: 'GraduationCap' },
        { day: 3, hour: '11 AM', title: 'ATAL Lab Orientation', type: 'event', icon: 'Cpu' },
        { day: 5, hour: '1 PM', title: 'Robotics Club', type: 'event', icon: 'Compass' },
        { day: 8, hour: '11 AM', title: 'Math Assessment', type: 'exam', icon: 'CheckSquare' },
        { day: 10, hour: '10 AM', title: 'Physics Lecture', type: 'academic', icon: 'Book' },
        { day: 10, hour: '1 PM', title: 'JEE Entrance Drill', type: 'exam', icon: 'Clock' },
        { day: 12, hour: '2 PM', title: 'Sports Practice', type: 'event', icon: 'Award' }
      ]
    },
    {
      name: 'July 2026',
      highlightDay: 10,
      days: Array.from({ length: 14 }, (_, i) => i + 1),
      events: [
        { day: 1, hour: '9 AM', title: 'Math Seminar', type: 'academic', icon: 'Book' },
        { day: 3, hour: '1 PM', title: 'Web Coding Camp', type: 'event', icon: 'Cpu' },
        { day: 6, hour: '8 AM', title: 'House Assembly', type: 'academic', icon: 'GraduationCap' },
        { day: 8, hour: '11 AM', title: 'Weekly Unit Assessment', type: 'exam', icon: 'CheckSquare' },
        { day: 10, hour: '2 PM', title: 'Athletics Selection', type: 'event', icon: 'Award' },
        { day: 14, hour: '10 AM', title: 'Chemistry Lab', type: 'academic', icon: 'Book' },
        { day: 14, hour: '1 PM', title: 'NEET Foundation Test', type: 'exam', icon: 'Clock' }
      ]
    },
    {
      name: 'August 2026',
      highlightDay: 10,
      days: Array.from({ length: 14 }, (_, i) => i + 1),
      events: [
        { day: 3, hour: '9 AM', title: 'Biology Exhibit Prep', type: 'event', icon: 'Compass' },
        { day: 5, hour: '11 AM', title: 'Mock Olympiad Math', type: 'exam', icon: 'CheckSquare' },
        { day: 7, hour: '1 PM', title: 'Robotics Team Meet', type: 'event', icon: 'Cpu' },
        { day: 10, hour: '8 AM', title: 'Flag Hoisting Drill', type: 'academic', icon: 'GraduationCap' },
        { day: 12, hour: '10 AM', title: 'Science Lab Project', type: 'academic', icon: 'Book' },
        { day: 14, hour: '2 PM', title: 'Athletics Team Match', type: 'event', icon: 'Award' },
        { day: 15, hour: '9 AM', title: 'Independence Day celebrations', type: 'holiday', icon: 'Award' }
      ]
    }
  ];

  const calendarEvents = [
    { date: 'April 06, 2026', title: 'New Academic Session Commences', type: 'academic' },
    { date: 'June 01, 2026 - June 30, 2026', title: 'Summer Vacation', type: 'holiday' },
    { date: 'July 15, 2026', title: 'Unit Test - I Examinations', type: 'exam' },
    { date: 'August 15, 2026', title: 'Independence Day Celebrations (Science Exhibit)', type: 'event' },
    { date: 'September 14, 2026 - September 26, 2026', title: 'Term - I / Half Yearly Examinations', type: 'exam' },
    { date: 'October 12, 2026 - October 16, 2026', title: 'Dussehra Holidays', type: 'holiday' },
    { date: 'November 20, 2026', title: 'Annual Athletic Meet & Sports Day', type: 'event' },
    { date: 'December 21, 2026 - January 02, 2027', title: 'Winter Vacation', type: 'holiday' },
    { date: 'February 15, 2027', title: 'Board Exam Practical / Coaching Mock Tests', type: 'exam' },
    { date: 'March 08, 2027 - March 24, 2027', title: 'Annual Board / Term-End Examinations', type: 'exam' }
  ];

  useEffect(() => {
    if (calendarMonths[currentMonthIdx]) {
      setSelectedDay(calendarMonths[currentMonthIdx].highlightDay);
    }
  }, [currentMonthIdx]);

  const books = [
    {
      title: 'Concepts of Physics',
      author: 'H.C. VERMA',
      quote: 'The ultimate conceptual reference bible for foundation physics and entrance drills.',
      desc: 'An essential reference text that introduces mechanics, wave motion, and thermodynamics with elegant mathematical simplicity, making it the most trusted companion for CBSE and competitive engineering aspirants.',
      coverColor: '#ff4500',
      labelNumber: 'VOL 1',
      details: {
        editors: 'Bharti Bhawan',
        releaseDate: 'June 2023',
        format: 'Paperback',
        features: '462 Pages',
        language: 'English',
        isbn: '978-8-17709-179-3'
      },
      reviewer: {
        name: 'Vivek Kaushik',
        role: 'JEE Physics Coach',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
        text: 'The problem sets are structured in increasing difficulty, training the student\'s mind to solve problems systematically rather than by rote memory.'
      }
    },
    {
      title: 'Organic Chemistry',
      author: 'R.T. MORRISON & R.N. BOYD',
      quote: 'Deep conceptual reaction mechanisms for advanced molecular understanding.',
      desc: 'A classic globally acclaimed treatise on organic chemistry. Explores chemical bonding, stereochemistry, and metabolic mechanisms with rich explanations geared towards JEE & NEET prep.',
      coverColor: '#1d4ed8',
      labelNumber: 'ED 7',
      details: {
        editors: 'Pearson India',
        releaseDate: 'January 2016',
        format: 'Paperback',
        features: '1420 Pages',
        language: 'English',
        isbn: '978-9-33257-858-6'
      },
      reviewer: {
        name: 'Mrs. Sila Sen',
        role: 'Chemistry HOD',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
        text: 'Morrison & Boyd explains reactions through step-by-step physical chemistry rules, helping students construct mechanisms logically.'
      }
    },
    {
      title: 'Elementary Biology',
      author: 'DR. K.N. BHATIA & M.P. TYAGI',
      quote: 'The ultimate compendium for medical entrance biological syllabus.',
      desc: 'Trueman\'s Biology remains the premier text for NEET aspirants, delivering exhaustive analysis of botany, zoology, genetics, and biotechnology modules with crystal clear anatomical schematics.',
      coverColor: '#059669',
      labelNumber: 'VOL 2',
      details: {
        editors: 'Danika Publishing',
        releaseDate: 'March 2024',
        format: 'Paperback',
        features: '1150 Pages',
        language: 'English',
        isbn: '978-8-18722-108-1'
      },
      reviewer: {
        name: 'Dr. Sneha Pillai',
        role: 'NEET Biology Coach',
        avatar: 'https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&w=200&h=200&q=80',
        text: 'NCERT is the core framework, and Trueman is the best companion for expanding complex details. The illustrations are second to none.'
      }
    },
    {
      title: 'Brief Answers to the Big Questions',
      author: 'STEPHEN HAWKING',
      quote: 'A final message and guide to the greatest questions facing humanity.',
      desc: 'Stephen Hawking\'s posthumous masterpiece addresses deep cosmic queries: Is there a God? How did it all begin? Will artificial intelligence outsmart us? Can we colonize space?',
      coverColor: '#09090b',
      labelNumber: 'COLL',
      details: {
        editors: 'John Murray',
        releaseDate: 'October 2018',
        format: 'Hardcover',
        features: '256 Pages',
        language: 'English',
        isbn: '978-1-47369-598-6'
      },
      reviewer: {
        name: 'Dr. Anjali Bose',
        role: 'Managing Director',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
        text: 'An inspirational read that fosters critical thinking and a profound curiosity about space, time, and human responsibility.'
      }
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

  const renderCalendarIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap size={14} />;
      case 'Cpu': return <Cpu size={14} />;
      case 'Compass': return <Compass size={14} />;
      case 'CheckSquare': return <CheckSquare size={14} />;
      case 'Book': return <Book size={14} />;
      case 'Clock': return <Clock size={14} />;
      case 'Award': return <Award size={14} />;
      default: return <GraduationCap size={14} />;
    }
  };

  return (
    <div className="academics-page animate-fade-in">
      {/* Page Hero */}
      <section className="academics-hero">
        <div className="container">
          <span className="badge">Knowledge & Beyond</span>
          <h1>Academic Programs & Curriculum</h1>
          <p>Explore our standard CBSE streams, specialized coaching platforms, and the yearly calendar layout.</p>
        </div>
      </section>

      {/* Tabs Selector */}
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
          <button 
            className={`tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendar')}
          >
            <Calendar size={18} /> Academic Calendar
          </button>
          <button 
            className={`tab-btn ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            <BookOpen size={18} /> Library & Resources
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

      {/* Tab Panel: Calendar */}
      {activeTab === 'calendar' && (
        <section className="section-light tab-panel schedule-section">
          <div className="container">
            
            <div className="schedule-header-row">
              <div className="schedule-title-area">
                <h2>Academic Calendar (2026 - 2027)</h2>
                <p>Laurel CBSE Year Plan & Weekly Activities Scheduler</p>
              </div>
              
              <div className="schedule-controls">
                {/* View Mode Toggle: Week vs Month */}
                <div className="schedule-view-toggle">
                  <button 
                    className={`toggle-btn ${viewMode === 'week' ? 'active' : ''}`}
                    onClick={() => setViewMode('week')}
                  >
                    Week
                  </button>
                  <button 
                    className={`toggle-btn ${viewMode === 'month' ? 'active' : ''}`}
                    onClick={() => setViewMode('month')}
                  >
                    Month
                  </button>
                </div>

                {/* Month Navigation */}
                <div className="schedule-month-nav">
                  <button 
                    className="nav-arrow-btn"
                    onClick={() => setCurrentMonthIdx((prev) => (prev === 0 ? calendarMonths.length - 1 : prev - 1))}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="current-month-label">{calendarMonths[currentMonthIdx].name}</span>
                  <button 
                    className="nav-arrow-btn"
                    onClick={() => setCurrentMonthIdx((prev) => (prev === calendarMonths.length - 1 ? 0 : prev + 1))}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {viewMode === 'week' ? (
              /* Weekly Schedule Grid Layout (Inspired by hey! Care) */
              <>
                <div className="schedule-grid-container-outer">
                <div className="schedule-grid-container-inner">
                  
                  {/* Grid Headers Row 1: Weeks */}
                  <div className="schedule-grid-header-row week-headers">
                    <div className="time-label-cell"></div>
                    <div className="week-header-cell span-7">Week 1</div>
                    <div className="week-header-cell span-7">Week 2</div>
                  </div>

                  {/* Grid Headers Row 2: Weekday Letters */}
                  <div className="schedule-grid-header-row weekday-headers">
                    <div className="time-label-cell"></div>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'].map((dayLetter, idx) => (
                      <div key={idx} className="weekday-header-cell">
                        {dayLetter}
                      </div>
                    ))}
                  </div>

                  {/* Grid Headers Row 3: Day Numbers */}
                  <div className="schedule-grid-header-row day-headers">
                    <div className="time-label-cell"></div>
                    {calendarMonths[currentMonthIdx].days.map((dayNum) => {
                      const isHighlighted = dayNum === selectedDay;
                      return (
                        <div 
                          key={dayNum} 
                          className="day-header-cell"
                          onClick={() => setSelectedDay(dayNum)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span className={`day-number-bubble ${isHighlighted ? 'highlighted' : ''}`}>
                            {dayNum}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Grid Hours Rows */}
                  <div className="schedule-grid-body">
                    {['8 AM', '9 AM', '10 AM', '11 AM', 'Noon', '1 PM', '2 PM', '3 PM'].map((hourSlot) => {
                      const isTimeIndicator = hourSlot === '10 AM'; // e.g. 10:35 AM indicator
                      return (
                        <div key={hourSlot} className="schedule-grid-row" data-hour={hourSlot}>
                          
                          {/* Time Column Header */}
                          <div className="time-axis-cell">
                            {isTimeIndicator && (
                              <div className="time-highlight-label">
                                10:35 AM <span className="blue-dot">•</span>
                              </div>
                            )}
                            <span className="time-axis-text">{hourSlot}</span>
                          </div>

                          {/* 14 Calendar Days Grid Cells */}
                          {calendarMonths[currentMonthIdx].days.map((dayNum) => {
                            const foundEvent = calendarMonths[currentMonthIdx].events.find(
                              (e) => e.day === dayNum && e.hour === hourSlot
                            );
                            const isColumnHighlighted = dayNum === selectedDay;
                            
                            return (
                              <div 
                                key={dayNum} 
                                className={`schedule-grid-cell ${isColumnHighlighted ? 'col-highlighted' : ''}`}
                                onClick={() => setSelectedDay(dayNum)}
                                style={{ cursor: 'pointer' }}
                              >
                                {foundEvent ? (
                                  <div 
                                    className={`schedule-event-badge type-${foundEvent.type}`}
                                    title={`${foundEvent.title} (${foundEvent.hour})`}
                                  >
                                    <span className="event-badge-icon">
                                      {renderCalendarIcon(foundEvent.icon)}
                                    </span>
                                    <div className="event-badge-tooltip">
                                      <h4>{foundEvent.title}</h4>
                                      <p>{foundEvent.hour} - Day {foundEvent.day}</p>
                                    </div>
                                  </div>
                                ) : (
                                  /* Empty cell placeholder dot like the reference */
                                  <div className="empty-cell-dot"></div>
                                )}
                              </div>
                            );
                          })}

                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Selected Day Details Panel */}
              <div className="selected-day-details-panel" key={`details-${selectedDay}`}>
                <div className="details-panel-header">
                  <span className="details-date-badge">
                    Day {selectedDay}
                  </span>
                  <h3>Schedule & Milestones for {calendarMonths[currentMonthIdx].name.split(' ')[0]} {selectedDay}, 2026</h3>
                </div>
                
                <div className="details-panel-body">
                  {calendarMonths[currentMonthIdx].events.filter(e => e.day === selectedDay).length > 0 ? (
                    <div className="details-events-grid">
                      {calendarMonths[currentMonthIdx].events.filter(e => e.day === selectedDay).map((evt, idx) => (
                        <div key={idx} className={`details-event-card type-${evt.type}`}>
                          <div className="details-event-time">{evt.hour}</div>
                          <div className="details-event-icon-circle">
                            {renderCalendarIcon(evt.icon)}
                          </div>
                          <div className="details-event-info">
                            <h4>{evt.title}</h4>
                            <span className="details-event-tag">{evt.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="details-no-events">
                      <p>No academic activities scheduled for Day {selectedDay}. Regular self-study and laboratory sessions apply.</p>
                    </div>
                  )}
                </div>
              </div>
              </>
            ) : (
              /* Month view: list of all events */
              <div className="schedule-list-view card">
                <h3 className="list-view-title">All Scheduled Events for {calendarMonths[currentMonthIdx].name}</h3>
                <div className="schedule-list-items">
                  {calendarMonths[currentMonthIdx].events.map((evt, idx) => (
                    <div key={idx} className="schedule-list-item-row">
                      <div className="list-item-date">
                        <span className="list-date-day">{evt.day}</span>
                        <span className="list-date-month">{calendarMonths[currentMonthIdx].name.split(' ')[0]}</span>
                      </div>
                      <div className="list-item-icon-wrap" style={{ 
                        backgroundColor: evt.type === 'academic' ? '#e0e7ff' : evt.type === 'exam' ? '#dcfce7' : evt.type === 'event' ? '#fef9c3' : '#fee2e2',
                        color: evt.type === 'academic' ? '#4f46e5' : evt.type === 'exam' ? '#16a34a' : evt.type === 'event' ? '#ca8a04' : '#dc2626'
                      }}>
                        {renderCalendarIcon(evt.icon)}
                      </div>
                      <div className="list-item-content">
                        <h4>{evt.title}</h4>
                        <p>{evt.hour} • {evt.type.toUpperCase()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}
      {/* Tab Panel: Library Catalog */}
      {activeTab === 'library' && (
        <section className="section section-light tab-panel library-catalog-section">
          <div className="container">
            <div className="section-header">
              <h2>Reference Library Catalog</h2>
              <p>Explore recommended readings, entrance textbooks, and popular scientific literature available in our Central Library study carrels.</p>
            </div>

            {/* Gestalten Book Listing Layout Wrapper */}
            <div className="gestalten-book-listing">
              
              {/* Main Panel Content (Split into Left Cover and Center Details) */}
              <div className="gestalten-book-main" key={activeBookIdx}>
                
                {/* Left Side: Large Book Cover on Circular Backdrop */}
                <div className="gestalten-cover-container">
                  <div className="gestalten-backdrop-circle"></div>
                  
                  {/* Dynamic CSS Styled Book Cover */}
                  <div className="gestalten-book-cover" style={{ backgroundColor: books[activeBookIdx].coverColor }}>
                    <div className="book-spine"></div>
                    <div className="book-label">
                      <h4 className="book-label-title">{books[activeBookIdx].title}</h4>
                      <div className="book-label-divider"></div>
                      <p className="book-label-number">{books[activeBookIdx].labelNumber}</p>
                      <p className="book-label-author">{books[activeBookIdx].author}</p>
                    </div>
                  </div>
                  
                  <span className="cover-preview-lbl">CLICK SIDEBAR TO PREVIEW</span>
                </div>

                {/* Center Side: Editorial details */}
                <div className="gestalten-details-container">
                  <h1 className="gestalten-book-title">{books[activeBookIdx].title}</h1>
                  <h3 className="gestalten-book-author">by {books[activeBookIdx].author}</h3>

                  <p className="gestalten-book-quote">"{books[activeBookIdx].quote}"</p>
                  <p className="gestalten-book-desc">{books[activeBookIdx].desc}</p>

                  {/* Metadata Table Grid */}
                  <div className="gestalten-metadata-grid">
                    <div className="metadata-item">
                      <span className="metadata-label">Editors</span>
                      <span className="metadata-value">{books[activeBookIdx].details.editors}</span>
                    </div>
                    <div className="metadata-item">
                      <span className="metadata-label">Features</span>
                      <span className="metadata-value">{books[activeBookIdx].details.features}</span>
                    </div>
                    <div className="metadata-item">
                      <span className="metadata-label">Release Date</span>
                      <span className="metadata-value">{books[activeBookIdx].details.releaseDate}</span>
                    </div>
                    <div className="metadata-item">
                      <span className="metadata-label">Language</span>
                      <span className="metadata-value">{books[activeBookIdx].details.language}</span>
                    </div>
                    <div className="metadata-item">
                      <span className="metadata-label">Format</span>
                      <span className="metadata-value">{books[activeBookIdx].details.format}</span>
                    </div>
                    <div className="metadata-item">
                      <span className="metadata-label">ISBN</span>
                      <span className="metadata-value">{books[activeBookIdx].details.isbn}</span>
                    </div>
                  </div>

                  {/* Review Block */}
                  <div className="gestalten-review-block">
                    <div className="reviewer-header">
                      <img 
                        src={books[activeBookIdx].reviewer.avatar} 
                        alt={books[activeBookIdx].reviewer.name} 
                        className="reviewer-avatar" 
                      />
                      <div className="reviewer-info">
                        <span className="reviewed-by-lbl">Reviewed By</span>
                        <span className="reviewer-name">{books[activeBookIdx].reviewer.name}</span>
                        <span className="reviewer-role">{books[activeBookIdx].reviewer.role}</span>
                      </div>
                    </div>
                    <p className="reviewer-text">
                      "{books[activeBookIdx].reviewer.text}"
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Side: Scrollable Sidebar list of book covers */}
              <div className="gestalten-sidebar">
                <span className="sidebar-vertical-title">LIBRARY BOOKSHELF</span>
                <div className="sidebar-books-list">
                  {books.map((b, i) => (
                    <div 
                      key={i} 
                      className={`sidebar-book-item ${activeBookIdx === i ? 'active' : ''}`}
                      onClick={() => setActiveBookIdx(i)}
                    >
                      {/* Thumbnail Book Cover */}
                      <div className="sidebar-cover-thumb" style={{ backgroundColor: b.coverColor }}>
                        <div className="thumb-spine"></div>
                        <div className="thumb-label">
                          <span className="thumb-label-title">{b.title}</span>
                        </div>
                      </div>
                      <span className="sidebar-book-title-text">{b.title}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      )}
    </div>
  );
}
