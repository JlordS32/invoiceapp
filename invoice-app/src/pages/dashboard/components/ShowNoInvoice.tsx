// image
import noInvoiceImg from '../../../assets/svg/illustration-empty.svg';

// styles
import styles from '../../../assets/styles/modules/dashboard/dashboard.module.css';

const ShowNoInvoice = () => {
	return (
		<>
			<div className={styles.imgContainer}>
				<img
					src={noInvoiceImg}
					alt='no invoices!'
				/>
			</div>

			<div className='d-flex flex-column justify-content-center align-items-center'>
				<h1 className='text--h2 mb-2 text-center'>There is nothing here</h1>
				<p className='text-center body-text-2'>
					Create an invoice by clicking the
					<br />
					<span className='standout'>New Invoice</span> button and get started
				</p>
			</div>
		</>
	);
};

export default ShowNoInvoice;
