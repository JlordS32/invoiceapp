const useSort = (array: any[], sortOptions: string[]): any[] => {
	const sorted = [...array].sort((a, b) => {
		for (let i = 0; i < sortOptions.length; i++) {
			const sortBy = sortOptions[i];
			if (a[sortBy] < b[sortBy]) {
				return -1;
			}
			if (a[sortBy] > b[sortBy]) {
				return 1;
			}
		}
		return 0;
	});

	return sorted ?? [];
};

export default useSort;
