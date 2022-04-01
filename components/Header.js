import styles from '../styles/Header.module.css';
import ContactLinks from './ContactLinks';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Header = () => {
  return (
    <header className={styles.header}>
      <p>Hi,</p>
      <h1>My name is Yuji</h1>
      <h3>
        I'm a full stack developer based in Japan. I was born and raised in
        Texas, and currently live in Tochigi, Japan. I speak fluent english and
        japanese.
      </h3>
      <ContactLinks />
    </header>
  );
};
export default Header;
