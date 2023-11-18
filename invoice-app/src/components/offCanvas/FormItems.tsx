// components
import Form from '../forms';

// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvasform.module.css';

import deleteSvg from '../../assets/svg/icon-delete.svg';
import { ItemType } from '../../types';

interface FormItemsProps {
	item: ItemType;
	deleteItem: (itemTodelete: ItemType) => void;
}

const FormItems = ({ item, deleteItem }: FormItemsProps) => {
	return (
		<div className={styles.item}>
			<Form.Text />
			<Form.Text />
			<Form.Text />
			<div
				aria-label='Delete Item'
				className={styles.deleteItem}
			>
				<p>0.00</p>
				<div
					onClick={() => {
						deleteItem(item);
					}}
				>
					<img
						src={deleteSvg}
						alt='Delete Item'
						width={13}
					/>
				</div>
			</div>
		</div>
	);
};

export default FormItems;
