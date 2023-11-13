import Dropdown, { DropdownRef } from '../../../components/button/Dropdown';
import { useEffect, useRef, useState } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { updateInvoiceItems } from '../../../redux/invoice/invoiceSlice';

// hooks
import useSort from '../../../hooks/useSort';

const Sort = () => {
	// dropdown
	const dropdownSortRef = useRef<DropdownRef>(null);
	const sortOptions = [
		{
			label: 'Client Name',
			value: 'clientName',
		},
		{
			label: 'Status',
			value: 'status',
		},
		{
			label: 'Due Date',
			value: 'paymentDue',
		},
		{
			price: 'Total',
			value: 'total',
		},
	];

	// state
	const [selectedOption, setSelectedOption] = useState<string[]>([]);

	// redux
	const invoiceData = useSelector((state: RootState) => state.invoice);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		console.log('sdf');

		if (dropdownSortRef.current) {
			const sortedData = useSort(invoiceData.invoiceItems, selectedOption);
			dispatch(updateInvoiceItems(sortedData));
		}
	}, [selectedOption]);

	return (
		<div>
			<Dropdown
				options={sortOptions}
				ref={dropdownSortRef}
				onChange={setSelectedOption}
				label='Sort by'
			/>
		</div>
	);
};

export default Sort;
