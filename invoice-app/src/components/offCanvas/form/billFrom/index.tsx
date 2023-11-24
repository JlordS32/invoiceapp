import { FormErrorType } from '../../../../types';
import BillFrom from './BillFrom';
import { FormTextRef } from '../../../forms/Text';

export interface BillFromProps {
	handleInputChange: (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => void;
	formError: FormErrorType;
	inputRef: React.RefObject<FormTextRef>;
	data: Record<string, any>;
}

const index = (props: BillFromProps) => {
	return <BillFrom {...props} />;
};

export default index;
