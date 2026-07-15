import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, CheckCircle2, AlertCircle } from 'lucide-react';
import './Login.css';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    if (!GOOGLE_SCRIPT_URL) {
      setError('System integration URL not configured. Please see the setup guide.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Using text/plain content-type to prevent preflight CORS block during Google Apps Script redirects
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          action: 'login',
          email: formData.email,
          password: formData.password
        })
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setSuccess('Login successful! Redirecting...');
        localStorage.setItem('laurelUser', JSON.stringify(result.user));
        
        // Dispatch custom event to notify Header component of auth change
        window.dispatchEvent(new Event('authChange'));
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setError(result.message || 'Invalid credentials.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to authentication server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page-container animate-fade-in">
      <div className="login-geo-circle geo-circle-1"></div>
      <div className="login-geo-circle geo-circle-2"></div>

      <div className="login-card-blueprint">
        <div className="login-header">
          <h1 className="login-title">Student Portal</h1>
          <p className="login-subtitle">Sign in to access your admissions dashboard & academic record.</p>
        </div>

        {error && (
          <div className="auth-alert error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="auth-alert success">
            <CheckCircle2 size={18} />
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Mail Address</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@laurelcbse.in"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={18} />
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-submit-blueprint" disabled={isSubmitting} style={{ backgroundColor: '#ff4500', color: '#ffffff' }}>
            {isSubmitting ? 'Authenticating...' : (
              <>
                <LogIn size={18} /> Sign In
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/signup" className="auth-link">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
