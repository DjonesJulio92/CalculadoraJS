const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'Ipad Pro', preco: 4199, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.fragil === false
}))

const caro = produtos => produto.preco >= 2500
const fragil = produtos => produto.fragil

console.log(produto.filter(caro).filter(fragil))