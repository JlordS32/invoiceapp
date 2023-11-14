import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import MainLayout from './layout/MainLayout';

// pages
import Dashboard from './pages/dashboard';
import Invoice, { invoiceLoader } from './pages/invoice';

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
				{
					path: '/invoice/:id',
					element: <Invoice />,
					loader: invoiceLoader,
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
