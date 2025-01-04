export const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');

    // Ensure the input starts with '254' and format the rest of the digits
    if (digits.startsWith('254')) {
        const mainNumber = digits.slice(3); // Get the part after '254'
        return `254-${mainNumber.slice(0, 3)}-${mainNumber.slice(
            3,
            6
        )}-${mainNumber.slice(6, 9)}`;
    }

    // Automatically prepend '254' if the user hasn't entered it
    const mainNumber = digits.slice(0, 9); // Limit to 9 digits
    return `254-${mainNumber.slice(0, 3)}-${mainNumber.slice(
        3,
        6
    )}-${mainNumber.slice(6, 9)}`;
};
