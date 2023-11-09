import {
	forwardRef,
	useRef,
	useImperativeHandle,
	useState,
	useEffect,
} from 'react';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

// libraries
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../../assets/styles/global.css';
import { format } from 'date-fns';

export interface FormSelectProps extends FormProps {}

export interface FormSelectRef {
	_test: (value: string) => void;
	value: string;
	focus: () => void;
	scrollIntoView: () => void;
}

const Date = forwardRef<FormSelectRef, FormSelectProps>((props, ref) => {
	const childRef = useRef<HTMLInputElement | null>(null);

	const [date, setDate] = useState<Date>();

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

	const handleDayHover = (date: Date) => {
		// Add a custom class to the day element on hover
		return date && date.getDate() === 15 ? 'custom-hover-class' : null;
	};

	return (
		<div
			className={styles.formContainer}
			style={{
				width: props.width ?? '18.46154rem',
			}}
		>
			{props.label && <label htmlFor={props.id}>{props.label}</label>}
			<DatePicker
				selected={date}
				onChange={(date) => {
					if (date) {
						setDate(date);
					}
				}}
				dayClassName={handleDayHover}
				formatWeekDay={() => {
					return '';
				}}
				dateFormatCalendar='MMM yyyy'
				customInput={
					<div className={styles.calendarContainer}>
						<label
							htmlFor={props.id}
						>
							<input
								type='text'
								id={props.id}
								name={props.name}
								className={styles.calendar}
							/>
						</label>
					</div>
				}
				dateFormat={'dd/MM/yyyy'}
			/>
		</div>
	);
});

export default Date;
