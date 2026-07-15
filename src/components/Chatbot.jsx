import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Trash2, Clock } from 'lucide-react';
import './Chatbot.css';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Dynamic Office Hours Check (IST: Mon-Fri, 9:00 AM - 5:00 PM)
  const checkOfficeHours = () => {
    const d = new Date();
    // Convert current time to IST (UTC +5:30)
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    
    const day = ist.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
    const hour = ist.getHours();
    
    const isWeekday = day >= 1 && day <= 5; // Monday to Friday
    const isWorkHour = hour >= 9 && hour < 17; // 9 AM to 5 PM
    
    return isWeekday && isWorkHour;
  };

  useEffect(() => {
    setIsOfficeOpen(checkOfficeHours());
    
    // Set initial greeting
    const greetUser = () => {
      const officeOpen = checkOfficeHours();
      const greetingText = officeOpen
        ? "Hello! Welcome to Laurel CBSE School support. 🟢 Our admissions office is currently OPEN (9:00 AM - 5:00 PM). How can I assist you with admissions, coaching streams (JEE/NEET), or general school information today?"
        : "Hello! Welcome to Laurel CBSE School support. 🌙 Our admissions office is currently CLOSED (Office hours: Mon-Fri, 9 AM - 5 PM). I am our AI Assistant, and I am available to answer your questions. You can also leave your inquiry on our Contact page or message us directly on WhatsApp!";
      
      setMessages([
        { role: 'assistant', content: greetingText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
    };
    
    greetUser();
    
    // Periodic check every 1 minute
    const interval = setInterval(() => {
      setIsOfficeOpen(checkOfficeHours());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'user', content: userMessage, timestamp }]);
    setIsLoading(true);

    const systemPrompt = `
      You are the official AI Admissions Assistant for Laurel CBSE School located in Pallikondan, Mudalcheri, Tamil Nadu 614602.
      Your goal is to assist parents, students, and visitors with inquiries in a polite, professional, and helpful manner.
      
      School Details:
      - Affiliation: CBSE
      - Location: Pallikondan, Mudalcheri, Tamil Nadu 614602.
      - Contact Number: 094879 18780 (Admissions Desk / Office)
      - Contact Email: info@laurelcbse.in
      - Core coaching programs: Specialized and integrated competitive coaching for JEE (Engineering entrance), NEET (Medical entrance), and CUET (Central Universities Entrance Test).
      - Facilities: Modern classrooms, fully equipped science and computer labs, robotics/ATAL labs, extensive sports infrastructure, co-curricular arts & oil painting training.
      - Office Hours: Monday to Friday, 9:00 AM - 5:00 PM (IST).
      
      Dynamic Time period / Office Status:
      The school office is currently: ${isOfficeOpen ? "OPEN. (Admissions officer is in office and can be reached directly at 094879 18780)" : "CLOSED. (Office hours are Monday to Friday, 9:00 AM - 5:00 PM. Parents can submit the contact form or drop a WhatsApp message and we will respond on the next working day)"}.
      Please incorporate this current state into your greeting or response if the user asks about timings, admissions office availability, or contact methods.
      
      Keep your answers concise, clear, and structured. Encourage them to submit the Admission / Contact inquiry form on the website or connect on WhatsApp if they need deep assistance.
    `;

    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map(msg => ({ role: msg.role, content: msg.content })),
      { role: 'user', content: userMessage }
    ];

    if (!GROQ_API_KEY) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I am experiencing trouble reaching my knowledge server. Please call us at 094879 18780 for immediate queries.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 400
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const assistantResponse = data.choices[0].message.content;
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: assistantResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      } else {
        throw new Error("Invalid completion response");
      }
    } catch (err) {
      console.error("Direct Groq API request failed:", err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I am experiencing trouble reaching my knowledge server. Please call us at 094879 18780 for immediate queries.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    const officeOpen = checkOfficeHours();
    const greetingText = officeOpen
      ? "Chat cleared. 🟢 Our admissions office is currently OPEN. How can I help you today?"
      : "Chat cleared. 🌙 Our admissions office is currently CLOSED. I am here to help you online!";
    setMessages([
      { role: 'assistant', content: greetingText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
  };

  return (
    <div className="chatbot-widget-wrapper">
      {/* Chat Launcher Button */}
      <button 
        className={`chatbot-launcher ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
          <span className="chatbot-pulse-dot"></span>
        )}
      </button>

      {/* Chat Window Box */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        
        {/* Header Section */}
        <div className="chatbot-header">
          <div className="chatbot-header-branding">
            <div className="chatbot-avatar">
              <img src="/loglaurel.png" alt="Laurel" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=80&h=80&q=80" }} />
            </div>
            <div className="chatbot-title-block">
              <h3>Laurel Support</h3>
              <div className="chatbot-status-pill">
                <span className={`status-dot ${isOfficeOpen ? 'online' : 'away'}`}></span>
                <span className="status-text">
                  {isOfficeOpen ? 'Office Open' : 'Office Closed (AI Active)'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="chatbot-header-actions">
            <button onClick={clearChat} className="chatbot-action-btn" title="Clear Chat history">
              <Trash2 size={16} />
            </button>
            <button onClick={() => setIsOpen(false)} className="chatbot-action-btn" title="Minimize Chat">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Office Schedule Bar */}
        <div className="chatbot-schedule-bar">
          <Clock size={12} style={{ marginRight: '5px' }} />
          <span>Hours: Mon - Fri (9:00 AM - 5:00 PM IST)</span>
        </div>

        {/* Messages Body */}
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message-bubble-wrapper ${msg.role}`}>
              <div className="message-bubble">
                <p>{msg.content}</p>
                <span className="message-time">{msg.timestamp}</span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message-bubble-wrapper assistant">
              <div className="message-bubble loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Form Input Section */}
        <form onSubmit={handleSend} className="chatbot-input-area">
          <input
            type="text"
            className="chatbot-input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            disabled={isLoading}
          />
          <button type="submit" className="chatbot-send-btn" disabled={!input.trim() || isLoading}>
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
