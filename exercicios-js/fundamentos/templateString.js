const nome = 'Jonatas'
const concatenacao = 'Ola!' + nome + '!'// forma tradicional de fazer concatenação

const template = `
    Olá,
    ${nome}!`// forma usando template strings / fazendo uso da interpolação para representar o texto

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)// usando a interpolação pode se passar expressões

const up = (s) => s.toUpperCase()// arrow function
console.log(`Ei...${up('Cuidado')}!`)// chamada de funções com template strings