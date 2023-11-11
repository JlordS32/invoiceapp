export default function formateDate(inputDate: string) {
	const date = new Date(inputDate);

	if (isNaN(date.getTime())) {
		// handle invalid date
		return 'Invalid Date';
	}

	const formattedDate = new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}).format(date);

	return formattedDate;
}
