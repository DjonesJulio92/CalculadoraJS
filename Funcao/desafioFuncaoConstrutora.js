const criarProduto = nome => {
    return {
        falar: () => console.log(`Você ganhou um ${nome}!`)
    }
}

const produto = criarProduto ('Iphone')
produto.falar()
