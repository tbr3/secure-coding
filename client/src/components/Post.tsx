import { FC, useMemo } from 'react'
import { Post as PostType } from '../hooks/useGetPosts'
import './Post.css'

type PostProps = PostType & {
	variant?: 'preview' | 'full'
}

const Post: FC<PostProps> = (props) => {
	const variant = useMemo(() => (props.variant === 'preview' ? 'preview' : 'full'), [props.variant])
	const content = useMemo(() => (variant === 'preview' ? props.content.substring(0, 100) + '...' : props.content), [props.content, variant])

	return (
		<article className="post">
			<h2>{props.title}</h2>
			<img src={props.image} alt="post" />
			<p>{content}</p>
			{variant === 'preview' && <a href={`/posts/${props.id}`}>Read article</a>}
		</article>
	)
}

export default Post
