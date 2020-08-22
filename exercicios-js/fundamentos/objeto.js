const prod1 = {}// uma forma de criar objetos no javascript usando atribuição dinamica

prod1.nome = 'celular Ultra mega'
prod1.preco = 4998.99
prod1['Desconto Legal'] = 0.40// evitar usar atibutos com espaços

console.log(prod1)

const prod2 = {// outra forma de criar objetos no javascript já criando e atribuido os campos e seus valores
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {// é possível criar objetosdentro de objetos criando uma estrutura aninhada
        subprod: 'objj',
        novoobj: {
            objs: 45
        }

    } 
}

console.log(prod2)