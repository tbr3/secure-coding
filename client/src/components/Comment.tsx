import { FC } from 'react'
import { IComment } from '../hooks/useGetComments'
import './Comment.css'

const Comment: FC<IComment> = (props) => {
	return (
		<div className="comment">
			<p>Name: {props.name}</p>
			{/* <div dangerouslySetInnerHTML={{ __html: `Comment: ${props.content}` }} /> */}
			<div>Comment: {props.content}</div>
		</div>
	)
}

export default Comment
