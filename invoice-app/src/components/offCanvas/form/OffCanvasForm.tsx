// react
import { useCallback, useEffect, useRef, useState } from 'react';

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
import { FormDataType, FormErrorType, InvoiceType } from '../../../types';
import { areAllValid } from '../../../utilities/areAllValid';
import { usePostData } from '../../../services/api/usePostData';
import { FormTextRef } from '../../forms/Text';

interface OffCanvasFormProps {
	header: string;
	close: () => void;
	data?: InvoiceType;
	updateForm?: (data: InvoiceType) => void;
}

/**
 * Renders an off-canvas form component with the provided header and close function.
 *
 * @param {OffCanvasFormProps} header - The header to display in the form component.
 * @param {() => void} close - The function to close the off-canvas form.
 * @return {JSX.Element} The rendered off-canvas form component.
 */
const OffCanvasForm = ({
	header,
	close,
	data,
	updateForm,
}: OffCanvasFormProps) => {
	// state
	const [formData, setFormData] = useState<FormDataType>(defaultForm);
	const [formError, setFormError] = useState<FormErrorType>(defaultFormError);
	const [formIsSaved, setFormIsSaved] = useState<boolean>();

	// ref
	const inputRef = useRef<FormTextRef>(null);

	/**
	 * Validates the form errors by iterating over the formData object
	 * and calling the validateData function for each value.
	 *
	 * @return {void}
	 */
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

	/**
	 * Updates the form errors based on the provided key, validated value, and type.
	 * If the type is 'string', it sets the form error for the given key to the validated value.
	 * If the type is 'object', it sets the form error for the given key and key2 to the validated value.
	 *
	 * @param {string} key - The key for which the form error needs to be updated.
	 * @param {object} validated - An object containing the validated value and error message.
	 * @param {'string' | 'object'} type - The type of form error to update.
	 * @param {string} [key2] - The second key for which the form error needs to be updated (only applicable if type is 'object').
	 */
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

	const submitData = (status: string) => {
		const data = { ...formData, status: status };

		usePostData('https://invoiceapi.vercel.app/invoices', data).catch(
			(error) => {
				console.error(error);
			}
		);

		close();

		window.scrollTo(0, document.body.scrollHeight);
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

	const handleUpdateFormData = useCallback(
		(data: any) => {
			setFormData({
				...formData,
				...data,
			});
		},
		[formData, formError]
	);

	const handleUpdateFormError = (data: any) => {
		setFormError({
			...formError,
			...data,
		});
	};

	const handleSubmit = useCallback(() => {
		if (formIsSaved) {
			const isValid = areAllValid(formError);
			if (isValid) {
				submitData('pending');
			}
		} else {
			submitData('draft');
		}
	}, [formIsSaved, formData, formError]);

	useEffect(() => {
		if (formIsSaved) {
			validateFormErrors();
		}
	}, [formData]);

	useEffect(() => {
		if (updateForm) {
			updateForm(formData);
		}
	}, [formData]);

	useEffect(() => {
		if (data && data.senderAddress && data.clientAddress) {
			handleUpdateFormData(data);
		}
	}, [data]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
		>
			<h2 className='text--h2'>{header}</h2>
			<BillForm
				handleInputChange={handleInputChange}
				formData={formData}
				formError={formError}
				inputRef={inputRef}
			/>

			<BillTo
				handleInputChange={handleInputChange}
				update={handleUpdateFormData}
				formError={formError}
				inputRef={inputRef}
				formData={formData}
			/>

			<ItemList
				update={handleUpdateFormData}
				updateErrorForm={handleUpdateFormError}
				formError={formError}
				formData={formData}
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
						setFormIsSaved(false);
					}}
					type='submit'
				>
					Save as Draft
				</Button>
				<Button
					type='submit'
					onClick={() => {
						setFormIsSaved(true);
						validateFormErrors();
						inputRef.current?.scrollIntoView();
					}}
				>
					Save & Send
				</Button>
			</div>
		</form>
	);
};

export default OffCanvasForm;
