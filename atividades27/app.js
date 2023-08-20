// exercicio 1

const fetchData = async (username) => {
    const responce = await fetch(`https://api.github.com/users/${username}`)
    return responce.json()
}
const logUser = async username => {
    console.log(await fetchData(username))
}

logUser('Luanrodrigues07')



// exercicio 2
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newnubers = numbers.filter(number => number % 2 === 0 || number % 3 === 0)


console.log(newnubers)


// exercicio 3

const myname = ['Lu', 'an']

const mynamep = name => name.reduce((acc, syllable) => `${acc}P${syllable}`, ``)

console.log()

// exercicio 4

const sname = 'Luan'

const splitname = sname.split('')

splitname.forEach((latter, index) =>
 console.log(`"${latter}" é a ${index + 1} letra do meu nome`))


 // exercicio 5

 const person = {
    name: 'Luan',
    lastnem: 'Rodrigues',
    age: '22'
 }
 
 console.log(Object.keys(person))

  // exercicio 6

  const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60]

  const getOcorrence = (array, value) => 
  array.reduce((acc, item) => value === item ? acc + 1 : acc, 0)

  console.log(getOcorrence(scores, 100))


// exercicio 7


const filter = (array, func) => {
    let newArray = []

    array.forEach((item, index, array) => {
        if (func(item, index)) {
            newArray.push(item)
        }
    })

    return newArray
}
