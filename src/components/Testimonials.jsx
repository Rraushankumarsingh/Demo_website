// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import styles from '../styles/Testimonials.module.css';  // Import the module CSS

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonialsData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialCard}>
        <img
          src={testimonialsData[currentIndex].image}
          alt={testimonialsData[currentIndex].name}
        />
        <p>"{testimonialsData[currentIndex].feedback}"</p>
        <h3>- {testimonialsData[currentIndex].name}</h3>
      </div>
      <div className={styles.testimonialControls}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
