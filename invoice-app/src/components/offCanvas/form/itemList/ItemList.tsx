// react
import { useEffect } from 'react';

// styles
import styles from '../../../../assets/styles/modules/offcanvas/offcanvasform.module.css';

// components
import FormItems from './FormItems';
import Button from '../../../button/Button';

// libraries
import { useMediaQuery } from 'react-responsive';
import { useAutoAnimate } from '@formkit/auto-animate/react';

// types
import { ItemListProps } from '.';

const ItemList = ({
	update,
	updateErrorForm,
	formError,
	formData,
}: ItemListProps) => {
	const { items } = formData;

	// libraries
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });
	const [animateParent] = useAutoAnimate();

	const handleAddNewItem = () => {
		if (formData && formData.items) {
			const currentItems = formData.items;

			update({
				items: [
					...currentItems,
					{ id: crypto.randomUUID(), name: '', quantity: 0, price: 0 },
				],
			});
		}
	};

	const handleDeleteItem = (id: string) => {
		if (formData && formData.items.length === 1) return;

		if (formData && formData.items) {
			const updatedItems = formData.items.filter((item) => {
				return item.id !== id;
			});

			update({ items: updatedItems });

			return;
		}

		throw new Error('There was a problem deleting your item!');
	};

	useEffect(() => {
		const itemsError = items.map((item) => {
			return {
				id: item.id,
				name: {
					valid: true,
					errorMsg: '',
				},
				quantity: {
					valid: true,
					errorMsg: '',
				},
				price: {
					valid: true,
					errorMsg: '',
				},
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
					{formData &&
						formData.items.map((item, index) => {
							const itemError = Object.entries(formError?.items || {}).filter(
								([_, value]) => {
									return value.id === item.id;
								}
							)[0];
							return (
								<FormItems
									item={item}
									itemError={itemError}
									itemList={items}
									updateItems={update}
									deleteItem={handleDeleteItem}
									key={index}
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
