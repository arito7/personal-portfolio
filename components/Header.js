import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <p>Hi,</p>
      <h1>My name is Yuji</h1>
      <h3>
        I'm a full stack developer based in Japan. I was born and raised in
        Texas, and currently live in Tochigi, Japan. I speak fluent english and
        japanese.
      </h3>
      <ul>
        <li>
          <Image
            className="scales pointer"
            onClick={() => {
              router.push('https://github.com/arito7');
            }}
            src="/images/github-icon.svg"
            width="30"
            height="30"
            alt="Github Link"
          />
        </li>
      </ul>
    </header>
  );
};
export default Header;
