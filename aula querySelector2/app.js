const paragraph = document.querySelector('p')

// paragraph.innerText += ' Texto Inserido'

const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//     paragraph.innerText += ` Novo Texto ${index + 1}`
// })


const div =  document.querySelector('.contenet')

// div.innerHTML = '<h2>Novo H2</h2>'

const people = [ 'luan', ' luana', ' pretinha' ]

people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
})