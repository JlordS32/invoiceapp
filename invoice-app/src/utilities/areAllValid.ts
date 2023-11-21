/**
 * Checks if all values in the provided data object are valid.
 *
 * @param {any} data - The data object to be checked.
 * @return {boolean} Returns true if all values are valid, otherwise false.
 */
export function areAllValid(data: any) {
    // Iterate over each key in the data object
    for (const key in data) {
        // Check if the value of the current key is an object
        if (typeof data[key] === 'object') {
            // Recursively call the areAllValid function on the nested object
            if (!areAllValid(data[key])) {
                // If any nested value is invalid, return false
                return false;
            }
        } else if (key === 'valid' && data[key] !== true) {
            // Check if the current key is 'valid' and the value is not true
            // If so, return false
            return false;
        }
    }
    // If all values are valid, return true
    return true;
}
