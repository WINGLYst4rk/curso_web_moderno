// Variaveis declaradas com var sem ser dentro de uma funcao vai ser de escopo global
var numero = 123
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)
// resultado o número 2 vai ser impresso 2 vezes