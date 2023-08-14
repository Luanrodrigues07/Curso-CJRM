  // const names = ['Cristian', 'Alfredo', 'Edson']
  // names.sort()
  // console.log(names)


 const scores = [10, 50, 20, 5, 35, 70, 45 ]

 scores.sort((score1, scores2) => score1 - scores2)

// scores.sort()

 console.log(scores)

const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//     const itemPlus = item1.score > item2.score
//     const itemTwoPlus = item2.score > item1.score

//     if (itemPlus) {
//     return -1
//     } else if (itemTwoPlus) {
//     return 1
//     }

//     return 0

// })

theBigFamily.sort((item1, item2) => item2.score - item1.score)

console.log(theBigFamily)


const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
  .filter(book => book.price > 20)
  .map(book => `o preço do livro "${book.name}" caiu para ${book.price} reais`)

