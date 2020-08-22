let valor // não inicializada
console.log(valor)// retorna "undefined" pois a varíavel não possui nenhum valor

valor = null// retirando o endêreço de memória da varíavel
// console.log(valor.toString())// erro! não é possível acessar algo nulo

const produto = {}
console.log(produto.preco)// retorna undefined por causa que o produto dó foii declarado
console.log(produto)

produto.preco = 3.70
console.log(produto)

produto.preco = undefined // é bom evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // zerando a varíavel
console.log(!!produto.preco)
console.log(produto)
