const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

//forEach: passa por todos elementos do array
array.forEach((elemento, posicao) =>{
  //console.log(`${elemento} - posicao ${posicao}`)
})

// find: retorna o elemento
const valor = array.find((elemento) =>{
  if (elemento === 10) return true
  return false
})
//console.log(valor)

//fideindex: retorna a posicao do elemento
const index = array.findIndex(elemento => elemento === 10)
//console.log(index)

// some: retorna true se pelo menos um numero satisfazer a condição
const some = array.some (elemento => elemento >= 10 )
//console.log(some)

// every: retorna true se todos os numeros respeitarem a condição
const every = array.every (elemento => elemento >= 10)
//console.log(every)

const newarray = [1, 2, 3, 4, 5]

//splice: corta o array, o primeiro paramentro é o incio e o segundo é a quantidade
//console.log(newarray.splice(2, 2))

//map: alterar os valores dentro do array seguindo uma regra
/*console.log(newarray.map((elemento) => {
  return elemento *2
})) */

//filter: filtrar os elementos dentro do array
/*console.log(newarray.filter((elemento) => {
  return elemento % 2 === 0
}))*/

//reduce: reduz o array pra algum outro elemento
console.log(newarray.reduce((acumulado, elemento) => {
  return acumulado + elemento
}, 100))

