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

// libraries
import { debounce } from 'lodash';
import { useAutoAnimate } from '@formkit/auto-animate/react';

// custom hooks
import useSort from '../../hooks/useSort';

// rrd
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
	// rrd
	const location = useLocation();

	// refs
	const [animationParent] = useAutoAnimate();

	// states
	const [data, setData] = useState<InvoiceType[]>([]);
	const [sort, setSort] = useState<string[]>([]);
	const [sortedData, setSortedData] = useState<InvoiceType[]>([]);

	// redux
	const invoiceData = useSelector((state: RootState) => state.invoice);
	const dispatch = useDispatch<AppDispatch>();

	// function to trigger data
	const fetchData = async () => {
		const url = 'http://localhost:3000/invoices';
		await dispatch(getInvoiceAsync(url));
	};

	const debouncedFetchData = debounce(fetchData, 5000); 
	// UseEffects

	// First two useEffect to handle data fetching.
	// 1. fetches every 5 seconds.
	// 2. default fetch to get away with the 5 seconds delay on page reload
	useEffect(() => {
		debouncedFetchData();
	}, [data]);

	useEffect(() => {
		fetchData();
	}, []);

	// setting fetched data into data state
	useEffect(() => {
		const { loading, invoiceItems } = invoiceData;

		if (!loading) {
			setData(invoiceItems);
		}
	}, [data, invoiceData.loading, invoiceData.invoiceItems]);

	// a logic to handle sorted items
	useEffect(() => {
		const sortedArray = useSort(data, sort);

		setSortedData(sortedArray);
	}, [data, location]);

	// sorting is handled using URL
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const newSort = searchParams.get('sort') || '';
		setSort(newSort.split(','));

		console.log('changing')
	}, [location]);

	return (
		<div className={styles.dashboard}>
			<DashboardNav length={data.length ?? 0} />

			<div
				className={styles.invoiceContainer}
				ref={animationParent}
			>
				{data && data.length > 0 ? (
					<div className={styles.invoiceWrapper}>
						{sortedData.map((invoice: InvoiceType) => (
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
