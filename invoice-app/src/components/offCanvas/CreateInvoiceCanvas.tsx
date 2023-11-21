// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvas.module.css';

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

	return (
		<div
			className={`${styles.canvas} animate animate--very-slow animate-ease-in-out slideToRight`}
		>
			<OffCanvasForm header='Create Form' close={handleClose}/>
		</div>
	);
};

export default CreateInvoiceCanvas;
