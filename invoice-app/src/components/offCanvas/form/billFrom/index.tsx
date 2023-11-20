import { FormErrorType } from '../../../../types';
import BillFrom from './BillFrom';

export interface BillFromProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formError: FormErrorType;
}

const index = (props: BillFromProps) => {
	return <BillFrom {...props} />;
};

export default index;
