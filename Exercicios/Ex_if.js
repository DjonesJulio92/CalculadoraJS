/* 1° Faça um algoritmo para ler dois números inteiros e informar se estes são iguais
ou diferentes. */

function compararValores(valor1,valor2){
    if(valor1 === valor2){
        console.log('Valores iguais')
    } else{
        console.log('Valores diferentes')
    }
}
compararValores(7,9)
compararValores(9,9)
compararValores('!','!')

/*Faça um programa que o usuário informe o salário recebido e o total gasto.
Deverá ser exibido na tela “Gastos dentro do orçamento” caso o valor gasto não 
ultrapasse o valor do salário e “Orçamento estourado” se o valor gasto ultrapassar o valor do salário.
*/
function orcamentoFinanceiro(salario, gasto){
    if(salario > gasto){
        console.log('Gasto dentro do orçamento ','| Saldo: R$ ' ,salario - gasto+',00')
    } else if (salario === gasto){
        console.log('Orçamento limitado ',' Saldo: R$ ' ,salario - gasto+',00')
    } else if (salario <= gasto){
        console.log('Orçamento Estourado', '\ Saldo: R$ ',salario - gasto+',00')
    }else{
        console.log('Valor inválido')
    }    
}

orcamentoFinanceiro(5600, 3300)
orcamentoFinanceiro(1200, 1200)
orcamentoFinanceiro(1200, 1300)
orcamentoFinanceiro('a',1100)

/*Escrever um programa em C que lê um valor i,inteiro e positivo e 3 valores a, b e c. 
Se o valor de i é par então calcular e imprimir na tela a média aritmética de a, b e c. 
Caso contrário, se i>10 então calcular e imprimir na tela a média ponderada de a, b e c.
 Os pesos dos valores são respectivamente 2, 3 e 4.
*/
function resultado (i,a,b,c){
    let x = 2, y = 3, z = 4 
    soma = x + y + z
    if(i < 10){
        let x = 4, y = 4, z = 4 
        if(i % 2 == 0){          
            console.log('a[',a,'] + b[',b,'] + c[',c,'] / 3 = ',soma/3)
        }
    } else if( i >= 10){
        let mediaponderada = (((a*x)+(b*y)+(c*z))/(x+y+z))
        console.log('Media Podenada (a [',a,'] * [',x,']) + (b[',b,'] * y[',y,']) + (c[',c,'] * z[',z,'] = ',
        mediaponderada)
    }
}
resultado(10,1,5,13)

/*
Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time)
 e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.
*/
function placar(time1,time2, nome1,nome2){
    if( time1 > time2 ){
        console.log('Vitória do '+nome1)
        console.log(nome1,'',time1,' x ',time2,' ',nome2)
    } else if ( time1 === time2 ){
        console.log('Empate ')
        console.log(nome1,'',time1,' x ',time2,' ',nome2)
    } else if (time1 < time2){
        console.log('Vitória do '+nome2)
        console.log(nome1,'',time1,' x ',time2,' ',nome2)
    }
}

placar(6,3,'Corinthians','Bayern Munich')
placar(2,2,'Ferroviaria','Barcelona')
placar(0,12,'Palmeiras','Manchester United')