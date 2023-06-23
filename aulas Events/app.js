const ul = document.querySelector('ul')

// ul.remove()

const lis = document.querySelectorAll('li')

lis.forEach(li => {
    li.addEventListener('click',event => {
     const clikedElement = event.target
     console.log('clicou na li')

     event.stopPropagation()
     clikedElement.remove()
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'novo item'

    ul.prepend(li)
})

ul.addEventListener('click', () => {
    console.log('clicou na ul')
})