// styles
import styles from '../../../assets/styles/modules/modal/sub/confirmDelete.module.css';

// components
import Button from '../../button/Button';

// types
interface ConfirmDeleteProps {
	id: string;
	close: () => void;
	goHome: () => void;
}

const ConfirmDelete = ({ id, close, goHome }: ConfirmDeleteProps) => {
	const handleCancel = () => {
		close();
	};

	const handleDelete = () => {
		close();
		goHome();
	};

	return (
		<>
			<h2 className='text--h2'>Confirm Deletion</h2>
			<p className='py-1 body-text-2'>
				Are you sure you want delete invoice{' '}
				<span className='standout'>#{`${id}`}</span>. This ac tion cannot be
				undone.
			</p>
			<div className={styles.confirmDeleteBtn}>
				<Button
					variant='editButton'
					onClick={handleCancel}
				>
					Cancel
				</Button>
				<Button
					variant='deleteButton'
					onClick={handleDelete}
               shorttext='Delete'
				>
					Delete Button
				</Button>
			</div>
		</>
	);
};

export default ConfirmDelete;
