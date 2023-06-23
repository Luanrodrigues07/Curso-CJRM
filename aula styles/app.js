const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

link.setAttribute('href', 'github/luanrodrigues07"')

link.innerHTML = 'Website Luan'

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: green;')

const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px')

console.log(title.style.color)

// adicioanndo styles
title.style.margin = '50px'
title.style.color = 'pink'
title.style.fontSize = '50px'

// removendo style
title.style.margin = ''