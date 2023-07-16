// const prices = [20, 10, 30, 25, 15, 40, 80, 5]

// const salePrice = prices.map(price => price / 2)


const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

  const sale = products.map(product => {
    if (product.price += 30){ 
        return {name: product.name, price: product.price / 2}
    }
    return product
 })

// FILTER

 const randomNumber = [36, 99, 37, 63]

 const numbersGreat = randomNumber.filter(item => item > 37)

 console.log(numbersGreat)

 const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

  const primiumUser = users.filter(user => user.premium)

  console.log(primiumUser)


  // REDUCE 

  const nums = [1, 2, 3]

  const result = nums.reduce((accumulator, item) => {accumulator + item}, 0)

  console.log(result)


  const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]


  const luanScore = phaseScores.reduce((accumulator, phaseScores) => {
    if (phaseScores.name === 'Roger Melo') {
      accumulator += phaseScores.score
    }
    return accumulator
  }, 0)

  console.log(luanScore)