const valores = [7.7, 8.9, 5.6, 12.5, 2 ]// arrays tem tamnho indefinido
// console.log(valores.length)
console.log(valores[1], valores[4])
console.log(valores[5])

valores[5] = 10
console.log(valores)

valores[10] = 34.7
console.log(valores)// retorna um array com a idicação de quantos valores estão vazios

valores.push({id: 3}, false, null, 'teste')// função que adiciona novos itens no array
console.log(valores)

console.log(valores.pop())
console.log(valores)

delete valores[0]
console.log(valores)