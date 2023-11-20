// utils
import { formatToDateString } from '../../../utilities/formatDate';
import getTotal from '../../../utilities/getTotal';
import extractPrices from '../../../utilities/extractPrices';
import formatCurrency from '../../../utilities/formatCurrencies';

// styles
import styles from '../../../assets/styles/modules/invoice/invoicepage.module.css';

// types
import { InvoiceType } from '../../../types/InvoiceTypes';

interface InvoiceProps {
	invoice: InvoiceType;
}

import { useMediaQuery } from 'react-responsive';

const InvoicePaper = ({ invoice }: InvoiceProps) => {
	const isWide = useMediaQuery({
		query: '(min-width: 560px)',
	});

	return (
		<div className={styles.invoice}>
			<div className={styles.invoiceInfo}>
				<div className={styles.senderInfo}>
					<div className={styles.invoiceId}>
						<p>
							<span>#</span>
							{invoice?.id}
						</p>
						<div className={styles.invoiceDesc}>{invoice?.description}</div>
					</div>
					{invoice && invoice.senderAddress ? (
						<div className={styles.senderAddress}>
							<p>{invoice?.senderAddress.street}</p>
							<p>{invoice?.senderAddress.city}</p>
							<p>{invoice?.senderAddress.postCode}</p>
							<p>{invoice?.senderAddress.country}</p>
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className={styles.clientInfo}>
					<div className={styles.date}>
						<div className={styles.invoiceDate}>
							<p>Invoice Date</p>
							<p>{formatToDateString(invoice?.createdAt ?? '')}</p>
						</div>
						<div className={styles.dueDate}>
							<p>Payment Due</p>
							<p>{formatToDateString(invoice?.paymentDue ?? '')}</p>
						</div>
					</div>
					<div className={styles.billTo}>
						<div>
							<p>Bill To</p>
							<p className={styles.clientName}>{invoice?.clientName}</p>
						</div>
						<div className={styles.clientAddress}>
							{invoice && invoice.clientAddress ? (
								<>
									<p>{invoice?.clientAddress.street}</p>
									<p>{invoice?.clientAddress.city}</p>
									<p>{invoice?.clientAddress.postCode}</p>
									<p>{invoice?.clientAddress.country}</p>
								</>
							) : (
								<div></div>
							)}
						</div>
					</div>
					<div className={styles.sentTo}>
						<p>Sent To</p>
						<p>{invoice?.clientEmail}</p>
					</div>
				</div>
			</div>
			{invoice && invoice.items && getTotal(extractPrices(invoice.items)) > 0 && (
				<div className={styles.itemTable}>
					<table>
						<thead>
							<tr>
								<th>Item Name</th>
								<th>Qty.</th>
								<th>Price</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{invoice &&
								invoice?.items.map((item, index) => (
									<tr key={index}>
										<td className={styles.itemName}>{item.name}</td>
										<td className={styles.quantity}>
											{isWide
												? item.quantity
												: `${item.quantity} x ${formatCurrency(item.price)}`}
										</td>
										{isWide && (
											<td className={styles.price}>
												{formatCurrency(item.price)}
											</td>
										)}
										<td className={styles.totalOfItem}>
											{formatCurrency(item.price * item.quantity)}
										</td>
									</tr>
								))}
						</tbody>
					</table>

					{invoice && (
						<div className={styles.total}>
							{isWide ? <p>Amount Due</p> : <p>Grand Total</p>}
							<span className={styles.amount}>{`${formatCurrency(
								getTotal(extractPrices(invoice.items))
							)}`}</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default InvoicePaper;
