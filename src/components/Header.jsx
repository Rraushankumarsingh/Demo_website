import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Company Logo" />
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#careers">Careers</a>
        <a href="#contact">Contact Us</a>
        <button className={styles.cta}>Hire a Guard</button>
      </nav>
      <div
        className={styles.toggle}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>
    </header>
  );
};

export default Header;
