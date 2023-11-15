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
		const searchParams = new URLSearchParams();
		const valueOfSelectedOption = selectedOption.map((item) => item.value);

		const existingParams = new URLSearchParams(location.search);

		existingParams.delete('sort');

		if (valueOfSelectedOption.length > 0) {
			searchParams.set('sort', valueOfSelectedOption.join(','));
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
