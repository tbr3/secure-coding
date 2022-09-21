import { FC, useContext } from "react"
import { CommentsContext } from "../contexts/CommentsContext"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const Comments: FC = () => {
    const { comments, postId } = useContext(CommentsContext)
    if (!postId) return null
    return (
        <>
            <hr />
            <h3>Comments</h3>
            {comments.map(comment => <Comment {...comment} key={comment.id} />)}
            <CommentForm />
        </>
    )
}

export default Comments