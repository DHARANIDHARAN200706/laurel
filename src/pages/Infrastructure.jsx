import React from 'react';
import { Sun, Droplet, Leaf, Cpu, Beaker, Cloud, Layers, Settings } from 'lucide-react';
import './Infrastructure.css';

export default function Infrastructure() {
  const statsList = [
    {
      number: '5 Acres',
      label: 'Eco-Friendly Campus',
      desc: '40% green cover, rainwater reservoirs, and a solar power grid.'
    },
    {
      number: '40+',
      label: 'Smart Rooms',
      desc: 'Modern digital display systems with ergonomic non-fatigue seating.'
    },
    {
      number: '500+',
      label: 'Seating Capacity',
      desc: 'Auditorium multi-purpose hall fitted with Bose acoustic sound panels.'
    },
    {
      number: '3000+',
      label: 'Sqm Science Labs',
      desc: 'Engineering, scientific, and robotic ATAL testing suites.'
    }
  ];

  const logoPartners = [
    { name: 'CBSE' },
    { name: 'NITI Aayog' },
    { name: 'Fit India' },
    { name: 'ISA Certified' },
    { name: 'Friends Trust' },
    { name: 'British Council' },
    { name: 'STEM Accred.' },
    { name: 'ISO 9001' },
    { name: 'Green School' }
  ];

  return (
    <div className="infrastructure-page animate-fade-in">
      {/* Hero Section */}
      <section className="infra-hero">
        <div className="container">
          <div className="infra-badge-wrap">
            <span className="badge">Architectural Excellence</span>
          </div>
          <h1 className="infra-textured-title">
            modern spaces & learning labs with staying power.
          </h1>
          <p className="infra-hero-lead">
            Explore the physical learning layout, safety systems, green technology, and architectural specifications of our campus.
          </p>

          {/* Interactive Centerpiece Network Branch Dial */}
          <div className="infra-3d-centerpiece-wrap">
            {/* SVG lines and markers overlay */}
            <svg className="infra-svg-lines" viewBox="0 0 900 380">
              {/* Left Network Branch */}
              <path d="M 240 190 L 170 190" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
              <path d="M 170 190 L 70 90" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
              <path d="M 170 190 L 70 190" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
              <path d="M 170 190 L 70 290" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />

              {/* Right Network Branch */}
              <path d="M 660 190 L 730 190" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
              <path d="M 730 190 L 830 90" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
              <path d="M 730 190 L 830 190" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
              <path d="M 730 190 L 830 290" stroke="#cbd5e1" strokeWidth="1.5" fill="none" />
            </svg>

            {/* Central Dial */}
            <div className="infra-dial-container">
              <div className="infra-dial-inner">
                <div className="infra-dial-badge">
                  LAUREL
                </div>
              </div>
            </div>

            {/* Four Pill Labels Around Dial */}
            <div className="infra-pill-label label-top">Sustainable Power</div>
            <div className="infra-pill-label label-left-side">Eco Campus</div>
            <div className="infra-pill-label label-bottom">Academic Wings</div>
            <div className="infra-pill-label label-right-side">Research Hubs</div>

            {/* Left Branch Bubble Nodes */}
            <div className="infra-bubble-node" style={{ left: '18.8%', top: '50%', transform: 'translate(-50%, -50%)' }} title="Eco Systems">
              <Layers size={18} />
            </div>
            <div className="infra-bubble-node" style={{ left: '7.7%', top: '23.7%', transform: 'translate(-50%, -50%)' }} title="Solar Grid">
              <Sun size={18} />
            </div>
            <div className="infra-bubble-node" style={{ left: '7.7%', top: '50%', transform: 'translate(-50%, -50%)' }} title="Water Reservoirs">
              <Droplet size={18} />
            </div>
            <div className="infra-bubble-node" style={{ left: '7.7%', top: '76.3%', transform: 'translate(-50%, -50%)' }} title="Green Cover">
              <Leaf size={18} />
            </div>

            {/* Right Branch Bubble Nodes */}
            <div className="infra-bubble-node" style={{ left: '81.1%', top: '50%', transform: 'translate(-50%, -50%)' }} title="Research Suite">
              <Settings size={18} />
            </div>
            <div className="infra-bubble-node" style={{ left: '92.2%', top: '23.7%', transform: 'translate(-50%, -50%)' }} title="ATAL Robotics">
              <Cpu size={18} />
            </div>
            <div className="infra-bubble-node" style={{ left: '92.2%', top: '50%', transform: 'translate(-50%, -50%)' }} title="Science Suites">
              <Beaker size={18} />
            </div>
            <div className="infra-bubble-node" style={{ left: '92.2%', top: '76.3%', transform: 'translate(-50%, -50%)' }} title="Digital Sandbox">
              <Cloud size={18} />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="infra-stats-grid">
            {statsList.map((stat, idx) => (
              <div key={idx} className="infra-stat-card">
                <div className="infra-stat-number">{stat.number}</div>
                <div className="infra-stat-label">{stat.label}</div>
                <p className="infra-stat-desc">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div className="container trusted-grid">
          <div className="trusted-content">
            <h2>Trusted by families from primary to graduation. Built to support every stage.</h2>
            <p>
              Our infrastructure meets CBSE board safety standards, and is continuously inspected to ensure zero hazard operations. From chemical-safe worktops to certified sports fields, every square foot is optimized for children.
            </p>
            <div>
              <a href="/admissions" className="btn btn-primary">Admissions Portal</a>
            </div>
          </div>

          <div className="trusted-logo-grid">
            {logoPartners.map((partner, idx) => (
              <div key={idx} className="trusted-logo-card">
                <span className="trusted-logo-text">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Case Study Section */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-title-wrap">
            <h2 className="projects-textured-title">featured spaces</h2>
          </div>

          <div className="featured-project-card">
            <div className="project-details">
              <div className="project-tags">
                <span className="project-tag">+ Eco-System</span>
                <span className="project-tag">+ Solar Grid</span>
                <span className="project-tag">+ 40% Green Cover</span>
              </div>
              <h2>We designed a fully self-sustaining campus grid integrating solar energy, rainwater systems, and airflow.</h2>
              <p className="project-desc">
                Designed by award-winning landscape planners to combine eco-responsibility with spaces that stimulate creative thinking. Fully integrated ventilation structures promote dynamic air flow throughout smart corridors, reducing carbon footprints.
              </p>
              <div className="project-architect-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                  alt="Vikram Sen" 
                  className="arch-avatar-img" 
                />
                <div className="arch-info">
                  <h5>Vikram Sen</h5>
                  <p>Principal Architect, Lead Designer</p>
                </div>
              </div>
            </div>

            <div className="project-visual-wrap">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Green Courtyard Campus Grid" 
                className="project-img" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
