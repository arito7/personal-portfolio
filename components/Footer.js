import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import ContactLinks from './ContactLinks';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className="section-title">Contact Me</h2>
      <p className="text-center">
        Have a job for me? Or want to get in contact with me for any other
        reason?
      </p>
      <p className="text-center">arito7.dev@gmail.com</p>
      <ContactLinks />
    </footer>
  );
};

export default Footer;
