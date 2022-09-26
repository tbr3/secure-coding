import { render, screen } from '@testing-library/react'
import { IComment } from '../hooks/useGetComments'
import Comment from './Comment'

describe('Comment', () => {
	it('renders supplied html', () => {
		// Given
		const elementId = 'bar'
		const elementContent = 'Test'
		const comment: IComment = {
			id: 0,
			postId: '',
			name: 'Foo',
			content: `<div id="${elementId}">Test</div>`,
		}

		// When
		render(<Comment {...comment} />)

		// Then
		expect(screen.getAllByText(elementContent, { selector: `#${elementId}` })).toHaveLength(1)
	})
})
