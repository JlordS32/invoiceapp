interface valueType {
	quantity: number;
	price: number;
}

export default function getTotal(value: valueType[]): number {
	const total = value.reduce((acc, curr) => {
		return acc + curr.quantity * curr.price;
	}, 0);

	return total;
}
