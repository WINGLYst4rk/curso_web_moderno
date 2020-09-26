//destructuring com arrays
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 4, 12]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 4, 7], [9, 6, 23]]
console.log(nota)

//nao e tao vantajoso usar destructuring em arrays || usar arays para atribuir a vaiaveis de forma rapida e ok