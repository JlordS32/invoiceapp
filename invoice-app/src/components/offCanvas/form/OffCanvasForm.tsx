// react
import { useState } from 'react';

// styles
import thisCanvasStyles from '../../../assets/styles/modules/offcanvas/createinvoicecanvas.module.css';

// component
import Button from '../../button/Button';

// components
import ItemList from './itemList';
import BillTo from './billTo/BillTo';
import BillForm from './billFrom/BillFrom';

// types
import { FormDataType, FormErrorType } from '../../../types';
import { usePostData } from '../../../services/api/usePostData';
interface OffCanvasFormProps {
	header: string;
	close: () => void;
}

const OffCanvasForm = ({ header, close }: OffCanvasFormProps) => {
	// state
	const [formData, setFormData] = useState<FormDataType>();

	// TODO : Add Form error handling, including styles
	const [formError, setFormError] = useState<FormErrorType[]>();

	// function to handle formData
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		nest?: string | null
	) => {
		const { name, value } = e.target;

		console.log({ name, value });

		if (nest) {
			setFormData((prev: any) => {
				if (prev && prev[nest]) {
					return {
						...prev,
						[nest]: {
							...prev[nest],
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

	const handleUpdateFormData = (data: FormDataType) => {
		setFormData({
			...formData,
			...data,
		});
	};

	const handleSave = (status: string) => {
		setFormData({
			...formData,
			status: status,
		});
	};

	const handleSubmit = () => {
		usePostData('http://localhost:3000/invoices', formData)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});

		window.scrollTo(0, document.body.scrollHeight);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
				close();
			}}
		>
			<h2 className='text--h2'>{header}</h2>
			<BillForm handleInputChange={handleInputChange} />

			<BillTo
				handleInputChange={handleInputChange}
				update={handleUpdateFormData}
			/>

			<ItemList update={handleUpdateFormData} />

			<div className={thisCanvasStyles.buttons}>
				<Button
					variant='editButton'
					onClick={close}
					type='button'
				>
					Discard
				</Button>
				<Button
					variant='saveAsDraftButton'
					onClick={() => {
						handleSave('draft');
					}}
					type='button'
				>
					Save as Draft
				</Button>
				<Button
					type='submit'
					onClick={() => handleSave('pending')}
				>
					Save & Send
				</Button>
			</div>
		</form>
	);
};

export default OffCanvasForm;
