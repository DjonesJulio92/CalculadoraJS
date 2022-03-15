 // novo recurso ES 2015

const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 1000;
	}
}
const { nome, idade } = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;

console.log(n, i);

const {sobrenome, bem Humorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereço: {logradouro, numero, cep }} = pessoa
console.log{logradouro, numero, cep}