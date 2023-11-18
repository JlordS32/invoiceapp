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
import { useEffect, useRef, useState } from 'react';
import { FormTextRef } from '../forms/Text';
interface FormItemsProps {
	item: ItemType;
	deleteItem: (itemTodelete: ItemType) => void;
}

const FormItems = ({ item, deleteItem }: FormItemsProps) => {
   // state
	const [total, setTotal] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(0);
	const [price, setPrice] = useState<number>(0);

	// libraries
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });

   useEffect(() => {
      setTotal(price * quantity);
   }, [total, quantity, price]);

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setQuantity(Number(e.target.value));
            }}
				label={!isWide ? 'Qty.' : ''}
			/>
			<Form.Text
				id='price'
				name='price'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
