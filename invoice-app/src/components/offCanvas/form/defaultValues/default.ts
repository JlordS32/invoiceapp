import { random } from 'lodash';
import { FormDataType, FormErrorType } from '../../../../types';

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
	paymentTerms: {
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
	items: [],
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
	paymentTerms: '',
	createdAt: '',
	description: '',
	paymentDue: '',
	items: [
		{
			id: crypto.randomUUID(),
			name: '',
			quantity: 0,
			price: 0,
		},
	],
};
