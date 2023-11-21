import { FormDataType, FormErrorType } from "../../../../types";

export const defaultFormError: FormErrorType = {
	senderAddress: {
		street: {
			valid: true,
			errorMsg: '',
		},
		city: {
			valid: true,
			errorMsg: '',
		},
		postCode: {
			valid: true,
			errorMsg: '',
		},
		country: {
			valid: true,
			errorMsg: '',
		},
	},
	clientAddress: {
		street: {
			valid: true,
			errorMsg: '',
		},
		city: {
			valid: true,
			errorMsg: '',
		},
		postCode: {
			valid: true,
			errorMsg: '',
		},
		country: {
			valid: true,
			errorMsg: '',
		},
	},
	clientEmail: {
		valid: true,
		errorMsg: '',
	},
	clientName: {
		valid: true,
		errorMsg: '',
	},
	paymentTerm: {
		valid: true,
		errorMsg: '',
	},
	createdAt: {
		valid: true,
		errorMsg: '',
	},
	description: {
		valid: true,
		errorMsg: '',
	},
	items: [
	],
};

export const defaultForm: FormDataType = {
	senderAddress: {
		street: '',
		city: '',
		postCode: '',
		country: '',
	},
	clientAddress: {
		street: '',
		city: '',
		postCode: '',
		country: '',
	},
	clientEmail: '',
	clientName: '',
	paymentTerm: '',
	createdAt: '',
	description: '',
	paymentDue: '',
	items: [
		{
			id: '',
			name: '',
			quantity: 0,
			price: 0,
		},
	],
};
