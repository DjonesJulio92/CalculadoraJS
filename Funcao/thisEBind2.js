function Pessoa() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade)
  }.bind(this), 10)
}
new Pessoa

function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(function() {
    this.idade++
    console.log(this.idade)
  }.bind(this), 10)
}
new Pessoa