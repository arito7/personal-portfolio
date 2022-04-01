import Image from 'next/image';
import styles from '../styles/ContactLinks.module.css';
import { useRouter } from 'next/router';

const ContactLinks = () => {
  const router = useRouter();
  return (
    <ul className={styles.contactlinks}>
      <li>
        <Image
          width={30}
          height={30}
          className="pointer scales"
          src="/images/icons/github-icon-white.svg"
          alt="Github Icon"
          onClick={() => {
            router.push('https://github.com/arito7');
          }}
        />
      </li>
    </ul>
  );
};

export default ContactLinks;
