// styles
import styles from '../../../assets/styles/modules/dashboard/invoice.module.css';
import formatCurrency from '../../../utilities/formatCurrencies';

// utils
import formatDate from '../../../utilities/formatDate';
import checkStatusType from '../utils/CheckStatusType';

// icons
import arrowRight from '../assets/icon-arrow-right.svg';

// type imports
import { InvoiceType } from '../types/InvoiceTypes';
import { paymentStatusType } from '../types/StatusType';

// type interfaces
interface CreateInvoiceProps {
	invoice: InvoiceType;
}

// rrd imports
import { Link } from 'react-router-dom';

const CreateInvoice = ({ invoice }: CreateInvoiceProps) => {
	const status: paymentStatusType = checkStatusType(invoice.status);

	return (
		<Link to={`/invoice/${invoice.id}`}>
			<div
				className={styles.invoice}
				id={invoice.id}
			>
				<div className={styles.invoiceId}>
					<div>
						<span>#</span>
						{invoice.id}
					</div>
				</div>
				<div className={styles.dueDate}>
					<div>Due {formatDate(invoice.paymentDue)}</div>
				</div>
				<div className={styles.clientName}>
					<div>{invoice.clientName}</div>
				</div>
				<div className={styles.totalPrice}>
					<div>{formatCurrency(invoice.total)}</div>
				</div>
				<div className={`${styles.status} ${styles[status]}`}>
					<div className='d-flex justify-content-center align-items-center'>
						<div className={styles.circle}></div>
						<span>{status}</span>
					</div>
				</div>

				<div className={styles.goTo}>
					<div>
						<img
							src={arrowRight}
							alt='arrow right'
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CreateInvoice;
