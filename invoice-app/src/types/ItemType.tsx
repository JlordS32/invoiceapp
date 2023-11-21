export interface ItemType {
	id: string;
	name: string;
	quantity: number;
	price: number;
}

export interface ItemTypeError {
	id: string,
	name: {
		valid: boolean;
		errorMsg: string;
	};
	quantity: {
		valid: boolean;
		errorMsg: string;
	};
	price: {
		valid: boolean;
		errorMsg: string;
	};
}
