// react
import { useEffect, useState } from 'react';

// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import FormItems from './FormItems';
import Button from '../../../button/Button';

// libraries
import { useMediaQuery } from 'react-responsive';
import { useAutoAnimate } from '@formkit/auto-animate/react';

// types
import { ItemType } from '../../../../types';
import { ItemListProps } from '.';

const ItemList = ({ update, updateErrorForm }: ItemListProps) => {
	// default
	const defaultItem = [
		{
			id: crypto.randomUUID(),
			name: '',
			quantity: 0,
			price: 0,
		},
	];

	// libraries
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });
	const [animateParent] = useAutoAnimate();

	// state
	const [items, setItems] = useState<ItemType[]>(defaultItem);

	// FUNCTIONS
	// function to handle Adding items for offCanvas
	const handleAddNewItem = () => {
		setItems([
			...items,
			{
				id: crypto.randomUUID(),
				name: '',
				quantity: 0,
				price: 0,
			},
		]);
	};

	// function to handle deleting Items
	const handleDeleteItem = (itemToDelete: ItemType) => {
		if (items.length > 1) {
			const filteredItem = items.filter((item) => item.id !== itemToDelete.id);

			setItems(filteredItem);
		}

		return;
	};

	// useEffect
	useEffect(() => {
		setTimeout(() => {
			update({
				items: items,
			});
		}, 100);
	}, [items]);

	useEffect(() => {
		const itemsError = items.map((item) => {
			return {
				id: item.id,
				error: false,
				errorMsg: '',
			};
		});
		
		updateErrorForm({
			items: itemsError,
		});
	}, [items]);

	return (
		<section className={styles.itemList}>
			<h2 className='text--h2'>Item List</h2>

			<div className={styles.itemListFieldset}>
				{isWide && (
					<div className={styles.fieldsetHeader}>
						<p>Item Name</p>
						<p>Qty.</p>
						<p>Price</p>
						<p>Total</p>
					</div>
				)}

				<div
					className={styles.itemsWrapper}
					ref={animateParent}
				>
					{items.map((item) => {
						return (
							<FormItems
								item={item}
								itemList={items}
								setItemList={setItems}
								deleteItem={handleDeleteItem}
								key={item.id}
							/>
						);
					})}
				</div>

				<div className={styles.addNewItem}>
					<Button
						width='100%'
						type='button'
						variant='editButton'
						onClick={handleAddNewItem}
					>
						+ Add New Item
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ItemList;
