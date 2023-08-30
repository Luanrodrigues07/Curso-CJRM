// juntar objetos spredOperator
const obj1 = [{a: 1, b: 2}]
const obj2 = [{c: 3, d: 4}]

const newObj = Object.assign({},...obj1,...obj2)

console.log(newObj)

// juntar arrays spredOperator

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

const newArr = [...arr1,...arr2]

console.log(newArr)



const num = [1,2,3,4,5,6,7,8,9]

console.log(Math.min(...num))
console.log(Math.max(...num))


const name = 'luan'

const name2 = new String('Luan')

console.log(name2)