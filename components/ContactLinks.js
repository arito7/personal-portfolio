import Image from 'next/image';
import styles from '../styles/ContactLinks.module.css';
import { useRouter } from 'next/router';

const ContactLinks = () => {
  const router = useRouter();
  return (
    <ul className={styles.contactlinks}>
      <li>
        <Image
          className="pointer scales"
          width="30"
          height={30}
          style={{ accentColor: 'white' }}
          src="/images/github-icon-white.svg"
          alt="Discord Icon"
        />
      </li>
    </ul>
  );
};

export default ContactLinks;
