import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{
					index: true,
					element: <Dashboard />,
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
