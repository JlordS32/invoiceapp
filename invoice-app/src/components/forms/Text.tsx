import {
	forwardRef,
	useRef,
	useImperativeHandle
} from 'react';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

export interface FormTextProps extends FormProps {
	defaultValue?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

	return (
		<div
			className={styles.formContainer}
			style={{
				width: props.width,
			}}
		>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<input
	ref={childRef}
	defaultValue={props.defaultValue}
	onChange={(e) => {
		props.onChange?.(e);
	}}
	{...props}
/>
		</div>
	);
});

export default Text;
