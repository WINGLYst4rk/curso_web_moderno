// Par mome/valor
const saudacao = 'Opa rapaz!!' //contexto léxico 1

function exec() {
    const saudacao = 'Falaa galeraaa!' // contexto léxico 2
    return saudacao
}

//obejetos sao grupos aninhados de nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 48,
    endereco: {
        logradouro: 'Rua estou aprendendo',
        numero: 23,
        casa: 'Nunca desista'
    }
}

console.log('saudacao =', saudacao)
console.log('função =', exec())
console.log('Objeto cliente =', cliente)