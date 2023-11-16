// component
import Button from '../../../components/button/Button';
import Status from '../../../features/invoice/components/Status';

// styles
import styles from '../../../assets/styles/modules/invoice/invoicepage.module.css';

interface InvoiceNavProps {
	status: string;
}

const InvoiceNav = ({ status }: InvoiceNavProps) => {
	return (
		<div
			className={styles.invoiceNav}
			id='invoiceNav'
		>
			<div className={styles.status}>
				<div>
					<span className='body-text-2'>Status</span>
					<Status status={status} />
				</div>
			</div>

			<div className={styles.buttons}>
				<Button
					variant='editButton'
					onClick={() => {
						print();
					}}
				>
					Edit
				</Button>
				<Button variant='deleteButton'>Delete</Button>
				<Button>Mark as Paid</Button>
			</div>
		</div>
	);
};

export default InvoiceNav;
