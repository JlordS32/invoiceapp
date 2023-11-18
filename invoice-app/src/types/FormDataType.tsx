export interface FormDataType {
	name: string;
	item: {
		name: string;
		quantity: number;
		price: number;
	};
	address: {
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
	clientEmail: string;
	clientName: string;
	description: string;
}
