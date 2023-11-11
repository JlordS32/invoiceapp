// styles
import styles from '../../../assets/styles/modules/dashboard/invoice.module.css';
import formatCurrency from '../../../utilities/formatCurrencies';

// utils
import formatDate from '../../../utilities/formatDate';

// icons
import arrowRight from '../assets/icon-arrow-right.svg';

// type imports
import { InvoiceType } from '../types/InvoiceTypes';

// type interfaces
interface CreateInvoiceProps {
	invoice: InvoiceType;
}

const CreateInvoice = ({ invoice }: CreateInvoiceProps) => {
	return (
		<div
			key={invoice.id}
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
			<div className={styles.status}>
				<div>{invoice.status}</div>
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
	);
};

export default CreateInvoice;
