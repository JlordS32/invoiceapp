export default function formatCurrency(number: number) {
	// Using the toLocaleString() method with the 'en-US' locale to format the number as currency
	return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
