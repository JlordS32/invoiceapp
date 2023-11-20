// react
import { useRef, useState, useEffect } from 'react';

// components
import Dropdown, {
	DropdownRef,
	OptionType,
} from '../../../components/button/Dropdown';

// rrd
import { useNavigate } from 'react-router-dom';

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

	// rrd navigate
	const navigate = useNavigate();

	// state
	const [selectedOption, setSelectedOption] = useState<OptionType[]>([]);

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const valueOfSelectedOption = selectedOption.map((item) => item.value);

		// Check if 'sort' parameter already exists and update its value
		if (searchParams.has('filter') && valueOfSelectedOption.length > 0) {
			searchParams.set('filter', valueOfSelectedOption.join(','));
		} else if (valueOfSelectedOption.length > 0) {
			// Add 'sort' parameter if it doesn't exist
			searchParams.append('filter', valueOfSelectedOption.join(','));
		}

		const search = searchParams.toString();

		navigate({ search });
	}, [selectedOption]);

	const Icon = <FunnelIcon width={22} />;

	return (
		<div>
			<Dropdown
				options={filterOptions}
				ref={dropdownFilterRef}
				setSelectedOption={setSelectedOption}
				selectedOption={selectedOption}
				label='Filter by status'
				smallScreenIcon={Icon}
			/>
		</div>
	);
};

export default Filter;
