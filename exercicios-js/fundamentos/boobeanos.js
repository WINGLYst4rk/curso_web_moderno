let isAtivo = false
console.log(isAtivo)//usando literal

isAtivo = true
console.log(isAtivo)//usando literal

isAtivo = 1
console.log(!!isAtivo)//usando "Double Not" /*não sei o nome verdadeiro*/
console.log('')// usando como quebra de linha

console.log('Os verdadeiros...')// tudo que o javascriot interpreta como true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log('')// quebra de linha

console.log('Os falsos...')// tudo que o javascriptt interpreta como falso
console.log(!!0)
console.log(!!'')// false porem sem o "Double Not" retorna false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('')

console.log('Para finalizar')
console.log(!!('' || null || 0 || ' '))// retorna verdadeiro pois usa expresao logica "ou" e tem um verdadeiro

let nome = 'Wingly'
console.log(nome || 'Desconhecido')//retorna o primeiro que for verdadeiro