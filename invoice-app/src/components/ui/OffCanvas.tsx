import styles from '../../assets/styles/modules/offcanvas.module.css';

// redux
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import { useEffect } from 'react';

const OffCanvas = () => {
	// redux
	const offCanvasState = useSelector((state: RootState) => state.offCanvas);

	const { isOpen } = offCanvasState;

	useEffect(() => {
		console.log(isOpen);
	}, [isOpen]);

	return (
		<div>
			{isOpen && (
				<div
					className={styles.offcanvas}
					tabIndex={-1}
				></div>
			)}
		</div>
	);
};

export default OffCanvas;
