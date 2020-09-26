// recurso introduzido pelo ecma 2015 (ES2015)

const pessoa = {
    nome: 'Maria',
    idade: '10',
    endereco: {
        logradouro: 'Rua Sbesp',
        numero: 1500
    }
}

const { nome, idade } = pessoa // forma como usa o destructuring || remove do objeto passado na atibuicao e transforma em variaveis
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // forma de criar variaveis com nome diferente e usar o destructuring
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // caso nao tenha definivo ira retornar undefined ou o valor padrao caso definido
console.log(sobrenome, bemHumorada) // retornara undefined, para sobrenome e true para bemHumorada

// caso queira acessar algo dentro de um objeto dentro de outro objeto pode se usar o nome do objeto mais dois pontos
const { endereco: { logradouro, numero, cep } } = pessoa // vai dentro do objeto peesoa depois dentro do objeto endereco e procura as infomacoes
console.log(logradouro, numero, cep)

// //exemplo de erro
// const { conta: { ag, num } } = pessoa // vai gerar um erro pois esse objeto nao existe dentro de pessoa 
// || apenas os atributos internos podem retornar undefined ou null
// console.log(ag, num)