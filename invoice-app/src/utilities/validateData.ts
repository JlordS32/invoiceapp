/**
 * Validates the given data based on the provided key.
 * @param {string} key - The key indicating the type of data to validate.
 * @param {string} data - The data to be validated.
 * @param {string} target - Optional target key to override the original key.
 * @returns {object} - An object containing the validation result and error message.
 */
export function validateData(key: string, data: string, target?: string) {
	// The third parameters will allow me to dynamically choose what to validate without having the key match the switch statements assuming that the target matches the switch statements.
	if (target) {
		key = target;
	}

	switch (key.toLowerCase()) {
		case 'name':
			const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
			const isName = nameRegex.test(data);
			return {
				valid: isName,
				errorMsg: isName ? '' : 'invalid name',
			};
		case 'clientemail':
		case 'email':
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			const isEmail = emailRegex.test(data);
			return {
				valid: isEmail,
				errorMsg: isEmail ? '' : 'invalid email',
			};
		case 'postcode':
			const postcodeRegex = /^(0[289][0-9]{2})|([1-9][0-9]{3})$/i;

			const isPostCode = postcodeRegex.test(data);
			return {
				valid: isPostCode,
				errorMsg: isPostCode ? '' : 'invalid',
			};
		case 'price':
		case 'quantity':
		case 'number':
			const numberRegex = /^\d+$/;
			const isNumber = numberRegex.test(data);

			if (isNumber) {
				if (Number(data) > 0) {
					return {
						valid: true,
						errorMsg: '',
					};
				} else {
					return {
						valid: false,
						errorMsg: "invalid",
					};
				}
			}

			return {
				valid: false,
				errorMsg: 'Invalid number',
			};

		default:
			const dataNotEmpty = data !== '';
			return {
				valid: dataNotEmpty,
				errorMsg: dataNotEmpty ? '' : "can't be empty",
			};
	}
}
