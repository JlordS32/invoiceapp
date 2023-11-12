// react imports
import { useEffect, useState } from 'react';

// styles
import styles from '../../assets/styles/modules/dashboard/dashboard.module.css';

// components
import ShowNoInvoice from './components/ShowNoInvoice';
import DashboardNav from './components/DashboardNav';

// type imports
import { InvoiceType } from '../../features/invoice/types/InvoiceTypes';
import Invoice from '../../features/invoice';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getInvoiceAsync } from '../../redux/invoice/invoiceSlice';

const Dashboard = () => {
	// states
	const [data, setData] = useState<InvoiceType[]>([]);

	// redux
	const invoiceData = useSelector((state: RootState) => state.invoice);
	const dispatch = useDispatch<AppDispatch>();

	// function to trigger data
	const fetchData = async () => {
		const url = 'http://localhost:3000/invoices';
		await dispatch(getInvoiceAsync(url));
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		const { loading, invoiceItems } = invoiceData;

		if (!loading) {
			setData(invoiceItems);
		}
	}, [invoiceData.loading, invoiceData.invoiceItems]);

	return (
		<div className={styles.dashboard}>
			<DashboardNav length={data.length ?? 0} />

			<div className={styles.invoiceContainer}>
				{data && data.length > 0 ? (
					<div className={styles.invoiceWrapper}>
						{data.map((invoice: InvoiceType) => (
							<Invoice
								data={invoice}
								key={invoice.id}
							/>
						))}
					</div>
				) : (
					<div className={styles.noInvoice}>
						<ShowNoInvoice />
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
