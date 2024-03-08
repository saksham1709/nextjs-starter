import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.img} alt="image" fill />
                </div>
                <span className={styles.date}>17/09/2001</span>
            </div>
            <div className={styles.bottomContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link href={`/blog/${post.id}`} className={styles.link} >Read More</Link>
            </div>
        </div>
    )
}

export default PostCard
