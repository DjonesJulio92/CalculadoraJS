let comparaComThis = function (param) {
	console.log(this === param)
}
comparaComthis(global)

const obj = {}
comparaComthis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComthisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
