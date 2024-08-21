/*
let array = [10, 20, 30, 40, 50]
console.log(array)
array.pop() // remove elementos
array.push() // adiciona elementos
*/

/*
let newarray = [10, 20, 30]
let i=0
while ( i < newarray.length) {
  console.log(newarray[i])
  i++
}
*/
/*
let newarray = [10, 20, 30]
for (let pos=0; pos < newarray.length; pos++) {
  console.log(newarray[pos])
}
*/
/*
let newarray = [10, 20, 30]
for (let pos in newarray) {
  console.log(newarray[pos])
}
*/
/*
let newarray = [10, 20, 30]
for (let pos of newarray) {
  console.log(pos)
}
*/


// exercicio fazer a media do array

/*let array = [1, 2, 3, 4, 5]
let media = (array[0] + array[1] + array[2] + array[3] + array[4]) / array.length
console.log(media)*/

let array = [10, 20, 30]
let soma = 0
for (let num of array) {
 soma = soma + num
}
console.log(array.length)