import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <h2>Get in Touch</h2>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="tel" placeholder="Phone Number" />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
