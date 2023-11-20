// components
import CreateInvoiceList from './components/CreateInvoiceList';

// type imports
import { InvoiceType } from '../../types/InvoiceTypes';

// type
interface invoiceProps {
	data: InvoiceType;
}

const Invoice = ({ data }: invoiceProps) => {
	return <CreateInvoiceList invoice={data} />;
};

export default Invoice;
