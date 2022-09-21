import { FC } from "react";
import useGetPosts from "../hooks/useGetPosts";
import Post from "./Post";
import "./Posts.css"

const Posts: FC = () => {
    const posts = useGetPosts()
    return (
        <>
            <h1>Posts</h1>
            <section className="posts">
                {posts?.map(post => <Post {...post} variant="preview" />)}
            </section>
        </>
    )
}

export default Posts