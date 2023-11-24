// react imports
import { useCallback, useEffect, useState } from 'react';

// styles
import styles from '../../assets/styles/modules/dashboard/dashboard.module.css';

// components
import ShowNoInvoice from './components/ShowNoInvoice';
import DashboardNav from './components/DashboardNav';

// type imports
import { InvoiceType } from '../../types/InvoiceTypes';
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
import useFilter from '../../hooks/useFilter';

const Dashboard = () => {
	// rrd
	const location = useLocation();

	// refs
	const [animationParent] = useAutoAnimate();

	// states
	const [data, setData] = useState<InvoiceType[]>([]);
	const [sort, setSort] = useState<string[]>([]);
	const [filter, setFilter] = useState<string[]>([]);
	const [manipulatedData, setManipulatedData] = useState<InvoiceType[]>([]);

	// redux
	const invoiceData = useSelector((state: RootState) => state.invoice);
	const dispatch = useDispatch<AppDispatch>();
	
	const { loading, invoiceItems } = invoiceData;

	// function to trigger data
	const fetchData = async () => {
		const url = 'https://invoiceapi.vercel.app/invoices';

		await dispatch(getInvoiceAsync(url));
	};

	const debouncedFetchData = useCallback(debounce(fetchData, 5000), []);
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

		if (!loading) {
			setData(invoiceItems);
		}
	}, [data, loading, invoiceItems]);

	// a logic to handle sorted items
	useEffect(() => {
		const sortedArray = useSort(data, sort);
		const filteredData = useFilter(sortedArray, filter);

		setManipulatedData(filteredData);
	}, [data, location]);

	// sorting is handled using URL
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);

		const newSort = searchParams.get('sort') || '';
		const newFilter = searchParams.get('filter') || '';

		setSort(newSort.split(','));

		setFilter(newFilter.split(','));
	}, [location]);


	return (
		<div className={styles.dashboard}>
			<DashboardNav length={data.length ?? 0} />

			<div className={styles.invoiceContainer}>
				{data && data.length > 0 ? (
					<div
						className={styles.invoiceWrapper}
						ref={animationParent}
					>
						{manipulatedData.map((invoice: InvoiceType) => (
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
