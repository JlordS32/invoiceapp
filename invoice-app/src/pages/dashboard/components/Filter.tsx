// react
import { useRef, useState, useEffect } from 'react';

// components
import Dropdown, {
	DropdownRef,
	OptionType,
} from '../../../components/button/Dropdown';

// rrd
import { useNavigate } from 'react-router-dom';

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
		const searchParams = new URLSearchParams();
		const valueOfSelectedOption = selectedOption.map((item) => item.value);

		const existingParams = new URLSearchParams(location.search);

		// Remove duplicate parameters
		existingParams.delete('filter');

		if (valueOfSelectedOption.length > 0) {
			searchParams.set('filter', valueOfSelectedOption.join(','));
		}

		let search = existingParams.toString();

		if (searchParams.toString()) {
			search += search
				? '&' + searchParams.toString()
				: searchParams.toString();
		}

		navigate({ search });
	}, [selectedOption]);

	return (
		<div>
			<Dropdown
				options={filterOptions}
				ref={dropdownFilterRef}
				onChange={setSelectedOption}
				label='Filter by status'
			/>
		</div>
	);
};

export default Filter;
