import { forwardRef, useImperativeHandle, useEffect, useState } from 'react';
import ReactSelect, { ActionMeta } from 'react-select';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

interface OptionType {
	value: string;
	label: string;
}

export interface FormSelectProps extends FormProps {
	options: OptionType[];
}

export interface FormSelectRef {
	value: string;
	_test: (value: string) => void;
}

// custom styles for react-select
const customStyles = {
   control: (
      provided: React.CSSProperties,
      state: { isFocused: boolean }
   ) => ({
      ...provided,
      backgroundColor: 'var(--white)',
      height: '3.69231rem',
      border: 0,
      outline: state.isFocused
         ? '1px solid var(--primary)'
         : '1px solid var(--form-outline)',
      fontWeight: '700',

      '&:hover': {
         outline: '1px solid var(--primary)'
      }
   }),
   option: (
      provided: React.CSSProperties,
      state: { isSelected: boolean }
   ) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'white' : 'white',
      color: state.isSelected ? 'var(--primary)' : 'black',
      fontWeight: '700',
      fontSize: '1.15rem',
      padding: '1rem',
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
   menu: (provided: React.CSSProperties) => ({
      ...provided,
      marginTop: '1.85rem',
   })
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
		[]
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
				styles={customStyles}
			/>
		</div>
	);
});

export default Select;
