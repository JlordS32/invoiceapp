import { ItemType, ItemTypeError } from './ItemType';

export type FormDataType = {
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
	clientEmail: string;
	clientName: string;
	paymentTerms: string;
	paymentDue: string;
	createdAt: string;
	description: string;
	items: ItemType[];
} & {
	[key: string]: string | number | ItemType[] | { [key: string]: string };
};

export type FormErrorType = {
	senderAddress: {
		street: {
			valid: boolean;
			errorMsg: string;
		};
		city: {
			valid: boolean;
			errorMsg: string;
		};
		postCode: {
			valid: boolean;
			errorMsg: string;
		};
		country: {
			valid: boolean;
			errorMsg: string;
		};
	};
	clientAddress: {
		street: {
			valid: boolean;
			errorMsg: string;
		};
		city: {
			valid: boolean;
			errorMsg: string;
		};
		postCode: {
			valid: boolean;
			errorMsg: string;
		};
		country: {
			valid: boolean;
			errorMsg: string;
		};
	};
	clientEmail: {
		valid: boolean;
		errorMsg: string;
	};
	clientName: {
		valid: boolean;
		errorMsg: string;
	};
	paymentTerms: {
		valid: boolean;
		errorMsg: string;
	};
	createdAt: {
		valid: boolean;
		errorMsg: string;
	};
	description: {
		valid: boolean;
		errorMsg: string;
	};
	items: ItemTypeError[];
};
