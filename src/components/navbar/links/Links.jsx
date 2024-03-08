"use client";

import Link from "next/link";
import styles from './links.module.css';
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {

    const [open, setOpen] = useState(false);
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

    const session = true;
    const isAdmin = true;

    return (
        <>
            <div className={styles.links} >
                {
                    links.map(link => (
                        <NavLink item={link} key={link.title} />
                    ))
                }
                {session ? (
                    <>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout} >Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <Image className={styles.menuButton} onClick={() => setOpen((prev) => !prev)} src="/menu.png" width={30} height={30} />
            {open && (
                <div className={styles.mobileContainer}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )
            }

        </>
    )
};

export default Navbar;