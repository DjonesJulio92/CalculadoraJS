let a = 3

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'Teste';

console.log(a);
console.log(this.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando uma variável estranha sem usar let e var
abc = 3 // **NÃO FÇA ISSO!!!!!!
console.log(global.abc); 

module.exports = {e: 456, f:false, g: 'Teste'}