// react
import { useEffect, useState } from 'react';

// rrd
import { useNavigate, useLoaderData, LoaderFunction } from 'react-router-dom';

// styles
import styles from '../../assets/styles/modules/invoice/invoicepage.module.css';

// ui components
import Button from '../../components/button/Button';

interface paramsType {
	id: string;
}

// redux
import { InvoiceType } from '../../features/invoice/types/InvoiceTypes';
import { useFetchDatabyId } from '../../hooks/useFetch';
import Status from '../../features/invoice/components/Status';
import formateDate from '../../utilities/formatDate';
import GoBack from '../../components/button/GoBack';

export const invoiceLoader: LoaderFunction<paramsType> = ({ params }) => {
	const id = params.id;

	return { id };
};

const Invoice = () => {
	// states
	const [invoice, setInvoice] = useState<InvoiceType>();

	// rrd
	const { id } = useLoaderData() as paramsType;
	const navigate = useNavigate();

	// api handling
	useEffect(() => {
		const url = `http://localhost:3000/invoices`;
		const fetchData = async () => {
			const invoice = await useFetchDatabyId(url, { id: id });

			setInvoice(invoice[0]);
		};

		fetchData();
	}, []);

	return (
		<div className={styles.invoicePage}>
			<div className={styles.container}>

				<GoBack />

				<div
					className={styles.invoiceNav}
					id='invoiceNav'
				>
					<div className={styles.status}>
						<div>
							<span className='body-text-2'>Status</span>
							<Status status={invoice ? invoice.status : ''} />
						</div>
					</div>

					<div className={styles.buttons}>
						<Button
							variant='editButtonLight'
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
			</div>
		</div>
	);
};

export default Invoice;
