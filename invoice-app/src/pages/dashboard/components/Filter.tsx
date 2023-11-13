import Dropdown, { DropdownRef } from '../../../components/button/Dropdown';
import { useRef } from 'react';

// redux

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { getInvoiceAsync } from '../../../redux/invoice/invoiceSlice';

const Filter = () => {
	const filterOptions = ['draft', 'pending', 'paid'];
	const dropdownFilterRef = useRef<DropdownRef>(null);

	return (
		<div>
			<Dropdown
				options={filterOptions}
				ref={dropdownFilterRef}
				label='Filter by status'
			/>
		</div>
	);
};

export default Filter;
