// react
import { useState, useEffect } from 'react';

// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import Form from '../../../forms';

// utils
import formatDate from '../../../../utilities/formatDate';
import { BillToProps } from '.';

const BillTo = ({ handleInputChange, setFormData, formData }: BillToProps) => {
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

	useEffect(() => {
		setFormData({
			...formData,
			createdAt: formatDate(formDate.toString()),
		});
	}, [formDate]);

	return (
		<section className={styles.billTo}>
			<h4 className='text--h3'>Bill To</h4>
			<div className='d-flex flex-column gap-2'>
				<Form.Text
					label={`Client's Name`}
					width='100%'
					name='clientName'
					onChange={handleInputChange}
				/>
				<Form.Text
					label={`Client's Email`}
					width='100%'
					name='clientEmail'
					onChange={handleInputChange}
				/>
				<Form.Text
					label='Street Address'
					width='100%'
					name='clientStreet'
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
						onChange={(e) => {
							handleInputChange(e, 'clientAddress');
						}}
					/>
				</div>
				<div className={styles.billTofieldsetInner}>
					<Form.Text
						label='Post Code'
						width='100%'
						name='postcode'
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
					options={options}
				/>
			</div>

			<div className='pt-2'>
				<Form.Text
					label='Project Description'
					width='100%'
					name='description'
					onChange={handleInputChange}
				/>
			</div>
		</section>
	);
};

export default BillTo;
