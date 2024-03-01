import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title} >Creative Thoughts Agency</h1>
        <p className={styles.desc} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ducimus eos quae commodi dicta distinctio fugit consequatur facere repellendus beatae, quasi exercitationem accusamus quibusdam qui.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" className={styles.brand} fill />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <h1>image container</h1>
        <Image src="/hero.gif" className={styles.heroImg} fill />
      </div>
    </div>
  );
};

export default Home;