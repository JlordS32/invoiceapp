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
import {
	loadModal,
	toggleModal as toggleModalAction,
} from '../../../redux/modal/modalSlice';
import { InvoiceType } from '../../../types';
import { usePostDataById } from '../../../services/api/usePostData';
import { useNavigate } from 'react-router-dom';

interface InvoiceNavProps {
	invoice: InvoiceType;
}

const InvoiceNav = ({ invoice }: InvoiceNavProps) => {
	// redux
	const dispatch = useDispatch<AppDispatch>();

	// rrd
	const navigate = useNavigate();

	const toggleOffCanvas = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas('edit-invoice'));
	};

	const toggleModal = () => {
		dispatch(toggleModalAction());
		dispatch(loadModal('confirm-delete'));
	};

	const markAsPaid = async () => {
		await usePostDataById(
			'https://invoiceapi.vercel.app/invoices',
			invoice.id,
			{
				status: 'paid',
			}
		);

		navigate(0);
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
					<Status status={status as string} />
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

				{invoice.status === 'pending' && (
					<Button onClick={markAsPaid}>Mark as Paid</Button>
				)}
			</div>
		</div>
	);
};

export default InvoiceNav;
