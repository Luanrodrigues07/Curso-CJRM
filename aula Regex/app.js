const form = document.querySelector('.signup-form')
// const userinput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.username.value)
})

const username = 'luanro'
const pattern = /^[a-z]{6,}$/

const isAmatch = pattern.test(username)

if (isAmatch){
    console.log("Passou no teste")
} 
else {
    console.log('Não passou')
}