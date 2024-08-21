const person = {
  name: "Altair",
  lastname: "Silva"
}

// object.keys(): Cria um array com todas as chaves do objto
//console.log(object.keys(person))

//object.values(): Cria um array com todos os valores do objeto
//console.log(object.values(person))

// object.entries(): cria um array com um array de objetos e valores
//const array = object.entries(person)

const livros = {
  'livro A': 19.90,
  'livro B': 97.00,
  'livro C': 20.00
}

const values = Object.values(livros)
const sum = values.reduce((val, acc) => val + acc, 0)

console.log(sum)