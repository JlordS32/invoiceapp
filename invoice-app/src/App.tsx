import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import MainLayout from './layout/MainLayout';

// pages
import Dashboard from './pages/dashboard';
import InvoicePage, { invoiceLoader } from './pages/invoice';
import ErrorPage from './pages/errors/ErrorPage';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Dashboard />,
					errorElement: <ErrorPage />,
				},
				{
					path: '/invoice/:id',
					element: <InvoicePage />,
					loader: invoiceLoader,
					errorElement: <ErrorPage />,
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
