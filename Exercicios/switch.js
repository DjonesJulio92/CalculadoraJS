/*Elabore um algoritmo que leia dois valores do usuário e a operação que ele deseja executar
 (Operações: soma, subtração, divisão, multiplicação). Execute a operação desejada e imprima na tela.
*/

console.log('1 - Adição',
            '2 - Subtração ',
            '3 - Multiplicação ',
            '4 - Divisão')
const calcular = function (resultado,x,y){
    switch(resultado){
        case 1: 
            console.log(x + y)
            break
        case 2:
            console.log(x - y) 
            break
        case 3:
            console.log(x * y)
            break
        case 4:
            console.log(x / y) 
            break
        default:
            console.log('Valor incorreto') 
    }
}

calcular(1,3,2)
calcular(2,3,2)
calcular(3,3,2)
calcular(4,3,2)
calcular('',3,2)
calcular(-1,3,2)
calcular(5,3,2)

/*
Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips.
 Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá
  ler o valor total da compra efetuada e um código que identifique se o comprador é um 
  cliente comum (1), funcionário (2) ou vip (3).
*/
console.log('1 - Cliente Comum',
            '2 - Funcionário ',
            '3 - Cliente VIP ')

function descontoCompra(cliente,valor){
    switch(cliente){
        case 1: console.log(valor)
        break
        case 2: console.log(valor - (valor * 0,10) )
        break
        case 3: console.log(valor - (valor * 0,05))
    }
}
descontoCompra(3,100)