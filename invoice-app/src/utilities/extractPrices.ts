import { priceType } from './getTotal';

const extractPrices = (array: any): priceType[] => {
	const prices = array.map((item: any) => {
		return {
			quantity: item.quantity,
			price: item.price,
		};
	}) ?? {
		quantity: 0,
		price: 0,
	};

	return prices;
};

export default extractPrices;
