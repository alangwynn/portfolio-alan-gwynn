import { useState } from 'react';
import { certifications } from '../data/certifications';
import { CardCertification } from './CardCertification';

import arrowImage from '../assets/images/arrow.png';

export const SectionCertifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = certifications.length;

  const goTo = (index) => {
    setCurrentIndex(((index % total) + total) % total);
  };

  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  return (
    <section id="certifications">
      <p className="section__text__p1">Credentials That Back My Work</p>
      <h1 className="title">Certifications</h1>
      <div className="carousel-container">
        {total > 1 && (
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={prev}
            aria-label="Previous certification"
          >
            ‹
          </button>
        )}
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certifications.map((certification) => (
              <CardCertification
                key={certification.id}
                certification={certification}
              />
            ))}
          </div>
        </div>
        {total > 1 && (
          <button
            className="carousel-btn carousel-btn--next"
            onClick={next}
            aria-label="Next certification"
          >
            ›
          </button>
        )}
      </div>
      {total > 1 && (
        <div className="carousel-dots">
          {certifications.map((certification, index) => (
            <button
              key={certification.id}
              className={`carousel-dot ${index === currentIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      )}
      <img
        src={arrowImage}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (location.href = '#contact')}
      />
    </section>
  );
};
