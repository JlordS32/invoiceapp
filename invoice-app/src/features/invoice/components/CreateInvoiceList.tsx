// styles
import styles from '../../../assets/styles/modules/dashboard/invoice.module.css';
import formatCurrency from '../../../utilities/formatCurrencies';

// utils
import { formatToDateString } from '../../../utilities/formatDate';
import checkStatusType from '../utils/CheckStatusType';
import getTotal from '../../../utilities/getTotal';
import extractPrices from '../../../utilities/extractPrices';

// icons
import arrowRight from '../assets/icon-arrow-right.svg';

// type imports
import { InvoiceType } from '../../../types/InvoiceTypes';
import { paymentStatusType } from '../../../types/StatusType';

// type interfaces
interface CreateInvoiceProps {
	invoice: InvoiceType;
}

// rrd imports
import { Link } from 'react-router-dom';
import Status from './Status';

import { useMediaQuery } from 'react-responsive';

const CreateInvoiceList = ({ invoice }: CreateInvoiceProps) => {
	const status: paymentStatusType = checkStatusType(invoice.status);

	const total = getTotal(extractPrices(invoice.items));

	const isWide = useMediaQuery({
		query: '(min-width: 650px)',
	});

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
					<div>Due {formatToDateString(invoice.paymentDue)}</div>
				</div>
				<div className={styles.clientName}>
					<div>{invoice.clientName}</div>
				</div>
				<div className={styles.totalPrice}>
					<div>{formatCurrency(total)}</div>
				</div>
				<div className={styles.statusWrapper}>
					<Status status={status} />
				</div>

				{isWide && (
					<div className={styles.goTo}>
						<div>
							<img
								src={arrowRight}
								alt='arrow right'
							/>
						</div>
					</div>
				)}
			</div>
		</Link>
	);
};

export default CreateInvoiceList;
