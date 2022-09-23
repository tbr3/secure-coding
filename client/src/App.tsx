import './App.css'
import Posts from './components/Posts'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import SinglePost from './components/SinglePost'

function Routes() {
	return useRoutes([
		{
			path: '/posts',
			element: <Posts />,
		},
		{
			path: '/posts/:id',
			element: <SinglePost />,
		},
	])
}

function App() {
	return (
		<Router>
			<Routes />
		</Router>
	)
}

export default App
