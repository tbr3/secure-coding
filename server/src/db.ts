import * as mysql from 'mysql2'
import { QueryError } from 'mysql2'
export const postsTable = 'posts'
export const commentsTable = 'comments'

export type Post = {
	title: string
	content: string
	image: string
}

export type Comment = {
	postId: number
	name: string
	content: string
}

export const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'demo',
})

db.connect((error: QueryError | null) => {
	if (error) throw error
	console.log('DB Connected')
})

export function getPosts(callback: (r: Post[]) => void) {
	return db.query(`SELECT * FROM ${postsTable}`, (err: QueryError, result: any) => {
		if (err) throw err
		callback(result)
	})
}

export function getPost(id: string, callback: (r: Post) => void) {
	const query = `SELECT * FROM ${postsTable} WHERE id="${id}"`
	return db.query(query, (err: any, result: any) => {
		if (err) throw err
		callback(result)
	})
}

export function getComments(postId: string, callback: (r: Comment[]) => void) {
	return db.query(`SELECT * FROM ${commentsTable} WHERE postId = ${postId}`, (err: any, result: any) => {
		if (err) throw err
		callback(result)
	})
}

export function addComment(postId: string, content: string, name: string, callback: (r: any) => void) {
	return db.query(
		`INSERT INTO ${commentsTable} (postId, content, name) VALUES ("${postId}", "${content}", "${name}")`,
		(err: any, result: any) => {
			if (err) throw err
			callback(result)
		},
	)
}
