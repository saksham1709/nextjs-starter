import Link from "next/link";
import styles from './links.module.css';
import NavLink from "./navLink/NavLink";

const Navbar = () => {

    const links = [
        {
            title: "HomePage",
            path: "/"
        },
        {
            title: "AboutPage",
            path: "/about"
        },
        {
            title: "ContactPage",
            path: "/contact"
        },
        {
            title: "BlogPage",
            path: "/blog"
        }
    ]

    return (
        <div className={styles.container} >
            {
                links.map(link => (
                    <NavLink item={link} key={link.title} />
                    // <Link href={link.path} key={link.title} >{link.title}</Link>
                ))
            }
        </div>
    )
};

export default Navbar;