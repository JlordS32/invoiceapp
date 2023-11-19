import { forwardRef, useRef, useImperativeHandle } from 'react';

// styles
import styles from '../../assets/styles/modules/form.module.css';

// from index
import { FormProps } from './index';

// libraries
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/styles/date.css';

// svg
import calendarSvg from '../../assets/svg/icon-calendar.svg';
export interface FormSelectProps extends FormProps {
	date: Date;
	setDate: (date: Date) => void;
}

export interface FormSelectRef {
	_test: (value: string) => void;
	value: string;
	focus: () => void;
	scrollIntoView: () => void;
}

interface CustomDateInput {
	value?: any;
	onClick?: () => void;
}

const DateComponent = forwardRef<FormSelectRef, FormSelectProps>(
	(props, ref) => {
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

		const handleDayHover = (date: Date) => {
			// Add a custom class to the day element on hover
			return date && date.getDate() === 15 ? 'custom-hover-class' : null;
		};

		const CustomDateInput = forwardRef<any, CustomDateInput>(
			({ value, onClick }, ref) => (
				<div
					className={styles.calendarContainer}
					onClick={onClick}
					ref={ref}
				>
					<label htmlFor={props.id}>
						<input
							type='text'
							id={props.id}
							name={props.name}
							value={value}
							className={styles.calendar}
							readOnly
						/>
					</label>
					<img
						src={calendarSvg}
						alt='calendar icon'
					/>
				</div>
			)
		);

		const today = new Date();

		return (
			<div
				className={styles.formContainer}
				style={{
					width: props.width ?? '18.46154rem',
				}}
			>
				{props.label && <label htmlFor={props.id}>{props.label}</label>}
				<DatePicker
					selected={props.date}
					name='createdAt'
					maxDate={today}
					onChange={(date) => {
						if (date) {
							props.setDate(date);
						}
					}}
					dayClassName={handleDayHover}
					formatWeekDay={() => {
						return '';
					}}
					dateFormatCalendar='MMM yyyy'
					customInput={<CustomDateInput />}
					dateFormat={'dd MMM yyyy'}
				/>
			</div>
		);
	}
);

export default DateComponent;
