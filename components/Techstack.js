import Image from 'next/image';
import styles from '../styles/Techstack.module.css';

const Techstack = () => {
  const iconWH = '60px';
  const stackicons = [
    { alt: 'HTML5 icon', icon: 'html-5.svg' },
    { alt: 'CSS3 icon', icon: 'css-3.svg' },
    { alt: 'JS icon', icon: 'javascript.svg' },
    { alt: 'React icon', icon: 'react.svg' },
    { alt: 'NextJS icon', icon: 'nextjs.svg' },
    { alt: 'NodeJS icon', icon: 'nodejs.svg' },
    { alt: 'MongoDB icon', icon: 'mongodb.svg' },
    { alt: 'MaterializeCSS icon', icon: 'materializecss.svg' },
    { alt: 'EJS icon', icon: 'ejs.svg' },
  ];
  return (
    <div className={styles.techstack}>
      <h2 className="section-title">Techstack</h2>
      <ul>
        {stackicons.map(({ icon, alt }) => {
          return (
            <li key={icon}>
              <Image
                className="scales"
                width={iconWH}
                height={iconWH}
                src={`/images/icons/${icon}`}
                alt={alt}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Techstack;
