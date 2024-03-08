"use client";

import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

const getData = async (slug) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + slug);
    return res.json();
}

const SinglePost = async ({ params }) => {
    const { slug } = params;
    const post = await getData(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className={styles.avatar} width={50} height={50} />
                    <Suspense fallback={<div>Loading...</div>} >
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Date</span>
                        <span className={styles.detailValue}>17/09/2001</span>
                    </div>
                </div>
                <div className={styles.content}> {post.body}    </div>
            </div>
        </div >
    );
};

export default SinglePost;