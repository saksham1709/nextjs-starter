import Image from "next/image";
import styles from "./about.module.css"
const About = () => {
    return (
        <div className={styles.container} >
            <div className={styles.textContainer}>
                <p className={styles.highlight1}>About Agency</p>
                <h1 className={styles.text}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={styles.desc1}>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
                <div className={styles.infoContainer}>
                    <div className={styles.infoBox}>
                        <p className={styles.highlight2}>10 K+</p>
                        <p className={styles.desc2}>Year of experience</p>
                    </div>
                    <div className={styles.infoBox}>
                        <p className={styles.highlight2}>234 K+</p>
                        <p className={styles.desc2}>People reached</p>
                    </div>
                    <div className={styles.infoBox}>
                        <p className={styles.highlight2}>5K+</p>
                        <p className={styles.desc2}>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/about.png" fill className={styles.img} />
            </div>
        </div>
    );
};

export default About;