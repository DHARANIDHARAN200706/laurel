import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  Calendar, Award, User, ArrowRight
} from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [tourForm, setTourForm] = useState({ name: '', phone: '', date: '', time: '' });
  const [admissionForm, setAdmissionForm] = useState({ name: '', grade: 'Nursery', phone: '', remarks: '' });
  const [errors, setErrors] = useState({});

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleTourChange = (e) => {
    const { name, value } = e.target;
    setTourForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleAdmissionChange = (e) => {
    const { name, value } = e.target;
    setAdmissionForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const submitForm = (e, formType) => {
    e.preventDefault();
    const newErrors = {};
    
    if (formType === 'inquiry') {
      if (!inquiryForm.name.trim()) newErrors.name = 'Name is required';
      if (!inquiryForm.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!inquiryForm.message.trim()) newErrors.message = 'Message is required';
    } else if (formType === 'tour') {
      if (!tourForm.name.trim()) newErrors.name = 'Name is required';
      if (!tourForm.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!tourForm.date) newErrors.date = 'Date is required';
    } else if (formType === 'admission') {
      if (!admissionForm.name.trim()) newErrors.name = 'Parent name is required';
      if (!admissionForm.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const resetForm = () => {
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
    setTourForm({ name: '', phone: '', date: '', time: '' });
    setAdmissionForm({ name: '', grade: 'Nursery', phone: '', remarks: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="contact-page-container animate-fade-in">
      {/* Concentric Circles */}
      <div className="contact-geo-circle geo-circle-1"></div>
      <div className="contact-geo-circle geo-circle-2"></div>

      {/* Floating Blueprint Instruments */}
      <div className="blueprint-compass">
        <div className="compass-inner-ring"></div>
        <div className="compass-needle"></div>
      </div>

      <div className="blueprint-watch">
        <div className="watch-crown"></div>
        <div className="watch-tick-ring"></div>
        <div className="watch-hand-hour"></div>
        <div className="watch-hand-minute"></div>
      </div>

      <div className="blueprint-pen">
        <div className="pen-clip"></div>
        <div className="pen-tip"></div>
      </div>

      <div className="container">
        <div className="contact-blueprint-grid">
          
          {/* Editorial Content (Left Column) */}
          <div className="contact-editorial-panel">
            
            {/* Step Selector */}
            <div className="contact-step-counter">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`step-indicator-item ${activeStep === step ? 'active' : ''}`}
                  onClick={() => { setActiveStep(step); resetForm(); }}
                >
                  <span className="step-indicator-number">0{step}</span>
                  <div className="step-indicator-dot"></div>
                </div>
              ))}
            </div>

            {/* Dynamic Step Content */}
            {activeStep === 1 && (
              <>
                <span className="contact-badge-capsule">Appreciation</span>
                <h1>You Don't Just Enroll. You Join A Legacy.</h1>
                <div className="contact-text-stack">
                  <p>To every creative mind who takes the leap, we see your courage, we value your trust.</p>
                  <p>You didn't wait to be ready, you decided to start. That's the real essence of design, progress over perfection.</p>
                  <p className="highlight-red">We're not a community of numbers. We're a circle of thinkers, doers, and dreamers.</p>
                </div>
                <div className="contact-footer-quote">This Is More Than A Class. It's A Movement.</div>
              </>
            )}

            {activeStep === 2 && (
              <>
                <span className="contact-badge-capsule">Campus Visit</span>
                <h1>Walk Our Corridors. Experience Laurel.</h1>
                <div className="contact-text-stack">
                  <p>Observe smart classroom layouts, scientific ATAL robotics units, and eco-friendly sports grounds first-hand.</p>
                  <p>Interact directly with tutors, coaches, and administrators to gain insights on academics.</p>
                  <p className="highlight-red">We're not a community of numbers. We're a circle of thinkers, doers, and dreamers.</p>
                </div>
                <div className="contact-footer-quote">This Is More Than A Visit. It's An Experience.</div>
              </>
            )}

            {activeStep === 3 && (
              <>
                <span className="contact-badge-capsule">Admissions</span>
                <h1>Secure Your Future. Begin Registration.</h1>
                <div className="contact-text-stack">
                  <p>Registration lines are open for Grades Nursery to Grade 11 with custom boarding facilities.</p>
                  <p>Submit inquiries regarding fees, document procedures, or syllabus streams instantly.</p>
                  <p className="highlight-red">We're not a community of numbers. We're a circle of thinkers, doers, and dreamers.</p>
                </div>
                <div className="contact-footer-quote">This Is More Than A Form. It's A Journey.</div>
              </>
            )}

            {activeStep === 4 && (
              <>
                <span className="contact-badge-capsule">Coordinates</span>
                <h1>Locate Our Campus. Get In Touch.</h1>
                <div className="contact-text-stack">
                  <p>Admin and registrations desks are open Monday to Saturday from 8:30 AM to 4:30 PM.</p>
                  <p>Find direct telephone coordinates, support desks, and detailed map details.</p>
                  <p className="highlight-red">We're not a school of numbers. We're a circle of thinkers, doers, and dreamers.</p>
                </div>
                <div className="contact-footer-quote">Always Accessible. Always Supportive.</div>
              </>
            )}

            <div>
              <button 
                className="contact-arrow-circle"
                onClick={() => { setActiveStep(prev => (prev === 4 ? 1 : prev + 1)); resetForm(); }}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Form / Detail Card (Right Column) */}
          <div className="contact-form-card-blueprint">
            {!isSuccess ? (
              <>
                {activeStep === 1 && (
                  <>
                    <h3>General Inquiry</h3>
                    <p>Get answers to any query about our school life or configurations within 12 hours.</p>
                    <form onSubmit={(e) => submitForm(e, 'inquiry')}>
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" 
                          value={inquiryForm.name} 
                          onChange={handleInquiryChange}
                          placeholder="Full Name"
                        />
                        {errors.name && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label>Contact Phone *</label>
                        <input 
                          type="text" 
                          name="phone" 
                          className="form-control" 
                          value={inquiryForm.phone} 
                          onChange={handleInquiryChange}
                          placeholder="Phone Number"
                        />
                        {errors.phone && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.phone}</span>}
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control" 
                          value={inquiryForm.email} 
                          onChange={handleInquiryChange}
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Your Message *</label>
                        <textarea 
                          name="message" 
                          rows="3" 
                          className="form-control" 
                          value={inquiryForm.message} 
                          onChange={handleInquiryChange}
                          placeholder="Inquiry Details"
                        />
                        {errors.message && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.message}</span>}
                      </div>
                      <button type="submit" className="btn-submit-blueprint" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </button>
                    </form>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <h3>Book Campus Tour</h3>
                    <p>Tours run Monday through Saturday from 9:30 AM to 3:30 PM with admissions guidance.</p>
                    <form onSubmit={(e) => submitForm(e, 'tour')}>
                      <div className="form-group">
                        <label>Parent Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" 
                          value={tourForm.name} 
                          onChange={handleTourChange}
                          placeholder="Full Name"
                        />
                        {errors.name && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label>Contact Phone *</label>
                        <input 
                          type="text" 
                          name="phone" 
                          className="form-control" 
                          value={tourForm.phone} 
                          onChange={handleTourChange}
                          placeholder="Phone Number"
                        />
                        {errors.phone && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.phone}</span>}
                      </div>
                      <div className="form-group">
                        <label>Preferred Date *</label>
                        <input 
                          type="date" 
                          name="date" 
                          className="form-control" 
                          value={tourForm.date} 
                          onChange={handleTourChange}
                        />
                        {errors.date && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.date}</span>}
                      </div>
                      <div className="form-group">
                        <label>Preferred Time Slot</label>
                        <select 
                          name="time" 
                          className="form-control" 
                          value={tourForm.time} 
                          onChange={handleTourChange}
                        >
                          <option value="09:30 AM">09:30 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                        </select>
                      </div>
                      <button type="submit" className="btn-submit-blueprint" disabled={isSubmitting}>
                        {isSubmitting ? 'Booking...' : 'Book Campus Tour'}
                      </button>
                    </form>
                  </>
                )}

                {activeStep === 3 && (
                  <>
                    <h3>Admission Query</h3>
                    <p>Begin CBSE registrations or boarding queries for grades Nursery to Grade 11.</p>
                    <form onSubmit={(e) => submitForm(e, 'admission')}>
                      <div className="form-group">
                        <label>Parent Name *</label>
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" 
                          value={admissionForm.name} 
                          onChange={handleAdmissionChange}
                          placeholder="Full Name"
                        />
                        {errors.name && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label>Grade Level</label>
                        <select 
                          name="grade" 
                          className="form-control" 
                          value={admissionForm.grade} 
                          onChange={handleAdmissionChange}
                        >
                          <option value="Nursery">Nursery / KG</option>
                          <option value="Primary">Primary (Grade 1-5)</option>
                          <option value="Middle">Middle School (Grade 6-8)</option>
                          <option value="Senior">Senior School (Grade 9-11)</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Contact Phone *</label>
                        <input 
                          type="text" 
                          name="phone" 
                          className="form-control" 
                          value={admissionForm.phone} 
                          onChange={handleAdmissionChange}
                          placeholder="Phone Number"
                        />
                        {errors.phone && <span style={{color: '#ef4444', fontSize: '0.75rem'}}>{errors.phone}</span>}
                      </div>
                      <div className="form-group">
                        <label>Additional Remarks</label>
                        <textarea 
                          name="remarks" 
                          rows="2" 
                          className="form-control" 
                          value={admissionForm.remarks} 
                          onChange={handleAdmissionChange}
                          placeholder="Syllabus choice, boarding details..."
                        />
                      </div>
                      <button type="submit" className="btn-submit-blueprint" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      </button>
                    </form>
                  </>
                )}

                {activeStep === 4 && (
                  <>
                    <h3>Direct Coordinates</h3>
                    <p>Reach out directly or visit our admin block during office hours.</p>
                    <div className="blueprint-coords-stack" style={{ marginTop: '10px' }}>
                      <div className="blueprint-coord-item">
                        <Phone className="blueprint-coord-icon" size={20} />
                        <div className="blueprint-coord-info">
                          <h4>Call Us</h4>
                          <p>Principal: +1 (800) 123-4567</p>
                          <p>Admissions: +1 (800) 123-4568</p>
                        </div>
                      </div>
                      <div className="blueprint-coord-item">
                        <Mail className="blueprint-coord-icon" size={20} />
                        <div className="blueprint-coord-info">
                          <h4>Email Desks</h4>
                          <p>General: info@laurelschool.edu</p>
                          <p>Admissions: admissions@laurelschool.edu</p>
                        </div>
                      </div>
                      <div className="blueprint-coord-item">
                        <Clock className="blueprint-coord-icon" size={20} />
                        <div className="blueprint-coord-info">
                          <h4>Office Hours</h4>
                          <p>Monday - Saturday: 8:30 AM - 4:30 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                      <div className="blueprint-coord-item">
                        <MapPin className="blueprint-coord-icon" size={20} />
                        <div className="blueprint-coord-info">
                          <h4>Address</h4>
                          <p>12, Academic Avenue, Laurel Hills, IN</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="blueprint-success-screen">
                <CheckCircle2 className="blueprint-success-icon" size={64} />
                <h3>Submission Received!</h3>
                <p>We value your trust and time. An admissions coordinator or school officer will reach out back to you shortly.</p>
                <button className="btn-submit-blueprint" onClick={resetForm}>
                  Send Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
