// react
import { useEffect, useState } from 'react';

// styles
import styles from '../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import Form from '../../forms';
import ItemList from './itemList';

// libraries
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useMediaQuery } from 'react-responsive';

// types
import { FormDataType, FormErrorType } from '../../../types';
import formatDate from '../../../utilities/formatDate';

interface OffCanvasFormProps {
	header: string;
}

const OffCanvasForm = ({ header }: OffCanvasFormProps) => {
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

	// libraries
	const [animateParent] = useAutoAnimate();
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });

	// state
	const [formData, setFormData] = useState<FormDataType>();
	const [formError, setFormError] = useState<FormErrorType[]>();
	const [formDate, setFormDate] = useState<Date>(new Date());	

	// function to handle formData
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => {
		const { name, value } = e.target;
		if (nest) {
			setFormData((prev: any) => {
				if (prev && prev[nest]) {
					return {
						...prev,
						[nest]: {
							...(prev[nest] as Object),
							[name]: value,
						},
					};
				} else {
					return {
						...prev,
						[nest]: {
							[name]: value,
						},
					};
				}
			});
		} else {
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	// // Use effects
	// useEffect(() => {
	// 	setFormData({
	// 		...formData,
	// 		items,
	// 	});
	// }, [items]);

	useEffect(() => {
		console.log(formData);
	}, [formError, formData]);

	useEffect(() => {
		setFormData({
			...formData,
			createdAt: formatDate(formDate.toString()),
		});
	}, [formDate]);

	return (
		<form>
			<h2 className='text--h2'>{header}</h2>
			<section className={styles.billFrom}>
				<h4 className='text--h3'>Bill From</h4>
				<Form.Text
					label='Street Address'
					name='street'
					onChange={(e) => {
						handleInputChange(e, 'senderAddress');
					}}
					width='100%'
				/>

				<div className={styles.billFromfieldset}>
					<div className={styles.billFromfieldsetInner}>
						<Form.Text
							label='City'
							width='100%'
							name='city'
							onChange={(e) => {
								handleInputChange(e, 'senderAddress');
							}}
						/>
					</div>
					<div className={styles.billFromfieldsetInner}>
						<Form.Text
							label='Post Code'
							width='100%'
							name='postCode'
							onChange={(e) => {
								handleInputChange(e, 'senderAddress');
							}}
						/>
					</div>
					<div className={styles.billFromfieldsetInner}>
						<Form.Text
							label='Country'
							width='100%'
							name='country'
							onChange={(e) => {
								handleInputChange(e, 'senderAddress');
							}}
						/>
					</div>
				</div>
			</section>

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

			<ItemList />
		</form>
	);
};

export default OffCanvasForm;
