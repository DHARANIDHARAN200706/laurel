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
      title: 'Annual Day Celebrations - Main Stage Highlights',
      category: 'events',
      videoUrl: 'https://drive.google.com/file/d/1Ry0UEp2HVT-fkz44zij9Wwf8tPEgPy2g/preview',
      img: 'https://lh3.googleusercontent.com/d/1Ry0UEp2HVT-fkz44zij9Wwf8tPEgPy2g',
      type: 'video'
    },
    {
      id: 2,
      title: 'Inter-School Science & Tech Fair',
      category: 'events',
      videoUrl: 'https://drive.google.com/file/d/1vnuMO7XhUrFm_O9ZYfQZAfK80cKjoarC/preview',
      img: 'https://lh3.googleusercontent.com/d/1vnuMO7XhUrFm_O9ZYfQZAfK80cKjoarC',
      type: 'video'
    },
    {
      id: 3,
      title: 'Independence Day Celebrations - Speech & Drama',
      category: 'events',
      videoUrl: 'https://drive.google.com/file/d/18rPr4vVluompBfVy049R8khlmJYPRUY-/preview',
      img: 'https://lh3.googleusercontent.com/d/18rPr4vVluompBfVy049R8khlmJYPRUY-',
      type: 'video'
    },
    {
      id: 4,
      title: 'Physics Lab Experiment Video',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1Uf1xUfImLRYNukctXoGxTfpQ9I0I6s7F/preview',
      img: 'https://lh3.googleusercontent.com/d/1Uf1xUfImLRYNukctXoGxTfpQ9I0I6s7F',
      type: 'video'
    },
    {
      id: 5,
      title: 'Chemistry Lab Demonstration Video',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/15rRz5ivlNLcVJZxbbNP4cxNgAZCM9sgt/preview',
      img: 'https://lh3.googleusercontent.com/d/15rRz5ivlNLcVJZxbbNP4cxNgAZCM9sgt',
      type: 'video'
    },
    {
      id: 6,
      title: 'Science Lab Workspace Overview',
      category: 'academic',
      img: 'https://lh3.googleusercontent.com/d/1HjCecosCYr58BUm2dXoVZYN1LYcEIwNL',
      type: 'image'
    },
    {
      id: 7,
      title: 'Biology Microscope Observations',
      category: 'academic',
      img: 'https://lh3.googleusercontent.com/d/1zkwCMHht9eI8VxiQoUgCW-SdTN_vtk7p',
      type: 'image'
    },
    {
      id: 8,
      title: 'Interactive Laboratory Workspace',
      category: 'academic',
      img: 'https://lh3.googleusercontent.com/d/1q7pLTB7AwdrTe-mZG7aLHBEKPSmdT21S',
      type: 'image'
    },
    {
      id: 9,
      title: 'Advanced Science Lab Project Video',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1trxxWgqCTBqWXP0xF6wY9298KJl7ity1/preview',
      img: 'https://lh3.googleusercontent.com/d/1trxxWgqCTBqWXP0xF6wY9298KJl7ity1',
      type: 'video'
    },
    {
      id: 10,
      title: 'Chemistry Apparatus Setups',
      category: 'academic',
      img: 'https://lh3.googleusercontent.com/d/1q3HriCHiTHNHIyQdAurY4OVLVoBAKyKA',
      type: 'image'
    },
    {
      id: 11,
      title: 'Advanced Lab Instruments Calibration',
      category: 'academic',
      img: 'https://lh3.googleusercontent.com/d/1HXrspmA69fzTtFGRlZ1sxWHEcqYQn9sO',
      type: 'image'
    },
    {
      id: 12,
      title: 'Student Lab Record Workstation',
      category: 'academic',
      img: 'https://lh3.googleusercontent.com/d/1L4QbwUn_QvwanunbOnyXnUD8X9If3lpX',
      type: 'image'
    },
    {
      id: 13,
      title: 'Chemistry Lab Experiment Walkthrough',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1E03Ngp6KfdW4mTLXOg2LJ70xI4YLMZt8/preview',
      img: 'https://lh3.googleusercontent.com/d/1q3HriCHiTHNHIyQdAurY4OVLVoBAKyKA',
      type: 'video'
    },
    {
      id: 14,
      title: 'Biology Specimen Observation Video',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1bjMS7ljem47vsmm8Li0fXVZxnLz9w3GV/preview',
      img: 'https://lh3.googleusercontent.com/d/1HXrspmA69fzTtFGRlZ1sxWHEcqYQn9sO',
      type: 'video'
    },
    {
      id: 15,
      title: 'Physics Pendulum Calibration Video',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/16r-T7TOcsXlsPSVeLU6K_Y_rcTyTQXng/preview',
      img: 'https://lh3.googleusercontent.com/d/1L4QbwUn_QvwanunbOnyXnUD8X9If3lpX',
      type: 'video'
    },
    {
      id: 16,
      title: 'Science Exhibition Project Presentation',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1n0uGqY_X3Z4Upvo8hRgg6EK5azQGfhAS/preview',
      img: 'https://lh3.googleusercontent.com/d/1HjCecosCYr58BUm2dXoVZYN1LYcEIwNL',
      type: 'video'
    },
    {
      id: 17,
      title: 'IoT Circuit Board Assembly Video',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1Tm_Dx7qkhkzA0GZEEJpAaf4YoSRWJcjg/preview',
      img: 'https://lh3.googleusercontent.com/d/1zkwCMHht9eI8VxiQoUgCW-SdTN_vtk7p',
      type: 'video'
    },
    {
      id: 18,
      title: 'Robotics Sensor Integration Demo',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/13_JapBYc2skHfGHFgHbnBSgDfKyf_AyQ/preview',
      img: 'https://lh3.googleusercontent.com/d/1q7pLTB7AwdrTe-mZG7aLHBEKPSmdT21S',
      type: 'video'
    },
    {
      id: 19,
      title: 'Advanced Lab Analysis & Testing',
      category: 'academic',
      videoUrl: 'https://drive.google.com/file/d/1bkV5aa5va4A3LrrICnoU3zuQGhLOmVgs/preview',
      img: 'https://lh3.googleusercontent.com/d/1q3HriCHiTHNHIyQdAurY4OVLVoBAKyKA',
      type: 'video'
    },
    {
      id: 20,
      title: 'Smart Classroom Interactive Session',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1LUDmYvIV1L7x6CgL28wUaC72DVEJzxHD/preview',
      img: 'https://lh3.googleusercontent.com/d/1LUDmYvIV1L7x6CgL28wUaC72DVEJzxHD',
      type: 'video'
    },
    {
      id: 21,
      title: 'Student Group Collaboration Workshop',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1tbfEtv90J6UvzE6m8hDOGWAShcEGS-ob/preview',
      img: 'https://lh3.googleusercontent.com/d/1tbfEtv90J6UvzE6m8hDOGWAShcEGS-ob',
      type: 'video'
    },
    {
      id: 22,
      title: 'Classroom Presentation & Feedback',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1o0OofA66UlidQFDc-YfItGItBK7oeoUA/preview',
      img: 'https://lh3.googleusercontent.com/d/1o0OofA66UlidQFDc-YfItGItBK7oeoUA',
      type: 'video'
    },
    {
      id: 23,
      title: 'Primary Section Activity Hour',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1NOUZeHu8PO_xUwzEWIDxIK0mIp8aXWoe/preview',
      img: 'https://lh3.googleusercontent.com/d/1NOUZeHu8PO_xUwzEWIDxIK0mIp8aXWoe',
      type: 'video'
    },
    {
      id: 24,
      title: 'Language Lab Speech Exercises',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1wOF2kN2HxlZDdCrbSWwvaoPTExI3VbIS/preview',
      img: 'https://lh3.googleusercontent.com/d/1wOF2kN2HxlZDdCrbSWwvaoPTExI3VbIS',
      type: 'video'
    },
    {
      id: 25,
      title: 'Social Science Seminar Discussion',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1BsP7pXmWD3fMBss-C0VsHl_DYVNJMntm/preview',
      img: 'https://lh3.googleusercontent.com/d/1BsP7pXmWD3fMBss-C0VsHl_DYVNJMntm',
      type: 'video'
    },
    {
      id: 26,
      title: 'Mathematics Problem Solving Session',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1NoPf1eCp5CQq_C1E_Ogh-vSjlaYxuiNJ/preview',
      img: 'https://lh3.googleusercontent.com/d/1NoPf1eCp5CQq_C1E_Ogh-vSjlaYxuiNJ',
      type: 'video'
    },
    {
      id: 27,
      title: 'English Poetry Recitation Activity',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1Bu0-LBQGMuDakD65NH36e434BVEURpH5/preview',
      img: 'https://lh3.googleusercontent.com/d/1Bu0-LBQGMuDakD65NH36e434BVEURpH5',
      type: 'video'
    },
    {
      id: 28,
      title: 'General Knowledge Quiz Competition',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1DFXe43TtjZe9oFFnmMhGnV7e7ERHicW4/preview',
      img: 'https://lh3.googleusercontent.com/d/1DFXe43TtjZe9oFFnmMhGnV7e7ERHicW4',
      type: 'video'
    },
    {
      id: 29,
      title: 'Elocution and Public Speaking Prep',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1sMIO9ScDdv_XzKXVJ2I8fvglcRF_VpWU/preview',
      img: 'https://lh3.googleusercontent.com/d/1sMIO9ScDdv_XzKXVJ2I8fvglcRF_VpWU',
      type: 'video'
    },
    {
      id: 30,
      title: 'Eco-Club Planting & Nature Studies',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1EkDRMsbaPcexd2HiGNbVqoMYohJEe9HF/preview',
      img: 'https://lh3.googleusercontent.com/d/1EkDRMsbaPcexd2HiGNbVqoMYohJEe9HF',
      type: 'video'
    },
    {
      id: 31,
      title: 'Art and Design Studio Session',
      category: 'campus',
      videoUrl: 'https://drive.google.com/file/d/1jwwiMjV0FHQKyn9j3b3AkIgHwAgDZMCv/preview',
      img: 'https://lh3.googleusercontent.com/d/1jwwiMjV0FHQKyn9j3b3AkIgHwAgDZMCv',
      type: 'video'
    },
    {
      id: 32,
      title: 'Library Reading & Silent Study',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/1adIobfqcsv7n4wnpwzJRg67BOybDwFXd/preview',
      img: 'https://lh3.googleusercontent.com/d/1adIobfqcsv7n4wnpwzJRg67BOybDwFXd',
      type: 'video'
    },
    {
      id: 33,
      title: 'Reference Section Research Work',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/1RREZI6_SE8L6Fz-BnXfA6Z45jkQSDrfr/preview',
      img: 'https://lh3.googleusercontent.com/d/1RREZI6_SE8L6Fz-BnXfA6Z45jkQSDrfr',
      type: 'video'
    },
    {
      id: 34,
      title: 'Weekly Book Review Activity',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/1rj7i7BbZ_7r1kfX7dZoO-rpTEkI8LrWW/preview',
      img: 'https://lh3.googleusercontent.com/d/1rj7i7BbZ_7r1kfX7dZoO-rpTEkI8LrWW',
      type: 'video'
    },
    {
      id: 35,
      title: 'Digital Library Catalog Walkthrough',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/1phjKfQH0snseiG4Eq6dZhNoFZVj1sYwB/preview',
      img: 'https://lh3.googleusercontent.com/d/1phjKfQH0snseiG4Eq6dZhNoFZVj1sYwB',
      type: 'video'
    },
    {
      id: 36,
      title: 'Primary Reading Circle Session',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/1sLGbKWK_H46LkC9eRuqVpFGstyiScHff/preview',
      img: 'https://lh3.googleusercontent.com/d/1sLGbKWK_H46LkC9eRuqVpFGstyiScHff',
      type: 'video'
    },
    {
      id: 37,
      title: 'Librarian Book Recommendation Hour',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/10Qa5ZJeyT4Z5fgoyAp8f3jNnJg1mtZJr/preview',
      img: 'https://lh3.googleusercontent.com/d/10Qa5ZJeyT4Z5fgoyAp8f3jNnJg1mtZJr',
      type: 'video'
    },
    {
      id: 38,
      title: 'Student Book Discussion Group',
      category: 'library',
      videoUrl: 'https://drive.google.com/file/d/1ntwXaP0IMoQ2OBvloDG9dic9iSziN1-I/preview',
      img: 'https://lh3.googleusercontent.com/d/1ntwXaP0IMoQ2OBvloDG9dic9iSziN1-I',
      type: 'video'
    },
    {
      id: 39,
      title: 'School Bus Fleet Standby',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1nnmH6bZBodySWwnqeTpzmxsSK4HdHyKF/preview',
      img: 'https://lh3.googleusercontent.com/d/1nnmH6bZBodySWwnqeTpzmxsSK4HdHyKF',
      type: 'video'
    },
    {
      id: 40,
      title: 'Safe Transport Route Operations',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1Ho8C_nZN_XQ-PgFkcYT-JDhzgoH3iwFC/preview',
      img: 'https://lh3.googleusercontent.com/d/1Ho8C_nZN_XQ-PgFkcYT-JDhzgoH3iwFC',
      type: 'video'
    },
    {
      id: 41,
      title: 'GPS Live Tracking System Demo',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1YbRCy5XqjiJpwNW6PMPJIzbKStzZ3FYT/preview',
      img: 'https://lh3.googleusercontent.com/d/1YbRCy5XqjiJpwNW6PMPJIzbKStzZ3FYT',
      type: 'video'
    },
    {
      id: 42,
      title: 'RFID Attendance Scan Verification',
      category: 'transport',
      img: 'https://lh3.googleusercontent.com/d/1psBpL5dTyrZNkBezSXvhugT23Sxm6sLn',
      type: 'image'
    },
    {
      id: 43,
      title: 'Student Bus Boarding Verification',
      category: 'transport',
      img: 'https://lh3.googleusercontent.com/d/1wrg7d0VV2pWhkWw5NkIeROPXCl2bB9R-',
      type: 'image'
    },
    {
      id: 44,
      title: 'Driver Dashboard Controls',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1TLW8tGwJJ7XLSWb9-94V42-xlI48yGc-/preview',
      img: 'https://lh3.googleusercontent.com/d/1TLW8tGwJJ7XLSWb9-94V42-xlI48yGc-',
      type: 'video'
    },
    {
      id: 45,
      title: 'Safety Exit Drill Simulation',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1D8Z0_E2UTerjcGndKfejZf4szZilDHQR/preview',
      img: 'https://lh3.googleusercontent.com/d/1D8Z0_E2UTerjcGndKfejZf4szZilDHQR',
      type: 'video'
    },
    {
      id: 46,
      title: 'Emergency Speed Limit Testing',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1M82zyuFP18pIqp2eDjTTNfJW6nftHMCl/preview',
      img: 'https://lh3.googleusercontent.com/d/1M82zyuFP18pIqp2eDjTTNfJW6nftHMCl',
      type: 'video'
    },
    {
      id: 47,
      title: 'Fleet Diagnostic Audit Report',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1A5cDcPpGZ59X3C2IT2OSiijvrvkELhFk/preview',
      img: 'https://lh3.googleusercontent.com/d/1A5cDcPpGZ59X3C2IT2OSiijvrvkELhFk',
      type: 'video'
    },
    {
      id: 48,
      title: 'Secure Route Surveillance Verification',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1IuVafcldma17y-44K5f4Zm00sLXSNWWw/preview',
      img: 'https://lh3.googleusercontent.com/d/1IuVafcldma17y-44K5f4Zm00sLXSNWWw',
      type: 'video'
    },
    {
      id: 49,
      title: 'Support Helper Team Briefing',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1ifed2IMBVIXsoI0MvjsZCLGTibz2appz/preview',
      img: 'https://lh3.googleusercontent.com/d/1ifed2IMBVIXsoI0MvjsZCLGTibz2appz',
      type: 'video'
    },
    {
      id: 50,
      title: 'Route Compliance Inspection',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1Rwof35VXk7fLNFgvo54vyb6ot4c_VvC2/preview',
      img: 'https://lh3.googleusercontent.com/d/1Rwof35VXk7fLNFgvo54vyb6ot4c_VvC2',
      type: 'video'
    },
    {
      id: 51,
      title: 'Safe Drop-off Verification',
      category: 'transport',
      videoUrl: 'https://drive.google.com/file/d/1A0THK1ccdfJGyNKJAJCIYWF-ZZDI1iOA/preview',
      img: 'https://lh3.googleusercontent.com/d/1A0THK1ccdfJGyNKJAJCIYWF-ZZDI1iOA',
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
    let optimizedSrc = item.img;
    if (item.img && item.img.includes('lh3.googleusercontent.com/d/')) {
      const fileId = item.img.split('lh3.googleusercontent.com/d/')[1].split('=')[0];
      optimizedSrc = `https://lh3.googleusercontent.com/d/${fileId}=s800`;
    }

    return (
      <div 
        key={item.id} 
        className={`gallery-item-card ${getGridSpanClass(index)}`}
        onClick={() => openLightbox(index)}
      >
        <div className="gallery-img-wrap">
          <img src={optimizedSrc} referrerPolicy="no-referrer" alt={item.title} className="gallery-thumbnail" />
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

  const categoriesMap = {
    campus: 'Classes & Environment',
    sports: 'Sports',
    academic: 'Academic & Labs',
    events: 'Events',
    art: 'Art & Craft',
    library: 'Library',
    transport: 'Transport'
  };

  const availableCategories = [];
  Object.keys(categoriesMap).forEach(cat => {
    if (galleryItems.some(item => item.category === cat)) {
      availableCategories.push({ id: cat, label: categoriesMap[cat] });
    }
  });

  const hasVideos = galleryItems.some(item => item.type === 'video');

  return (
    <div className="gallery-page animate-fade-in">
      {/* Category Filters Bar */}
      <section className="gallery-filter-section">
        <div className="container filter-container">
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Moments</button>
            {availableCategories.map(cat => (
              <button 
                key={cat.id} 
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`} 
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
            {hasVideos && (
              <button className={`filter-btn ${filter === 'videos' ? 'active' : ''}`} onClick={() => setFilter('videos')}>Videos</button>
            )}
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
              referrerPolicy="no-referrer"
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
