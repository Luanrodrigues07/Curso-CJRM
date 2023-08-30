localStorage.setItem('name', 'Luan')
localStorage.setItem('age', '22')

const name = localStorage.getItem('name')
const age = localStorage.getItem('age')

localStorage.clear()


const objArray = [
    {a: 1, b:2, c:3},
    {a: 1, b:2, c:3},
    {a: 1, b:2, c:3},
]

localStorage.setItem('objArray', JSON.stringify(objArray))

const JsonFromLocalStorage = localStorage.getItem('objArray')
const myConvertedArray = JSON.parse(JsonFromLocalStorage)