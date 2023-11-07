import { forwardRef, useImperativeHandle, useEffect, useState } from 'react';
import ReactSelect, { StylesConfig } from 'react-select';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

// TYPES
interface OptionType {
	value: string;
	label: string;
}

type GroupBase<OptionType> = {
	label: string;
	options: OptionType[];
};

export interface FormSelectProps extends FormProps {
	options: OptionType[];
}

export interface FormSelectRef {
	_test: (value: string) => void;
	value: string;
}

const customStyles: StylesConfig<OptionType, false, GroupBase<OptionType>> = {
	control: (provided, state) => ({
		...provided,
		backgroundColor: 'var(--white)',
		height: '3.69231rem',
		border: 0,
		outline: state.isFocused
			? '1px solid var(--primary)'
			: '1px solid var(--form-outline)',
		fontWeight: '700',
		padding: '0 0.7rem',

		'&:hover': {
			outline: '1px solid var(--primary)',
		},
	}),
	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? 'white' : 'white',
		color: state.isSelected ? 'var(--primary)' : 'black',
		fontWeight: '700',
		fontSize: '1.15rem',
		padding: '1.15rem 1.85rem',
		borderBottom: '1px solid var(--form-outline)',
		top: '1rem',

		'&:hover': {
			backgroundColor: 'var(--primary)',
			color: 'white',
		},
		'&:active': {
			backgroundColor: 'var(--primary)',
			color: 'white',
		},
	}),
	menu: (provided) => ({
		...provided,
		marginTop: '1.85rem',
		boxShadow: '0px 10px 20px 0px rgba(72, 84, 159, 0.25)',
		transition: '150ms ease-in',
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: 'var(--primary)',
	}),
};

const Select = forwardRef<FormSelectRef, FormSelectProps>((props, ref) => {
	const [selectedValue, setSelectedValue] = useState<string>('30');
	const handleOnChange = (option: OptionType | null) => {
		setSelectedValue(option?.value ?? '');
	};

	useEffect(() => {
		console.log(selectedValue);
	});

	useImperativeHandle(
		ref,
		() => {
			return {
				_test(value: string) {
					console.log('test', value);
				},
				get value() {
					return selectedValue;
				},
			};
		},
		[selectedValue]
	);

	return (
		<div
			className={styles.formContainer}
			style={{
				width: props.width ?? '18.46154rem',
			}}
		>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<ReactSelect
				options={props.options}
				onChange={handleOnChange}
				defaultValue={props.options[0]}
				styles={customStyles}
			/>
		</div>
	);
});

export default Select;
