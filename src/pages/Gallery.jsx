import React, { useState } from 'react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Lush Green Campus Aerial View',
      category: 'campus',
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 2,
      title: 'Science Laboratories Workshop',
      category: 'academic',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 3,
      title: 'Annual Athletic Meet - 100m Sprint',
      category: 'sports',
      img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 4,
      title: 'Annual Day Celebrations - Drama Team',
      category: 'events',
      img: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 5,
      title: 'NITI Aayog ATAL Robotics Build',
      category: 'academic',
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 6,
      title: 'Art Exhibition - Student Oil Paintings',
      category: 'art',
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 7,
      title: 'Classroom Group Activity',
      category: 'academic',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 8,
      title: 'Inter-School Football Champions',
      category: 'sports',
      img: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 9,
      title: 'Science Exhibition Working Models',
      category: 'events',
      img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      type: 'image'
    },
    {
      id: 10,
      title: 'Cultural Dance Performance',
      category: 'events',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      type: 'video'
    },
    {
      id: 11,
      title: 'Independence Day Parade Highlights',
      category: 'events',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      type: 'video'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => {
        if (filter === 'videos') return item.type === 'video';
        return item.category === filter;
      });

  const openLightbox = (index) => {
    const item = filteredItems[index];
    if (item.type === 'video') {
      setPlayingVideo(item.videoUrl);
    } else {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const getGridSpanClass = (index) => {
    const classes = [
      'grid-span-tall-2', // index 0 (item 1)
      'grid-span-normal', // index 1 (item 2)
      'grid-span-normal', // index 2 (item 3)
      'grid-span-tall-2', // index 3 (item 4)
      'grid-span-normal', // index 4 (item 5)
      'grid-span-normal', // index 5 (item 6)
      'grid-span-tall-2', // index 6 (item 7)
      'grid-span-normal', // index 7 (item 8)
      'grid-span-normal', // index 8 (item 9)
      'grid-span-wide-2', // index 9 (item 10)
      'grid-span-normal', // index 10 (item 11)
    ];
    return classes[index % classes.length];
  };

  const renderCard = (item, index) => {
    return (
      <div 
        key={item.id} 
        className={`gallery-item-card ${getGridSpanClass(index)}`}
        onClick={() => openLightbox(index)}
      >
        <div className="gallery-img-wrap">
          <img src={item.img} alt={item.title} className="gallery-thumbnail" />
          <div className="gallery-hover-overlay">
            <span className="gallery-zoom-circle">
              {item.type === 'video' ? <Play size={18} fill="currentColor" /> : <Maximize2 size={18} />}
            </span>
            <p className="gallery-hover-title">{item.title}</p>
          </div>
          {item.type === 'video' && (
            <div className="video-indicator-badge">
              <Play size={10} fill="currentColor" /> <span>Video</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="gallery-page animate-fade-in">
      {/* Category Filters Bar */}
      <section className="gallery-filter-section">
        <div className="container filter-container">
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Moments</button>
            <button className={`filter-btn ${filter === 'campus' ? 'active' : ''}`} onClick={() => setFilter('campus')}>Campus</button>
            <button className={`filter-btn ${filter === 'sports' ? 'active' : ''}`} onClick={() => setFilter('sports')}>Sports</button>
            <button className={`filter-btn ${filter === 'academic' ? 'active' : ''}`} onClick={() => setFilter('academic')}>Academic & Labs</button>
            <button className={`filter-btn ${filter === 'events' ? 'active' : ''}`} onClick={() => setFilter('events')}>Events</button>
            <button className={`filter-btn ${filter === 'art' ? 'active' : ''}`} onClick={() => setFilter('art')}>Art & Craft</button>
            <button className={`filter-btn ${filter === 'videos' ? 'active' : ''}`} onClick={() => setFilter('videos')}>Videos</button>
          </div>
        </div>
      </section>

      {/* Gallery Asymmetrical Grid Section */}
      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {/* Title / Description Card */}
            <div className="grid-item-title-card">
              <h1>beyond color. pure emotion.</h1>
              <p>Timeless black and white frames that speak without words, revealing vibrant student experiences.</p>
              <a href="#explore" className="btn-noir">See the Stories</a>
            </div>

            {/* Render first 4 cards */}
            {filteredItems.slice(0, 4).map((item, idx) => renderCard(item, idx))}

            {/* Editorial arrow list card */}
            <div className="grid-item-arrow-list">
              <div className="arrow-list-item">
                <span className="arrow-icon-small">↗</span>
                <span>Scientific discovery.</span>
              </div>
              <div className="arrow-list-item">
                <span className="arrow-icon-small">↗</span>
                <span>Artistic expression.</span>
              </div>
              <div className="arrow-list-item">
                <span className="arrow-icon-small">↗</span>
                <span>Athletic persistence.</span>
              </div>
              <div className="arrow-list-item">
                <span className="arrow-icon-small">↗</span>
                <span>Daily community.</span>
              </div>
            </div>

            {/* Render remaining cards */}
            {filteredItems.slice(4).map((item, idx) => renderCard(item, idx + 4))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {playingVideo && (
        <div className="video-modal-backdrop" onClick={() => setPlayingVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="video-close-btn" onClick={() => setPlayingVideo(null)}>
              <X size={20} />
            </button>
            <iframe 
              width="100%" 
              height="450" 
              src={`${playingVideo}?autoplay=1`}
              title="Laurel Video Player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <X size={24} />
          </button>
          
          <button className="lightbox-nav-btn prev-btn" onClick={prevImage}>
            <ChevronLeft size={36} />
          </button>
 
          <div className="lightbox-content-wrap" onClick={e => e.stopPropagation()}>
            <img 
              src={filteredItems[lightboxIndex].img} 
              alt={filteredItems[lightboxIndex].title} 
              className="lightbox-main-img"
            />
            <p className="lightbox-caption">{filteredItems[lightboxIndex].title}</p>
          </div>

          <button className="lightbox-nav-btn next-btn" onClick={nextImage}>
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
