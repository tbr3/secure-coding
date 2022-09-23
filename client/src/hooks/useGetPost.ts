import { useEffect, useState } from 'react'
import { Post } from './useGetPosts'

export default function useGetPost(id: string | undefined) {
	const [post, setPost] = useState<undefined | Post>()

	useEffect(() => {
		if (!id) return
		fetch(`/api/posts/${id}`).then(async (response) => {
			if (!response.ok) throw new Error('Could not fetch post.')
			const result = await response.json()
			setPost(result[0])
		})
	}, [id])

	return post
}
