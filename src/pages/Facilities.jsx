import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Filter, X, Check, Wind, Map, Bus, Coffee, Network } from 'lucide-react';
import './Facilities.css';

export default function Facilities() {
  const [filter, setFilter] = useState('all');
  const [activeFacility, setActiveFacility] = useState(null);

  useEffect(() => {
    if (activeFacility) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeFacility]);

  const amenities = [
    {
      title: "Facilities",
      desc: "Aircondition, Weather Control",
      icon: <Wind size={20} color="#ff4500" />
    },
    {
      title: "Infrastructure",
      desc: "Campus Area",
      icon: <Map size={20} color="#ff4500" />
    },
    {
      title: "Transport",
      desc: "Vehicles",
      icon: <Bus size={20} color="#ff4500" />
    },
    {
      title: "Hostel",
      desc: "Lunch Snacks",
      icon: <Coffee size={20} color="#ff4500" />
    },
    {
      title: "Networked",
      desc: "Communication",
      icon: <Network size={20} color="#ff4500" />
    }
  ];

  const facilitiesList = [
    {
      id: 'classrooms',
      title: 'Innovative Classrooms',
      subtitle: 'BenQ 4K Smartboards',
      category: 'academic',
      categoryLabel: 'Smart Classrooms',
      desc: 'ssmart classrooms are designed to create an engaging and interactive learning environment for students. Equipped with modern teaching aids and technology, they enhance understanding and participation.These spaces support effective learning while encouraging creativity and collaboration.',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      features: ['Smart Classrooms', 'Modern teaching aids', 'Interactive learning tools', 'Technology integration'],
      type: 'accordion'
    },
    {
      id: 'science-labs',
      title: 'Lab & Library',
      subtitle: 'Resourceful Practical Study',
      category: 'academic',
      categoryLabel: 'Practical Study',
      desc: 'well-equipped laboratories and a resourceful library provide students with opportunities for practical learning and research.The laboratories encourage hands-on experimentation, while the library nurtures reading habits and a love for knowledge.Together, they support academic excellence, curiosity, and independent learning.',
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
      features: ['Well-equipped labs', 'Resourceful library', 'Hands-on experimentation', 'Self-directed research'],
      type: 'badge'
    },
    {
      id: 'sports',
      title: 'Play Grounds',
      subtitle: 'Active Outdoor Complex',
      category: 'infra',
      categoryLabel: 'Outdoor Sports',
      desc: 'the outdoor play areas are designed to promote physical fitness and active learning.Students engage in various sports and recreational activities that build teamwork, discipline, and confidence.These spaces support overall well-being and encourage a healthy, active lifestyle.',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
      features: ['Outdoor sports areas', 'Physical fitness training', 'Teamwork building games', 'Recreational play grounds'],
      type: 'avatar'
    },
    {
      id: 'computer-lab',
      title: 'Smart Learning Labs',
      subtitle: 'Audio-Visual Multimedia',
      category: 'academic',
      categoryLabel: 'Digital Learning',
      desc: 'Digital classrooms are equipped with modern technology to enhance interactive and engaging learning.Audio-visual tools and multimedia resources help students understand concepts more effectively.These spaces encourage creativity, participation, and a deeper learning experience.',
      img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
      features: ['Digital technology integration', 'Audio-visual aid suites', 'Multimedia setup resources', 'Interactive student setups'],
      type: 'feed'
    }
  ];

  const renderFacilityVisual = (type) => {
    switch (type) {
      case 'accordion':
        return (
          <div className="vis-container">
            <div className="vis-accordion">
              <div className="vis-acc-header">
                <span className="vis-acc-title">Smart classrooms board</span>
                <span className="vis-acc-arrow">▼</span>
              </div>
              <div className="vis-acc-content">
                <div className="vis-acc-line short"></div>
                <div className="vis-acc-line long"></div>
                <div className="vis-acc-line medium"></div>
              </div>
            </div>
            <div className="vis-cursor green-cursor"></div>
          </div>
        );
      case 'feed':
        return (
          <div className="vis-container">
            <div className="vis-feed">
              <div className="vis-feed-top">
                <span className="vis-feed-circle"></span>
                <div className="vis-feed-title-line"></div>
              </div>
              <div className="vis-feed-item">
                <span className="vis-feed-dot orange"></span>
                <div className="vis-feed-text"></div>
              </div>
              <div className="vis-feed-item">
                <span className="vis-feed-dot blue"></span>
                <div className="vis-feed-text long"></div>
              </div>
              <div className="vis-feed-item">
                <span className="vis-feed-dot purple"></span>
                <div className="vis-feed-text medium"></div>
              </div>
            </div>
          </div>
        );
      case 'alerts':
        return (
          <div className="vis-container">
            <div className="vis-alerts">
              <div className="vis-alert-item red">
                <span className="vis-alert-icon">!</span>
                <div className="vis-alert-line"></div>
              </div>
              <div className="vis-alert-item orange">
                <span className="vis-alert-icon">▲</span>
                <div className="vis-alert-line"></div>
              </div>
              <div className="vis-alert-item green">
                <span className="vis-alert-icon">✓</span>
                <div className="vis-alert-line"></div>
              </div>
            </div>
          </div>
        );
      case 'avatar':
        return (
          <div className="vis-container">
            <div className="vis-avatar-box">
              <div className="vis-avatar-circle">
                <div className="vis-avatar-head"></div>
                <div className="vis-avatar-body"></div>
              </div>
            </div>
          </div>
        );
      case 'badge':
        return (
          <div className="vis-container">
            <div className="vis-badges">
              <div className="vis-badge orange">
                <span className="vis-badge-dot"></span>
                <div className="vis-badge-line"></div>
              </div>
              <div className="vis-badge purple">
                <span className="vis-badge-dot"></span>
                <div className="vis-badge-line short"></div>
              </div>
              <div className="vis-badge green">
                <span className="vis-badge-dot"></span>
                <div className="vis-badge-line medium"></div>
              </div>
            </div>
          </div>
        );
      case 'banner':
        return (
          <div className="vis-container">
            <div className="vis-banner">
              <div className="vis-banner-top">
                <span className="vis-banner-dot"></span>
                <span className="vis-banner-dot"></span>
                <span className="vis-banner-dot"></span>
              </div>
              <div className="vis-banner-body">
                <div className="vis-banner-alert">
                  <span className="vis-alert-triangle">▲</span>
                  <div className="vis-banner-line"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'breadcrumbs':
        return (
          <div className="vis-container">
            <div className="vis-breadcrumbs">
              <div className="vis-bread-dot active"></div>
              <div className="vis-bread-line"></div>
              <div className="vis-bread-dot"></div>
              <div className="vis-bread-line"></div>
              <div className="vis-bread-dot"></div>
            </div>
            <div className="vis-cursor-blue"></div>
          </div>
        );
      case 'button':
        return (
          <div className="vis-container">
            <div className="vis-button-box">
              <div className="vis-btn-rect"></div>
            </div>
            <div className="vis-cursor-blue-btn"></div>
          </div>
        );
      case 'button-group':
        return (
          <div className="vis-container">
            <div className="vis-btn-group">
              <div className="vis-group-btn"></div>
              <div className="vis-group-btn active"></div>
              <div className="vis-group-btn"></div>
            </div>
            <div className="vis-cursor-gray"></div>
          </div>
        );
      default:
        return null;
    }
  };

  const filteredFacilities = filter === 'all' 
    ? facilitiesList 
    : facilitiesList.filter(fac => fac.category === filter);

  return (
    <>
      <div className="facilities-page animate-fade-in">
        {/* Page Hero */}
        <section className="facilities-hero">
          <div className="container" style={{ position: 'relative', zIndex: '10' }}>
            <div className="hero-breadcrumb" style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '800', marginBottom: '15px' }}>
              <span style={{ color: '#888888' }}>Facilities</span>
              <span style={{ opacity: 0.3 }}>/</span>
              <span style={{ color: '#ff4500' }}>HomeFacilities</span>
            </div>
            
            <h1 className="editorial-section-title" style={{ fontSize: '3rem', fontWeight: '900', color: '#111111', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '-0.02em', textAlign: 'center' }}>
              A Center of Academic Excellence
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#555555', maxWidth: '780px', margin: '0 auto 35px', lineHeight: '1.6', textAlign: 'center' }}>
              Our focus is on nurturing young minds with strong academic foundations, values, and life skills. We strive to create a dynamic learning environment that inspires confidence and lifelong success.
            </p>

            {/* Editorial bullets layout */}
            <div className="facilities-bullets-row" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(255, 69, 0, 0.1)', color: '#ff4500', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontWeight: '800', fontSize: '0.85rem', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Well-equipped classrooms and modern infrastructure</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(255, 69, 0, 0.1)', color: '#ff4500', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontWeight: '800', fontSize: '0.85rem', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Experienced and dedicated faculty</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'rgba(255, 69, 0, 0.1)', color: '#ff4500', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span style={{ fontWeight: '800', fontSize: '0.85rem', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Focus on holistic development and values</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Amenities Highlights Row */}
        <section className="amenities-highlights-section" style={{ padding: '40px 0', borderBottom: '1px solid rgba(0,0,0,0.04)', backgroundColor: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
            <div className="amenities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
              {amenities.map((amenity, idx) => (
                <div key={idx} className="amenity-card" style={{ background: '#fafafa', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', padding: '25px 20px', textAlign: 'center', transition: 'all 0.3s ease' }}>
                  <div className="amenity-icon-circle" style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                    {amenity.icon}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#111111', margin: '0 0 6px 0' }}>{amenity.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#666666', margin: '0', lineHeight: '1.4' }}>{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="filter-bar-section">
          <div className="container filter-container">
            <div className="filter-label-wrap">
              <Filter size={16} /> <span>Filter Category:</span>
            </div>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Show All ({facilitiesList.length})
              </button>
              <button 
                className={`filter-btn ${filter === 'academic' ? 'active' : ''}`}
                onClick={() => setFilter('academic')}
              >
                Academic Labs & Classrooms
              </button>
              <button 
                className={`filter-btn ${filter === 'infra' ? 'active' : ''}`}
                onClick={() => setFilter('infra')}
              >
                Sports & Boarding
              </button>
            </div>
          </div>
        </section>

        {/* Facilities Gestalten Grid */}
        <section className="section section-light">
          <div className="container">
            <div className="facilities-gestalten-grid">
              {filteredFacilities.map((fac) => (
                <div 
                  key={fac.id} 
                  className="gestalten-fac-card"
                  onClick={() => setActiveFacility(fac)}
                >
                  <div className="gestalten-fac-visual-wrap">
                    {renderFacilityVisual(fac.type)}
                  </div>
                  <div className="gestalten-fac-info">
                    <h3>{fac.title}</h3>
                    <p>{fac.subtitle}</p>
                    <button className="view-more-btn" style={{ background: 'none', border: 'none', color: '#ff4500', fontWeight: '800', fontSize: '0.8rem', cursor: 'pointer', padding: '0', marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      View More <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour CTA */}
        <section className="tour-cta-section">
          <div className="container tour-container card">
            <div className="tour-content">
              <h2>Want to Experience Laurel In-Person?</h2>
              <p>Schedule a guided campus tour with our admissions officer. Tours run Monday through Saturday from 9:30 AM to 3:30 PM.</p>
              <div style={{ marginTop: '25px' }}>
                <a href="tel:+919487918780" className="btn btn-primary" style={{ backgroundColor: '#ff4500', borderColor: '#ff4500', textDecoration: 'none', cursor: 'pointer' }}>Book Campus Tour Now</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Detail Slide Drawer Overlay */}
      {activeFacility && createPortal(
        <div className="fac-drawer-overlay" onClick={() => setActiveFacility(null)}>
          <div className="fac-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="fac-drawer-close" onClick={() => setActiveFacility(null)}>
              <X size={20} />
            </button>
            <div className="fac-drawer-image-wrap">
              <img src={activeFacility.img} alt={activeFacility.title} className="fac-drawer-image" />
              <span className="fac-drawer-category-badge">
                {activeFacility.categoryLabel}
              </span>
            </div>
            <div className="fac-drawer-content">
              <h2>{activeFacility.title}</h2>
              <p className="fac-drawer-desc">{activeFacility.desc}</p>
              
              <div className="fac-drawer-features">
                <h3>Highlights & Standards</h3>
                <ul>
                  {activeFacility.features.map((feat, idx) => (
                    <li key={idx}>
                      <span className="bullet-dot"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="fac-drawer-cta">
                <a href="tel:+919487918780" className="btn btn-primary" style={{ cursor: 'pointer' }}>Schedule Campus Visit</a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
