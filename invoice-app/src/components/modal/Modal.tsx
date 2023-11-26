import { useEffect } from 'react';
import styles from '../../assets/styles/modules/modal/modal.module.css';

const Modal = () => {
	// disable scrolling
	useEffect(() => {
		document.body.style.overflow = 'hidden';
	}, []);

	return (
		<div className={styles.modalBackdrop}>
			<div className={styles.modal}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
				doloribus, corrupti ut cupiditate sed quasi, quidem hic perferendis,
				voluptatem tempora temporibus minima! Quis dolorem consequuntur,
				praesentium inventore incidunt quisquam necessitatibus.
			</div>
		</div>
	);
};

export default Modal;
