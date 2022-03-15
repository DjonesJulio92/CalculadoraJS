/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function saudacao (nome1){
     
return console.log(`Olá, ${nome1}!`)
}
saudacao('Djones')

function cumprimentar(name) {
    const saudacao = "Olá"
    return [saudacao, name].join(', ').concat("!")
}

console.log(cumprimentar('Djones'))

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
 Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere
também dias decorridos desde o último aniversário.
Exemplos:
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
*/

function getConvertIdadeAnosDias(idade){
return console.log(`${365*idade}`)
}
getConvertIdadeAnosDias(20)