// component
import Button from '../../../components/button/Button';
import Status from '../../../features/invoice/components/Status';

// styles
import styles from '../../../assets/styles/modules/invoice/invoicepage.module.css';

// redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
	onLoadCanvas,
	toggleCanvas,
} from '../../../redux/offcanvas/offCanvasSlice';
import { loadModal, toggleModal as toggleModalAction } from '../../../redux/modal/modalSlice';
import { InvoiceType } from '../../../types';

interface InvoiceNavProps {
	invoice: InvoiceType;
}

const InvoiceNav = ({ invoice }: InvoiceNavProps) => {
	// redux
	const dispatch = useDispatch<AppDispatch>();

	const toggleOffCanvas = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas('edit-invoice'));
	};

	const toggleModal = () => {
		dispatch(toggleModalAction());
		dispatch(loadModal('confirm-delete'));
	};

	const { status } = invoice;

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
					onClick={toggleOffCanvas}
				>
					Edit
				</Button>
				<Button
					variant='deleteButton'
					onClick={toggleModal}
				>
					Delete
				</Button>
				
				{/* hide this component is status is paid */}
				{
					invoice.status !== 'paid' && (
						<Button>Mark as Paid</Button>
					)
				}
			</div>
		</div>
	);
};

export default InvoiceNav;
