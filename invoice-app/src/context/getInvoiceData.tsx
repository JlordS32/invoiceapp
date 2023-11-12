import { createContext, useContext } from 'react';

export function useInvoiceData() {
	return useContext(InvoiceDataContext);
}

const InvoiceDataContext = createContext({} as any);
const InvoiceDataProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<InvoiceDataContext.Provider value={{}}>
			{children}
		</InvoiceDataContext.Provider>
	);
};

export default InvoiceDataProvider;
