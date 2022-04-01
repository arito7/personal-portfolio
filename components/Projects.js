import styles from '../styles/Projects.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Projects = () => {
  const router = useRouter();
  const projects = [
    {
      title: 'CRUD Inventory App',
      img: 'fake-inventory.png',
      desc: 'A CRUD app using express and ejs',
      link: 'https://github.com/arito7/inventory-application',
    },
  ];
  return (
    <section className={styles.projects}>
      <h2 className="section-title">Projects</h2>
      <ul className={styles.list}>
        {projects.map(({ title, img, desc, link }) => {
          return (
            <li key={title} className={styles.card}>
              <div
                onClick={() => {
                  router.push(link);
                }}
              >
                <h3 className={styles.projecttitle}>{title}</h3>
                <Image
                  className={styles.projectimg}
                  layout="responsive"
                  height={795}
                  width={787}
                  alt="Project Image"
                  src={`/images/${img}`}
                />
                <p className={styles.projectdesc}>{desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
