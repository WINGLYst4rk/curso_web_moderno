// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(5)

//Função com rtorno
function soma(a, b = 0) {// funcao com retorno e tratamento de possivel erro
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

function some(a, b = 1) {// funcao com retorno e traramento definicao da variavel
    return a + b
}

console.log(some(2, 4))
console.log(some(2))
