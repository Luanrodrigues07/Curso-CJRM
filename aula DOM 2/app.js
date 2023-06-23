const button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('clicou no botao')
})

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click', () => {
     const clikedElement = event.target

     clikedElement.style.textDecoration = "line-through"
    })
})