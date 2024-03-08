import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const Blog = async () => {

    const posts = await getData();

    return (
        <div className={styles.container}>
            {
                posts.map((post) => (
                    <div className={styles.post} key={post.id}  >
                        <PostCard post={post}/>
                    </div>
                ))
            }
        </div>


    );
};

export default Blog;