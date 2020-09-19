// variaveis declaradas com "let" tem escopo global, de bloco, e de funcao
var numero = 123
{
    let numero = 231
    console.log('dentro =', numero)
}

console.log('fora =', numero)

// aqui sera apresentado 2 resultados diferentes por caus do escopo