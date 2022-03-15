const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Pop exclui o ultimo elemento, no caso na estutura de dados a famosa pilha [LIFO] last in first out
console.log(pilotos)

pilotos.push('Verstappen')// Push Adiciona o elemento no final da array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento, no caso na estutura de dados a famosa 'Fila' [FIFO] first in first out 
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona o elemento no começo do array
console.log(pilotos)

//splice pode acionar e remover elementos 

// adicionar

pilotos.splice(0, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array
console.log(algunsPilotos2)
