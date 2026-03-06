function podeEntrar(idade, status) {
if (idade >= 18 && status !== "banido") {
return "Pode entrar";
}
return "Entrada proibida"
}
console.log(podeEntrar(20, "ativo"))
console.log(podeEntrar(30, "ativo"))
console.log(podeEntrar(16, "banido"))
