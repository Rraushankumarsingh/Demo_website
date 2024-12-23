// src/components/Services.jsx
import React from 'react';
import { servicesData } from '../data/services';
import styles from '../styles/Services.module.css';  // Import the module CSS

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Security Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map(service => (
          <div className={styles.serviceCard} key={service.id}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
