// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import Form from '../../../forms';

// types
import { BillFromProps } from '.';
const BillForm = ({ handleInputChange, formError }: BillFromProps) => {
	const { street, city, postCode, country } = formError?.senderAddress ?? {};

	return (
		<section className={styles.billFrom}>
			<h4 className='text--h3'>Bill From</h4>
			<Form.Text
				label='Street Address'
				name='street'
				isValid={street.valid ?? false}
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
						isValid={city.valid ?? false}
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
						isValid={postCode.valid ?? false}
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
						isValid={country.valid ?? false}
						onChange={(e) => {
							handleInputChange(e, 'senderAddress');
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default BillForm;
