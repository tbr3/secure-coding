import React, { FC, useCallback, useContext, useState } from 'react'
import { CommentsContext } from '../contexts/CommentsContext'
import { Comment } from '../hooks/useGetComments'
import './CommentForm.css'

enum CommentFormSubmissionState {
	DEFAULT = 0,
	SUBMITTING = 1,
	SUBMITTED = 2,
	ERROR = 3,
}

type CommentFormState = Omit<Comment, 'id' | 'postId'> & {
	submissionState: CommentFormSubmissionState
	postId: string | null
}

const CommentForm: FC = (props) => {
	const { postId, refresh } = useContext(CommentsContext)
	const [state, setState] = useState<CommentFormState>({
		submissionState: CommentFormSubmissionState.DEFAULT,
		name: '',
		content: '',
		postId: postId,
	})

	const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setState((old) => ({ ...old, name: e.target.value }))
	}, [])

	const handleContentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setState((old) => ({ ...old, content: e.target.value }))
	}, [])

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault() // Prevent submit from html form.
			setState((old) => ({ ...old, submissionState: CommentFormSubmissionState.SUBMITTING }))
			const comment: Omit<Comment, 'id'> = {
				postId: state.postId as string,
				name: state.name,
				content: state.content,
			}
			fetch(`/api/posts/${state.postId}/comments`, {
				method: 'POST',
				body: JSON.stringify(comment),
				headers: { 'Content-Type': 'application/json' },
			})
				.then(() => {
					refresh() // Refresh posts in context.
					setState((old) => ({
						...old,
						submissionState: CommentFormSubmissionState.SUBMITTED,
						name: '',
						content: '',
					}))
				})
				.catch(() => {
					setState((old) => ({ ...old, submissionState: CommentFormSubmissionState.ERROR }))
				})
		},
		[refresh, state.content, state.name, state.postId],
	)

	if (state.submissionState === CommentFormSubmissionState.SUBMITTED) return <p>Thank you for your submission!</p>

	return (
		<form onSubmit={handleSubmit} className="comment-form">
			<label htmlFor="comment-name">Name</label>
			<input type="text" id="comment-name" value={state.name} onChange={handleNameChange} />
			<label htmlFor="comment-content">Comment</label>
			<textarea id="comment-content" value={state.content} onChange={handleContentChange} />
			<button type="submit" children="Send" />
		</form>
	)
}

export default CommentForm
