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
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const checkUser = () => {
    const storedUser = localStorage.getItem('laurelUser');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
    window.addEventListener('authChange', checkUser);
    return () => window.removeEventListener('authChange', checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('laurelUser');
    checkUser();
    navigate('/');
  };

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
        <div className="hero-top-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          
          {user ? (
            <div className="header-user-pill desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111111' }}>
                Hi, {user.name.split(' ')[0]}
              </span>
              <button 
                onClick={handleLogout}
                className="header-logout-btn"
                style={{ 
                  background: 'transparent', 
                  border: '1px solid rgba(0,0,0,0.15)',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: '#ef4444',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="header-login-link desktop-only"
              style={{ 
                fontSize: '0.85rem', 
                fontWeight: '700', 
                color: '#111111', 
                textDecoration: 'none',
                marginRight: '5px'
              }}
            >
              Login
            </Link>
          )}

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

          <div style={{ display: 'flex', gap: '10px', width: '100%', padding: '0 20px', boxSizing: 'border-box', marginBottom: '20px' }}>
            <button 
              className="mobile-drawer-cta"
              onClick={() => {
                setIsOpen(false);
                onOpenEnquiry();
              }}
              style={{ flex: 1, margin: 0 }}
            >
              Apply Now
            </button>

            {user ? (
              <button 
                className="mobile-drawer-cta"
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                style={{ 
                  flex: 1, 
                  backgroundColor: 'transparent', 
                  border: '1px solid #ef4444',
                  color: '#ef4444',
                  margin: 0
                }}
              >
                Logout
              </button>
            ) : (
              <button 
                className="mobile-drawer-cta"
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
                style={{ 
                  flex: 1, 
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  margin: 0
                }}
              >
                Login
              </button>
            )}
          </div>

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
