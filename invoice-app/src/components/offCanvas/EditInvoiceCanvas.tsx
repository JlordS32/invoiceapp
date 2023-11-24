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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchDatabyId } from '../../services/api/useFetch';

const EditInvoiceCanvas = () => {
	const params = useParams();
	const dispatch = useDispatch<AppDispatch>();

	// state
	const [data, setData] = useState([]);

	const handleClose = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas(''));
	};

	const handleSave = () => {
		handleClose();
	};

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
			/>

			<div className={thisCanvasStyles.buttons}>
				<Button
					variant='editButton'
					onClick={handleClose}
				>
					Cancel
				</Button>
				<Button
					onClick={() => {
						console.log(data);
					}}
				>
					Log it
				</Button>
				<Button onClick={handleSave}>Save Changes</Button>
			</div>
		</div>
	);
};

export default EditInvoiceCanvas;
