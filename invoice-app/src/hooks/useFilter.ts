const useFilter = (array: any[], sortOptions: string[]): any[] => {
	if (sortOptions.join('').trim() === '') return array;

	const filteredArray = array.filter((item) =>
		sortOptions.includes(item.status)
	);

	return filteredArray;
};

export default useFilter;
