export const useLocalStorage = (key: string): string => {
	return JSON.parse(localStorage.getItem(key) ?? 'Failed to parse JSON!');
};

export const useCreateLocalStorage = (key: string, value: any): void => {
	localStorage.setItem(key, JSON.stringify(value));
};
