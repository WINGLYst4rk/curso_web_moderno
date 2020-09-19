const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

// o resultado esperado é que pelo let estar dentro do for funcs vai respeitar a sequencia
funcs[2]()
funcs[8]()
funcs[5]()
// realmente respeita a sequencia