import React from 'react';
import { ExternalLink, User, MapPin, Activity, Globe } from 'lucide-react';
import './OilPaintingTraining.css';

export default function OilPaintingTraining() {
  const featuredImages = [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80'
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=600&q=80'
  ];

  return (
    <div className="painting-training-page animate-fade-in">
      
      {/* Page Hero */}
      <section className="painting-hero">
        <div className="container">
          <div className="hero-breadcrumb">
            <span>Oil Painting Training</span>
            <span className="divider">/</span>
            <span className="active">HomeOil Painting Training</span>
          </div>
          
          <h1 className="painting-main-title">Oil Painting Training</h1>
          <p className="painting-quote">"An investment in knowledge pays the best interest."</p>
        </div>
      </section>

      {/* Main Split Content */}
      <section className="painting-content-section">
        <div className="container painting-grid">
          
          {/* Left Column: Description Paragraphs */}
          <div className="painting-desc-col">
            <div className="editorial-card-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac vehicula nunc. Ut pulvinar ipsum eget congue mollis. Quisque interdum aliquet arcu, cursus dignissim tellus luctus nec. Fusce pellentesque nulla ut eros pulvinar ipsum eget mollis tincidunt.
              </p>
              <p>
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              </p>
            </div>
            
            {/* Featured Images Row */}
            <div className="featured-images-section">
              <h3 className="section-mini-heading">Featured Images</h3>
              <div className="featured-images-grid">
                {featuredImages.map((src, idx) => (
                  <div key={idx} className="featured-img-card">
                    <img src={src} alt={`Featured Art ${idx + 1}`} className="painting-img" />
                    <div className="img-overlay">
                      <span className="badge">Featured {idx + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Metadata Sidebar */}
          <div className="painting-sidebar-col">
            <div className="details-metadata-card">
              <h3 className="card-title">Training Coordinates</h3>
              <div className="metadata-divider"></div>
              
              <div className="metadata-item">
                <User size={18} className="meta-icon" />
                <div className="meta-info">
                  <span className="label">Organizer</span>
                  <span className="value">Ram</span>
                </div>
              </div>

              <div className="metadata-item">
                <MapPin size={18} className="meta-icon" />
                <div className="meta-info">
                  <span className="label">Venue</span>
                  <span className="value">London</span>
                </div>
              </div>

              <div className="metadata-item">
                <Activity size={18} className="meta-icon" />
                <div className="meta-info">
                  <span className="label">Activity</span>
                  <span className="value">Miming</span>
                </div>
              </div>

              <div className="metadata-item">
                <Globe size={18} className="meta-icon" />
                <div className="meta-info">
                  <span className="label">Website</span>
                  <a href="http://google.com/" target="_blank" rel="noopener noreferrer" className="value-link">
                    http://google.com/ <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Listings Section */}
      <section className="gallery-listings-section">
        <div className="container">
          <div className="section-header-wrap">
            <h2 className="listings-heading">Gallery Listings</h2>
            <div className="heading-line"></div>
          </div>

          <div className="gallery-listings-grid">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="portfolio-card">
                <div className="portfolio-img-wrap">
                  <img src={src} alt={`Portfolio Listing ${idx + 1}`} className="portfolio-image" />
                  <div className="portfolio-hover">
                    <span className="portfolio-zoom-lbl">portfolio-image</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4>Exquisite Canvas Part {idx + 1}</h4>
                  <p>Co-curricular oil painting exhibit from student galleries.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
