export function organizeCPF(cpf) {
	// Remover tudo que não for número
	cpf = cpf.replace(/[^\d]/g, "")

	if (cpf.length === 3) {
		return `${cpf}.`
	} else if (cpf.length > 3 && cpf.length < 6) {
		let first = cpf.slice(0, 3)
		let last = cpf.slice(3)
		return `${first}.${last}`
	} else if (cpf.length >= 6 && cpf.length < 9) {
		let first = cpf.slice(0, 3)
		let middle = cpf.slice(3, 6)
		let last = cpf.slice(6)
		return `${first}.${middle}.${last}`
	} else if (cpf.length >= 9 && cpf.length <= 11) {
		let first = cpf.slice(0, 3)
		let second = cpf.slice(3, 6)
		let third = cpf.slice(6, 9)
		let last = cpf.slice(9)

		return `${first}.${second}.${third}-${last}`
	}

	return cpf
}
