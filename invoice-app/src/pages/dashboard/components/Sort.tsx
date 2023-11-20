import Dropdown, { DropdownRef } from '../../../components/button/Dropdown';
import { useRef } from 'react';

// hero icons
import { BarsArrowDownIcon } from '@heroicons/react/24/outline';

const Sort = () => {
	// dropdown
	const dropdownSortRef = useRef<DropdownRef>(null);
	const sortOptions = [
		{
			label: 'Name',
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
			label: 'Total',
			value: 'total',
		},
	];

	// icons
	const Icon = <BarsArrowDownIcon width={22} />;

	return (
		<div>
			<Dropdown
				options={sortOptions}
				ref={dropdownSortRef}
				searchParam='sort'
				smallScreenIcon={Icon}
				label='Sort by'
			/>
		</div>
	);
};

export default Sort;
