import { forwardRef, useRef, useImperativeHandle } from 'react';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

export interface FormTextProps extends FormProps {
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isValid?: boolean;
	type?: string;
}

export interface FormTextRef {
	value: string;
	_test: (value: string) => void;
	focus: () => void;
	scrollIntoView: () => void;
}

const Text = forwardRef<FormTextRef, FormTextProps>((props, ref) => {
	const childRef = useRef<HTMLInputElement | null>(null);

	useImperativeHandle(
		ref,
		() => {
			return {
				_test(value: string) {
					console.log('test', value);
				},
				get value() {
					return childRef.current?.value || '';
				},
				focus() {
					if (childRef.current) {
						childRef.current.focus();
					}
				},
				scrollIntoView() {
					if (childRef.current) {
						childRef.current.scrollIntoView();
					}
				},
			};
		},
		[]
	);

	const valid = props.isValid ?? true;

	return (
		<div
			className={`${styles.formContainer} ${valid ? '' : styles.error}`}
			style={{
				width: props.width,
			}}
		>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<input
				ref={childRef}
				defaultValue={props.defaultValue}
				name={props.name ?? ''}
				onChange={(e) => {
					if (props.onChange) {
						props.onChange(e);
					}
				}}
				type={props.type || 'text'}
				placeholder={props.placeholder ?? ''}
			/>
		</div>
	);
});

export default Text;
