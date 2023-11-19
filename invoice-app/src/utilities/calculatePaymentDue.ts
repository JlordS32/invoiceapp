export function calculatePaymentDueDate(
	createdAt: Date,
	paymentTerm: number
): string {
	const dueDate = new Date(createdAt);
	dueDate.setDate(dueDate.getDate() + paymentTerm);

	const formattedDueDate = `${
		dueDate.getMonth() + 1
	}-${dueDate.getDate()}-${dueDate.getFullYear()}`;
	return formattedDueDate;
}
