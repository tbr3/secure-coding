import express from 'express'
import { addComment, Comment, getComments, getPost, getPosts } from './db'

function sanitizeIntegerInput(input:string):number {
	const requestInt = parseInt(input)

		if (!Number.isInteger(requestInt)) {
			throw new Error('Not an integer.')
		}
	
	return requestInt
}

export function initApp() {
	const app = express()
	const router = express.Router()

	router.get('/posts', (request, response) => {
		getPosts((result) => {
			response.send(result)
		})
	})

	router.get('/posts/:id', (request, response) => {

		const requestInt = parseInt(request.params.id)

		if (Number.isInteger(requestInt)) {
			getPost(requestInt, (result) => {
				response.send(result)
			})
			
		} else {
			response.sendStatus(400)
		}

		
	})

	router.get('/posts/:id/comments', (request, response) => {

		try {
			const id = sanitizeIntegerInput(request.params.id)

			getComments(id, (result) => {
				response.send(result)
			})
		} catch (error) {
			response.sendStatus(400)
		}
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
