import styles from "./postUser.module.css";

const getData = async (userId) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
    return res.json();
}

const PostUser = async ({userId}) => {

    const user = await getData(userId);
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.value}>{user.name}</span>
        </div>
    )
}

export default PostUser