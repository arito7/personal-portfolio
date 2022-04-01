import HeadComponent from '../components/Head';
import Techstack from '../components/Techstack';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent />
      <Header />
      <main>
        <Techstack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
