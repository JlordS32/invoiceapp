// components
import CreateInvoice from './components/CreateInvoice';

// type imports
import { InvoiceType } from './types/InvoiceTypes';

const Invoice = ({ data }: { data: InvoiceType }) => {
	return <CreateInvoice invoice={data} />;
};

export default Invoice;
