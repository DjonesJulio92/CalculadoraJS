let isAtivo = false //let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var , que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![]) //array
console.log(!!{}) //objeto
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // (&& -> And) e (|| -> Or)

let nome = ''
console.log(nome || 'Desconhecido')