import Invoice from './component/Invoice';
import { LoaderFunction } from 'react-router-dom';

interface paramsType {
	id: string;
}

export const invoiceLoader: LoaderFunction<paramsType> = ({ params }) => {
	const id = params.id;

	return { id };
};
const InvoicePage = () => {
	return <Invoice />;
};

export default InvoicePage;
