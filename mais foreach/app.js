
const ul = document.querySelector(`[data-js="ul"]`)

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

let htmlTemplate = ''

socialNetworks.forEach(socialNetwork => {
    htmlTemplate += `<li style="color: white;">${socialNetwork}</li>`

})

ul.innerHTML = htmlTemplate