// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvas.module.css';
import thisCanvasStyles from '../../assets/styles/modules/offcanvas/createinvoicecanvas.module.css';

// component
import Button from '../button/Button';

// redux
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
	toggleCanvas,
	onLoadCanvas,
} from '../../redux/offcanvas/offCanvasSlice';
import OffCanvasForm from './form/OffCanvasForm';

// rrd
import { useParams, useNavigate } from 'react-router-dom';

// react
import { useEffect, useState } from 'react';

// services
import { usePostDataById } from '../../services/api/usePostData';
import { useFetchDatabyId } from '../../services/api/useFetch';

const EditInvoiceCanvas = () => {
	const navigate = useNavigate();
	const params = useParams();
	const dispatch = useDispatch<AppDispatch>();

	// state
	const [data, setData] = useState({});
	const [editedFormData, setEditedFormData] = useState({});

	// utils
	const updateForm = (data: Record<string, any>) => {
		setEditedFormData(data);
	};

	const submitData = async () => {
		if (editedFormData) {
			const filteredData = Object.entries(editedFormData).filter(
				([key, _]) => key !== 'id'
			);

			await usePostDataById(
				'https://invoiceapi.vercel.app/invoices',
				params.id as string,
				Object.fromEntries(filteredData)
			);

			setData(editedFormData);
			navigate(0);
		}
	};

	// event handlers
	const handleClose = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas(''));
	};

	const handleSave = () => {
		submitData();
		handleClose();
	};

	// useEffect
	useEffect(() => {
		console.log(editedFormData);
	}, [editedFormData]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await useFetchDatabyId(
				'https://invoiceapi.vercel.app/invoices',
				{
					id: params.id as string,
				}
			);

			setData(data?.invoice ?? {});
		};

		fetchData();
	}, []);

	return (
		<div
			className={`${styles.canvas} animate animate--very-slow animate-ease-in-out slideToRight`}
		>
			<OffCanvasForm
				header='Edit Form'
				close={handleClose}
				data={data}
				updateForm={updateForm}
			/>

			<div className={thisCanvasStyles.buttons}>
				<Button
					variant='editButton'
					onClick={handleClose}
				>
					Cancel
				</Button>
				<Button onClick={handleSave}>Save Changes</Button>
			</div>
		</div>
	);
};

export default EditInvoiceCanvas;
