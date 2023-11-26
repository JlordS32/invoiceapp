import { useEffect } from 'react';
import styles from '../../assets/styles/modules/modal/modal.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Modal = () => {
	const { isOpen } = useSelector((state: RootState) => state.modal);

	// disable scrolling
	useEffect(() => {
		document.body.style.overflow = 'hidden';
	}, []);

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
