import React, { useState, useEffect } from 'react';
import { 
  Award, Shield, BookOpen, FlaskConical, Users, School, 
  ArrowRight, Play, CheckCircle, ChevronRight, Star, Heart, GraduationCap,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home({ onOpenEnquiry }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(false);
  const [askValue, setAskValue] = useState("");
  const [ctaAskValue, setCtaAskValue] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '100%', label: 'Board Exam Success' },
    { value: '25+', label: 'Expert Teachers' },
    { value: '15:1', label: 'Student-Teacher Ratio' },
    { value: '500+', label: 'IIT & Medical Admits' }
  ];

  const benefits = [
    { 
      icon: <Users className="benefit-icon" size={24} />, 
      title: 'Well Trained Professionals', 
      desc: 'Our faculty consists of postgraduate domain experts with over 10+ years of CBSE and national competitive exam coaching experience.',
      bg: '#fdf4ff', color: '#d946ef'
    },
    { 
      icon: <School className="benefit-icon" size={24} />, 
      title: 'Modern Infrastructure', 
      desc: 'Lush green 5-acre campus with well-ventilated smart classrooms, advanced audio-visual units, and multi-purpose activity fields.',
      bg: '#ecfdf5', color: '#10b981'
    },
    { 
      icon: <FlaskConical className="benefit-icon" size={24} />, 
      title: 'ATAL Lab', 
      desc: 'Equipped with NITI Aayog sponsored ATAL Tinkering Lab to promote artificial intelligence, robotics, 3D printing, and design thinking.',
      bg: '#eff6ff', color: '#3b82f6'
    },
    { 
      icon: <Award className="benefit-icon" size={24} />, 
      title: 'Best Amenities', 
      desc: 'CCTV-monitored campus, secure school buses, hygienic indoor-outdoor cafeteria, sports complexes, and premium boarding facilities.',
      bg: '#fffbeb', color: '#f59e0b'
    },
    { 
      icon: <BookOpen className="benefit-icon" size={24} />, 
      title: 'Standard Curriculum', 
      desc: 'Rigorous CBSE guidelines enriched with regular assessment cycles, experiential project works, and integrated personality groom classes.',
      bg: '#fdf2f8', color: '#ec4899'
    },
    { 
      icon: <Shield className="benefit-icon" size={24} />, 
      title: 'Safe Learning Environment', 
      desc: 'Zero tolerance policy for ragging/bullying. Trained security personnel, strict verification guidelines, and in-campus medical support.',
      bg: '#f5f5f7', color: '#6366f1'
    }
  ];

  const programs = [
    {
      title: 'JEE Foundation',
      subtitle: 'Grades 8 - 10',
      desc: 'Early starter batch focused on strengthening mental ability, logical reasoning, and basic sciences before secondary studies.',
      features: ['Olympiad alignment', 'Foundation mathematics', 'Interactive experiments', 'Analytical testing']
    },
    {
      title: 'NEET Coaching',
      subtitle: 'Grades 11 - 12 & Repeaters',
      desc: 'Intensive medical entrance program with standard biology workshops, physics numericals drills, and high-frequency Mock Tests.',
      features: ['Daily Practice Papers (DPP)', 'NCERT-focused learning', 'Doubt clearing hours', 'Simulated OMR mock exams']
    },
    {
      title: 'CUET Preparation',
      subtitle: 'Grade 12 Graduates',
      desc: 'Comprehensive domain-specific and general aptitude coaching targeting top Central and National Universities.',
      features: ['Section I, II & III coverage', 'Language proficiency drills', 'Computer-based mock practice', 'Personalized college guidance']
    }
  ];

  const facilities = [
    { title: 'Smart Classrooms', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80', desc: 'Fully digital interactive boards and comfortable seating.' },
    { title: 'Science Laboratories', img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80', desc: 'State-of-the-art physics, chemistry, and biology experimental rooms.' },
    { title: 'Rich Library', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80', desc: 'Thousands of references, digital access nodes, and silent reading zones.' },
    { title: 'Sports & Playgrounds', img: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80', desc: 'Professional football ground, basketball court, and athletics track.' }
  ];

  const testimonials = [
    {
      quote: "Laurel CBSE School provided me not just regular schooling, but the ultimate base for my competitive exams. The teachers in the NEET batch cleared my doubts even late in the evening. I managed to score 685 in NEET on my first attempt!",
      name: "Akriti Sharma",
      role: "Alumna, NEET Batch (Currently at AIIMS Delhi)",
      icon: <Star className="star-icon" size={20} />
    },
    {
      quote: "Sending our son to Laurel was the best decision. The school's focus on ATAL Lab technology coupled with JEE curriculum helped him excel in CBSE boards and get a top rank in JEE Advanced. The environment is extremely secure and positive.",
      name: "Dr. Ramesh Nair",
      role: "Parent of Aaditya Nair (IIT Madras, CSE)",
      icon: <Heart className="star-icon" size={20} />
    },
    {
      quote: "The academic rigor at Laurel is matched by its co-curricular values. I was encouraged to participate in national science exhibits while preparing for my CUET entrance. The guidance here is top-tier and highly professional.",
      name: "Siddharth Verma",
      role: "Alumnus, CUET Topper (Currently at SRCC, Delhi)",
      icon: <Star className="star-icon" size={20} />
    }
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section-premium animate-fade-in">

        {/* Hero grid containing left, center, right columns */}
        <div className="hero-premium-content">
          {/* Left Block */}
          <div className="hero-premium-left">
            {/* Clickable campus tour video preview badge */}
            <div 
              className="tour-badge-wrapper" 
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
              onClick={() => {
                setPlayingVideo(true);
                document.querySelector('.about-visual')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="tour-thumb-box">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=120&q=80" 
                  alt="Campus Tour Preview"
                  className="tour-thumb-img"
                />
                <div className="tour-play-overlay">
                  <Play size={12} fill="white" stroke="white" />
                </div>
              </div>
              <div className="tour-badge-info">
                <span className="tour-badge-title">CAMPUS TOUR</span>
                <span className="tour-badge-subtitle">WATCH VIDEO PREVIEW</span>
              </div>
            </div>

            {/* Page dot indicator */}
            <div className="hero-dots-row">
              <span className="hero-dot active"></span>
              <span className="hero-dot"></span>
              <span className="hero-dot"></span>
              <span className="hero-dot"></span>
              <span className="hero-dot"></span>
            </div>

            {/* Large brand logo watermark */}
            <h1 
              className="hero-watermark"
              style={{ transform: `translateY(${scrollY * 0.18}px)` }}
            >
              laurel.
            </h1>
          </div>

          {/* Center Block */}
          <div className="hero-premium-center">
            <div 
              className="hero-center-sculpture-wrap" 
              style={{ transform: `translateY(${scrollY * 0.24}px)` }}
            >
              <img 
                src="/hero-hand.png" 
                alt="Laurel upward growth sculpture" 
                className="hero-center-sculpture"
              />
            </div>
            {/* Orange floating admissions box */}
            <div 
              className="orange-floating-box"
              style={{ transform: `translateY(${scrollY * -0.06}px)` }}
            >
              <div className="orange-box-content">
                <span className="orange-box-badge">ADMISSIONS OPEN</span>
                <span className="orange-box-title">GRADE 1 TO 12</span>
              </div>
              <button onClick={onOpenEnquiry} className="orange-box-btn">
                APPLY NOW <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Block */}
          <div className="hero-premium-right">
            <div 
              className="right-text-block"
              style={{ transform: `translateY(${scrollY * 0.06}px)` }}
            >
              <span className="section-subtitle">LAUREL ACADEMY</span>
              <h2 className="premium-hero-heading">CRAFTED EDUCATION & COGNITIVE MINDSET</h2>
              <p className="premium-hero-desc">
                INTEGRATED CBSE CURRICULUM WITH TOP-TIER NATIONAL ENTRANCE COACHING FOR JEE, NEET & CUET. SHAPING SECURE FUTURES.
              </p>
            </div>

            {/* Vertical orientation text */}
            <div className="vertical-year-indicator">
              <span>— 2026</span>
            </div>

            {/* Bottom details block */}
            <div className="hero-bottom-right-details">
              <div className="details-col">
                <span className="detail-lbl">ACADEMIC FOCUS</span>
                <span className="detail-val">CBSE BOARDS</span>
              </div>
              <div className="details-col separator"></div>
              <div className="details-col">
                <span className="detail-lbl">COACHING STREAMS</span>
                <span className="detail-val">JEE / NEET / CUET</span>
              </div>
              
              {/* Scroll down button in orange */}
              <button 
                className="scroll-down-orange-btn" 
                onClick={() => {
                  document.querySelector('.stats-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Scroll Down"
              >
                <ArrowRight size={20} className="down-arrow-rotate" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Row (Japan Schedule Layout) */}
      <section className="stats-section-premium">
        <div className="stats-container-premium">
          {/* Left Vertical Watermark Margin */}
          <div className="stats-margin-left">
            <span className="stats-vertical-watermark">SUCCESS</span>
            <span className="stats-vertical-tagline">NURTURING MINDS / SHAPING LEADERS</span>
          </div>

          {/* Center Main Ticket Component */}
          <div className="stats-ticket-card">
            {/* Left Block */}
            <div className="ticket-left">
              <div className="ticket-left-header">
                <h3 className="ticket-main-stat">100%</h3>
                <div className="ticket-stat-meta">
                  <span className="meta-badge">live</span>
                  <span className="meta-time">2026</span>
                </div>
                {/* Red Semi-circle Rising Sun representing success/board exams */}
                <div className="ticket-rising-sun"></div>
              </div>
              <div className="ticket-left-body">
                <p className="ticket-desc-paragraph">
                  Laurel CBSE School has achieved a consistent 100% board examination success rate year-on-year. Our rigorous curriculum paired with elite faculty ensures that every student achieves academic distinction.
                </p>
              </div>
            </div>

            {/* Right Block */}
            <div className="ticket-right">
              {/* Header */}
              <div className="ticket-right-header">
                <span>02—10 SEP / REGULAR BATCHES</span>
              </div>
              {/* Rows */}
              <div className="ticket-rows-list">
                <div className="ticket-item-row active">
                  <span className="item-tag red">now</span>
                  <div className="item-info">
                    <span className="item-title">25+ EXPERT</span>
                    <span className="item-subtitle">FACULTY MEMBERS</span>
                    <span className="item-detail">10+ YEARS EXPERIENCE</span>
                  </div>
                  <div className="item-action-box" onClick={onOpenEnquiry}>
                    <Play size={12} fill="#ff4500" stroke="#ff4500" />
                  </div>
                </div>

                <div className="ticket-item-row">
                  <span className="item-tag">ratio</span>
                  <div className="item-info">
                    <span className="item-title">15:1 RATIO</span>
                    <span className="item-subtitle">STUDENT-TEACHER</span>
                    <span className="item-detail">INDIVIDUAL ATTENTION</span>
                  </div>
                </div>

                <div className="ticket-item-row">
                  <span className="item-tag">admits</span>
                  <div className="item-info">
                    <span className="item-title">500+ ADMITS</span>
                    <span className="item-subtitle">IIT & MEDICAL CAREER</span>
                    <span className="item-detail">NATIONAL ENTRANCE SECURED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Vertical Margin */}
          <div className="stats-margin-right">
            <span className="stats-vertical-desc">ACHIEVEMENT / RECORD</span>
          </div>
        </div>
      </section>

      {/* About Section (Adidas Originals Layout) */}
      <section className="about-section-premium" id="about-section">
        {/* Left Column (White background card) */}
        <div className="about-originals-left">
          {/* Top Bar of Left Card */}
          <div className="originals-left-header">
            <div className="originals-logo">
              <GraduationCap size={28} color="#e3001b" />
              <span className="originals-logo-text">laurel</span>
            </div>
            <div className="originals-tabs">
              <span className="tab-item active">LEGACY</span>
              <Link to="/about" className="tab-item">MISSION</Link>
            </div>
          </div>

          {/* Middle Decorative Burger Menu on Left Edge */}
          <div className="originals-middle-accent">
            <span className="accent-bar"></span>
            <span className="accent-bar"></span>
            <span className="accent-bar"></span>
          </div>

          {/* Large Main Heading */}
          <div className="originals-main-content">
            <h2 className="originals-large-title">Legacy</h2>
          </div>

          {/* Footer of Left Card */}
          <div className="originals-left-footer">
            <div className="originals-footer-meta">
              <span className="meta-subtitle">SINCE 1995</span>
              <span className="meta-title">Nurturing Minds</span>
            </div>
            <Link to="/about" className="originals-buy-btn">
              LEARN MORE <span className="arrow-right">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column (Varsity jacket asset) */}
        <div className="about-originals-right">
          <img 
            src="/about-varsity.png" 
            alt="Laurel Varsity Jacket" 
            className="originals-product-image"
          />
        </div>

        {/* Far Right Accent Sidebar (Red) */}
        <div className="about-originals-sidebar">
          <div className="sidebar-top-action" onClick={onOpenEnquiry}>
            <GraduationCap size={20} color="#e3001b" className="sidebar-cap-icon" />
          </div>
          <div className="sidebar-middle-pages">
            <span className="page-num">01</span>
            <span className="page-divider"></span>
            <span className="page-num-total">03</span>
          </div>
          <div className="sidebar-bottom-arrow">
            <span className="arrow-down-icon">↓</span>
          </div>
        </div>
      </section>

      {/* Why Choose Laurel (Design-Rules Editorial Layout) */}
      <section className="why-laurel-editorial" id="why-laurel-section">
        {/* Top Floating Typography Block */}
        <div className="why-editorial-top">
          <div className="editorial-floating-letters">
            <span className="editorial-letter letter-w">W</span>
            <span className="editorial-letter letter-h">H</span>
            <span className="editorial-letter letter-y">Y</span>
            {/* Curved tube 3D graphics rendered with CSS absolute shapes */}
            <div className="accent-tube-3d tube-1"></div>
            <div className="accent-tube-3d tube-2"></div>
          </div>
          
          {/* Metadata Row */}
          <div className="editorial-meta-row">
            <div className="meta-col">
              <span className="meta-col-title">Curriculum</span>
              <p className="meta-col-desc">Rigorous CBSE syllabus integrated with national level competitive exam preparation.</p>
            </div>
            <div className="meta-col">
              <span className="meta-col-title">Development</span>
              <p className="meta-col-desc">Nurturing critical logic, physical fitness, moral values, and artistic expression.</p>
            </div>
            <div className="meta-col">
              <span className="meta-col-title">Infrastructure</span>
              <p className="meta-col-desc">Equipped scientific labs, smart-classrooms, and sports fields for interactive study.</p>
            </div>
          </div>
        </div>

        {/* Middle Block (Staggered right title & left microscope card) */}
        <div className="why-editorial-middle">
          {/* Left: Microscope card with title next to it */}
          <div className="middle-left-card">
            <div className="editorial-card-image-wrap">
              <img 
                src="/why-laurel-microscope.png" 
                alt="Laurel Microscope Lab" 
                className="editorial-card-image"
              />
            </div>
            <div className="editorial-card-info">
              <h3 className="card-info-title">Scientific Inquiry & Practical Labs</h3>
              <button className="card-info-play-btn" onClick={onOpenEnquiry} aria-label="Learn More">
                <span className="play-square-icon">■</span>
              </button>
            </div>
          </div>

          {/* Right: Bold statement + watermark */}
          <div className="middle-right-heading-block">
            <div className="heading-watermark-wrap">
              <span className="watermark-vertical-text">PURPOSE</span>
              <h2 className="editorial-bold-statement">
                Redefining academic success and character.
              </h2>
            </div>
            <Link to="/academics" className="editorial-arrow-link">
              <span className="arrow-text">View all programs</span>
              <span className="arrow-red-icon">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Block (Staggered left text & right student card) */}
        <div className="why-editorial-bottom">
          {/* Left: Text detail */}
          <div className="bottom-left-detail-card">
            <h3 className="bottom-detail-title">Future-Ready Mindset</h3>
            <p className="bottom-detail-desc">
              Fostering logical capability, coding, logical thinking, and active programs to prepare students for the global arena.
            </p>
            <button className="card-info-play-btn red-bg" onClick={onOpenEnquiry} aria-label="Apply Now">
              <span className="play-square-icon">■</span>
            </button>
          </div>

          {/* Right: Student image card */}
          <div className="bottom-right-student-card">
            <img 
              src="/why-laurel-student.png" 
              alt="Laurel Smart-Student" 
              className="editorial-student-image"
            />
          </div>
        </div>
      </section>

      {/* Core Programs (4-Column Panel Layout) */}
      <section className="programs-panel-section" id="programs-section">
        <div className="programs-panel-container">
          
          {/* Column 1: Left Menu Sidebar */}
          <div className="panel-col panel-sidebar">
            <div className="panel-sidebar-top">
              <GraduationCap size={28} color="#000000" />
              <span className="panel-sidebar-logo">laurel</span>
            </div>
            
            <div className="panel-sidebar-menu">
              <span className="menu-link active">Foundation</span>
              <span className="menu-link">Integrated</span>
              <span className="menu-link">Competitive</span>
            </div>
            
            <div className="panel-sidebar-action">
              <button className="panel-black-btn" onClick={onOpenEnquiry}>
                Admissions
              </button>
            </div>
            
            <div className="panel-sidebar-footer">
              <span className="footer-copyright">EST. 1995</span>
            </div>
          </div>

          {/* Column 2: Highlight Column (JEE Foundation) */}
          <div className="panel-col panel-highlight-card" style={{ backgroundImage: 'url(/coaching-highlight.png)' }}>
            <div className="panel-highlight-overlay"></div>
            
            <div className="highlight-content">
              <div className="highlight-top-meta">
                <span className="highlight-num">01</span>
                <span className="highlight-tag">FND</span>
              </div>
              
              <div className="highlight-mid-details">
                <span className="highlight-subtitle">CLASSES 8 - 10 / CBSE BOARDS</span>
                <h3 className="highlight-title">JEE FOUNDATION</h3>
                <p className="highlight-desc">
                  Strengthening mental ability, logical reasoning, and basic sciences before secondary studies.
                </p>
              </div>
              
              <div className="highlight-bottom-actions">
                <span className="highlight-status">OPEN</span>
                <button className="highlight-circle-btn" onClick={onOpenEnquiry} aria-label="Enquire Now">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Minimalist NEET panel */}
          <div className="panel-col panel-minimalist-card">
            <div className="minimalist-content">
              <div className="minimalist-top-meta">
                <span className="minimalist-num">02</span>
                <span className="minimalist-tag">MED</span>
              </div>
              
              <div className="minimalist-mid-details">
                <span className="minimalist-subtitle">CLASSES 11 - 12 & REPEATERS</span>
                <h3 className="minimalist-title">NEET MEDICAL</h3>
                <p className="minimalist-desc">
                  Intensive medical entrance program with standard biology workshops, physics numericals drills, and high-frequency Mock Tests.
                </p>
              </div>
              
              <div className="minimalist-bottom-actions">
                <span className="minimalist-status" onClick={onOpenEnquiry}>ENQUIRE</span>
              </div>
            </div>
          </div>

          {/* Column 4: Minimalist CUET panel */}
          <div className="panel-col panel-minimalist-card">
            <div className="minimalist-content">
              <div className="minimalist-top-meta">
                <span className="minimalist-num">03</span>
                <span className="minimalist-tag">UNI</span>
              </div>
              
              <div className="minimalist-mid-details">
                <span className="minimalist-subtitle">GRADE 12 GRADUATES</span>
                <h3 className="minimalist-title">CUET ENTRANCE</h3>
                <p className="minimalist-desc">
                  Comprehensive domain-specific and general aptitude coaching targeting top Central and National Universities.
                </p>
              </div>
              
              <div className="minimalist-bottom-actions">
                <span className="minimalist-status" onClick={onOpenEnquiry}>ENQUIRE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Facilities Preview (List Hover Reveal Layout) */}
      <section className="facilities-reveal-section" id="facilities-section">
        {/* Decorative organic gradient blobs */}
        <div className="facilities-bg-blob blob-pink"></div>
        <div className="facilities-bg-blob blob-blue"></div>
        <div className="facilities-bg-blob blob-purple"></div>

        <div className="facilities-reveal-container">
          <div className="facilities-reveal-header">
            <span className="badge">Campus Facilities</span>
            <h2>State-of-the-Art Student Amenities</h2>
            <p>Providing students with the best technical learning setups, libraries, and physical recreation platforms to foster productivity.</p>
          </div>

          <div className="facilities-rows-list">
            {facilities.map((fac, i) => (
              <div 
                key={i} 
                className="facility-reveal-row"
                onClick={onOpenEnquiry}
              >
                {/* Blur Backdrop & Glow overlay */}
                <div className="facility-row-glow-bg"></div>

                {/* Left: Number prefix */}
                <div className="facility-row-num">
                  {`0${i + 1}`}
                </div>

                {/* Center-Left: Main details */}
                <div className="facility-row-main">
                  <h3 className="facility-row-title">{fac.title}</h3>
                  <p className="facility-row-desc">{fac.desc}</p>
                </div>

                {/* Center-Right: Hover image slide reveal */}
                <div className="facility-row-image-preview">
                  <img src={fac.img} alt={fac.title} className="row-preview-img" />
                </div>

                {/* Right: Expand indicator */}
                <div className="facility-row-action">
                  <div className="circle-plus-btn">
                    <span className="plus-icon">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/facilities" className="btn btn-outline">
              Explore All Spaces <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials (Premium Split Layout with Floating widgets) */}
      <section className="testimonial-editorial-section" id="testimonials-section">
        <div className="testimonial-editorial-container">
          <div className="testimonial-editorial-grid">
            
            {/* Left Column: Typography & Stats */}
            <div className="testimonial-editorial-left">
              <span className="editorial-mini-tag">CAMPUS VOICES</span>
              <h2 className="editorial-split-heading">
                Inspiring Success<br />Nurturing Minds
              </h2>
              <p className="editorial-split-desc">
                Hear what parents, alumni, and educators say about the nurturing, high-standard academic environment at Laurel CBSE School.
              </p>
              
              <button className="editorial-calculate-btn" onClick={onOpenEnquiry}>
                EXPLORE STORIES <ArrowRight size={18} />
              </button>

              <div className="editorial-split-stats">
                <div className="split-stat-item">
                  <span className="split-stat-up">UP TO</span>
                  <h4 className="split-stat-value">100%</h4>
                  <span className="split-stat-label">Board Exam Pass Rate</span>
                </div>
                
                <div className="split-stat-item">
                  <span className="split-stat-up">TOP</span>
                  <h4 className="split-stat-value">500+</h4>
                  <span className="split-stat-label">IIT / Medical Admits</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Canvas Widget Area */}
            <div className="testimonial-editorial-right">
              {/* Organic fluid gradient overlay behind cards */}
              <div className="right-canvas-glow"></div>
              
              {/* Curve dotted line graphic */}
              <svg className="canvas-dashed-svg" viewBox="0 0 400 400" fill="none">
                <path d="M50 320 C 150 320, 320 250, 320 80" stroke="rgba(0,0,0,0.06)" strokeWidth="2" strokeDasharray="6,6" />
              </svg>

              {/* Floating Card 1: The Speech Bubble Quote Card */}
              <div 
                className="floating-testimonial-bubble"
                onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)}
                title="Click to read next story"
              >
                <p className="bubble-quote-text">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                
                <div className="bubble-profile-row">
                  <div className="bubble-avatar">
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div className="bubble-meta">
                    <h5 className="bubble-author-name">{testimonials[activeTestimonial].name}</h5>
                    <span className="bubble-author-role">{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>

                {/* Star rating tag */}
                <div className="bubble-stars">
                  <Star fill="#f59e0b" color="#f59e0b" size={12} />
                  <Star fill="#f59e0b" color="#f59e0b" size={12} />
                  <Star fill="#f59e0b" color="#f59e0b" size={12} />
                  <Star fill="#f59e0b" color="#f59e0b" size={12} />
                  <Star fill="#f59e0b" color="#f59e0b" size={12} />
                </div>
              </div>

              {/* Floating Card 2: Glass Score Widget */}
              <div className="floating-score-widget">
                <div className="score-widget-left">
                  <div className="score-icon-wrap">
                    <GraduationCap size={16} color="#ffffff" />
                  </div>
                  <div className="score-meta">
                    <span className="score-title">Laurel Merit Index</span>
                    <span className="score-desc">98.4% Average Score</span>
                  </div>
                </div>
                <div className="score-widget-right">
                  <span className="score-growth">+1.2% (2025)</span>
                </div>
              </div>

              {/* Floating Card 3: Ask prompt input bar */}
              <div className="floating-ask-bar">
                <span className="ask-emoji">😊</span>
                <input 
                  type="text" 
                  className="ask-input-field" 
                  placeholder="Ask Anything..."
                  value={askValue}
                  onChange={(e) => setAskValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onOpenEnquiry();
                    }
                  }}
                />
                <button className="ask-send-circle-btn" onClick={onOpenEnquiry} aria-label="Send Enquiry">
                  <ArrowRight size={14} color="#ffffff" />
                </button>
              </div>

              {/* Minimal dots to cycle testimonials manually */}
              <div className="editorial-slider-dots">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`slider-dot-pill ${idx === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Premium Section */}
      <section className="cta-premium-section">
        {/* Soft, beautiful corner glows matching Dia interface */}
        <div className="cta-premium-glow glow-bottom-left"></div>
        <div className="cta-premium-glow glow-bottom-right"></div>

        <div className="cta-premium-container">
          {/* Logo badge in center */}
          <div className="cta-premium-logo">
            <span className="logo-dot"></span>
            <span className="logo-text">laurel</span>
          </div>

          <h2 className="cta-premium-heading">
            Take the First Step Towards Academic Excellence
          </h2>

          {/* Action pill box (Download Dia style) */}
          <div className="cta-premium-pill-box">
            <span className="pill-box-label">Admissions Open 2026-27</span>
            <button className="pill-box-btn" onClick={onOpenEnquiry}>
              Register / Apply
            </button>
          </div>

          <div className="cta-premium-sub-link">
            Want to explore first? <Link to="/admission">Read admission guide →</Link>
          </div>

          <div className="cta-premium-cmd-bar">
            <div className="cmd-bar-top">
              <Search className="cmd-search-icon" size={16} />
              <input 
                type="text" 
                className="cmd-input-field" 
                placeholder="Hey Laurel... Ask about admissions, scholarships, fees..."
                value={ctaAskValue}
                onChange={(e) => setCtaAskValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onOpenEnquiry();
                  }
                }}
              />
              <button className="cmd-send-btn" onClick={onOpenEnquiry} aria-label="Submit Enquiry">
                <ArrowRight size={14} color="#ffffff" />
              </button>
            </div>
            <div className="cmd-bar-bottom">
              <span className="cmd-plus">+</span>
              <span className="cmd-hint" onClick={onOpenEnquiry}>Add scholarship application</span>
            </div>
          </div>

          {/* Watch video trailer capsule */}
          <div className="cta-premium-video-capsule" onClick={onOpenEnquiry}>
            <div className="capsule-thumbnail">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=80&q=80" 
                alt="Campus View" 
              />
              <div className="play-triangle"></div>
            </div>
            <span className="capsule-text">Watch Campus Tour Video</span>
          </div>

        </div>
      </section>
    </div>
  );
}
