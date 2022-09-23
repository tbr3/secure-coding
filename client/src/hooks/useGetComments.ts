import { useEffect, useState } from 'react'

export type Comment = {
	id: number
	postId: string
	name: string
	content: string
}

export default function useGetComments(postId: string | undefined) {
	const [comments, setComments] = useState<Comment[]>([])

	useEffect(() => {
		if (!postId) return
		fetch(`/api/posts/${postId}/comments`).then(async (response) => {
			if (!response.ok) throw new Error('Could not fetch comments.')
			const result = await response.json()
			setComments(result)
		})
	}, [postId])

	return comments
}
