import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <img src="/logo.png" alt="Logo" />
      <p>Your trusted security partner.</p>
    </div>
    <nav>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About Us</a>
      <a href="#careers">Careers</a>
      <a href="#contact">Contact</a>
    </nav>
    <div>
      <p>© 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
