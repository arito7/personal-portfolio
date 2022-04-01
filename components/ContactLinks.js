import styles from '../styles/ContactLinks.module.css';
import { useRouter } from 'next/router';

const ContactLinks = () => {
  const router = useRouter();
  return (
    <ul className={styles.contactlinks}>
      <li>
        <img
          className="pointer scales"
          style={{ accentColor: 'white', width: 30, height: 30 }}
          src="/images/github-icon-white.svg"
          alt="Discord Icon"
        />
      </li>
    </ul>
  );
};

export default ContactLinks;
