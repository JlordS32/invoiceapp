// react
import { useRef } from 'react';

// components
import Dropdown, { DropdownRef } from '../../../components/button/Dropdown';

// heroicons
import { FunnelIcon } from '@heroicons/react/24/solid';

const Filter = () => {
	const dropdownFilterRef = useRef<DropdownRef>(null);
	const filterOptions = [
		{
			label: 'Draft',
			value: 'draft',
		},
		{
			label: 'Pending',
			value: 'pending',
		},
		{
			label: 'Paid',
			value: 'paid',
		},
	];

	const Icon = <FunnelIcon width={22} />;

	return (
		<div>
			<Dropdown
				options={filterOptions}
				ref={dropdownFilterRef}
				searchParam='filter'
				label='Filter by status'
				smallScreenIcon={Icon}
			/>
		</div>
	);
};

export default Filter;
