const escola = "Cod3r"

console.log(escola.charAt(4)) // O charAt() método retorna o caractere no índice especificado em uma string. O índice do primeiro caracter é 0, o segundo carácter é 1
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//charCodeAt() O método charCodeAt() retorna um número inteiro entre 0 e 65535 que
console.log(escola.indexOf('3')) //indexOf() O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

console.log(escola.substring(1)) //O método substring() retorna a parte da string entre os índices inicial e final, ou até o final da string.
console.log(escola.substring(0, 3 ))

console.log('Escola '.concat(escola).concat("!")) //concat() combina o texto de duas ou mais strings e retorna uma nova string.
console.log(escola.replace(3, 'e')) //é utilizado com frequência para fazer desde simples substituições em Strings até complexas mudanças com expressões regulares. Seu uso é simples como variavel. replace('valor', 'substituicao') 

console.log('Ana,Maria,Pedro'.split(',')) //split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.

