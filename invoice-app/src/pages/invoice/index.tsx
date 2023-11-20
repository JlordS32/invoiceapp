import Invoice from './component/Invoice';
import { LoaderFunction } from 'react-router-dom';
import { useFetchDatabyId } from '../../services/api/useFetch';
import { InvoiceType } from '../../types';

export interface paramsType {
	id: string;
	invoice: InvoiceType
}

export const invoiceLoader: LoaderFunction<paramsType> = async ({ params }) => {
	const id = params.id ?? '';

	const url = `http://localhost:3000/invoices`;
	const invoiceData = await useFetchDatabyId(url, { id: id });

	if (invoiceData && invoiceData.length === 0 || !invoiceData) {
		throw new Error('The invoice does not exist');
	}

	return { id, invoice: invoiceData[0] };
};
const InvoicePage = () => {
	return <Invoice />;
};

export default InvoicePage;
