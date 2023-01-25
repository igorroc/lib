export function checkCPF(cpf) {
	console.log("verificando cpf -> " + cpf)
	cpf = cpf.replace(/[^\d]+/g, "")

	if (cpf.length !== 11) {
		return { valid: false, message: "CPF inválido - O CPF deve possuir 11 dígitos" }
	}

	// Verificar se o CPF é igual a todos os números iguais (ex: 11111111111)
	if (/^(\d)\1{10}$/.test(cpf)) {
		return { valid: false, message: "CPF inválido - Números repetidos" }
	}

	// Calcular o primeiro dígito verificador
	var soma = 0
	var resto
	for (var i = 1; i <= 9; i++) {
		soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
	}
	resto = (soma * 10) % 11
	if (resto === 10 || resto === 11) {
		resto = 0
	}
	if (resto !== parseInt(cpf.substring(9, 10))) {
		return { valid: false, message: "CPF inválido" }
	}

	// Calcular o segundo dígito verificador
	soma = 0
	for (i = 1; i <= 10; i++) {
		soma += parseInt(cpf.substring(i - 1, i)) * (12 - i)
	}
	resto = (soma * 10) % 11
	if (resto === 10 || resto === 11) {
		resto = 0
	}
	if (resto !== parseInt(cpf.substring(10, 11))) {
		return { valid: false, message: "CPF inválido" }
	}

	return { valid: true, message: "" }
}
