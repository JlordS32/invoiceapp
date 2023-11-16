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

const CreateInvoiceCanvas = () => {
	const dispatch = useDispatch<AppDispatch>();

	const handleClose = () => {
		dispatch(toggleCanvas());
		dispatch(onLoadCanvas(''));
	};

	return (
		<div className={`${styles.canvas} animate animate--very-slow animate-ease-in-out slideToRight`}>
			<h2 className='text--h2'>Create Invoice</h2>

			<div className={thisCanvasStyles.buttons}>
				<Button variant='editButton' onClick={handleClose}>Discard</Button>
				<Button variant='saveAsDraftButton'>Save as Draft</Button>
				<Button>Save & Send</Button>
			</div>
		</div>
	);
};

export default CreateInvoiceCanvas;
