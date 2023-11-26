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
	const { isOpen, contentKey } = useSelector(
		(state: RootState) => state.offCanvas
	);

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
	}, [isOpen]);

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
