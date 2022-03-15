//Escrever um programa para exibir os números de 1 até 50 na tela.

function imprimirNumero(numero){
    for(let i = 1; i <= numero; i++){
        console.log(i)
    }
}
imprimirNumero(50)

//Fazer um programa para encontrar todos os números pares entre 1 e 100.

function imprimirPares(numero){
    for(let i = 1; i <= numero; i++){
        if(i % 2 ==0){
            console.log(i)
        }
    }
}

imprimirPares(100)

//Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

function imprimirTabuada(){
    for(let i = 1; i <= 10; i++){
        console.log(i)
        for(let j = 1; j <= 10; j++ ){
            console.log(i,' x ',j,' = '+i*j)            
        }
        console.log('\n')
    }
}

imprimirTabuada()