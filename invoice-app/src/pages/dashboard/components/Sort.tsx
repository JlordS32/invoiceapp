import Dropdown, {
	DropdownRef,
	OptionType,
} from '../../../components/button/Dropdown';
import { useEffect, useRef, useState } from 'react';

// rrd
import { useNavigate } from 'react-router-dom';

const Sort = () => {
	const navigate = useNavigate();

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
			label: 'Total',
			value: 'total',
		},
	];

	// state
	const [selectedOption, setSelectedOption] = useState<OptionType[]>([]);

	const searchParams = new URLSearchParams();
	useEffect(() => {
		const valueOfSelectedOption = selectedOption.map((item) => item.value);

		searchParams.append('sort', valueOfSelectedOption.join(','));

		navigate({ search: searchParams.toString() });
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
