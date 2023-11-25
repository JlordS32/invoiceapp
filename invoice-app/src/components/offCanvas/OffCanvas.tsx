// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvas.module.css';

// react
import { useEffect } from 'react';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

// components
import CreateInvoiceCanvas from './CreateInvoiceCanvas';
import EditInvoiceCanvas from './EditInvoiceCanvas';

const OffCanvas = () => {
	// redux
	const offCanvasState = useSelector((state: RootState) => state.offCanvas);

	const { isOpen, contentKey } = offCanvasState;

	const getKey = () => {
		switch (contentKey) {
			case 'create-invoice':
				return <CreateInvoiceCanvas />;
			case 'edit-invoice':
				return <EditInvoiceCanvas />;
			default:
				return <CreateInvoiceCanvas />;
		}
	};

	// disable scrolling
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	});


	return (
		<div>
			{isOpen && (
				<div
					className={styles.offcanvas}
					tabIndex={-1}
				>
					{getKey()}
				</div>
			)}
		</div>
	);
};

export default OffCanvas;
