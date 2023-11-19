// react
import { useEffect, useState } from 'react';

// components
import ItemList from './itemList';
import BillTo from './billTo/BillTo';
import BillForm from './billFrom/BillFrom';

// types
import { FormDataType, FormErrorType } from '../../../types';
interface OffCanvasFormProps {
	header: string;
}

const OffCanvasForm = ({ header }: OffCanvasFormProps) => {
	// state
	const [formData, setFormData] = useState<FormDataType>();
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

	useEffect(() => {
		console.log(formData);
	}, [formError, formData]);

	return (
		<form>
			<h2 className='text--h2'>{header}</h2>
			<BillForm handleInputChange={handleInputChange} />

			<BillTo
				handleInputChange={handleInputChange}
				formData={formData}
				setFormData={setFormData}
			/>

			<ItemList />
		</form>
	);
};

export default OffCanvasForm;
