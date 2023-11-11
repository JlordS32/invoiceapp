// react imports
import { useRef, useEffect, useState } from 'react';

// styles
import styles from '../assets/styles/modules/dashboard/dashboard.module.css';

// components
import Button from '../components/button/Button';
import Dropdown, { DropdownRef } from '../components/button/Dropdown';

// image
import noInvoiceImg from '../assets/svg/illustration-empty.svg';
import arrowRight from '../assets/svg/icon-arrow-right.svg';

// custom hooks
import { useFetchData } from '../hooks/useFetch';

// utilities
import formatDate from '../utilities/formatDate';

// type imports
import { InvoiceType } from '../features/invoice/types/InvoiceTypes';
import Invoice from '../features/invoice';

const Dashboard = () => {
	// states
	const [data, setData] = useState<InvoiceType[]>([]);

	// dropdown
	const dropdownRef = useRef<DropdownRef>(null);
	const options = ['name', 'status', 'date', 'price'];

	useEffect(() => {
		const fetchData = async () => {
			const data = await useFetchData('http://localhost:3000/invoices');

			setData(data);
		};

		fetchData();
	}, []);

	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboardNav}>
				<div className='mr-auto'>
					<h1 className='text--h1'>Invoices</h1>
					<div className='body-text-2'>
						<p>
							{data && data.length > 0 ? (
								<span>There are {data.length} total invoices</span>
							) : (
								<span>No Invoices</span>
							)}
						</p>
					</div>
				</div>

				<div>
					<Dropdown
						options={options}
						ref={dropdownRef}
					/>
				</div>

				<Button variant='addButton'>New Invoice</Button>
			</div>

			<div className={styles.invoiceContainer}>
				{data && data.length > 0 ? (
					<div className={styles.invoiceWrapper}>
						{data.map((invoice: InvoiceType) => (
							<Invoice data={invoice} />
						))}
					</div>
				) : (
					<div className={styles.noInvoice}>
						<div className={styles.imgContainer}>
							<img
								src={noInvoiceImg}
								alt='no invoices!'
							/>
						</div>

						<div className='d-flex flex-column justify-content-center align-items-center'>
							<h1 className='text--h2 mb-2 text-center'>
								There is nothing here
							</h1>
							<p className='text-center body-text-2'>
								Create an invoice by clicking the
								<br />
								<span className='standout'>New Invoice</span> button and get
								started
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
