console.log(7 / 0)// Retona tipo infinito
console.log("10" / 2)// Reconhece o número dentro da string e realiza a operação se colocar "," ao invés de "." retorna Nan
console.log('3' + 2)// Dá preferencia para a string e concatena
console.log("Show" * 2)// Em liguagens fortemente tipada multiplicaria a string mas no Javascript retorna NaN
console.log(0.1 + 0.7)// Retorna um tipo inpresiso comum da maioria das linguagens
// console.log(10.toString()) // Não é possível passar um literal e chamar uma função
console.log((10.345).toFixed(2))// Colocando dentro de um parenteses é possível chamar a função