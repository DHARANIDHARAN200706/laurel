import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import OilPaintingTraining from './pages/OilPaintingTraining';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Scroll to top helper on navigation changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleOpenEnquiry = () => {
    navigate('/contact');
    setTimeout(() => {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleCloseEnquiry = () => setIsEnquiryOpen(false);

  return (
    <>
      {/* Shared Header Navigation */}
      <Header onOpenEnquiry={handleOpenEnquiry} />
      
      {/* Main Pages Container */}
      <main 
        className="main-content-layout" 
        style={{ paddingTop: isHomePage ? '0' : 'var(--header-height)' }}
      >
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/oil-painting-training" element={<OilPaintingTraining />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Shared Footer block */}
      <Footer />

      {/* Admissions Enquiry Popup Form Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />

      {/* Floating AI Chatbot Support Widget */}
      <Chatbot />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Begin fade-out sequence after the progress bar animation completes (2.2s)
    const fadeTimeout = setTimeout(() => {
      setFade(true);
    }, 2200);

    // Completely unmount the preloader after the fade transition completes (3.0s total)
    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className={`preloader-overlay ${fade ? 'fade-out' : ''}`}>
          <div className="preloader-perspective-box">
            <div className="preloader-orbit-ring"></div>
            <img 
              src="/loglaurel.png" 
              alt="Laurel CBSE School" 
              className="preloader-3d-logo"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=120&h=120&q=80";
              }}
            />
          </div>
          <h1 className="preloader-brand-title">Laurel School</h1>
          <p className="preloader-brand-subtitle">Nurturing Minds / Shaping Leaders</p>
          <div className="preloader-progress-track">
            <div className="preloader-progress-bar"></div>
          </div>
        </div>
      )}
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </>
  );
}
