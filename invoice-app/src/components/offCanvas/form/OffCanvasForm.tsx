// react
import { useEffect, useState } from 'react';

// styles
import thisCanvasStyles from '../../../assets/styles/modules/offcanvas/createinvoicecanvas.module.css';

// components
import Button from '../../button/Button';
import ItemList from './itemList';
import BillTo from './billTo/BillTo';
import BillForm from './billFrom/BillFrom';

// utils
import { validateData } from '../../../utilities/validateData';

// defaults
import { defaultFormError, defaultForm } from './defaultValues/default';

// types
import { FormDataType, FormErrorType } from '../../../types';
import { ItemTypeError } from '../../../types/ItemType';
interface OffCanvasFormProps {
	header: string;
	close: () => void;
}

const OffCanvasForm = ({ header, close }: OffCanvasFormProps) => {
	// state
	const [formData, setFormData] = useState<FormDataType>(defaultForm);
	const [formError, setFormError] = useState<FormErrorType>(defaultFormError);

	// FUNCTIONS
	// util functions

	const validateFormErrors = () => {
		if (formData) {
			Object.entries(formData).forEach(([key, value]) => {
				let validated: any = [];

				if (typeof value === 'string') {
					validated = validateData(key, value);

					updateFormErrors(key, validated, 'string');
				} else if (typeof value === 'object') {
					Object.entries(value).forEach(([key2, value2]) => {
						if (key === 'items') {
							let validatedItem = Object.entries(value2).reduce(
								(acc: any, [key3, value3]) => {
									if (key3 === 'id') {
										return {
											...acc,
											id: value3,
										};
									}

									return {
										...acc,
										[key3]: validateData(key3, value3 as string),
									};
								},
								{}
							);

							validated = [...validated, validatedItem];
						} else {
							validated = validateData(key2, value2);
						}
						updateFormErrors(key, validated, 'object', key2);
					});
				}
			});
		}
	};

	const updateFormErrors = (
		key: string,
		validated: { valid: boolean; errorMsg: string },
		type: 'string' | 'object',
		key2?: string
	) => {
		if (type === 'string') {
			setFormError((prev) => {
				return {
					...prev,
					[key]: validated,
				};
			});
		}

		if (type === 'object') {
			setFormError((prev: any) => {
				if (prev && prev[key] && key2) {
					if (key === 'items') {
						return {
							...prev,
							[key]: validated,
						};
					}

					return {
						...prev,
						[key]: {
							...prev[key],
							[key2]: validated,
						},
					};
				}
			});
		}
	};

	// function to handle events
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

	const handleUpdateFormData = (data: any) => {
		setFormData({
			...formData,
			...data,
		});
	};
	const handleUpdateFormError = (data: any) => {
		setFormError({
			...formError,
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
		validateFormErrors();

		// usePostData('http://localhost:3000/invoices', formData)
		// 	.then((response) => {
		// 		console.log(response);
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});

		window.scrollTo(0, document.body.scrollHeight);
	};

	// useEffect hooks
	// useEffect(() => {
	// 	console.log(formError);
	// 	console.log(formData);
	// }, [formError]);

	useEffect(() => {
		console.log({ formData, formError });
	}, [formData]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
				// close();
			}}
		>
			<h2 className='text--h2'>{header}</h2>
			<BillForm
				handleInputChange={handleInputChange}
				formError={formError}
			/>

			<BillTo
				handleInputChange={handleInputChange}
				update={handleUpdateFormData}
				formError={formError}
			/>

			<ItemList
				update={handleUpdateFormData}
				updateErrorForm={handleUpdateFormError}
				formError={formError}
			/>

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
					type='submit'
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
