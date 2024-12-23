import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';  // Assuming you have a module CSS file for the Hero section

const Hero = () => {
  const images = [
    'https://tse4.mm.bing.net/th?id=OIP.YfwaMdvxqEeyQ2Nf5txHVgHaG8&pid=Api&P=0&h=180', // Replace with actual image URLs
    'https://tse1.mm.bing.net/th?id=OIP.VWPA_PFuFLjltXilmGRQawHaE8&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.MgrIlioMx_FWZlKjH6eOUQHaGC&pid=Api&P=0&h=180'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <section 
      className={styles.hero}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className={styles.heroContent}>
        <h1>Professional Security Services You Can Trust!</h1>
        <p>From personal bodyguards to company security, we have you covered.</p>
        <p>From personal bodyguards to company security, we have you covered.</p>
        <button className={styles.ctaButton}>Get a Quote</button>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
