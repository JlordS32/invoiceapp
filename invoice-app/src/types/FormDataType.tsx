import { ItemType } from "./ItemType";

export type FormDataType = {
	[key: string]:
		| string
		| number
		| ItemType[]
		| {
				[key: string]: string;
		  };
};
