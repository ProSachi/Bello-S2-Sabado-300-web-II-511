import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ChevronLeft, ChevronRight, Settings, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Componente2 = () => {
  const { carouselImages } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || carouselImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % carouselImages.length);
  };

  if (!carouselImages || carouselImages.length === 0) {
    return (
      <section className="comp-container area-comp2">
        <div className="comp-header">
          <span className="comp-badge">2</span>
          <h2 className="comp-title">Carrusel de Imágenes</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>No hay imágenes en el carrusel.</p>
      </section>
    );
  }

  const currentItem = carouselImages[currentIndex] || carouselImages[0];

  return (
    <section className="comp-container area-comp2">
      <div className="comp-header" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span className="comp-badge">2</span>
          <h2 className="comp-title">Carrusel Principal</h2>
        </div>
        <Link
          to="/admin/carousel"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            textDecoration: 'none',
            fontWeight: 600
          }}
        >
          <Settings size={14} />
          <span>Gestionar</span>
        </Link>
      </div>

      <div
        style={{
          position: 'relative',
          height: '280px',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: '#000'
        }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.85,
            transition: 'all 0.5s ease'
          }}
        />

        {/* Overlay content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.5rem 1.2rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
            color: '#ffffff'
          }}
        >
          {currentItem.tag && (
            <span
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                marginBottom: '0.4rem',
                display: 'inline-block'
              }}
            >
              {currentItem.tag}
            </span>
          )}
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            {currentItem.title}
          </h3>
          <p style={{ fontSize: '0.88rem', opacity: 0.9 }}>{currentItem.description}</p>
        </div>

        {/* Next / Prev buttons */}
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Indicators */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            gap: '6px'
          }}
        >
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: idx === currentIndex ? 'var(--accent)' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Componente2;
