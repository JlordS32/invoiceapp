import { FormDataType, FormErrorType, InvoiceType } from '../../../../types';
import BillFrom from './BillFrom';
import { FormTextRef } from '../../../forms/Text';

export interface BillFromProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formError: FormErrorType;
	formData: FormDataType;
	update: (data: any) => void;
	inputRef: React.RefObject<FormTextRef>;
}

const index = (props: BillFromProps) => {
	return <BillFrom {...props} />;
};

export default index;
