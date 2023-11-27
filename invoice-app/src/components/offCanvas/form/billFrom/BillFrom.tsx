// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import Form from '../../../forms';

// types
import { BillFromProps } from '.';
const BillFrom = ({
	handleInputChange,
	formError,
	formData,
	inputRef,
}: BillFromProps) => {
	const { street, city, postCode, country } = formError?.senderAddress ?? {};

	return (
		<section className={styles.billFrom}>
			<h4 className='text--h3'>Bill From</h4>
			<Form.Text
				label='Street Address'
				ref={inputRef}
				name='street'
				id='senderStreet'
				value={formData.senderAddress.street ?? ''}
				isValid={street.valid ?? false}
				errorMsg={street.errorMsg ?? ''}
				onChange={(e) => {
					handleInputChange(e, 'senderAddress');
				}}
				width='100%'
			/>

			<div className={styles.billFromfieldset}>
				<div className={styles.billFromfieldsetInner}>
					<Form.Text
						label='City'
						ref={inputRef}
						value={formData.senderAddress.city ?? ''}
						width='100%'
						name='city'
						id='senderCity'
						isValid={city.valid ?? false}
						errorMsg={city.errorMsg ?? ''}
						onChange={(e) => {
							handleInputChange(e, 'senderAddress');
						}}
					/>
				</div>
				<div className={styles.billFromfieldsetInner}>
					<Form.Text
						label='Post Code'
						ref={inputRef}
						value={formData.senderAddress.postCode ?? ''}
						width='100%'
						name='postCode'
						id='senderPostCode'
						isValid={postCode.valid ?? false}
						errorMsg={postCode.errorMsg ?? ''}
						onChange={(e) => {
							handleInputChange(e, 'senderAddress');
						}}
					/>
				</div>
				<div className={styles.billFromfieldsetInner}>
					<Form.Text
						label='Country'
						ref={inputRef}
						value={formData.senderAddress.country ?? ''}
						width='100%'
						name='country'
						id='senderCountry'
						isValid={country.valid ?? false}
						errorMsg={country.errorMsg ?? ''}
						onChange={(e) => {
							handleInputChange(e, 'senderAddress');
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default BillFrom;
