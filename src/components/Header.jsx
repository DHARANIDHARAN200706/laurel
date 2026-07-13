import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Info, 
  BookOpen, 
  GraduationCap, 
  Building, 
  Network, 
  Image as ImageIcon, 
  Phone,
  HelpCircle
} from 'lucide-react';
import './Header.css';

export default function Header({ onOpenEnquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home, color: '#f97316' },
    { path: '/about', label: 'About Us', icon: Info, color: '#3b82f6' },
    { path: '/academics', label: 'Academics', icon: BookOpen, color: '#ef4444' },
    { path: '/admission', label: 'Admissions', icon: GraduationCap, color: '#a855f7' },
    { path: '/facilities', label: 'Facilities', icon: Building, color: '#d97706' },
    { path: '/infrastructure', label: 'Infrastructure', icon: Network, color: '#10b981' },
    { path: '/gallery', label: 'Media Gallery', icon: ImageIcon, color: '#06b6d4' },
    { path: '/contact', label: 'Contact Us', icon: Phone, color: '#ec4899' },
    { path: '/faq', label: 'FAQ', icon: HelpCircle, color: '#f59e0b' }
  ];

  const activeRouteIndex = navLinks.findIndex(l => location.pathname === l.path);
  const [centerIndex, setCenterIndex] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);

  useEffect(() => {
    if (activeRouteIndex !== -1) {
      setCenterIndex(activeRouteIndex);
    }
  }, [activeRouteIndex, isOpen]);

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setCenterIndex(prev => Math.min(prev + 1, navLinks.length - 1));
    } else if (e.deltaY < 0) {
      setCenterIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (touchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const diffY = touchStartY - currentY;

    if (Math.abs(diffY) > 30) {
      if (diffY > 0) {
        setCenterIndex(prev => Math.min(prev + 1, navLinks.length - 1));
      } else {
        setCenterIndex(prev => Math.max(prev - 1, 0));
      }
      setTouchStartY(currentY);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

  return (
    <header className={`global-header ${scrolled ? 'scrolled' : ''} ${isHomePage ? 'on-home' : ''}`}>
      <div className="header-container">
        
        {/* Left Side: Brand badge */}
        <Link to="/" className="hero-top-left" onClick={() => setIsOpen(false)}>
          <img src="/loglaurel.png" alt="Laurel CBSE Logo" className="header-logo-img" />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hero-top-nav desktop-only">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path} 
              className={({ isActive }) => `top-nav-item ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side: Desktop triggers Enquiry modal; Mobile toggles drawer */}
        <div className="hero-top-right">
          
          {/* Desktop Only: Chic minimal Action Button */}
          <button 
            onClick={onOpenEnquiry} 
            className="header-apply-pill desktop-only"
          >
            Apply Now
          </button>

          {/* Chic two-line menu burger (Toggles drawer on mobile) */}
          <button 
            className={`menu-burger ${isOpen ? 'open' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">

          <button 
            className="mobile-drawer-cta"
            onClick={() => {
              setIsOpen(false);
              onOpenEnquiry();
            }}
          >
            Apply Now
          </button>

          {/* 3D-stacked card deck container */}
          <div 
            className="mobile-deck-container"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
          >
            {navLinks.map((link, idx) => {
              const LinkIcon = link.icon;
              const diff = idx - centerIndex;
              const distance = Math.abs(diff);
              const sign = Math.sign(diff);
              
              return (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  className={({ isActive }) => `mobile-drawer-card ${isActive ? 'active' : ''}`}
                  style={{ 
                    '--offset': diff, 
                    '--distance': distance, 
                    '--sign': sign 
                  }}
                  onMouseEnter={() => setCenterIndex(idx)}
                  onMouseLeave={() => {
                    if (activeRouteIndex !== -1) {
                      setCenterIndex(activeRouteIndex);
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setCenterIndex(idx);
                    setTimeout(() => {
                      setIsOpen(false);
                      navigate(link.path);
                    }, 200);
                  }}
                >
                  <div 
                    className="card-icon-wrap" 
                    style={{ 
                      backgroundColor: `${link.color}15`, 
                      color: link.color 
                    }}
                  >
                    <LinkIcon size={16} strokeWidth={2.5} />
                  </div>
                  <span className="card-label-text">{link.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

    </header>
  );
}
