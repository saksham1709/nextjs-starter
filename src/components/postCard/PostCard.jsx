import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.img} fill />
                </div>
                <span className={styles.date}>17/09/2001</span>
            </div>
            <div className={styles.bottomContainer}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis reprehenderit repellendus nulla illum rerum, beatae necessitatibus adipisci incidunt in.</p>
                <Link href="/blog/2" className={styles.link} >Read More</Link>
            </div>
        </div>
    )
}

export default PostCard
