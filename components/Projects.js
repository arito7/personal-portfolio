import styles from '../styles/Projects.module.css';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'CRUD Inventory App',
      img: 'fake-inventory.png',
      desc: 'A CRUD app using express and ejs',
    },
  ];
  return (
    <section className={styles.projects}>
      <h2 className="section-title">Projects</h2>
      <ul className={styles.list}>
        {projects.map(({ title, img, desc }) => {
          return (
            <li key={title} style={{ maxWidth: '40%' }}>
              <div className={styles.card}>
                <h3>{title}</h3>
                <Image
                  style={{
                    borderRadius: '1rem',
                  }}
                  layout="responsive"
                  height={795}
                  width={787}
                  alt="Project Image"
                  src={`/images/${img}`}
                />
                <p>{desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
