import { render, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
	it('redirect from root to /posts', async () => {
		render(<App />)
		await waitFor(() => expect(window.location.pathname).toBe('/posts'))
	})
})
