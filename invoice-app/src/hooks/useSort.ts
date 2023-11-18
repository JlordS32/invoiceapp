import extractPrices from '../utilities/extractPrices';
import getTotal from '../utilities/getTotal';

const useSort = (array: any[], sortOptions: string[]): any[] => {
	const sorted = [...array].sort((a, b) => {
		for (let i = 0; i < sortOptions.length; i++) {
			const sortBy = sortOptions[i];

			// I have to manually create a condition for total as the JSON array contains
			// an array of items which matches `priceType` for each object. The rest should be fine.
			// I have made this into switch statement for scalability.
			switch (sortBy) {
				case 'total':
					if (getTotal(extractPrices(a.items)) < getTotal(extractPrices(b.items))) {
						return -1;
					}
					if (getTotal(extractPrices(a.items)) > getTotal(extractPrices(b.items))) {
						return 1;
					}
					break;
				default:
					if (a[sortBy] < b[sortBy]) {
						return -1;
					}
					if (a[sortBy] > b[sortBy]) {
						return 1;
					}
					break;
			}
		}
		return 0;
	});

	return sorted ?? [];
};

export default useSort;
