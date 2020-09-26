console.log(typeof Object)
// duas formas de instanciar uma funcao
console.log(typeof new Object)// usando o "new" 
console.log(typeof Object())// usando "()"

console.log()// quebra de linha

function cliente() {}

console.log()// quebra de linha

console.log(typeof cliente)
console.log(typeof new cliente)
// quando for usar "()" tem que colocar o "new"
console.log(typeof new cliente())// pesquisar mais sobre por que retornou undefined

console.log()// quebra de linha

class Produto {}// Ecmascript 2015 || ES 2015 (ES6)

console.log(typeof Produto)
console.log(typeof new Produto)
