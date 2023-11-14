// utils
import formateDate from '../../../utilities/formatDate';

// styles
import styles from '../../../assets/styles/modules/invoice/invoicepage.module.css';

// types
import { InvoiceType } from '../../../features/invoice/types/InvoiceTypes';

interface InvoiceProps {
	invoice: InvoiceType;
}

const InvoicePaper = ({ invoice }: InvoiceProps) => {
	return (
		<div className={styles.invoice}>
			<div className={styles.invoiceInfo}>
				<div className='d-flex'>
					<div>
						<p>#{invoice?.id}</p>
						<div className='desc'>{invoice?.description}</div>
					</div>
					<div>
						<p>{invoice?.clientAddress.street}</p>
						<p>{invoice?.clientAddress.city}</p>
						<p>{invoice?.clientAddress.postCode}</p>
						<p>{invoice?.clientAddress.country}</p>
					</div>
				</div>
				<div className='d-flex'>
					<div>
						<div>
							<p>Invoice Date</p>
							<p>{formateDate(invoice?.createdAt ?? '')}</p>
						</div>
						<div>
							<p>Payment Due</p>
							<p>{formateDate(invoice?.paymentDue ?? '')}</p>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default InvoicePaper;
