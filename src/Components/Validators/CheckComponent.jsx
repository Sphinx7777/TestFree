export const emptyField = (value) => {
	if (value && value.length >= 1) return undefined;
	return 'Required field'
};

export const Email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined;
export const TextAndNumber = value =>
	value && !/^[а-яА-ЯёЁa-zA-Z0-9]+$/i.test(value)
		? 'Invalid name, letter and number please'
		: undefined;
export const phoneNumber = value =>
	value && !/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/i.test(value)
		? 'Invalid number, must be 10 digits'
		: undefined;
export const alphaNumeric = value =>
	value && /[^a-zA-Z0-9 ]/i.test(value)
		? 'Only alphanumeric characters'
		: undefined;

export const maxLengthCreator = (maxLength) => (values) => {
	if (values && values.length > maxLength) return `Max ${maxLength} symbols`;
	return undefined;
};

export const minLengthCreator = (minLength) => (values) => {
	if (values && values.length < minLength) return `Minimum ${minLength} symbols`;
	return undefined;
};

export const maxSize = (value) => {
	if (!value) {
		return undefined
	} else if (value && value.length && value[0].size <= 1000000) return undefined;
	return `max 1 mb your file is larger than ${value && value.length && Math.floor(value[0].size / 1000000)} mb`
};