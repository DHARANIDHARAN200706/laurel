import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Filter, X } from 'lucide-react';
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

  const facilitiesList = [
    {
      id: 'classrooms',
      title: 'Smart Classrooms',
      subtitle: 'BenQ 4K Smartboards',
      category: 'academic',
      categoryLabel: 'Academic Lab',
      desc: 'All classrooms are equipped with BenQ digital interactive panels, ergonomic furniture, high-speed Wi-Fi, and complete acoustic tuning to support audio-visual learning.',
      img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
      features: ['BenQ 4K Interactive Panels', 'Air-cooled environment', 'Ergonomic orthopedic seating', 'Integrated surround sound'],
      type: 'accordion'
    },
    {
      id: 'science-labs',
      title: 'Smart Science Labs',
      subtitle: 'Physics, Chemistry & Biology',
      category: 'academic',
      categoryLabel: 'Academic Lab',
      desc: 'Separate, spacious laboratories for physics, chemistry, and biology. Each lab houses high-precision equipment, safety hoods, and individual workspace stations.',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
      features: ['Individual workspace stations', 'Gas connection ducts', 'High-grade optical microscopes', 'Automated fire safety extractors'],
      type: 'alerts'
    },
    {
      id: 'atal-lab',
      title: 'ATAL Tinkering Lab',
      subtitle: 'IoT & Robotics workbench',
      category: 'academic',
      categoryLabel: 'STEM Lab',
      desc: 'NITI Aayog approved tinkering lab designed to stimulate STEM. Includes robotic development kits, Arduino boards, 3D printers, and sensor drills.',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
      features: ['Industrial 3D Printers', 'Robotic Assembly & MCU kits', 'Raspberry Pi computing units', 'Soldering & diagnostic stations'],
      type: 'feed'
    },
    {
      id: 'sports',
      title: 'Sports Complex',
      subtitle: 'Olympic Pool & Tracks',
      category: 'infra',
      categoryLabel: 'Campus Sports',
      desc: 'Facilities for table tennis, badminton, chess, and gymnastics. Indoor training areas equipped with high-grade safety mats and professional coaching guides.',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
      features: ['Olympic Swimming Pool', 'Badminton Courts', 'Professional gymnastics mats', 'Supervised physical trainers'],
      type: 'avatar'
    },
    {
      id: 'computer-lab',
      title: 'Digital Sandbox',
      subtitle: '1:1 Chromebook Terminals',
      category: 'academic',
      categoryLabel: 'Academic Technology',
      desc: 'Equipped with 40 high-performance Dell desktops connected via high-speed LAN, supporting Python coding, database practice, and web design curricula.',
      img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
      features: ['1:1 Student-to-PC ratio', 'Python & SQL server setup', 'UPS power failover', 'High-speed gigabit fiber line'],
      type: 'banner'
    },
    {
      id: 'library',
      title: 'Central Library',
      subtitle: '20,000+ volumes & archives',
      category: 'academic',
      categoryLabel: 'Reading & Archives',
      desc: 'A sanctuary of silence housing over 8,000+ volumes, including competitive exam resources (JEE/NEET archives), scientific journals, and digital e-book access.',
      img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
      features: ['JEE/NEET reference libraries', 'Private reading study carrels', 'Digital Kindle terminals', 'Weekly science journal catalogs'],
      type: 'badge'
    },
    {
      id: 'medical',
      title: 'Wellness Clinic',
      subtitle: 'Full-time Medical Care',
      category: 'care',
      categoryLabel: 'Student Well-being',
      desc: 'A dedicated medical room staffed with a registered nurse. Equipped with emergency oxygen, first-aid, and an on-call ambulance partnership.',
      img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
      features: ['Full-time resident medical nurse', 'Oxygen cylinders & clinical beds', 'Annual comprehensive health checkups', 'Emergency local hospital logistics'],
      type: 'button'
    },
    {
      id: 'transport',
      title: 'Secure Transport',
      subtitle: 'GPS & RFID Live Tracking',
      category: 'care',
      categoryLabel: 'Student Safety',
      desc: 'A fleet of GPS-enabled buses with speed governors, RFID tracking, and onboard helper staff covering all major city pick-up sectors.',
      img: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=600&q=80',
      features: ['Active GPS route tracking', 'Speed governors (< 40km/h)', 'Automated RFID scans', 'Trained female bus assistants'],
      type: 'breadcrumbs'
    },
    {
      id: 'hostel',
      title: 'Boarding Hostels',
      subtitle: 'Separate secure wings',
      category: 'infra',
      categoryLabel: 'Residential Life',
      desc: 'Safe and secure residential hostels for boys and girls. Equipped with study desks, laundry services, and supervised prep-study rooms.',
      img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80',
      features: ['Dedicated secure hosteling wings', 'Pure vegetarian nutrition mess', 'Supervised night prep hours', '24/7 resident wardens'],
      type: 'button-group'
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
        <div className="container">
          <span className="badge">Campus Life</span>
          <h1>Our Facilities & Infrastructure</h1>
          <p>Explore the physical learning infrastructure, safety configurations, and academic resources available on our campus.</p>
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
            <button 
              className={`filter-btn ${filter === 'care' ? 'active' : ''}`}
              onClick={() => setFilter('care')}
            >
              Safety & Transport
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
              <a href="tel:+18001234567" className="btn btn-primary">Book Campus Tour Now</a>
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
              <a href="tel:+18001234567" className="btn btn-primary">Schedule Campus Visit</a>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
  </>
);
}
