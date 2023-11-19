import BillTo from './BillTo';
import { FormDataType, FormErrorType } from '../../../../types';

export interface BillToProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formError?: FormErrorType;
	update: (data: FormDataType) => void;
}
const index = (props: BillToProps) => {
	return <BillTo {...props} />;
};

export default index;
