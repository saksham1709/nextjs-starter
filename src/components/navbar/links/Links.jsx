import Link from "next/link";

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
        <div>
            {
                links.map(link => (
                    <Link href={link.path} key={link.title} >{link.title}</Link>
                ))
            }
        </div>
    )
};

export default Navbar;