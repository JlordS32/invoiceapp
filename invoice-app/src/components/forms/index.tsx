// components
import Text from './Text.tsx';
import Select from './Select.tsx';
import Date from './Date.tsx';

export interface FormProps {
	id?: string;
	placeholder?: string;
	name?: string;
	label?: string;
	width?: string;
	className?: string;
}

const Form = {
	Text,
	Select,
	Date
};

export default Form;
