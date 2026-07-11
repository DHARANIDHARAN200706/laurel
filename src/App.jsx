import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';

// Scroll to top helper on navigation changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent({ isEnquiryOpen, handleOpenEnquiry, handleCloseEnquiry }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
        </Routes>
      </main>

      {/* Shared Footer block */}
      <Footer />

      {/* Admissions Enquiry Popup Form Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={handleCloseEnquiry} />
    </>
  );
}

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleOpenEnquiry = () => setIsEnquiryOpen(true);
  const handleCloseEnquiry = () => setIsEnquiryOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <AppContent 
        isEnquiryOpen={isEnquiryOpen}
        handleOpenEnquiry={handleOpenEnquiry}
        handleCloseEnquiry={handleCloseEnquiry}
      />
    </Router>
  );
}
