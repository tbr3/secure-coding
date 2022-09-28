import { db, getComments } from './db'

jest.mock('mysql2', () => ({
	createConnection: jest.fn(() => ({
		connect: jest.fn(),
		query: jest.fn(),
	})),
}))

describe('db', () => {
	describe('getComments', () => {
		it('queries db with supplied postId', () => {
			// Given
			const postId = 123
			const mockCallback = jest.fn()
			const dbQueryMock = jest.fn()
			const dbQuerySpy = jest.spyOn(db, 'query').mockImplementation(dbQueryMock)

			// When
			getComments(postId, mockCallback)

			// Then
			expect(dbQuerySpy).toHaveBeenCalledTimes(1)
			expect(dbQuerySpy.mock.calls[0][0]).toBe(`SELECT * FROM comments WHERE postId = ${postId}`)
		})
	})
})
