import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>NextJS</div>
            <div className={styles.text}>© 2024 sakshamsharma1709@gmail.com</div>
        </div>
    );
};

export default Footer;