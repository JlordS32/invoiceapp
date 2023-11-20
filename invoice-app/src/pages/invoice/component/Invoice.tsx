// react
import { useEffect, useState } from 'react';

// rrd
import { useLoaderData } from 'react-router-dom';

// styles
import styles from '../../../assets/styles/modules/invoice/invoicepage.module.css';

// redux
import { InvoiceType } from '../../../types/InvoiceTypes';

// components
import GoBack from '../../../components/button/GoBack';
import InvoiceNav from './../component/InvoiceNav';
import InvoicePaper from './../component/InvoicePaper';

// types
import { paramsType } from '..';

const Invoice = () => {

	// rrd
	const { invoice } = useLoaderData() as paramsType;

	return (
		<div className={styles.invoicePage}>
			<div className={styles.container}>
				<GoBack />

				<InvoiceNav status={invoice ? invoice.status : ''} />

				<InvoicePaper invoice={invoice} />
			</div>
		</div>
	);
};

export default Invoice;
