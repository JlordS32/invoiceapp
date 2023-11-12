import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import MainLayout from './layout/MainLayout';

// pages
import Dashboard from './pages/Dashboard';
import Invoice, { invoiceLoader } from './pages/Invoice';

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
				{
					path: '/invoice/:id',
					element: <Invoice />,
					loader: invoiceLoader,
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
