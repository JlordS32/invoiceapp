// components
import Text from './Text.tsx';
import Select from './Select.tsx';

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
	Select
};

export default Form;
