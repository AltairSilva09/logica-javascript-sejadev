function Pessoa(nome, sobrenome) {
  let pessoa = {
nome,
sobrenome
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa("Altair", "Silva")
const pessoaB = Pessoa("Luana", "Vanessa")

console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto)