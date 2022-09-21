import { FC } from "react";
import { useParams } from 'react-router-dom';
import { CommentsProvider } from "../contexts/CommentsContext";
import useGetPost from "../hooks/useGetPost";
import Comments from "./Comments";
import Post from "./Post";
import "./SinglePost.css";

const SinglePost: FC = () => {
    const { id } = useParams<{ id: string }>()
    const post = useGetPost(id)
    if (!id || !post) return null
    return (
        <div className="single-post">
            <Post {...post} />
            <CommentsProvider postId={id}>
                <Comments />
            </CommentsProvider>
        </div>
    )
}

export default SinglePost