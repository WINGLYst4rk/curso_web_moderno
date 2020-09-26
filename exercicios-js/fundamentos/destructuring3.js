// e possivel usar destructuring e funcoes combinadas com definicaso de valores padrao
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// uma outra forma de chamar a funcao
const obj = { max: 50, min: 40 }
console.log(rand(obj))

// uma das formas de chamar a funcao
console.log(rand({ max: 50, min: 40 })) 

// chamando apenas passado um valor para uma das propriedades
console.log(rand({ min: 920 }))
console.log(rand({ max: 600 }))

// pasando um objeto vazio
console.log(rand({}))

// canhamdo a funcao sem nada
// console.log(rand())
// daria erro pois tentaria desestruturar um objeto que retorna null ou undefined
// uma forma seria passando um valor padrao mas nao retornaria nenhum valor 
// || function rand({ min = 0, max = 1000 } = {}) {
    // const valor = Math.random() * (max - min) + min
    // return Math.floor(valor)
// }