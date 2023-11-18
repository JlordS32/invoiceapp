// react
import { useEffect, useState } from 'react';

// styles
import styles from '../../assets/styles/modules/offcanvas/offcanvasform.module.css';
import Button from '../button/Button';
import Form from '../forms';

// libraries
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useMediaQuery } from 'react-responsive';

// types
import { ItemType } from '../../types';
import FormItems from './FormItems';

const OffCanvasForm = () => {
	// defaults
	const options = [
		{
			value: '30',
			label: 'Next 30 Days',
		},
		{
			value: '14',
			label: 'Next 14 Days',
		},
		{
			value: '7',
			label: 'Next 7 Days',
		},
		{
			value: '1',
			label: 'Next 1 Day',
		},
	];

	const defaultItem = [
		{
			id: crypto.randomUUID(),
			name: '',
			quantity: 22,
			price: 22,
		},
	];

	// libraries
	const [animateParent] = useAutoAnimate();
	const isWide = useMediaQuery({ query: '(min-width: 620px)' });

	// state
	const [items, setItems] = useState<ItemType[]>(defaultItem);

	const handleAddNewItem = () => {
		setItems([
			...items,
			{
				id: crypto.randomUUID(),
				name: '',
				quantity: null,
				price: null,
			},
		]);
	};

	const handleDeleteItem = (itemToDelete: ItemType) => {
		if (items.length > 1) {
			const filteredItem = items.filter((item) => item.id !== itemToDelete.id);

			setItems(filteredItem);
		}

		return;
	};

	useEffect(() => {
		console.log(items);
	}, [items]);

	return (
		<>
			<section className={styles.billFrom}>
				<h4 className='text--h3'>Bill From</h4>
				<Form.Text
					label='Street Address'
					width='100%'
				/>

				<div className={styles.billFromfieldset}>
					<div className={styles.billFromfieldsetInner}>
						<Form.Text
							label='City'
							width='100%'
						/>
					</div>
					<div className={styles.billFromfieldsetInner}>
						<Form.Text
							label='Post Code'
							width='100%'
						/>
					</div>
					<div className={styles.billFromfieldsetInner}>
						<Form.Text
							label='Country'
							width='100%'
						/>
					</div>
				</div>
			</section>

			<section className={styles.billTo}>
				<h4 className='text--h3'>Bill To</h4>
				<div className='d-flex flex-column gap-2'>
					<Form.Text
						label={`Client's Name`}
						width='100%'
					/>
					<Form.Text
						label={`Client's Email`}
						width='100%'
					/>
					<Form.Text
						label='Street Address'
						width='100%'
					/>
				</div>
				<div className={styles.billTofieldset}>
					<div className={styles.billTofieldsetInner}>
						<Form.Text
							label='City'
							width='100%'
						/>
					</div>
					<div className={styles.billTofieldsetInner}>
						<Form.Text
							label='Post Code'
							width='100%'
						/>
					</div>
					<div className={styles.billTofieldsetInner}>
						<Form.Text
							label='Country'
							width='100%'
						/>
					</div>
				</div>

				<div className='d-flex gap-2 pt-4'>
					<Form.Date label='Invoice Date' />
					<Form.Select
						label='Payment Terms'
						options={options}
					/>
				</div>

				<div className='pt-2'>
					<Form.Text
						label='Project Description'
						width='100%'
					/>
				</div>
			</section>

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
		</>
	);
};

export default OffCanvasForm;
