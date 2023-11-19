// react
import { useEffect, useState } from 'react';

// rrd
import { useLoaderData } from 'react-router-dom';

// styles
import styles from '../../../assets/styles/modules/invoice/invoicepage.module.css';

// redux
import { InvoiceType } from '../../../types/InvoiceTypes';
import { useFetchDatabyId } from '../../../services/api/useFetch';

// components
import GoBack from '../../../components/button/GoBack';
import InvoiceNav from './../component/InvoiceNav';
import InvoicePaper from './../component/InvoicePaper';

// types
import { paramsType } from '..';

const Invoice = () => {
	// states
	const [invoice, setInvoice] = useState<InvoiceType>();

	// rrd
	const { id } = useLoaderData() as paramsType;

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

				<InvoiceNav status={invoice ? invoice.status : ''} />

				<InvoicePaper invoice={invoice as InvoiceType} />
			</div>
		</div>
	);
};

export default Invoice;
