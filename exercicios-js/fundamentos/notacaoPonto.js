console.log(Math.ceil(5.3))

const obj1 = {}

obj1.nome = 'bola' // essa forma é melhor por usar a notacao ponto
// obj1 ['nome1'] = 'bola2' // essa forma é menos utilizada por ser mais dificil de acessar depois

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesas')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

