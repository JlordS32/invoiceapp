export function generateInvoiceId(): string {
	const length: number = 6;
	const alphanumericChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let numericalPortion: string = '';

	for (let i: number = 0; i < length; i++) {
		const randomIndex: number = Math.floor(
			Math.random() * alphanumericChars.length
		);
		numericalPortion += alphanumericChars.charAt(randomIndex);
	}

	return numericalPortion;
}

export function isValidInvoiceId(invoiceId: string): boolean {
	const regex: RegExp = /^[A-Z0-9]{6}$/;
	return regex.test(invoiceId);
}
