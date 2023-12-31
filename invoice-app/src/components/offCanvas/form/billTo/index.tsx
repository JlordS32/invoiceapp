import BillTo from './BillTo';
import { FormDataType, FormErrorType } from '../../../../types';
import { FormTextRef } from '../../../forms/Text';

export interface BillToProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formError?: FormErrorType;
	update: (data: any) => void;
	inputRef: React.RefObject<FormTextRef>;
	formData: FormDataType
}
const index = (props: BillToProps) => {
	return <BillTo {...props} />;
};

export default index;
