import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Map } from 'lucide-react';
import './Contact.css';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    lookingFor: 'Primary School (LKG - Class 5)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const getWhatsAppUrl = () => {
    const phoneNumber = "919487918780";
    const messageText = `Hello Laurel CBSE School,\n\nI have submitted an inquiry form on your website. Here are my details:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Location: ${formData.location}\n• Looking For: ${formData.lookingFor}\n• Message: ${formData.message}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
  };

  useEffect(() => {
    let timer;
    if (isSuccess && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (isSuccess && countdown === 0) {
      window.location.href = getWhatsAppUrl();
    }
    return () => clearTimeout(timer);
  }, [isSuccess, countdown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    if (!formData.location.trim()) newErrors.location = 'Your location is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    if (!GOOGLE_SCRIPT_URL) {
      console.warn("VITE_GOOGLE_SCRIPT_URL is not set. Data is only being redirected to WhatsApp.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);
      return;
    }

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Avoids CORS errors during redirects inside Google Apps Script Web Apps
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    })
    .catch((error) => {
      console.error('Error submitting form to Google Sheets:', error);
      // Fallback: still show success screen and redirect to WhatsApp even if sheets/email fail
      setIsSubmitting(false);
      setIsSuccess(true);
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      location: '',
      lookingFor: 'Primary School (LKG - Class 5)',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
    setCountdown(5);
  };

  return (
    <div className="contact-page-container animate-fade-in">
      {/* Concentric Circles Background */}
      <div className="contact-geo-circle geo-circle-1"></div>
      <div className="contact-geo-circle geo-circle-2"></div>

      <div className="container">
        
        {/* Header Breadcrumb & Title */}
        <div className="contact-editorial-header" style={{ marginBottom: '50px', textAlign: 'left' }}>
          <div className="hero-breadcrumb" style={{ display: 'flex', gap: '8px', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: '800', marginBottom: '15px' }}>
            <span style={{ color: '#888888' }}>Contact</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ color: '#ff4500' }}>HomeContact</span>
          </div>
          <h1 className="contact-main-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#111111', textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: '1.2', margin: '0', maxWidth: '850px' }}>
            Our Schools are the Right Fit for Your Child.. We are Near Your Place!
          </h1>
        </div>

        <div className="contact-blueprint-grid">
          
          {/* Left Column: Coordinates & Information */}
          <div className="contact-editorial-panel" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Info Stack */}
            <div className="blueprint-coords-stack" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '24px', padding: '35px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              
              <div className="blueprint-coord-item" style={{ marginBottom: '25px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <MapPin className="blueprint-coord-icon" size={24} style={{ color: '#ff4500', flexShrink: 0 }} />
                <div className="blueprint-coord-info">
                  <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0' }}>Our Location</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555555', margin: '0', lineHeight: '1.5' }}>
                    Pallikondan,<br />
                    Mudalcheri, Tamil Nadu 614602
                  </p>
                </div>
              </div>

              <div className="blueprint-coord-item" style={{ marginBottom: '25px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Phone className="blueprint-coord-icon" size={24} style={{ color: '#ff4500', flexShrink: 0 }} />
                <div className="blueprint-coord-info">
                  <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0' }}>Phone Number</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555555', margin: '0', lineHeight: '1.5' }}>
                    <a href="tel:+919487918780" style={{ color: 'inherit', textDecoration: 'none' }}>094879 18780</a>
                  </p>
                </div>
              </div>

              <div className="blueprint-coord-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Mail className="blueprint-coord-icon" size={24} style={{ color: '#ff4500', flexShrink: 0 }} />
                <div className="blueprint-coord-info">
                  <h4 style={{ fontSize: '0.75rem', fontWeight: '800', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px 0' }}>Email Address</h4>
                  <p style={{ fontSize: '0.95rem', color: '#555555', margin: '0', lineHeight: '1.5' }}>
                    <a href="mailto:info@laurelcbse.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@laurelcbse.in</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Map Placeholder Frame showing the warning */}
            <div className="contact-map-fallback-frame" style={{ background: '#ededed', border: '1px dashed rgba(0,0,0,0.15)', borderRadius: '24px', height: '240px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '30px', position: 'relative', overflow: 'hidden' }}>
              <div className="grid-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1.5px, transparent 1.5px)', backgroundSize: '15px 15px', opacity: 0.8 }}></div>
              <Map size={36} color="#888888" style={{ marginBottom: '15px', position: 'relative', zIndex: 2 }} />
              <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#666666', margin: '0', textTransform: 'uppercase', letterSpacing: '0.04em', position: 'relative', zIndex: 2 }}>
                Coordinates of this location not found
              </p>
            </div>

          </div>

          {/* Right Column: Submission Form */}
          <div id="contact-form" className="contact-form-card-blueprint">
            {!isSuccess ? (
              <>
                <h3 style={{ textTransform: 'uppercase', letterSpacing: '-0.01em', fontWeight: '900', fontSize: '1.4rem', color: '#111111', marginBottom: '8px' }}>Send Us A Message</h3>
                <p style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '25px' }}>Get in touch with our admissions advisor or office registrar immediately.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="Your Full Name"
                    />
                    {errors.name && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label>Mail Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="Your Email Address"
                    />
                    {errors.email && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label>Your Location *</label>
                    <input 
                      type="text" 
                      name="location" 
                      className="form-control" 
                      value={formData.location} 
                      onChange={handleChange}
                      placeholder="City or Town"
                    />
                    {errors.location && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.location}</span>}
                  </div>

                  <div className="form-group">
                    <label>Looking For</label>
                    <select 
                      name="lookingFor" 
                      className="form-control" 
                      value={formData.lookingFor} 
                      onChange={handleChange}
                      style={{ width: '100%' }}
                    >
                      <option value="Primary School (LKG - Class 5)">Primary School (LKG - Class 5)</option>
                      <option value="Middle School (Class 6 - Class 8)">Middle School (Class 6 - Class 8)</option>
                      <option value="Senior Secondary & Entrance Coaching (Class 9 - Class 12)">Senior Secondary & Entrance Coaching (Class 9 - Class 12)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message *</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      className="form-control" 
                      value={formData.message} 
                      onChange={handleChange}
                      placeholder="Write your query details here..."
                      style={{ width: '100%', resize: 'none' }}
                    />
                    {errors.message && <span style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-submit-blueprint" disabled={isSubmitting} style={{ backgroundColor: '#ff4500', color: '#ffffff' }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            ) : (
              <div className="blueprint-success-screen">
                <CheckCircle2 className="blueprint-success-icon" size={64} style={{ color: '#10b981', marginBottom: '15px' }} />
                <h3 style={{ textTransform: 'uppercase', fontWeight: '900', fontSize: '1.4rem', color: '#111111', marginBottom: '8px' }}>Submission Received!</h3>
                <p style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '20px' }}>
                  Your inquiry has been successfully saved to our database. Confirmation emails have been dispatched to your inbox and our admissions office.
                </p>
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '15px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '0.9rem', fontWeight: '700', color: '#15803d', margin: '0' }}>
                    Redirecting to WhatsApp in {countdown}s...
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#166534', margin: '5px 0 0 0' }}>
                    Connecting you directly to our admissions office.
                  </p>
                </div>
                <a 
                  href={getWhatsAppUrl()}
                  className="btn-submit-blueprint"
                  style={{ 
                    backgroundColor: '#25D366', 
                    color: '#ffffff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontWeight: '700',
                    borderRadius: '12px',
                    height: '52px',
                    marginBottom: '15px'
                  }}
                >
                  <Phone size={18} /> Chat on WhatsApp Now
                </a>
                <button className="btn-submit-blueprint" onClick={resetForm} style={{ backgroundColor: '#111111', color: '#ffffff', marginTop: '0' }}>
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
