import axios from 'axios';

export const useFetchData = async (url: string) => {
	return await getData(url);
};

export const useFetchDatabyId = (
	url: string,
	params: {
		id: string;
	}
) => {
	return getData(url, params);
};
const getData = async (url: string, params = {}) => {
	return await axios({
		url: url,
		method: 'GET',
		params: params,
	}).then((res: any) => res.data);
};
