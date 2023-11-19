import BillTo from './BillTo';
import { FormDataType, FormErrorType } from '../../../../types';

export interface BillToProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formData?: FormDataType;
	setFormData: React.Dispatch<React.SetStateAction<FormDataType | undefined>>;
	formError?: FormErrorType;
}
const index = (props: BillToProps) => {
	return <BillTo {...props} />;
};

export default index;
