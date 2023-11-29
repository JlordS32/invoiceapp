import { ItemType } from './ItemType';

// types
export interface InvoiceType {
	id: string;
	createdAt: string;
	paymentDue: string;
	description: string;
	paymentTerms: string;
	clientName: string;
	clientEmail: string;
	status?: string;
	senderAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	clientAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	items: ItemType[];
}
