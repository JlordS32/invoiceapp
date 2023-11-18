import styles from '../../assets/styles/modules/offcanvas/offcanvas.module.css';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CreateInvoiceCanvas from './CreateInvoiceCanvas';
import { useEffect } from 'react';

// exportable function

const OffCanvas = () => {
	// redux
	const offCanvasState = useSelector((state: RootState) => state.offCanvas);

	const { isOpen, contentKey } = offCanvasState;

	const getKey = () => {
		switch (contentKey) {
			case 'create-invoice':
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