import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let start = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onComplete(), 650);
        }, 200);
      }
    };

    requestAnimationFrame(step);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'loading-fade-out' : ''}`}>
      <div className="loading-inner">
        {/* Animated ring */}
        <div className="loading-ring-wrap">
          <svg className="loading-ring" viewBox="0 0 120 120">
            <circle className="ring-track" cx="60" cy="60" r="52" />
            <circle
              className="ring-fill"
              cx="60"
              cy="60"
              r="52"
              style={{
                strokeDashoffset: `${327 - (327 * progress) / 100}`,
              }}
            />
          </svg>
          <img
            src="/loglaurel.png"
            alt="Laurel CBSE"
            className="loading-logo"
          />
        </div>

        {/* Tagline */}
        <p className="loading-tagline">Shaping Futures. Building Minds.</p>

        {/* Linear progress bar */}
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <span className="loading-pct">{Math.floor(progress)}%</span>
      </div>
    </div>
  );
}
