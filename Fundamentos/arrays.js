const valores = [7.7, 8.9, 6.6, 9.2]
console.log(valores[0],valores[1], valores[2], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(' Quantidade de espaço alocado na array: ',valores.length)
valores.push({id: 3}, false, null, 'teste') //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
console.log(valores)
console.log(valores.pop())//O método pop() remove o último elemento de um array e retorna aquele elemento.
delete valores[0]
console.log(valores)

console.log(typeof valores)

