export function validateData(key: string, data: string, target?: string) {
	// The third parameters will allow me to dynamically choose what to validate without having the key match the switch statements assuming that the target matches the switch statements.
	if (target) {
		key = target;
	}

	switch (key.toLowerCase()) {
		case 'name':
			const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
			return {
				valid: nameRegex.test(data),
				errorMsg: 'Invalid name',
			};
		case 'clientemail':
		case 'email':
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return {
				valid: emailRegex.test(data),
				errorMsg: 'Invalid email address',
			};
		case 'postcode':
			const postcodeRegex = /^(0[289][0-9]{2})|([1-9][0-9]{3})$/i;
			return {
				valid: postcodeRegex.test(data),
				errorMsg: 'Invalid postcode number',
			};
		default:
			const dataNotEmpty = data !== '';
			return {
				valid: dataNotEmpty,
				errorMsg: "Field can't be empty",
			};
	}
}
