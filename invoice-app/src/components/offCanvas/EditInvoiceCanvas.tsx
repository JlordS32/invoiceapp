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

const EditInvoiceCanvas = () => {
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas(''));
	};

	const handleSave = () => {
		handleClose();
	};

	return (
		<div
			className={`${styles.canvas} animate animate--very-slow animate-ease-in-out slideToRight`}
		>
			<OffCanvasForm header='Edit Form' close={handleClose} />

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
