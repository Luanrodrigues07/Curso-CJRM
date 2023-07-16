const form = document.querySelector('.quiz-form')
const finalresult = document.querySelector('.result')
const correctAnsers = ['B', 'B', 'B', 'B']

const getUserAnswers = () => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]
  return userAnswers
}

let score = 0



form.addEventListener('submit', event => {
  event.preventDefault()


  const userAnswers = getUserAnswers()

  userAnswers.forEach((userAnswer, index) => {
    if(userAnswer === correctAnsers[index]){
      score += 25
    }
  })

  scrollTo(0, 0)

  finalresult.classList.remove('d-none')

  let counter = 0 

  const timer = setInterval(() => {
    if (counter === score){
      clearInterval(timer)
    }
    finalresult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 10);
  
})

