import { useEffect, useState } from 'react'

export type Post = {
	id: number
	title: string
	content: string
	image: string
}

export default function useGetPosts() {
	const [posts, setPosts] = useState<Post[]>()

	useEffect(() => {
		fetch('/api/posts').then(async (response) => {
			if (!response.ok) throw new Error('Could not fetch posts.')
			const result = await response.json()
			setPosts(result)
		})
	}, [])

	return posts
}
