// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(5)

//Função com rtorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

function some(a, b = 1) {
    return a + b
}

console.log(some(2, 4))
console.log(some(2))
