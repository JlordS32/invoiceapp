import { InvoiceType } from '../types/InvoiceTypes';
import { priceType } from './getTotal';

const extractPrices = (array: InvoiceType): priceType[] => {
	const prices = array.items.map((item) => {
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
