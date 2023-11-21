// react
import { useState, useEffect, useRef } from 'react';

// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import Form from '../../../forms';
import { FormSelectRef } from '../../../forms/Select';

// utils
import formatDate from '../../../../utilities/formatDate';
import { calculatePaymentDueDate } from '../../../../utilities/calculatePaymentDue';

// types
import { BillToProps } from '.';
import { OptionType } from '../../../button/Dropdown';
const BillTo = ({ handleInputChange, update, formError }: BillToProps) => {
	// defaults
	const options = [
		{
			value: '30',
			label: 'Next 30 Days',
		},
		{
			value: '14',
			label: 'Next 14 Days',
		},
		{
			value: '7',
			label: 'Next 7 Days',
		},
		{
			value: '1',
			label: 'Next 1 Day',
		},
	];

	// state
	const [formDate, setFormDate] = useState<Date>(new Date());
	const [selectedValue, setSelectedValue] = useState<string>('30');

	// ref
	const OptionRef = useRef<FormSelectRef>(null);

	// FUNCTIONS
	const handleOnChange = (option: OptionType | null) => {
		setSelectedValue(option?.value ?? '');
	};

	// useEffect hooks
	useEffect(() => {
		const newData = {
			createdAt: formatDate(formDate.toString()),
			paymentTerm: selectedValue,
			paymentDue: calculatePaymentDueDate(formDate, Number(selectedValue)),
		};

		update(newData);
	}, [formDate, selectedValue]);

	// DESTRUCTED FORM ERRORS
	const { street, city, postCode, country } = formError?.clientAddress ?? {};
	const { clientName, clientEmail, description } = formError ?? {};

	return (
		<section className={styles.billTo}>
			<h4 className='text--h3'>Bill To</h4>
			<div className='d-flex flex-column gap-2'>
				<Form.Text
					label={`Client's Name`}
					width='100%'
					name='clientName'
					isValid={clientName?.valid ?? false}
					errorMsg={clientName?.errorMsg ?? ''}
					onChange={handleInputChange}
				/>
				<Form.Text
					label={`Client's Email`}
					width='100%'
					name='clientEmail'
					isValid={clientEmail?.valid ?? false}
					errorMsg={clientEmail?.errorMsg ?? ''}
					onChange={handleInputChange}
				/>
				<Form.Text
					label='Street Address'
					width='100%'
					isValid={street?.valid ?? false}
					errorMsg={street?.errorMsg ?? ''}
					name='street'
					onChange={(e) => {
						handleInputChange(e, 'clientAddress');
					}}
				/>
			</div>
			<div className={styles.billTofieldset}>
				<div className={styles.billTofieldsetInner}>
					<Form.Text
						label='City'
						width='100%'
						name='city'
						isValid={city?.valid ?? false}
						errorMsg={city?.errorMsg ?? ''}
						onChange={(e) => {
							handleInputChange(e, 'clientAddress');
						}}
					/>
				</div>
				<div className={styles.billTofieldsetInner}>
					<Form.Text
						label='Post Code'
						width='100%'
						name='postCode'
						isValid={postCode?.valid ?? false}
						errorMsg={postCode?.errorMsg ?? ''}
						onChange={(e) => {
							handleInputChange(e, 'clientAddress');
						}}
					/>
				</div>
				<div className={styles.billTofieldsetInner}>
					<Form.Text
						label='Country'
						width='100%'
						name='country'
						isValid={country?.valid ?? false}
						errorMsg={country?.errorMsg ?? ''}
						onChange={(e) => {
							handleInputChange(e, 'clientAddress');
						}}
					/>
				</div>
			</div>

			<div className='d-flex gap-2 pt-4'>
				<Form.Date
					label='Invoice Date'
					date={formDate}
					setDate={setFormDate}
				/>
				<Form.Select
					label='Payment Terms'
					onChange={handleOnChange}
					selectedValue={selectedValue}
					options={options}
					ref={OptionRef}
				/>
			</div>

			<div className='pt-2'>
				<Form.Text
					label='Project Description'
					width='100%'
					name='description'
					errorMsg={description?.errorMsg ?? ''}
					isValid={description?.valid ?? false}
					onChange={handleInputChange}
				/>
			</div>
		</section>
	);
};

export default BillTo;
