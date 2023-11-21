import BillTo from './BillTo';
import { FormErrorType } from '../../../../types';

export interface BillToProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formError?: FormErrorType;
	update: (data: any) => void;
}
const index = (props: BillToProps) => {
	return <BillTo {...props} />;
};

export default index;
