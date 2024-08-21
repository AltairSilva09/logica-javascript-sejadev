const pesoDoPeixe = 80
const pesoLimite = 50
const ValorMulta = 4
let excesso = pesoDoPeixe - pesoLimite
let multa = excesso * ValorMulta

if (pesoDoPeixe > pesoLimite) {
  console.log("excesso de:", excesso)
  console.log("Multa de R$:",multa)
}
else {
console.log("Não tem excesso de peso")
console.log("Não tem multa")
}