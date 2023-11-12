import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';

// context
import InvoiceDataProvider from './context/getInvoiceData';

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
		<InvoiceDataProvider>
			<div className='app'>
				<RouterProvider router={router} />
			</div>
		</InvoiceDataProvider>
	);
}

export default App;
