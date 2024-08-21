const pessoa = {
  nome: "Altair",
  sobrenome: "Silva",
  idade: 26
}

const {nome, sobrenome, idade} = pessoa
console.log(nome)
console.log(sobrenome)
console.log(idade)

const array = [10, 30, 40, 50]
const {a, b, c} = array
console.log("a")
console.log("b")
console.log("c")

const pessoaAtualizada = {
  ...pessoa,
  idade: 27
}
console.log(pessoaAtualizada)