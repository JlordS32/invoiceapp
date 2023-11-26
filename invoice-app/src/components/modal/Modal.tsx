// react
import { useEffect } from 'react';

// styles
import styles from '../../assets/styles/modules/modal/modal.module.css';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

// components
import ConfirmDelete from './modalToRender/ConfirmDelete';

const Modal = () => {
	const { isOpen, contentKey } = useSelector((state: RootState) => state.modal);

	// disable scrolling
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	const getKey = () => {
		switch (contentKey) {
			case 'confirm-delete':
				return <ConfirmDelete />;
		}
	};

	return (
		<>
			{isOpen && (
				<div className={styles.modalBackdrop}>
					<div className={styles.modal}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
						doloribus, corrupti ut cupiditate sed quasi, quidem hic perferendis,
						voluptatem tempora temporibus minima! Quis dolorem consequuntur,
						praesentium inventore incidunt quisquam necessitatibus.
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
