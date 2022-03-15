// ou exclusivo xor
// v xor v -> f
// v xor f -> v
// f xor v -> v
// f xor f -> f


// (!) negação
// !v = f
// !f = v

// ou -> ||
// e -> &&
// !! -> bitwise xor bit a bit
// ou exculsivo !
function compras(trabalho1, trabalho2 ){
	const comprarSorvete = trabalho1 || trabalho2
	const comprarTv50 = trabalho1 && trabalho2 
	const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor bit a bit 
	const comprarTv32 = trabalho1 != trabalho2
	const manterSaudavel = !comprarSorvete // operador unário
	
	return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel  }
}

console.log(compras(true, true)
console.log(compras(true, false)
console.log(compras(false, true)
console.log(compras(false, false)
 