//Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b)=> {
    return a + b
}
console.log(soma(1,0))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))