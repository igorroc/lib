export function checkPhoneNumber(phone) {
	var regexTelefone =
		/^(\d{4}-\d{4})|(\d{1} \d{4}-\d{4})|(\(?\d{2}\)? \d{4}-\d{4})|(\(?\d{2}\)? \d{1} \d{4}-\d{4})$/

	let isValid = regexTelefone.test(phone)

	if (isValid) return { valid: true, message: "" }

	return {
		valid: false,
		message: "Número de telefone inválido. Ele deve estar no formato (DDD) XXXX-XXXX",
	}
}
