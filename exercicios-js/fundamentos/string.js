const escola = "cod3r"

console.log(escola.charAt(4))//Pega o caractere na possição 4
console.log(escola.charAt(5))//Pega o caractere na possição 5 mas como não exixte retorna vazio
console.log(escola.charCodeAt(3))//Retorna o código da tabela ASCII 
console.log(escola.indexOf('3'))//Retorna o valor contido na possição indicada 

console.log(escola.substring(1))//Retorna uma string apartir do número passado
console.log(escola.substring(0, 3))//Retorna uma string que começa no primeiro número e vai até o segundo número sem o incluir

console.log('Escola '.concat(escola).concat("!"))//Retorna a concatenação das strings
console.log(escola.replace(3, 'e'))// Função de substituir um caractere por outro

console.log('Ana, Maria, Paula'.split(','))// Gera um Array de acordo com o critério de separação