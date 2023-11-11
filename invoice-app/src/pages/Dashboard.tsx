// styles
import styles from '../assets/styles/modules/dashboard.module.css';

// components
import Button from '../components/button/Button';

// image
import noInvoiceImg from '../assets/svg/illustration-empty.svg';

const Dashboard = () => {
	// option props to be passed to the select form
	const options = [
		{
			value: 'name',
			label: 'Name',
		},
		{
			value: 'status',
			label: 'Status',
		},
		{
			value: 'data',
			label: 'Data',
		},
		{
			value: 'id',
			label: 'Id',
		},
		{
			value: 'price',
			label: 'price',
		},
	];

	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboardNav}>
				<div className='mr-auto'>
					<h1 className='text--h1'>Invoices</h1>
					<div className='body-text-2'>
						<p>No Invoices</p>
					</div>
				</div>

				<Button variant='addButton'>New Invoice</Button>
			</div>

			<div className={styles.invoiceContainer}>
				<div className={styles.noInvoice}>
					<div className={styles.imgContainer}>
						<img
							src={noInvoiceImg}
							alt='no invoices!'
						/>
					</div>

					<div className='d-flex flex-column justify-content-center align-items-center'>
						<h1 className='text--h2 mb-2 text-center'>There is nothing here</h1>
						<p className='text-center'>
							Create an invoice by clicking the
							<br />
							<span className='standout'>New Invoice</span> button and get
							started
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
