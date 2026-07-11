import React, { useState } from 'react';
import { 
  FileText, HelpCircle, UserCheck, Calendar, Info, 
  DollarSign, Check, ChevronDown, ChevronUp, Send, CheckCircle 
} from 'lucide-react';
import './Admission.css';

export default function Admission() {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    parentName: '',
    phone: '',
    email: '',
    grade: 'Grade 8',
    prevSchool: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const steps = [
    { num: '01', title: 'Online Enquiry', desc: 'Fill out the enquiry form on this page or visit the school office to register your interest.' },
    { num: '02', title: 'School Tour & Interaction', desc: 'Visit the school campus, interact with the academic counsellors, and check our ATAL labs.' },
    { num: '03', title: 'Form Submission', desc: 'Submit the official Admission Registration Form with required documents listed below.' },
    { num: '04', title: 'Diagnostic Assessment', desc: 'Student undergoes a general baseline/scholarship assessment in mathematics & language.' },
    { num: '05', title: 'Admission Confirmation', desc: 'Upon verification and approval, pay the admission fee to secure the seat.' }
  ];

  const eligibility = [
    { grade: 'Primary (Grades 1-5)', age: '6+ Years as of March 31st', criteria: 'General observation & interaction' },
    { grade: 'Middle School (Grades 6-8)', age: '11+ Years as of March 31st', criteria: 'Basic baseline assessment (English & Math)' },
    { grade: 'Secondary School (Grades 9-10)', age: '14+ Years as of March 31st', criteria: 'CBSE school transfer certificate and admission test' },
    { grade: 'Senior Secondary & Coaching', age: '15+ Years as of March 31st', criteria: 'Grade 10 Board exam scorecard and interview' }
  ];

  const fees = [
    { grade: 'Grades 1 - 5', tuition: '₹45,000 / Year', lab: '₹2,000 / Year', admission: '₹10,000 (One-time)' },
    { grade: 'Grades 6 - 8', tuition: '₹55,000 / Year', lab: '₹4,000 / Year', admission: '₹10,000 (One-time)' },
    { grade: 'Grades 9 - 10', tuition: '₹65,000 / Year', lab: '₹6,000 / Year', admission: '₹10,000 (One-time)' },
    { grade: 'Grades 11 - 12 (CBSE + JEE/NEET)', tuition: '₹1,20,000 / Year', lab: '₹10,000 / Year', admission: '₹15,000 (One-time)' }
  ];

  const documents = [
    'Student\'s Birth Certificate (Copy)',
    'Transfer Certificate (TC) from previous school (Original)',
    'Report Card/Mark Sheet of previous academic year',
    '3 passport-size photographs of the student',
    'Aadhar Card copies of the student and parents',
    'Migration Certificate (only for non-CBSE students entering Grade 11)'
  ];

  const faqs = [
    {
      q: "What is the integrated coaching program structure?",
      a: "Our integrated coaching program runs parallel to regular CBSE classroom instruction. JEE, NEET, and CUET preparations are embedded within the weekly schedule. Expert coaching faculty teach domain subjects (Physics, Chemistry, Math, Biology) with board syllabus focus in the mornings and entrance exam focus in the afternoons, saving travel time and reducing student stress."
    },
    {
      q: "Is there a hostel facility available at Laurel?",
      a: "Yes, we provide comfortable separate hostels for boys and girls from Grade 8 onwards. The hostel includes hygienic food facilities, recreational rooms, supervised evening study hours, and tight security."
    },
    {
      q: "Does the school provide transport facilities?",
      a: "Yes, our secure school bus fleet covers a radius of 20 kilometers around the campus. All buses are equipped with GPS tracking systems, CCTV, and trained helpers."
    },
    {
      q: "What is the NITI Aayog ATAL Lab?",
      a: "The ATAL Tinkering Lab (ATL) is an initiative by the Government of India to foster curiosity, creativity, and imagination in young minds. At Laurel, our ATL houses advanced toolkits, robotic assembly systems, 3D printers, and sensor setups to promote STEM education."
    }
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
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
    setTimeout(() => {
      const currentEnquiries = JSON.parse(localStorage.getItem('laurel_enquiries') || '[]');
      const newEnquiry = {
        id: 'admissions_' + Date.now(),
        date: new Date().toISOString(),
        ...formData
      };
      currentEnquiries.push(newEnquiry);
      localStorage.setItem('laurel_enquiries', JSON.stringify(currentEnquiries));
      
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="admission-page animate-fade-in">
      {/* Page Hero */}
      <section className="admission-hero">
        <div className="container">
          <span className="badge">Enroll Today</span>
          <h1>Admission Guidelines & Enrollment</h1>
          <p>Everything you need to know about our criteria, fee structures, and how to register your child.</p>
        </div>
      </section>

      {/* Admission Process Timeline */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="badge">5 Steps</span>
            <h2>Our Admission Process</h2>
            <p>Our admission process is transparent and designed to assess the student\'s baseline capability to offer personalized mentorship.</p>
          </div>

          <div className="process-timeline">
            {steps.map((step, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-badge">{step.num}</div>
                <div className="timeline-content card">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & required documents */}
      <section className="section">
        <div className="container grid grid-2">
          {/* Left: Eligibility */}
          <div className="eligibility-container">
            <h2>Eligibility & Criteria</h2>
            <p className="sub-para">Please review the age criteria and evaluation parameters before submitting registration.</p>
            <div className="table-wrap">
              <table className="admission-table">
                <thead>
                  <tr>
                    <th>Grade Group</th>
                    <th>Age Requirement</th>
                    <th>Evaluation Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibility.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: '700' }}>{item.grade}</td>
                      <td>{item.age}</td>
                      <td>{item.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Required Documents */}
          <div className="documents-container">
            <h2>Required Documents</h2>
            <p className="sub-para">These documents must be submitted along with the final Admission Form:</p>
            <ul className="doc-checklist">
              {documents.map((doc, idx) => (
                <li key={idx} className="doc-item">
                  <span className="check-box-icon">
                    <Check size={16} />
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
            <div className="doc-notice card">
              <Info size={20} className="notice-icon" />
              <p>Original Transfer Certificate (TC) must be submitted within 15 days of securing final admission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="badge">Fees Details</span>
            <h2>Academic Fee Structure (2026-27)</h2>
            <p>Annual tuition fees are divided into three equal installments payable at the beginning of each term.</p>
          </div>

          <div className="table-wrap">
            <table className="admission-table fee-table">
              <thead>
                <tr>
                  <th>Grade Level</th>
                  <th>Tuition Fee (Annual)</th>
                  <th>Laboratory & Tech Fee</th>
                  <th>Admission Fee (One-Time)</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: '700' }}>{fee.grade}</td>
                    <td>{fee.tuition}</td>
                    <td>{fee.lab}</td>
                    <td>{fee.admission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enquiry Form & FAQs */}
      <section className="section">
        <div className="container grid grid-2">
          {/* Enquiry Form */}
          <div className="card enquiry-card-form">
            {!isSuccess ? (
              <>
                <h3>Online Admission Enquiry</h3>
                <p>Provide details below and get callback from counseling head.</p>
                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                  <div className="form-group">
                    <label>Student Name *</label>
                    <input 
                      type="text" 
                      name="studentName"
                      className={`form-control ${errors.studentName ? 'is-invalid' : ''}`}
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Student full name"
                    />
                    {errors.studentName && <span className="error-text">{errors.studentName}</span>}
                  </div>

                  <div className="grid grid-2" style={{ gap: '16px', marginBottom: '0' }}>
                    <div className="form-group">
                      <label>Date of Birth *</label>
                      <input 
                        type="date" 
                        name="dob"
                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                        value={formData.dob}
                        onChange={handleChange}
                      />
                      {errors.dob && <span className="error-text">{errors.dob}</span>}
                    </div>

                    <div className="form-group">
                      <label>Target Grade *</label>
                      <select 
                        name="grade"
                        className="form-control"
                        value={formData.grade}
                        onChange={handleChange}
                      >
                        <option value="Grade 1-5">Grade 1 - 5</option>
                        <option value="Grade 6-8">Grade 6 - 8</option>
                        <option value="Grade 9-10">Grade 9 - 10</option>
                        <option value="JEE integrated">JEE Integrated (Grade 11-12)</option>
                        <option value="NEET integrated">NEET Integrated (Grade 11-12)</option>
                        <option value="CUET integrated">CUET Integrated (Grade 12)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-2" style={{ gap: '16px', marginBottom: '0' }}>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email id"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={isSubmitting}
                    style={{ height: '50px', marginTop: '15px' }}
                  >
                    {isSubmitting ? <div className="spinner"></div> : 'Submit Enquiry Details'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-screen">
                <CheckCircle className="success-icon" size={54} />
                <h3>Application Submitted!</h3>
                <p>We have successfully recorded details for <strong>{formData.studentName}</strong>. Our counselors will reach you soon.</p>
                <button className="btn btn-primary" onClick={() => setIsSuccess(false)}>
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

          {/* FAQs Accordion */}
          <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <p className="sub-para">Common inquiries by parents and candidates regarding curriculum and coaching integration.</p>

            <div className="faq-accordion" style={{ marginTop: '20px' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} className={`faq-item card ${activeFaq === idx ? 'open' : ''}`} onClick={() => toggleFaq(idx)}>
                  <div className="faq-question-bar">
                    <h4>{faq.q}</h4>
                    {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  {activeFaq === idx && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
