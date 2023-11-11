import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
	]);

	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
