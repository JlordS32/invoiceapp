// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import Form from '../../../forms';

// types
import { BillFromProps } from '.';
const BillForm = ({ handleInputChange }: BillFromProps) => {
	return (
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
	);
};

export default BillForm;
