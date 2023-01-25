export function organizePhoneNumber(phone) {
	// Remover tudo que não for número
	phone = phone.replace(/[^\d]/g, "")

	if (phone.length === 8) {
		let first = phone.slice(0, 4)
		let last = phone.slice(4)
		return `${first}-${last}`
	} else if (phone.length === 9) {
		let digit = phone.slice(0, 1)
		let first = phone.slice(1, 5)
		let last = phone.slice(5)
		return `${digit} ${first}-${last}`
	} else if (phone.length === 10) {
		let ddd = phone.slice(0, 2)
		let first = phone.slice(2, 6)
		let last = phone.slice(6)
		return `(${ddd}) ${first}-${last}`
	} else if (phone.length === 11) {
		let ddd = phone.slice(0, 2)
		let digit = phone.slice(2, 3)
		let first = phone.slice(3, 7)
		let last = phone.slice(7)
		return `(${ddd}) ${digit} ${first}-${last}`
	}

	return phone
}
