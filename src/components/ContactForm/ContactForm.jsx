'use client'
import styles from './contactform.module.css';
import { submitForm } from '@/actions/contactSubmit';

export default function ContactForm() {
  return (
    <form action={submitForm} className={`${styles.contactForm}`}>
      <input type="email" name="email" placeholder="your@email.com" className={`${styles.contactInputs}`} required />
      <input type="text" name="subject" placeholder="Email subject" className={`${styles.contactInputs}`} required />
      <textarea name="message" placeholder="Your message" className={`${styles.contactInputs}`} required></textarea>
      <button type="submit" className={`button`}>Submit</button>
    </form>
  );
}