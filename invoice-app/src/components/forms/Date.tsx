import { forwardRef, useRef, useImperativeHandle } from 'react';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

export interface FormSelectProps extends FormProps {}

export interface FormSelectRef {
	_test: (value: string) => void;
	value: string;
	focus: () => void;
	scrollIntoView: () => void;
}

const Date = forwardRef<FormSelectRef, FormSelectProps>((props, ref) => {
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
				width: props.width ?? '18.46154rem',
			}}
		>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<input
            ref={childRef}
				type='date'
				{...props}
			/>
		</div>
	);
});

export default Date;
