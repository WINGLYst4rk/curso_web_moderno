// javascript tem a funcao de icar a varial por isso nesse caso nao acontece um erro
// isso so acontece com o "var"
console.log('a =', a)// a variavel retorna undefined sem causar um erro pois a variavel foi icada
var a = 123
console.log('a =', a)// agora aqui temos o resultado da varial pois declaramento

// como seria o codigo final
// var a
// console.log('a =', a)
// a = 123
// console.log('a =', )

//dentro de funcoes acontece o mesmo efeito do de cima
function teste() {
    console.log('b =', b)
    var b = 132
    console.log('b =', b)
}

teste()