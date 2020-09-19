const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//retorna 10 nas duas chamadas por causa da variavel estar em escopo global