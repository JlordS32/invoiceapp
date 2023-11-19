import { ItemType } from './ItemType';

export type FormDataType = {
	[key: string]:
		| string
		| number
		| ItemType[]
		| {
				[key: string]: string;
		  };
};

export type FormErrorType = {
	[key: string]:
		| boolean
		| {
				[key: string]: boolean;
		  };
};
