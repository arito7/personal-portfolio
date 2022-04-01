import Image from 'next/image';
import styles from '../styles/Techstack.module.css';

const Techstack = () => {
  const iconWH = '60px';
  return (
    <div className={styles.techstack}>
      <h2 className="section-title">Techstack</h2>
      <ul>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/html-5.svg"
            alt="HTML5 logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/css-3.svg"
            alt="CSS3 logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/javascript.svg"
            alt="JS logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/react.svg"
            alt="React logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/nextjs.svg"
            alt="NextJS logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/nodejs.svg"
            alt="NodeJS logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/mongodb.svg"
            alt="MongoDB logo"
          />
        </li>
        <li>
          <Image
            className="scales"
            width={iconWH}
            height={iconWH}
            src="/images/materializecss.svg"
            alt="MaterializeCSS logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default Techstack;
