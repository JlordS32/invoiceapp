// components
import CreateInvoice from './components/CreateInvoice';

// type imports
import { InvoiceType } from './types/InvoiceTypes';

// type
interface invoiceProps {
	data: InvoiceType;
}

const Invoice = ({ data }: invoiceProps) => {
	return <CreateInvoice invoice={data} />;
};

export default Invoice;
