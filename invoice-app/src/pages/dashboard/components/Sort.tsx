import Dropdown, {
	DropdownRef,
	OptionType,
} from '../../../components/button/Dropdown';
import { useEffect, useRef, useState } from 'react';

// rrd
import { useNavigate } from 'react-router-dom';

// hero icons
import { BarsArrowDownIcon } from '@heroicons/react/24/outline';

const Sort = () => {
	const navigate = useNavigate();

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

	// state
	const [selectedOption, setSelectedOption] = useState<OptionType[]>([]);

	// icons
	const Icon = <BarsArrowDownIcon width={22} />;

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const valueOfSelectedOption = selectedOption.map((item) => item.value);

		// Check if 'sort' parameter already exists and update its value
		if (searchParams.has('sort') && valueOfSelectedOption.length > 0) {
			searchParams.set('sort', valueOfSelectedOption.join(','));
		} else if (valueOfSelectedOption.length > 0) {
			// Add 'sort' parameter if it doesn't exist
			searchParams.append('sort', valueOfSelectedOption.join(','));
		}

		const search = searchParams.toString();
		
		navigate({ search });
	}, [selectedOption]);

	return (
		<div>
			<Dropdown
				options={sortOptions}
				ref={dropdownSortRef}
				onChange={setSelectedOption}
				smallScreenIcon={Icon}
				label='Sort by'
			/>
		</div>
	);
};

export default Sort;
