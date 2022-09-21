import { FC } from "react"
import { Comment as IComment } from '../hooks/useGetComments'
import "./Comment.css"

const Comment: FC<IComment> = (props) => {
    return (
        <div className="comment">
            <p>Name: {props.name}</p>
            <div dangerouslySetInnerHTML={{ __html: `Comment: ${props.content}` }} />
        </div>
    )
}

export default Comment