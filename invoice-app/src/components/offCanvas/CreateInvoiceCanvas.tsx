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

const CreateInvoiceCanvas = () => {
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas(''));
	};

	const handleSaveDraft = () => {
		handleClose();
	};

	const handleSave = () => {
		handleClose();
	};

	return (
		<div
			className={`${styles.canvas} animate animate--very-slow animate-ease-in-out slideToRight`}
		>
			<OffCanvasForm header='Create Form' />

			<div className={thisCanvasStyles.buttons}>
				<Button
					variant='editButton'
					onClick={handleClose}
				>
					Discard
				</Button>
				<Button
					variant='saveAsDraftButton'
					onClick={handleSaveDraft}
				>
					Save as Draft
				</Button>
				<Button onClick={handleSave}>Save & Send</Button>
			</div>
		</div>
	);
};

export default CreateInvoiceCanvas;
