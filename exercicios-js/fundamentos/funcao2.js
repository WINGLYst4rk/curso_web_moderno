//Armazenado uma função em uma string
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,4)

//Armazenando uma arrow function em string
const soma = (a, b) =>{// sintaxe de uma arrow function "() => {}"
    return a + b
}

console.log(soma(2,3))

// Funcao com retorno explicito
const subtracao = (a, b) => a - b // sintaxe de uma fucao com retorno explicito "() => e o tipo que deve retornar"

console.log(subtracao(4,2))