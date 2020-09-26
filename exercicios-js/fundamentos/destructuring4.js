// usandodestructuring em arrays
function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
}

// chamando a funcao 
console.log(rand([50, 40]))

// chamando a funcao com um valor
console.log(rand([990]))

// cahmando a funcao com um espaco vazio e um valor
console.log(rand([, 400]))

// chamando a funcao com nenhum valor || funciona por já esta derterminado o valor min e max
console.log(rand([]))

// causando erro no progrma pois vai retornar undefined ou null por nao acesar o objeto
console.log(rand())