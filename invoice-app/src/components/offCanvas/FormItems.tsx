// components
import Form from '../forms';

// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvasform.module.css';

import deleteSvg from '../../assets/svg/icon-delete.svg';

// utilies
import extractPrices from '../../utilities/extractPrices';
import getTotal, { priceType } from '../../utilities/getTotal';

// libraries
import { useMediaQuery } from 'react-responsive';

// types
import { ItemType } from '../../types';
import formatCurrency from '../../utilities/formatCurrencies';
interface FormItemsProps {
	item: ItemType;
	deleteItem: (itemTodelete: ItemType) => void;
}

const FormItems = ({ item, deleteItem }: FormItemsProps) => {
	let price: priceType[] = [
		{
			quantity: 0,
			price: 0,
		},
	];

	if (item.price && item.quantity) {
		price = extractPrices([item]);
	}

	const total = getTotal(price);

	// libraries
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });

	return (
		<div className={styles.item}>
			<Form.Text
				id='name'
				name='name'
				label={!isWide ? 'Item Name' : ''}
			/>
			<Form.Text
				id='quantity'
				name='quantity'
				label={!isWide ? 'Qty.' : ''}
			/>
			<Form.Text
				id='price'
				name='price'
				label={!isWide ? 'Price' : ''}
			/>
			<div
				aria-label='Delete Item'
				className={styles.deleteItem}
			>
				{!isWide && <label htmlFor='someElement'>Total</label>}
				<div>
					<p>{formatCurrency(total)}</p>
					<div
						onClick={() => {
							deleteItem(item);
						}}
						id='someElement'
					>
						<img
							src={deleteSvg}
							alt='Delete Item'
							width={13}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormItems;
