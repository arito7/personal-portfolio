import styles from '../styles/Projects.module.css';

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
      <ul>
        {projects.map(({ title, img, desc }) => {
          return (
            <li key={title}>
              <div className={styles.card}>
                <h3>{title}</h3>
                <img
                  style={{
                    borderRadius: '1rem',
                    height: 150,
                  }}
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
