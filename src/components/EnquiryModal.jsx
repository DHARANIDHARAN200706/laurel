import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send } from 'lucide-react';
import './EnquiryModal.css';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    program: 'JEE Foundation',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      const currentEnquiries = JSON.parse(localStorage.getItem('laurel_enquiries') || '[]');
      const newEnquiry = {
        id: 'enquiry_' + Date.now(),
        date: new Date().toISOString(),
        ...formData
      };
      currentEnquiries.push(newEnquiry);
      localStorage.setItem('laurel_enquiries', JSON.stringify(currentEnquiries));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      email: '',
      program: 'JEE Foundation',
      message: ''
    });
    setIsSuccess(false);
    onClose();
  };

  const floatingWords = [
    { text: 'LEGACY', top: '10%', left: '1%' },
    { text: 'FUTURE', top: '15%', right: '2%' },
    { text: 'ACADEMICS', top: '25%', left: '4%' },
    { text: 'SAFETY', top: '32%', right: '5%' },
    { text: 'ATAL LAB', top: '42%', left: '2%' },
    { text: 'SOLAR GRID', top: '50%', right: '4%' },
    { text: 'EXCELLENCE', top: '60%', left: '5%' },
    { text: 'GROWTH', top: '68%', right: '1%' },
    { text: 'ADMISSIONS', top: '78%', left: '3%' },
    { text: 'ROBOTICS', top: '85%', right: '3%' },
    { text: 'PURPOSE', top: '92%', left: '2%' }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      {/* Decorative Outer Wrapper for Floating Words (prevents overlapping form fields) */}
      <div className="modal-decor-wrap">
        {floatingWords.map((word, idx) => (
          <span 
            key={idx} 
            className="modal-floating-word" 
            style={{ 
              top: word.top, 
              left: word.left || 'auto', 
              right: word.right || 'auto' 
            }}
          >
            {word.text}
          </span>
        ))}
      </div>

      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
        {/* Lumis central vertical orange glow pillar */}
        <div className="modal-lumis-glow"></div>

        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!isSuccess ? (
          <>
            <div className="modal-header">
              <span className="modal-mini-title">LAUREL CBSE</span>
              <h3 className="modal-title">Online Admission Enquiry</h3>
              <p className="modal-subtitle">Submit the form below and our admissions team will get in touch shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="studentName">Student Name *</label>
                <input 
                  type="text" 
                  id="studentName" 
                  name="studentName"
                  className={`form-control ${errors.studentName ? 'is-invalid' : ''}`}
                  placeholder="Enter student's full name"
                  value={formData.studentName}
                  onChange={handleChange}
                />
                {errors.studentName && <span className="error-text">{errors.studentName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="parentName">Parent/Guardian Name</label>
                <input 
                  type="text" 
                  id="parentName" 
                  name="parentName"
                  className="form-control"
                  placeholder="Enter parent/guardian name"
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="program">Target Program / Grade *</label>
                <select 
                  id="program" 
                  name="program" 
                  className="form-control"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="JEE Foundation">JEE Foundation (Grades 8-10)</option>
                  <option value="JEE Coaching">JEE Main & Advanced (Grades 11-12)</option>
                  <option value="NEET Coaching">NEET Medical (Grades 11-12)</option>
                  <option value="NEET Repeaters">NEET Repeaters Batch</option>
                  <option value="CUET Coaching">CUET (Undergraduate Entrance)</option>
                  <option value="Senior Secondary">Senior Secondary (CBSE Science Streams)</option>
                  <option value="Primary School">Primary & Middle School (CBSE)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Any Special Request / Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control" 
                  rows="3"
                  placeholder="Share any specific questions or student profile details..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="spinner"></div>
                ) : (
                  <>
                    <Send size={16} /> Submit Enquiry
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="success-screen">
            <CheckCircle className="success-icon" size={60} />
            <h3 className="success-title">Enquiry Submitted!</h3>
            <p className="success-text">
              Thank you, <strong>{formData.studentName}</strong>'s details have been recorded. Our admission coordinator will call you within 24 hours at <strong>{formData.phone}</strong>.
            </p>
            <button className="success-close-btn" onClick={handleReset}>
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
