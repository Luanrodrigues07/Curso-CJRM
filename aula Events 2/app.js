const ul = document.querySelector('ul')
// ul.remove()
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'novo item'
    ul.prepend(li)
})

ul.addEventListener('click', event => {
    const cliked = event.target

    if(cliked.tagname === 'LI'){
        cliked.remove()
    }
})