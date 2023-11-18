// components
import Form from '../forms';

// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvasform.module.css';

import deleteSvg from '../../assets/svg/icon-delete.svg';

// libraries
import { useMediaQuery } from 'react-responsive';

// types
import { ItemType } from '../../types';
import formatCurrency from '../../utilities/formatCurrencies';
import { useEffect, useState } from 'react';
interface FormItemsProps {
	item: ItemType;
	deleteItem: (itemTodelete: ItemType) => void;
	itemList: ItemType[];
	setItemList: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

const FormItems = ({
	item,
	deleteItem,
	itemList,
	setItemList,
}: FormItemsProps) => {
	// state
	const [itemName, setItemName] = useState<string>(item.name);
	const [quantity, setQuantity] = useState<number>(item.quantity as number);
	const [price, setPrice] = useState<number>(item.price as number);
	const [total, setTotal] = useState<number>(0);

	// libraries
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });

	// Calculate
	useEffect(() => {
		setTotal(quantity * price);
	}, [total, quantity, price]);

	useEffect(() => {
		const updatedData = itemList.map((itemlist) => {
			if (itemlist.id === item.id) {
				return { ...itemlist, name: itemName, quantity, price };
			}
			return itemlist;
		});
		setItemList(updatedData);
	}, [quantity, price, itemName]);

	return (
		<div className={styles.item}>
			<Form.Text
				id='name'
				name='name'
				defaultValue={item.name}
				onChange={(e) => {
					setItemName(e.target.value);
				}}
				label={!isWide ? 'Item Name' : ''}
			/>
			<Form.Text
				id='quantity'
				name='quantity'
				defaultValue={`${item.quantity}`}
				onChange={(e) => {
					setQuantity(Number(e.target.value));
				}}
				label={!isWide ? 'Qty.' : ''}
			/>
			<Form.Text
				id='price'
				name='price'
				defaultValue={`${item.price}`}
				onChange={(e) => {
					setPrice(Number(e.target.value));
				}}
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
