import express, { Request, Router } from 'express'
import { addComment, getComments, getPost, getPosts, Comment } from './db'

export function initApp() {
	const app = express()
	const router = Router()

	router.get('/posts', (request, response) => {
		getPosts((result) => {
			response.send(result)
		})
	})

	router.get('/posts/:id', (request, response) => {
		getPost(request.params.id, (result) => {
			response.send(result)
		})
	})

	router.get('/posts/:id/comments', (request, response) => {
		getComments(request.params.id, (result) => {
			response.send(result)
		})
	})

	router.post('/posts/:id/comments', (request, response) => {
		const body = request.body as Omit<Comment, 'postId'>
		addComment(request.params.id, body.content, body.name, (result) => {
			response.send(result)
		})
	})

	app.use(express.json())
	app.use('/api', router)

	return app
}
