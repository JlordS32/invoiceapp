import Invoice from './component/Invoice';
import { LoaderFunction } from 'react-router-dom';
import { useFetchData } from '../../services/api/useFetch';
import { InvoiceType } from '../../types';

export interface paramsType {
	id: string;
	invoice: InvoiceType;
}

export const invoiceLoader: LoaderFunction<paramsType> = async ({ params }) => {
	const id = params.id ?? '';

	const url = `https://invoiceapi.vercel.app/invoices/${id}`;
	const invoiceData = await useFetchData(url);

	return { id, invoice: invoiceData.invoice };
};
const InvoicePage = () => {
	return <Invoice />;
};

export default InvoicePage;
